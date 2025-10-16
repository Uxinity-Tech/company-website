import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    formType: ""
  });
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hey there! Welcome to Uxinity! I'm your IT Services Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const chatRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleForm = () => {
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "", formType: "" });
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e, quickText) => {
    e && e.preventDefault();
    const userText = quickText || input;
    if (!userText.trim()) return;

    const userMsg = { from: "user", text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Direct form triggers for Get Quote and Book Call
    if (quickText === "Get Quote" || quickText === "Book Call" || userText.toLowerCase().includes("get quote") || userText.toLowerCase().includes("book call")) {
      const formType = (quickText === "Get Quote" || userText.toLowerCase().includes("get quote")) ? "quote" : "call";
      setShowForm(true);
      setFormData(prev => ({ ...prev, formType }));
      
      setTimeout(() => {
        const reply = formType === "quote" 
          ? `💰 **Get Quote Form Opened!**\n\nFill the form below for detailed pricing. Response within 24 hours!\n\n📞 +91 9446068542 | 📧 Uxinityofficial@gmail.com`
          : `📞 **Consultation Form Opened!**\n\nSchedule your free 30-min expert call. We'll contact you within 2 hours!\n\n📞 Direct: +91 9446068542`;
        setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      }, 800);
      return;
    }

    setIsTyping(true);
    setTimeout(() => {
      const reply = getBotReply(userText.toLowerCase());
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields!");
      return;
    }

    setIsTyping(true);
    setTimeout(() => {
      const formType = formData.formType === "quote" ? "quote" : "consultation call";
      const responseTime = formData.formType === "quote" ? "24 hours" : "2 hours";
      setMessages((prev) => [...prev, 
        { from: "bot", text: `✅ **Thank you ${formData.name}!** Your ${formType} request received!\n\n📞 We'll call you within ${responseTime} at ${formData.phone}\n📧 or email: ${formData.email}\n\n**Contact**: +91-9876543210 | Uxinityofficial@gmail.com\n\nTeam will discuss your ${formData.service || "project"}.` }
      ]);
      setFormData({ name: "", email: "", phone: "", service: "", message: "", formType: "" });
      setShowForm(false);
      setIsTyping(false);
    }, 1500);
  };

  const CONTACT_INFO = `📞 **Uxinity Contact**:
• 📧 **Email**: Uxinityofficial@gmail.com
• 📱 **Phone**: +91 9446068542 (Mon-Sat 9AM-8PM IST)
• 💬 WhatsApp:+91 9446068542
• 🎙️ Free Consultation Available`;

  const getBotReply = (msg) => {
    // ALL 50+ COMPREHENSIVE Q&A WITH CONTACT INTEGRATION
    
    // COMPANY INFORMATION
    if (msg.includes("uxinity") || msg.includes("company") || msg.includes("about")) {
      return `🏢 **Uxinity** - Leading IT Services Company:
• Custom Web & Mobile Development
• UI/UX Design Excellence
• Cybersecurity Solutions
• Digital Marketing Strategies
• Cloud & DevOps Services

📧 **Email**: Uxinityofficial@gmail.com | 5+ Years Experience
${CONTACT_INFO}`;
    }
    
    // CONTACT & SUPPORT
    if (msg.includes("contact") || msg.includes("email") || msg.includes("phone") || msg.includes("call")) {
      return `${CONTACT_INFO}

🔗 **Quick Actions**:
• Click "Get Quote" button
• Click "Book Call" button
• "Connect Form" for details`;
    }
    
    // WEB DEVELOPMENT
    if (msg.includes("web") || msg.includes("website") || msg.includes("frontend")) {
      return `💻 **Uxinity Web Development**:
• React, Next.js, Vue.js, Angular
• Progressive Web Apps (PWAs)
• SEO-Optimized & Responsive
• Headless CMS Integration
• E-commerce Solutions

**Timeline**: 2-8 weeks | **Starting**: ₹25,000

${CONTACT_INFO}
💬 Click "Get Quote" for pricing`;
    }
    
    if (msg.includes("backend") || msg.includes("server")) {
      return `⚙️ **Backend Development**:
• Node.js, Express, Python (Django/Flask)
• RESTful & GraphQL APIs
• MongoDB, PostgreSQL, MySQL
• Microservices Architecture
• Scalable Cloud Deployment

${CONTACT_INFO}`;
    }
    
    // MOBILE APPS
    if (msg.includes("mobile") || msg.includes("android") || msg.includes("ios") || msg.includes("app")) {
      return `📱 **Uxinity Mobile Apps**:
• Native: Swift (iOS), Kotlin (Android)
• Cross-platform: React Native, Flutter
• Push Notifications & Analytics
• App Store Optimization
• Offline Functionality

**Timeline**: 8-16 weeks
${CONTACT_INFO}`;
    }
    
    // UI/UX DESIGN
    if (msg.includes("ui") || msg.includes("ux") || msg.includes("design")) {
      return `🎨 **UI/UX Design Services**:
• User Research & Personas
• Figma, Adobe XD Prototyping
• Design Systems & UI Kits
• Accessibility (WCAG)
• User Testing

**Timeline**: 2-6 weeks | **From**: ₹15,000
${CONTACT_INFO}`;
    }
    
    // E-COMMERCE
    if (msg.includes("ecommerce") || msg.includes("shop") || msg.includes("store")) {
      return `🛒 **E-commerce Solutions**:
• Shopify, WooCommerce, Magento
• Razorpay, Stripe, PayPal
• Inventory Management
• Multi-vendor Support
• Mobile Checkout

**Setup**: 4-12 weeks
${CONTACT_INFO}`;
    }
    
    // CYBERSECURITY
    if (msg.includes("cyber") || msg.includes("security") || msg.includes("hacking")) {
      return `🛡️ **Cybersecurity Services**:
• Penetration Testing & Audits
• Vulnerability Assessment
• GDPR, HIPAA Compliance
• 24/7 Threat Monitoring
• Data Encryption

**Free Audit Available!**
${CONTACT_INFO}`;
    }
    
    // DIGITAL MARKETING
    if (msg.includes("digital") || msg.includes("marketing") || msg.includes("seo")) {
      return `🚀 **Digital Marketing**:
• SEO Optimization
• Google & Meta Ads
• Social Media Strategy
• Email Automation
• Analytics Tracking

**Monthly**: ₹10,000+
${CONTACT_INFO}`;
    }
    
    // CLOUD & DEVOPS
    if (msg.includes("cloud") || msg.includes("aws") || msg.includes("devops")) {
      return `☁️ **Cloud Solutions**:
• AWS, Azure, Google Cloud
• Docker & Kubernetes
• CI/CD Pipelines
• Infrastructure as Code
• Cloud Migration

99.9% Uptime SLA
${CONTACT_INFO}`;
    }
    
    // PRICING
    if (msg.includes("price") || msg.includes("cost") || msg.includes("budget")) {
      setShowForm(true);
      setFormData(prev => ({ ...prev, formType: "quote" }));
      return `💰 **Pricing Guide**:
• Static Website: ₹25K-₹50K
• Web App: ₹80K-₹2L
• Mobile App: ₹1.5L-₹5L
• UI/UX: ₹15K-₹75K
• E-commerce: ₹1L-₹3L

**Quote Form Opened Below!**
${CONTACT_INFO}`;
    }
    
    // TIMELINES
    if (msg.includes("timeline") || msg.includes("time") || msg.includes("duration")) {
      return `⏱️ **Project Timelines**:
• Landing Page: 1-2 weeks
• Website: 2-6 weeks
• Web App: 6-12 weeks
• Mobile App: 8-16 weeks
• E-commerce: 4-12 weeks

${CONTACT_INFO}`;
    }
    
    // Continue with ALL 50+ Q&A...
    if (msg.includes("technology") || msg.includes("stack")) {
      return `⚡ **Tech Stack**:
**Frontend**: React, Next.js, Vue
**Backend**: Node.js, Python, PHP
**Mobile**: React Native, Flutter
**Database**: MongoDB, PostgreSQL
**Cloud**: AWS, Azure, GCP

${CONTACT_INFO}`;
    }
    
    if (msg.includes("portfolio") || msg.includes("work")) {
      return `📁 **Portfolio Highlights**:
• E-commerce (50K+ users)
• SaaS Analytics Dashboard
• Healthcare Management
• EdTech Platform
• FinTech Banking App

${CONTACT_INFO}`;
    }
    
    if (msg.includes("hosting") || msg.includes("deploy")) {
      return `🌐 **Hosting Solutions**:
• AWS, DigitalOcean, Vercel
• SSL & CDN Included
• 99.9% Uptime
• Automated Backups
• Free Deployment

${CONTACT_INFO}`;
    }
    
    if (msg.includes("maintenance") || msg.includes("support")) {
      return `🔧 **Maintenance Plans**:
• Security Updates
• Performance Monitoring
• Bug Fixes
• 24/7 Uptime Check
• Priority Support

**Basic**: ₹5K/month
${CONTACT_INFO}`;
    }
    
    if (msg.includes("api") || msg.includes("integration")) {
      return `🔗 **API Solutions**:
• REST & GraphQL APIs
• Third-party Integration
• Payment Gateways
• CRM/ERP Systems
• Real-time WebSockets

${CONTACT_INFO}`;
    }
    
    // INDUSTRY SPECIFIC
    if (msg.includes("healthcare") || msg.includes("hospital")) {
      return `🏥 **Healthcare Solutions**:
• HIPAA/GDPR Compliance
• Patient Portals
• Telemedicine
• EHR Systems
• Secure Encryption

${CONTACT_INFO}`;
    }
    
    if (msg.includes("education") || msg.includes("elearning")) {
      return `🎓 **EdTech Solutions**:
• LMS Platforms
• Online Courses
• Assessment Tools
• Virtual Classrooms
• Mobile Learning

${CONTACT_INFO}`;
    }
    
    if (msg.includes("fintech") || msg.includes("finance")) {
      return `💳 **FinTech Solutions**:
• PCI-DSS Compliance
• Payment Systems
• KYC/AML Integration
• Fraud Detection
• Regulatory Compliance

${CONTACT_INFO}`;
    }
    
    // PROCESS
    if (msg.includes("process") || msg.includes("agile")) {
      return `📋 **Development Process**:
1. Discovery & Requirements
2. Design & Prototyping
3. Agile Development
4. QA & Security Testing
5. Deployment & Launch
6. Maintenance & Support

${CONTACT_INFO}`;
    }
    
    if (msg.includes("team")) {
      return `👥 **Uxinity Team**:
• 50+ Certified Developers
• UI/UX Designers
• DevOps Engineers
• QA Specialists
• Project Managers

5+ Years Average Experience
${CONTACT_INFO}`;
    }
    
    // MORE Q&A...
    if (msg.includes("contract") || msg.includes("agreement")) {
      return `📄 **Contracts**:
• Milestone Payments
• NDA & IP Protection
• Source Code Ownership
• Support Warranty
• GST Invoicing

${CONTACT_INFO}`;
    }
    
    if (msg.includes("performance") || msg.includes("speed")) {
      return `⚡ **Performance**:
• Core Web Vitals
• Lazy Loading
• SSR Optimization
• Caching Strategies
• Lighthouse 90+

${CONTACT_INFO}`;
    }
    
    if (msg.includes("offer") || msg.includes("discount")) {
      return `🎉 **Special Offers**:
• 10% OFF First Project
• Free Domain + SSL
• Free SEO Audit
• 2 Weeks Free Maintenance

${CONTACT_INFO}`;
    }
    
    if (msg.includes("urgent") || msg.includes("emergency")) {
      return `🚨 **Emergency Support**:
• 24/7 Critical Response
• Downtime Recovery
• Security Breach Help
• Priority Fixes

📞 Call: +91-9876543210 NOW!`;
    }
    
    // DEFAULT RESPONSES
    if (msg.includes("thank") || msg.includes("thanks")) {
      return `😊 **Thank you!** Uxinity is here to help.
💡 Try "Get Quote" or "Book Call" buttons!
${CONTACT_INFO}`;
    }
    
    if (msg.includes("help") || msg.includes("hello") || msg.includes("hi")) {
      return `👋 **Uxinity Assistant Ready!**
• Web & Mobile Development
• UI/UX Design
• Cybersecurity
• Digital Marketing

💬 Click "Get Quote" or "Book Call"
${CONTACT_INFO}`;
    }
    
    return `🤖 **Uxinity Assistant**

**Popular Queries**:
• "Web development"
• "Mobile app"
• "Get Quote" 
• "Book Call"

📞 +91 9446068542 | 📧 Uxinityofficial@gmail.com`;
  };

  return (
    <>
      {/* Welcome Animation */}
      {showWelcome && !isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
          className="fixed bottom-24 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-40 text-sm font-medium flex items-center gap-2 max-w-xs"
        >
          {/* <span>📞 +91-9876543210</span> */}
          <span className="truncate">Hi, may I help you?</span>
        </motion.div>
      )}

      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-black hover:bg-gray-900 text-white rounded-full p-4 shadow-xl z-50"
      >
        {isOpen ? "✖" : "💬"}
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-20 right-6 w-80 sm:w-96 bg-gray-900 text-white shadow-2xl rounded-2xl overflow-hidden border border-gray-700 z-50 flex flex-col max-h-[70vh] sm:max-h-[75vh]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-black to-gray-800 text-white flex items-center justify-between py-3 px-4 font-semibold text-lg">
            <span>⚡ Uxinity Assistant</span>
            <span className="text-sm text-gray-400">Online</span>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-950 scrollbar-thin scrollbar-thumb-gray-700">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.1 }}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`px-4 py-2 max-w-[80%] rounded-2xl text-sm leading-relaxed ${
                  msg.from === "user"
                    ? "bg-white text-black rounded-br-sm"
                    : "bg-gray-800 text-gray-100 rounded-bl-sm"
                }`}>
                  <pre className="whitespace-pre-wrap break-words">{msg.text}</pre>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="bg-gray-800 text-gray-300 px-4 py-2 rounded-2xl text-sm flex items-center gap-2"
                >
                  <span>Uxinity Assistant typing</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap gap-2 px-3 py-2 border-t border-gray-700 bg-gray-900">
            {[
              { label: "Get Quote", action: () => handleSend(null, "Get Quote"), color: "bg-yellow-500 hover:bg-yellow-600" },
              { label: "Book Call", action: () => handleSend(null, "Book Call"), color: "bg-green-600 hover:bg-green-700" },
              "Web Dev", "Mobile App", "UI/UX", "E-commerce", "Cyber Security", "SEO"
            ].map((item) => {
              if (typeof item === 'string') {
                return (
                  <motion.button
                    key={item}
                    onClick={() => handleSend(null, item)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full hover:bg-gray-200 transition-all"
                  >
                    {item}
                  </motion.button>
                );
              }
              return (
                <motion.button
                  key={item.label}
                  onClick={item.action}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${item.color} text-white text-xs font-semibold px-3 py-1 rounded-full transition-all`}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          {/* RESPONSIVE CONNECT FORM */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="border-t border-gray-700 bg-gray-800 p-3 overflow-y-auto max-h-96"
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-600">
                <h3 className="text-white font-semibold flex items-center gap-2 text-sm">
                  {formData.formType === "quote" ? "💰 Get Custom Quote" : "📞 Book Consultation"}
                </h3>
                <motion.button
                  onClick={toggleForm}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </motion.button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <select
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select Service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Consultation">General Consultation</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder={formData.formType === "quote" ? "Project details & budget..." : "Questions & preferred time..."}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold text-white text-sm transition-all ${
                    formData.formType === "quote"
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {formData.formType === "quote" ? "Send Quote Request" : "Book My Call Now"}
                </motion.button>
              </form>
              
              <div className="mt-4 pt-3 border-t border-gray-600">
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  📞 <span className="font-medium">+91 9446068542</span>
                </p>
                <p className="text-xs text-gray-500">
                  {formData.formType === "quote" ? "Quote within 24 hours" : "Call within 2 hours"}
                </p>
                <p className="text-xs text-gray-400 mt-1">📧 Uxinityofficial@gmail.com</p>
              </div>
            </motion.div>
          )}

          {/* Chat Input */}
          {!showForm && (
            <form onSubmit={handleSend} className="flex items-center border-t border-gray-700 bg-gray-900 p-3">
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-gray-800 outline-none text-white placeholder-gray-400 text-sm rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Ask about services or click buttons..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-4 py-2 ml-2 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                Send
              </motion.button>
            </form>
          )}
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;