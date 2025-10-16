import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ACCESS_KEY = '04bce140-9632-4d29-bd15-13496445aa19';
const REPLY_TO = 'your-email@example.com'; // Update with your actual email
const API_URL = 'https://api.web3forms.com/submit';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: "",
    timeline: "",
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const chatRef = useRef(null);

  // Services, budgets, and timelines from Contact component
  const services = [
    { value: "web-development", label: "Web Development", icon: "🌐" },
    { value: "mobile-apps", label: "Mobile Apps", icon: "📱" },
    { value: "ui-ux-design", label: "UI/UX Design", icon: "🎨" },
    { value: "cybersecurity", label: "Cybersecurity", icon: "🔒" },
    { value: "digital-strategy", label: "Digital Strategy", icon: "📈" },
    { value: "cloud-solutions", label: "Cloud Solutions", icon: "☁️" },
    { value: "ai-ml", label: "AI/ML Solutions", icon: "🤖" },
    { value: "devops", label: "DevOps & Automation", icon: "⚙️" },
    { value: "e-commerce", label: "E-commerce", icon: "🛒" }
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

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping, isSubmitted, error]);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);
  
  const toggleForm = () => {
    setShowForm(false);
    setFormData({ 
      name: "", email: "", phone: "", company: "", service: "", 
      message: "", budget: "", timeline: "", formType: "" 
    });
    setFormErrors({});
    setError(null);
    setIsSubmitted(false);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    if (!formData.service) errors.service = 'Please select a service';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleServiceChange = (e) => {
    setFormData({ ...formData, service: e.target.value });
    if (formErrors.service) {
      setFormErrors({ ...formErrors, service: '' });
    }
  };

  const submitForm = async (formDataToSubmit) => {
    setIsSubmitting(true);
    setError(null);
    setIsSubmitted(false);

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', ACCESS_KEY);
    formDataToSend.append('name', formDataToSubmit.name);
    formDataToSend.append('email', formDataToSubmit.email);
    formDataToSend.append('phone', formDataToSubmit.phone || '');
    formDataToSend.append('company', formDataToSubmit.company || '');
    formDataToSend.append('service', formDataToSubmit.service || '');
    formDataToSend.append('budget', formDataToSubmit.budget || '');
    formDataToSend.append('timeline', formDataToSubmit.timeline || '');
    formDataToSend.append('message', formDataToSubmit.message);
    formDataToSend.append('replyto', REPLY_TO);
    formDataToSend.append('botcheck', '');

    // Set subject based on form type
    if (formDataToSubmit.formType === 'quote') {
      formDataToSend.append('subject', 'Quote Request from Chatbot');
      formDataToSend.append('message', `Quote Request from Chatbot:\n\nService: ${formDataToSubmit.service}\nBudget: ${formDataToSubmit.budget}\nTimeline: ${formDataToSubmit.timeline}\nCompany: ${formDataToSubmit.company}\nPhone: ${formDataToSubmit.phone}\n\nProject Details:\n${formDataToSubmit.message}`);
    } else {
      formDataToSend.append('subject', 'Consultation Call Request from Chatbot');
      formDataToSend.append('message', `Consultation Request from Chatbot:\n\nName: ${formDataToSubmit.name}\nPhone: ${formDataToSubmit.phone}\nEmail: ${formDataToSubmit.email}\nService: ${formDataToSubmit.service}\n\nDetails:\n${formDataToSubmit.message}`);
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        return { success: true, message: 'Form submitted successfully!' };
      } else {
        setError(result.message || 'Failed to send message. Please try again.');
        return { success: false, message: result.message || 'Submission failed' };
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      return { success: false, message: 'Network error occurred' };
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      addBotMessage("❌ Please fix the errors in the form above!");
      return;
    }

    setIsTyping(true);
    const result = await submitForm(formData);

    setTimeout(() => {
      if (result.success) {
        const formTypeText = formData.formType === "quote" ? "quote request" : "consultation call";
        addBotMessage(`✅ **Thank you ${formData.name}!** Your ${formTypeText} has been sent successfully!\n\n📞 We'll contact you within ${formData.formType === "quote" ? "24 hours" : "2 hours"} at ${formData.phone}\n📧 or email: ${formData.email}\n\n**Contact**: +91 9446068542 | Uxinityofficial@gmail.com`);
        
        // Reset form
        setFormData({ 
          name: "", email: "", phone: "", company: "", service: "", 
          message: "", budget: "", timeline: "", formType: "" 
        });
        setFormErrors({});
        setShowForm(false);
      } else {
        addBotMessage(`❌ ${result.message}\n\nPlease try again or contact us directly:\n📞 +91 9446068542 | 📧 Uxinityofficial@gmail.com`);
      }
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = (e, quickText) => {
    e && e.preventDefault();
    const userText = quickText || input;
    if (!userText.trim()) return;

    const userMsg = { from: "user", text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Direct form triggers for Get Quote and Book Call
    if (quickText === "Get Quote" || quickText === "Book Call" || 
        userText.toLowerCase().includes("get quote") || 
        userText.toLowerCase().includes("book call") ||
        userText.toLowerCase().includes("price") ||
        userText.toLowerCase().includes("cost")) {
      
      const formType = (quickText === "Get Quote" || 
                       userText.toLowerCase().includes("get quote") ||
                       userText.toLowerCase().includes("price") ||
                       userText.toLowerCase().includes("cost")) ? "quote" : "call";
      
      setShowForm(true);
      setFormData(prev => ({ ...prev, formType }));
      
      setTimeout(() => {
        const reply = formType === "quote" 
          ? `💰 **Get Quote Form Opened!**\n\nFill out the detailed form below for custom pricing. We'll respond within 24 hours!\n\n📞 +91 9446068542 | 📧 Uxinityofficial@gmail.com`
          : `📞 **Consultation Form Opened!**\n\nSchedule your free 30-min expert consultation. We'll call you within 2 hours!\n\n📞 Direct: +91 9446068542`;
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

  const addBotMessage = (text) => {
    setMessages((prev) => [...prev, { from: "bot", text }]);
  };

const getBotReply = (msg) => {
  // Contact information
  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone") || msg.includes("call") || msg.includes("number") || msg.includes("whatsapp")) {
    return `📞 **Uxinity Contact Details**:
• 📧 **Email**: Uxinityofficial@gmail.com
• 📱 **Phone**: +91 9446068542 (Mon-Sat 9AM-8PM IST)
• 💬 **WhatsApp**: +91 9446068542
• 🏢 **Location**: India (Remote & On-site)

🔗 **Quick Actions**:
• Click "Get Quote" for pricing
• Click "Book Call" for consultation
• Fill form below for detailed inquiry`;
  }
  
  // About company
  if (msg.includes("uxinity") || msg.includes("company") || msg.includes("about") || msg.includes("who are you")) {
    return `🏢 **About Uxinity** - Premium IT Solutions Provider

**Our Expertise**:
• 🔧 Custom Web & Mobile Development
• 🎨 Award-winning UI/UX Design
• 🔒 Enterprise Cybersecurity
• ☁️ Cloud Migration & DevOps
• 🤖 AI/ML Integration
• 📈 Digital Transformation

**Why Choose Us**:
• 100% Client Satisfaction
• Agile Development Process
• 24/7 Technical Support
• Competitive Pricing

💬 Click "Get Quote" or "Book Call" to get started!`;
  }
  
  // Web development questions
  if (msg.includes("web") || msg.includes("website") || msg.includes("wordpress") || msg.includes("react") || msg.includes("frontend") || msg.includes("backend")) {
    return `🌐 **Web Development Services**

**Technologies We Use**:
• Frontend: React, Vue, Angular, Next.js
• Backend: Node.js, Python, PHP, Ruby
• CMS: WordPress, Drupal, Custom
• Frameworks: Laravel, Django, Express

**Common Projects**:
• Static Sites: $1K-$5K (1-4 weeks)
• Dynamic Sites: $5K-$15K (4-12 weeks)
• Web Apps: $15K-$50K+ (3-6 months)

**Popular Questions**:
• "Can you build e-commerce sites?" → Yes! Shopify, WooCommerce, custom
• "Do you do SEO?" → Yes, full SEO optimization
• "WordPress maintenance?" → Monthly packages available

💰 Click "Get Quote" for custom pricing!`;
  }
  
  // Mobile app development
  if (msg.includes("mobile") || msg.includes("app") || msg.includes("ios") || msg.includes("android") || msg.includes("flutter") || msg.includes("react native")) {
    return `📱 **Mobile App Development**

**Platforms**:
• iOS (Swift, Objective-C)
• Android (Kotlin, Java)
• Cross-platform: Flutter, React Native

**App Types**:
• Consumer Apps: Social, Fitness, E-commerce
• Enterprise Apps: CRM, Inventory, HR
• Hybrid Solutions: PWA + Native

**Development Timeline**:
• MVP: 2-4 months
• Full App: 4-8 months
• Maintenance: Ongoing support

**Key Questions**:
• "iOS and Android both?" → Yes, native or cross-platform
• "App Store publishing?" → Complete deployment included
• "Push notifications?" → Firebase, OneSignal integration

💰 Need pricing? Click "Get Quote" button!`;
  }
  
  // UI/UX Design
  if (msg.includes("ui") || msg.includes("ux") || msg.includes("design") || msg.includes("figma") || msg.includes("prototype")) {
    return `🎨 **UI/UX Design Excellence**

**Our Design Process**:
1. Research & Wireframing
2. Visual Design (Figma, Adobe XD)
3. Prototyping & Testing
4. Handoff to Development

**Services Offered**:
• Complete UI/UX Redesign
• Design Systems & Style Guides
• Mobile & Web Interface Design
• User Research & Testing
• Accessibility (WCAG) Compliance

**Pricing Guide**:
• Website Design: $2K-$10K
• Mobile App Design: $5K-$20K
• Design Audit: $1K-$3K

**Frequently Asked**:
• "How many revisions?" → Unlimited until satisfaction
• "Source files included?" → Yes, Figma/Adobe files
• "Responsive design?" → Mobile-first approach

✨ Click "Get Quote" for design consultation!`;
  }
  
  // Cybersecurity
  if (msg.includes("cyber") || msg.includes("security") || msg.includes("hacking") || msg.includes("penetration") || msg.includes("firewall")) {
    return `🔒 **Cybersecurity Solutions**

**Our Security Services**:
• Penetration Testing & Ethical Hacking
• Vulnerability Assessment
• Security Audits & Compliance
• Web Application Firewall (WAF)
• Incident Response Planning
• Employee Security Training

**Protection For**:
• E-commerce Platforms
• Financial Applications
• Healthcare Systems
• Enterprise Networks

**Compliance**:
• GDPR, HIPAA, PCI-DSS
• ISO 27001 Certification
• Regular Security Updates

**Common Concerns**:
• "How secure is my site?" → We perform comprehensive audits
• "What about data breaches?" → 24/7 monitoring available
• "SSL certificates?" → Installation & management included

🛡️ Click "Book Call" for free security assessment!`;
  }
  
  // Cloud solutions
  if (msg.includes("cloud") || msg.includes("aws") || msg.includes("azure") || msg.includes("google cloud") || msg.includes("hosting")) {
    return `☁️ **Cloud Solutions & DevOps**

**Cloud Platforms**:
• AWS (EC2, Lambda, S3)
• Microsoft Azure
• Google Cloud Platform
• DigitalOcean, Heroku

**Services**:
• Cloud Migration Strategy
• Infrastructure as Code (Terraform)
• CI/CD Pipeline Setup
• Containerization (Docker, Kubernetes)
• Serverless Architecture
• Cost Optimization

**DevOps Practices**:
• Automated Testing & Deployment
• Monitoring & Logging (Prometheus, Grafana)
• Disaster Recovery Planning

**Migration Questions**:
• "Safe to move to cloud?" → Zero-downtime migration
• "Cost savings?" → 30-50% typical reduction
• "Data security?" → Enterprise-grade encryption

🚀 Click "Get Quote" for cloud assessment!`;
  }
  
  // AI/ML
  if (msg.includes("ai") || msg.includes("artificial") || msg.includes("machine learning") || msg.includes("chatbot") || msg.includes("ml")) {
    return `🤖 **AI & Machine Learning Solutions**

**AI Services**:
• Custom Chatbots & Virtual Assistants
• Predictive Analytics & Forecasting
• Computer Vision (Image Recognition)
• Natural Language Processing
• Recommendation Engines
• Automated Data Analysis

**ML Models**:
• Supervised Learning (Classification, Regression)
• Unsupervised Learning (Clustering, Anomaly Detection)
• Deep Learning (Neural Networks, CNN, RNN)

**Use Cases**:
• Customer Support Automation
• Fraud Detection Systems
• Personalized Marketing
• Supply Chain Optimization
• Healthcare Diagnostics

**Technical Stack**:
• TensorFlow, PyTorch, Scikit-learn
• Python, R, Julia
• Cloud AI Services (AWS SageMaker, Azure ML)

**FAQs**:
• "Need AI expertise?" → Our team has PhD-level ML engineers
• "Data privacy?" → GDPR-compliant processing
• "Integration with existing systems?" → Seamless API integration

🧠 Click "Book Call" for AI consultation!`;
  }
  
  // E-commerce
  if (msg.includes("ecommerce") || msg.includes("shop") || msg.includes("store") || msg.includes("shopify") || msg.includes("woocommerce")) {
    return `🛒 **E-commerce Solutions**

**Platforms We Support**:
• Shopify (Plus, Enterprise)
• WooCommerce/WordPress
• Magento/Adobe Commerce
• BigCommerce
• Custom Solutions

**E-commerce Features**:
• Payment Gateway Integration (Stripe, PayPal, Razorpay)
• Inventory Management
• Multi-vendor Marketplace
• SEO & Performance Optimization
• Mobile Commerce (PWA)
• CRM Integration (HubSpot, Salesforce)

**Store Setup Timeline**:
• Basic Store: 2-4 weeks
• Advanced Store: 6-12 weeks
• Enterprise: 3-6 months

**Success Stories**:
• 500% Revenue Growth
• 99.9% Uptime Guarantee
• PCI-DSS Compliance

**Popular Questions**:
• "Payment gateways?" → 50+ gateways supported
• "Shipping integration?" → FedEx, DHL, India Post
• "SEO optimization?" → Built-in SEO best practices

💳 Click "Get Quote" for store development!`;
  }
  
  // Pricing and budget
  if (msg.includes("price") || msg.includes("cost") || msg.includes("budget") || msg.includes("expensive") || msg.includes("cheap")) {
    handleSend(null, "Get Quote");
    return `💰 **Transparent Pricing Guide**

**Service Ranges**:
• Static Website: $1,000 - $5,000
• Dynamic Website: $5,000 - $15,000
• Web Application: $15,000 - $50,000+
• Mobile App (iOS/Android): $20,000 - $80,000
• UI/UX Design: $2,000 - $15,000
• Cybersecurity Audit: $3,000 - $20,000
• Cloud Migration: $10,000 - $50,000+

**What Affects Cost**:
• Team Size & Complexity
• Design Requirements
• Integration Needs
• Timeline Constraints
• Ongoing Maintenance

**No Hidden Fees**:
• Fixed-price contracts
• Milestone payments
• Post-launch support included

📝 **Quote Form Opening Below** - Get accurate pricing for your project!`;
  }
  
  // Timeline questions
  if (msg.includes("time") || msg.includes("timeline") || msg.includes("duration") || msg.includes("how long")) {
    return `⏱️ **Project Timelines**

**Typical Durations**:
• Website Redesign: 2-6 weeks
• Custom Web App: 3-6 months
• Mobile App MVP: 2-4 months
• Full Mobile App: 4-8 months
• UI/UX Design: 2-8 weeks
• Cybersecurity Audit: 1-4 weeks

**Factors Affecting Timeline**:
• Project Scope & Features
• Design Iterations Needed
• Third-party Integrations
• Client Feedback Speed
• Testing & QA Phases

**Our Process**:
1. Discovery & Planning (1-2 weeks)
2. Design & Prototyping (2-4 weeks)
3. Development Sprints (Agile)
4. Testing & Deployment
5. Training & Go-live

⚡ **Need faster delivery?** Click "Book Call" to discuss expedited options!`;
  }
  
  // Support and maintenance
  if (msg.includes("support") || msg.includes("maintenance") || msg.includes("update") || msg.includes("bug") || msg.includes("hosting")) {
    return `🛠️ **Support & Maintenance**

**Maintenance Packages**:
• **Basic**: $99/month - Updates, Backups, Uptime Monitoring
• **Standard**: $299/month - Security, Performance, Minor Updates
• **Premium**: $599+/month - 24/7 Support, Feature Updates, SEO

**What We Cover**:
• Security Patches & Updates
• Performance Optimization
• Backup & Disaster Recovery
• Uptime Monitoring (99.9% SLA)
• Bug Fixes & Troubleshooting
• Hosting Management

**Hosting Options**:
• Shared Hosting: $10-50/month
• VPS/Cloud: $50-500/month
• Dedicated Servers: Custom pricing
• AWS/Azure Managed: Enterprise

**Emergency Support**:
• 24/7 Critical Issue Response
• 4-hour SLA for Priority Issues
• Remote Access for Quick Fixes

🔧 **Existing project issues?** Click "Book Call" for immediate support consultation!`;
  }
  
  // Hiring and careers
  if (msg.includes("hire") || msg.includes("job") || msg.includes("career") || msg.includes("developer") || msg.includes("team")) {
    return `💼 **Hiring & Careers at Uxinity**

**We Are Hiring**:
• Frontend Developers (React, Vue)
• Backend Developers (Node, Python)
• Full Stack Engineers
• UI/UX Designers
• DevOps Engineers
• Cybersecurity Specialists
• AI/ML Engineers

**What We Offer**:
• Competitive Salaries
• Remote/Hybrid Work
• Professional Growth
• Health Insurance
• Paid Time Off
• Latest Tech Stack

**Client Hiring**:
• Dedicated Development Teams
• Freelance Developers
• Project-based Hiring
• Staff Augmentation

**For Clients**:
• "Need developers for my team?" → Staff augmentation available
• "Long-term partnership?" → Dedicated teams with fixed rates
• "Quality assurance?" → All developers vetted & experienced

🚀 **Looking to join us?** Email resumes to careers@uxinity.com`;
  }
  
  // Technical questions
  if (msg.includes("technology") || msg.includes("stack") || msg.includes("framework") || msg.includes("api") || msg.includes("database")) {
    return `⚙️ **Our Technology Stack**

**Frontend**:
• React, Next.js, Vue.js, Angular
• TypeScript, JavaScript (ES6+)
• Tailwind CSS, Material-UI
• Progressive Web Apps (PWA)

**Backend**:
• Node.js, Express, NestJS
• Python (Django, Flask, FastAPI)
• PHP (Laravel, Symfony)
• Ruby on Rails
• Java Spring Boot

**Databases**:
• PostgreSQL, MySQL, MongoDB
• Redis (Caching)
• Elasticsearch (Search)

**DevOps & Cloud**:
• Docker, Kubernetes
• AWS, Azure, Google Cloud
• CI/CD (GitHub Actions, Jenkins)
• Terraform, Ansible

**APIs & Integration**:
• RESTful APIs, GraphQL
• Third-party Integrations (Stripe, Twilio, etc.)
• Webhooks & Real-time (Socket.io)

**Quality Assurance**:
• Unit Testing (Jest, Mocha)
• E2E Testing (Cypress, Playwright)
• Performance Testing (Lighthouse)

🔧 **Specific tech questions?** Click "Book Call" for technical consultation!`;
  }
  
  // Process questions
  if (msg.includes("process") || msg.includes("how") || msg.includes("workflow") || msg.includes("methodology")) {
    return `📋 **Our Development Process**

**Agile Methodology**:
• 2-week Sprints
• Daily Standups
• Sprint Reviews & Retrospectives
• Continuous Integration/Deployment

**Project Phases**:
1. **Discovery** (1-2 weeks)
   - Requirements Gathering
   - Technical Architecture
   - Project Roadmap
   
2. **Design** (2-4 weeks)
   - Wireframes & Mockups
   - UI/UX Design
   - Client Approvals
   
3. **Development** (Core Phase)
   - Frontend & Backend
   - API Development
   - Integration Testing
   
4. **Testing & QA**
   - Unit, Integration, E2E Tests
   - Security & Performance Testing
   - User Acceptance Testing
   
5. **Deployment**
   - Staging Environment
   - Production Deployment
   - Monitoring Setup
   
6. **Maintenance & Support**
   - Bug Fixes
   - Feature Updates
   - Performance Monitoring

**Client Involvement**:
• Weekly Progress Updates
• Access to Project Management Tools
• Transparent Communication
• Milestone Deliverables

⚡ **Want to see our process in action?** Click "Book Call" for detailed walkthrough!`;
  }
  
  // Default comprehensive response
  return `🤖 **Uxinity IT Assistant** - Your Tech Partner

**🚀 Top Services**:
• 🌐 Web & Mobile Development
• 🎨 UI/UX Design
• 🔒 Cybersecurity
• ☁️ Cloud & DevOps
• 🤖 AI/ML Solutions
• 🛒 E-commerce

**💬 Ask Me About**:
• Project pricing & timelines
• Technology recommendations
• Development processes
• Support & maintenance
• Hiring developers
• Specific service details

**🔥 Quick Actions**:
• 💰 "Get Quote" for pricing
• 📞 "Book Call" for consultation
• 💬 Type your question below

**📞 Direct Contact**:
• +91 9446068542
• Uxinityofficial@gmail.com

**Pro Tip**: Try asking "web development process" or "mobile app pricing" for detailed answers!`;
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
          <span className="truncate">Hi, may I help you? 💬</span>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-20 right-6 w-80 sm:w-96 bg-gray-900 text-white shadow-2xl rounded-2xl overflow-hidden border border-gray-700 z-50 flex flex-col max-h-[70vh] sm:max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-black to-gray-800 text-white flex items-center justify-between py-3 px-4 font-semibold text-lg">
              <span>⚡ Uxinity Assistant</span>
              <span className="text-sm text-gray-400">Online</span>
            </div>

            {/* Messages Area */}
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
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-2xl text-sm flex items-center gap-2">
                    <span>Uxinity Assistant typing</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Success/Error Messages */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex justify-start"
                  >
                    <div className="bg-green-600 text-white px-4 py-2 rounded-2xl text-sm flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Form submitted successfully!
                    </div>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-red-600 text-white px-4 py-2 rounded-2xl text-sm">
                      ❌ {error}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Action Buttons */}
            {!showForm && (
              <div className="flex flex-wrap gap-2 px-3 py-2 border-t border-gray-700 bg-gray-900">
                {[
                  { label: "Get Quote", action: () => handleSend(null, "Get Quote"), color: "bg-yellow-500 hover:bg-yellow-600" },
                  { label: "Book Call", action: () => handleSend(null, "Book Call"), color: "bg-green-600 hover:bg-green-700" },
                  "Web Dev", "Mobile App", "UI/UX", "Cyber Security"
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
            )}

            {/* Enhanced Form Section */}
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
                  {/* Basic Info Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 border ${
                          formErrors.name ? "border-red-500" : "border-gray-600"
                        }`}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      {formErrors.name && <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 border ${
                          formErrors.email ? "border-red-500" : "border-gray-600"
                        }`}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      {formErrors.email && <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 border ${
                          formErrors.phone ? "border-red-500" : "border-gray-600"
                        }`}
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                      {formErrors.phone && <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company (Optional)"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <select
                      name="service"
                      className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 border ${
                        formErrors.service ? "border-red-500" : "border-gray-600"
                      }`}
                      value={formData.service}
                      onChange={handleServiceChange}
                      required
                    >
                      <option value="">Select Service *</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                    {formErrors.service && <p className="text-red-400 text-xs mt-1">{formErrors.service}</p>}
                  </div>

                  {/* Quote-specific fields */}
                  {formData.formType === "quote" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <select
                          name="budget"
                          className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                          value={formData.budget}
                          onChange={handleInputChange}
                        >
                          <option value="">Budget Range</option>
                          {budgets.map((budget) => (
                            <option key={budget.value} value={budget.value}>
                              {budget.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <select
                          name="timeline"
                          className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600"
                          value={formData.timeline}
                          onChange={handleInputChange}
                        >
                          <option value="">Timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline.value} value={timeline.value}>
                              {timeline.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder={formData.formType === "quote" 
                        ? "Project details, requirements, budget expectations..." 
                        : "Questions, preferred call time, specific needs..."}
                      className={`w-full px-3 py-2 bg-gray-700 text-white rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 border resize-none h-20 ${
                        formErrors.message ? "border-red-500" : "border-gray-600"
                      }`}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    {formErrors.message && <p className="text-red-400 text-xs mt-1">{formErrors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={isSubmitting ? {} : { scale: 1.02 }}
                    whileTap={isSubmitting ? {} : { scale: 0.98 }}
                    className={`w-full py-3 rounded-lg font-semibold text-white text-sm transition-all flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : formData.formType === "quote"
                        ? "bg-yellow-500 hover:bg-yellow-600"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {formData.formType === "quote" ? "Sending Quote Request..." : "Booking Call..."}
                      </>
                    ) : (
                      formData.formType === "quote" ? "Send Quote Request" : "Book My Call Now"
                    )}
                  </motion.button>
                </form>

                {/* Contact Footer */}
                <div className="mt-4 pt-3 border-t border-gray-600 text-xs">
                  <p className="text-gray-400 flex items-center gap-2">
                    📞 <span className="font-medium">+91 9446068542</span>
                  </p>
                  <p className="text-gray-500 mt-1">
                    {formData.formType === "quote" ? "Quote within 24 hours" : "Call within 2 hours"}
                  </p>
                  <p className="text-gray-400 mt-1">📧 Uxinityofficial@gmail.com</p>
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
      </AnimatePresence>
    </>
  );
};

export default Chatbot;