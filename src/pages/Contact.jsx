import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Clock } from "lucide-react";
import ToggleQuickMenu from "../components/ToggleQuickMenu";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [selectedService, setSelectedService] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { value: "web-development", label: "Web Development", icon: "🌐" },
    { value: "mobile-apps", label: "Mobile Apps", icon: "📱" },
    { value: "ui-ux-design", label: "UI/UX Design", icon: "🎨" },
    { value: "cybersecurity", label: "Cybersecurity", icon: "🔒" },
    { value: "digital-strategy", label: "Digital Strategy", icon: "📈" },
    { value: "cloud-solutions", label: "Cloud Solutions", icon: "☁️" },
    { value: "ai-ml", label: "AI/ML Solutions", icon: "🤖" },
    { value: "devops", label: "DevOps & Automation", icon: "⚙️" }
  ];

  const budgets = [
    { value: "<10k", label: "Under $10K" },
    { value: "10k-50k", label: "$10K - $50K" },
    { value: "50k-100k", label: "$50K - $100K" },
    { value: "100k+", label: "Over $100K" },
    { value: "discuss", label: "Let's Discuss" }
  ];

  const timelines = [
    { value: "1-3", label: "1-3 months" },
    { value: "3-6", label: "3-6 months" },
    { value: "6-12", label: "6-12 months" },
    { value: "12+", label: "12+ months" },
    { value: "tbd", label: "TBD" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!selectedService) errors.service = 'Please select a service';
    if (!formData.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '04bce140-9632-4d29-bd15-13496445aa19');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('company', formData.company || '');
    formDataToSend.append('service', selectedService || '');
    formDataToSend.append('budget', formData.budget || '');
    formDataToSend.append('timeline', formData.timeline || '');
    formDataToSend.append('message', formData.message);
    formDataToSend.append('replyto', 'your-email@example.com');
    formDataToSend.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '', email: '', company: '', service: '', message: '', budget: '', timeline: ''
        });
        setSelectedService('');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "Uxinityofficial@gmail.com",
      href: "mailto:Uxinityofficial@gmail.com",
      description: "General inquiries and project discussions"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 9446068542",
      href: "tel:+919446068542",
      description: "Available Mon-Fri, 9AM-6PM IST"
    },
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   value: "Bangalore, India",
    //   href: "#",
    //   description: "By appointment only"
    // }
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/uxin_ity?igsh=MW9jYTRqd3NzMmZudg==",
      label: "Instagram",
      icon: "📷"
    },
    {
      href: "https://wa.me/919446068542",
      label: "WhatsApp",
      icon: "💬"
    },
    {
      href: "https://www.facebook.com/share/1ABSH2corU/",
      label: "Facebook",
      icon: "📘"
    },
     {
    href: "mailto:Uxinityofficial@gmail.com",
    label: "Email",
    icon: "✉️",
  },
    // {
    // //   href: "https://linkedin.com/company/uxinity",
    // //   label: "LinkedIn",
    // //   icon: "💼"
    // // },
    // // {
    // //   href: "https://github.com/uxinity",
    // //   label: "GitHub",
    // //   icon: "🐙"
    // // }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-white text-black py-20 px-4 sm:px-8 lg:px-12">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gray-100 rounded-full blur-xl opacity-30 pointer-events-none"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-black text-sm font-medium rounded-full border border-gray-200 mb-6">
            <Clock className="h-4 w-4" />
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
            Get In Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your project and how we can help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <motion.div 
            className="space-y-6 lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="group border border-gray-200 rounded-2xl p-6 hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <motion.div 
                      className="p-2 bg-black text-white rounded-xl flex-shrink-0"
                      animate={hoveredCard === index ? { rotate: 5 } : { rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <contact.icon className="h-5 w-5" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black mb-1">{contact.title}</h4>
                      <a 
                        href={contact.href} 
                        className="text-black hover:text-gray-800 font-medium transition-colors block"
                      >
                        {contact.value}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">{contact.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              className="border border-gray-200 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-black mb-4 flex items-center gap-2">
                <span>Follow Us</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-black transition-all duration-200 group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="text-sm font-medium text-black group-hover:underline">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-black">24h</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-black">5+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 border border-gray-200 rounded-2xl p-6 lg:p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Form Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-xl opacity-20 -mr-16 -mt-16" />
            
            {/* Success/Error Messages */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <p className="text-green-700 font-medium">Message sent successfully! We'll respond within 24 hours.</p>
                </motion.div>
              )}
              {error && (
                <motion.div
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-red-700">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Start Your Project</h3>
              <p className="text-gray-600">Tell us about your vision. We're here to make it happen.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Hidden fields */}
              <input type="hidden" name="access_key" value="04bce140-9632-4d29-bd15-13496445aa19" />
              <input type="hidden" name="replyto" value="your-email@example.com" />
              <input type="checkbox" name="botcheck" className="hidden" />

              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <motion.input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    placeholder="John Doe"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <motion.input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                    placeholder="john@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
              </div>

              {/* Company & Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                  <motion.input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="Your Company"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                  <motion.select
                    value={selectedService}
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                      handleInputChange({ target: { name: 'service', value: e.target.value } });
                    }}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                      formErrors.service ? "border-red-500" : ""
                    }`}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </motion.select>
                  {formErrors.service && <p className="text-red-500 text-sm mt-1">{formErrors.service}</p>}
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <motion.select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select budget</option>
                    {budgets.map((budget) => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </motion.select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <motion.select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </option>
                    ))}
                  </motion.select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Tell us about your project, goals, challenges, and what you're looking for..."
                  whileFocus={{ scale: 1.02 }}
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>

              {/* Submit Section */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Response within 24 hours</span>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 font-semibold rounded-xl transition-all flex items-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed border border-gray-300'
                      : 'bg-black text-white hover:bg-gray-800 border border-black'
                  }`}
                  whileHover={isSubmitting ? {} : { scale: 1.05 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What's the typical project timeline?",
                answer: "Most projects take 3-6 months, but we can deliver MVPs in as little as 4-6 weeks depending on complexity."
              },
              {
                question: "Do you sign NDAs?",
                answer: "Yes, we sign NDAs for all projects to protect your intellectual property and ideas."
              },
              {
                question: "What industries do you serve?",
                answer: "We work with startups, SaaS companies, fintech, healthcare, e-commerce, and enterprise clients across various sectors."
              },
              {
                question: "How do you ensure quality?",
                answer: "We follow agile methodologies, conduct regular code reviews, automated testing, and maintain detailed documentation."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-semibold text-black mb-3">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <ToggleQuickMenu />
    </section>
  );
};

export default Contact;