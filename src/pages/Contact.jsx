import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Star, Sparkles, CheckCircle, X } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredInput, setHoveredInput] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
    setError(null);

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '04bce140-9632-4d29-bd15-13496445aa19');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('replyto', 'your-email@example.com'); // Replace with your desired recipient email
    formDataToSend.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      console.log('API Response:', result); // Log for debugging

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const FloatingParticle = ({ delay, duration, size, x, y }) => (
    <div
      className="absolute rounded-full animate-float opacity-20"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: `radial-gradient(circle, ${Math.random() > 0.5 ? '#3B82F6' : '#A855F7'} 0%, transparent 70%)`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );

  const GlowOrb = ({ className, color, size = 400 }) => (
    <div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color}15 0%, ${color}05 50%, transparent 100%)`,
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
      }}
    />
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <GlowOrb className="top-10 left-10" color="#3B82F6" size={500} />
        <GlowOrb className="bottom-10 right-10" color="#A855F7" size={400} />
        <GlowOrb className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" color="#10B981" size={300} />
        {[...Array(25)].map((_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.3} 
            duration={6 + Math.random() * 8}
            size={`${3 + Math.random() * 12}px`}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/50 to-slate-900/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-500 hover:border-blue-400/50">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <div className="absolute inset-0 w-5 h-5 bg-yellow-400 rounded-full animate-ping opacity-20" />
            </div>
          </div>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
              Get In Touch
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse opacity-30" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into digital masterpieces. Let's discuss your next breakthrough project.
          </p>
          <div className="flex justify-center pt-8">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              {[
                { 
                  icon: Mail, 
                  title: "Email Us", 
                  content: "Uxinityofficial@gmail.com", 
                  subtitle: "We reply within 2 hours",
                  gradient: "from-blue-500 to-cyan-500",
                  delay: 0 
                },
                { 
                  icon: Phone, 
                  title: "Call Us", 
                  content: "+91 9446068542", 
                  subtitle: "Mon - Fri, 9AM - 6PM IST",
                  gradient: "from-purple-500 to-pink-500",
                  delay: 0.1 
                },
                { 
                  icon: MapPin, 
                  title: "Visit Us", 
                  content: "", 
                  subtitle: "Schedule a meeting Call us +91 9446068542",
                  gradient: "from-green-500 to-emerald-500",
                  delay: 0.2 
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`relative p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                      {hoveredCard === index && (
                        <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 font-medium">{item.content}</p>
                      <p className="text-gray-400 text-sm mt-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
              ))}
            </div>
            {/* <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">5.0 Rating</span>
              </div>
              <p className="text-gray-300 text-sm italic">
                "Outstanding service and exceptional results. They transformed our vision into reality."
              </p>
              <p className="text-gray-400 text-xs mt-2">- Sarah Johnson, CEO TechStart</p>
            </div> */}
          </div>
          <div className="lg:col-span-3 relative">
            {isSubmitted && (
              <div className="absolute top-0 left-0 right-0 z-20 p-4 mb-6 rounded-xl bg-green-500/20 border border-green-400/50 backdrop-blur-xl animate-slideDown">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <h4 className="text-green-300 font-semibold">Message Sent Successfully!</h4>
                    <p className="text-green-200 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="ml-auto text-green-300 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
            {error && (
              <div className="absolute top-0 left-0 right-0 z-20 p-4 mb-6 rounded-xl bg-red-500/20 border border-red-400/50 backdrop-blur-xl animate-slideDown">
                <div className="flex items-center gap-3">
                  <X className="w-6 h-6 text-red-400" />
                  <div>
                    <h4 className="text-red-300 font-semibold">Error</h4>
                    <p className="text-red-200 text-sm">{error}</p>
                  </div>
                  <button 
                    onClick={() => setError(null)}
                    className="ml-auto text-red-300 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Send us a message</h2>
                  <p className="text-gray-400 text-sm">Fill out the form below and we'll get back to you</p>
                </div>
              </div>
              <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="04bce140-9632-4d29-bd15-13496445aa19" />
                <input type="hidden" name="replyto" value="your-email@example.com" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: 'name', type: 'text', placeholder: 'Full Name', icon: '👤', required: true },
                      { name: 'email', type: 'email', placeholder: 'Email Address', icon: '✉️', required: true },
                    ].map((field) => (
                      <div key={field.name} className="relative group">
                        <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors duration-200">
                          {field.icon} {field.placeholder}
                        </label>
                        <div className="relative">
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            onFocus={() => setHoveredInput(field.name)}
                            onBlur={() => setHoveredInput(null)}
                            placeholder={`Enter your ${field.placeholder.toLowerCase()}`}
                            required={field.required}
                            className="w-full px-4 py-4 rounded-xl bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-black/30 transition-all duration-300 hover:border-purple-400/50"
                          />
                          {hoveredInput === field.name && (
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse pointer-events-none" />
                          )}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-focus-within:from-blue-500/20 group-focus-within:to-purple-500/20 transition-all duration-300 pointer-events-none" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative group">
                    {/* <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors duration-200">
                      📋 Subject
                    </label> */}
                    {/* <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setHoveredInput('subject')}
                        onBlur={() => setHoveredInput(null)}
                        placeholder="What's your project about?"
                        required
                        className="w-full px-4 py-4 rounded-xl bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-black/30 transition-all duration-300 hover:border-purple-400/50"
                      />
                      {hoveredInput === 'subject' && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse pointer-events-none" />
                      )}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-focus-within:from-blue-500/20 group-focus-within:to-purple-500/20 transition-all duration-300 pointer-events-none" />
                    </div> */}
                  </div>
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors duration-200">
                      💬 Message
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setHoveredInput('message')}
                        onBlur={() => setHoveredInput(null)}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        rows="6"
                        required
                        className="w-full px-4 py-4 rounded-xl bg-black/20 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-black/30 transition-all duration-300 hover:border-purple-400/50 resize-none"
                      />
                      {hoveredInput === 'message' && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse pointer-events-none" />
                      )}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-focus-within:from-blue-500/20 group-focus-within:to-purple-500/20 transition-all duration-300 pointer-events-none" />
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-xs text-gray-500">
                        {formData.message.length}/500 characters
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-4 px-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg overflow-hidden hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-70"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending your message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          <span>Send Message</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-400/50 opacity-0 group-active:opacity-100 transition-opacity duration-150" />
                    <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>
                </div>
              </form>
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse opacity-80" />
            <div className="absolute top-1/3 -left-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-ping opacity-60" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-500 opacity-60 animate-pulse" />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          75% { transform: translateY(-30px) rotate(270deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
        .bg-300% {
          background-size: 300% 300%;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Contact;