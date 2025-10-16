import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle, 
  X, 
  Send, 
  AlertCircle,
  CalendarDays,
  MapPin,
  Building,
  FileText,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const ConsultationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState('form'); // 'form' or 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Prefill form from navigation state
  useEffect(() => {
    const prefilled = location.state || {};
    if (prefilled.serviceType) {
      setFormData(prev => ({
        ...prev,
        consultationType: prefilled.serviceType,
        message: prefilled.source === 'landing' 
          ? `Interested in ${prefilled.serviceType} consultation from ${prefilled.source}`
          : prev.message
      }));
    }
  }, [location.state]);

  // Consultation types
  const consultationTypes = [
    { value: 'initial', label: 'Initial Consultation', icon: CalendarDays },
    { value: 'project', label: 'Project Discussion', icon: FileText },
    { value: 'strategy', label: 'Strategy Planning', icon: Zap },
    { value: 'security', label: 'Security Assessment', icon: Shield },
    { value: 'technical', label: 'Technical Review', icon: Building }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.consultationType) errors.consultationType = "Please select consultation type";
    if (!formData.message.trim()) errors.message = "Please describe your needs";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !validateForm()) return;

    setIsSubmitting(true);
    setFormErrors({});

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '04bce140-9632-4d29-bd15-13496445aa19');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('company', formData.company || '');
    formDataToSend.append('consultation_type', formData.consultationType);
    formDataToSend.append('preferred_date', formData.preferredDate);
    formDataToSend.append('preferred_time', formData.preferredTime);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('replyto', 'Uxinityofficial@gmail.com');
    formDataToSend.append('subject', `Consultation Request - ${formData.consultationType}`);
    formDataToSend.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage('Consultation request submitted successfully! We\'ll contact you within 24 hours to confirm your appointment.');
        setStep('success');
        setFormData({
          name: '', email: '', phone: '', company: '', 
          consultationType: '', preferredDate: '', preferredTime: '', message: ''
        });
      } else {
        setFormErrors({ submit: result.message || 'Failed to submit request. Please try again.' });
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setFormErrors({ submit: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleBookAnother = () => {
    setStep('form');
    setFormData({
      name: '', email: '', phone: '', company: '', 
      consultationType: location.state?.serviceType || '', 
      preferredDate: '', preferredTime: '', message: ''
    });
    setFormErrors({});
    setSubmitMessage('');
  };

  // Success Step - White theme
  if (step === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white flex items-center justify-center py-12 px-4"
        exit={{ opacity: 0 }}
      >
        <div className="max-w-2xl w-full mx-auto">
          {/* Animated Success Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
          >
            <div className="relative">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-200">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-green-200/50 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>

          {/* Success Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Consultation Booked!
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              {submitMessage}
            </p>

            {/* Consultation Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 max-w-md mx-auto shadow-sm"
            >
              <h3 className="text-black font-semibold mb-4 flex items-center gap-2 justify-center">
                <CalendarDays className="w-5 h-5 text-green-600" />
                Request Summary
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center justify-between">
                  <span>Type:</span>
                  <span className="font-medium text-black">
                    {consultationTypes.find(t => t.value === formData.consultationType)?.label || 'Consultation'}
                  </span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Name:</span>
                  <span className="font-medium text-black">{formData.name}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>Email:</span>
                  <span className="font-medium text-black">{formData.email}</span>
                </p>
                {formData.preferredDate && (
                  <p className="flex items-center justify-between">
                    <span>Date:</span>
                    <span className="font-medium text-black">
                      {new Date(formData.preferredDate).toLocaleDateString()}
                    </span>
                  </p>
                )}
                <p className="flex items-center justify-between">
                  <span>Submitted:</span>
                  <span className="font-medium text-black">
                    {new Date().toLocaleString()}
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                onClick={handleBackToHome}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all border-2 border-black flex-1 max-w-xs shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </motion.button>
              
              <motion.button
                onClick={handleBookAnother}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-xl font-semibold hover:bg-gray-100 transition-all flex-1 max-w-xs shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Another
              </motion.button>
            </div>

            {/* Contact Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-600 text-sm"
            >
              Need immediate help? Call us at{' '}
              <a href="tel:+919446068542" className="text-black font-semibold underline hover:text-gray-800">
                +91 9446068542
              </a>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // Form Step - White theme
  return (
    <section className="py-24 px-4 bg-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-black mb-4 tracking-tight">
            Book Consultation
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Schedule expert consultation to discuss your project requirements and get personalized recommendations.
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Error Message */}
          <AnimatePresence>
            {formErrors.submit && (
              <motion.div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <AlertCircle className="w-5 h-5 text-red-500" />
                <p className="text-red-700">{formErrors.submit}</p>
                <button onClick={() => setFormErrors({})} className="ml-auto text-red-500 hover:text-red-700">
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Hidden API fields */}
            <input type="hidden" name="access_key" value="04bce140-9632-4d29-bd15-13496445aa19" />
            <input type="hidden" name="replyto" value="Uxinityofficial@gmail.com" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-700" /> Full Name *
                </label>
                <motion.input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm ${
                    formErrors.name ? 'border-red-500 focus:ring-red-500' : ''
                  }`}
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.02 }}
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-700" /> Email *
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm ${
                    formErrors.email ? 'border-red-500 focus:ring-red-500' : ''
                  }`}
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-700" /> Phone *
                </label>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm ${
                    formErrors.phone ? 'border-red-500 focus:ring-red-500' : ''
                  }`}
                  placeholder="+91 9876543210"
                  whileFocus={{ scale: 1.02 }}
                />
                {formErrors.phone && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {formErrors.phone}</p>}
              </div>
            </div>

            {/* Company & Consultation Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-gray-700" /> Company
                </label>
                <motion.input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm"
                  placeholder="Your Company"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Consultation Type *</label>
                <motion.select
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm ${
                    formErrors.consultationType ? 'border-red-500 focus:ring-red-500' : ''
                  }`}
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Select type</option>
                  {consultationTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </motion.select>
                {formErrors.consultationType && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {formErrors.consultationType}</p>}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-700" /> Preferred Date
                </label>
                <motion.input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-700" /> Preferred Time
                </label>
                <motion.input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-700" /> Project Details *
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none transition-all shadow-sm ${
                  formErrors.message ? 'border-red-500 focus:ring-red-500' : ''
                }`}
                placeholder="Describe your project requirements, goals, timeline, budget..."
                whileFocus={{ scale: 1.02 }}
              />
              {formErrors.message && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {formErrors.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full py-4 px-8 rounded-xl border-2 font-semibold text-lg flex items-center justify-center gap-3 transition-all shadow-lg ${
                isSubmitting
                  ? 'bg-gray-300 border-gray-400 text-gray-500 cursor-not-allowed'
                  : 'bg-black text-white border-black hover:bg-white hover:text-black'
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
                  Scheduling...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Schedule Consultation
                </>
              )}
            </motion.button>

            <p className="text-gray-500 text-xs text-center">
              🔒 Secure • Your data is protected and encrypted
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationForm;