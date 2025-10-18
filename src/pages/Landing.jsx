import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Eye, Users, Zap, CheckCircle, ArrowRight, Mail, Phone, Globe, Server, Smartphone, Cloud, Bot, Settings, Send, AlertCircle, Code, BarChart3, Sparkles, Layout, TrendingUp, Link2, Monitor } from "lucide-react";
import ServiceSlide from "../Landing/ServiceSlide";
import TestimonialsRotator from "../Landing/TestimonialsRotator";
import ThemedBanner from "../Landing/ThemedBanner";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import ToggleQuickMenu from "../components/ToggleQuickMenu";
import Chatbot from "../components/Chatbot";
import { useScroll, useTransform } from "framer-motion";
import ecart from "../assets/images/ecart.jpg";

// Animation variants for staggered grid items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function Landing() {
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [submitMessage, setSubmitMessage] = useState('');
  const [touchedFields, setTouchedFields] = useState({});
  const navigate = useNavigate();
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "Mini E-Commerce Website",
      category: "Web Application",
      description: "A simple and responsive e-commerce website for small businesses featuring product listings, cart functionality, and user-friendly checkout flow.",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      live: "https://ecartss.netlify.app/",
      caseStudy: "/case-studies/mini-ecommerce",
      gradient: "from-pink-500 to-rose-600",
      stats: {
        features: "8 core",
        users: "100+ shoppers",
        uptime: "99.9%",
        completed: "Launched Q3 2025"
      },
      image: ecart
    },
    {
      title: "Local Business Dashboard",
      category: "Web Application",
      description: "Custom admin dashboard for a local service business with appointment booking and client management.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      live: "https://business-dashboard-demo.vercel.app/",
      caseStudy: "/case-studies/business-dashboard",
      gradient: "from-blue-500 to-purple-600",
      stats: { 
        features: "12 core", 
        users: "50+ active", 
        uptime: "99.8%", 
        completed: "Delivered Q1 2025" 
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "Website Security Audit",
      category: "Cyber Security",
      description: "Comprehensive security assessment and vulnerability remediation for a small business website.",
      tech: ["OWASP", "SSL Labs", "Nmap", "Burp Suite"],
      live: "https://security-audit-demo.example.com/",
      caseStudy: "/case-studies/security-audit",
      gradient: "from-red-500 to-orange-600",
      stats: { 
        vulnerabilities: "18 fixed", 
        score: "From C to A+", 
        report: "45-page deliverable", 
        completed: "Delivered Q1 2025" 
      },
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "Consulting Firm Website",
      category: "Digital Experience",
      description: "Modern website with lead capture forms, blog system, and SEO optimization for a consulting startup.",
      tech: ["Next.js", "Contentful", "Vercel", "Google Analytics"],
      live: "https://consulting-website-demo.vercel.app/",
      caseStudy: "/case-studies/consulting-website",
      gradient: "from-purple-500 to-pink-600",
      stats: { 
        pages: "8 live", 
        traffic: "200% growth", 
        leads: "15 qualified", 
        completed: "Delivered Q1 2025" 
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleImgError = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].image = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";
  };

  // Services options
  const services = [
    { value: "cybersecurity", label: "Cybersecurity Consulting" },
    { value: "software", label: "Custom Software Development" },
    { value: "web_app", label: "Web & Mobile App Development" },
    { value: "digital_transformation", label: "Digital Transformation" },
    { value: "ui_ux", label: "UI/UX Design" },
    { value: "ai_automation", label: "AI-Powered Automation" },
    { value: "cloud_devops", label: "Cloud & DevOps" },
    { value: "penetration_testing", label: "Penetration Testing" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Mark field as touched
    setTouchedFields(prev => ({ ...prev, [name]: true }));
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    handleInputChange({ target: { name: 'service', value: e.target.value } });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission with Web3Forms API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate form
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '04bce140-9632-4d29-bd15-13496445aa19');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('company', formData.company || '');
    formDataToSend.append('service', selectedService || '');
    formDataToSend.append('message', formData.message);
    formDataToSend.append('replyto', 'Uxinityofficial@gmail.com');
    formDataToSend.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully! We\'ll get back to you within 24-48 hours.');
        
        // Reset form
        setFormData({ name: '', email: '', company: '', message: '' });
        setSelectedService('');
        setFormErrors({});
        setTouchedFields({});
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide error messages after 5 seconds
  useEffect(() => {
    if (submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus, submitMessage]);

  // Chatbot component
  return (
    <>
      <Chatbot />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      >
        {/* Banner */}
        <ThemedBanner />

        {/* Services Slides */}
        <motion.div
          className="mt-16 md:mt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ServiceSlide />
        </motion.div>

        {/* Testimonials */}
        <TestimonialsRotator />

        {/* About Section */}
        <section id="about" className="py-28 md:py-36 px-6 bg-white">
          <motion.div
            className="max-w-7xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="tracking-[0.3em] text-sm md:text-base text-gray-600 font-roboto-mono uppercase">
              About UXinity
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight font-roboto-condensed mt-3 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
              Discover Our Passion for Crafting Exceptional Digital Experiences
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              At UXinity, we blend creativity, technology, and user-focused design to build solutions that inspire and empower businesses worldwide.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Our Mission",
                desc: "Our mission is to revolutionize digital experiences by prioritizing human-centered design. We strive to create intuitive, accessible, and impactful solutions that resonate with users and drive business success.",
              },
              {
                title: "What We Do",
                desc: "We specialize in crafting responsive web designs, full-stack applications, and cloud-native platforms. Our solutions are tailored to meet your unique business goals, ensuring scalability, performance, and user satisfaction.",
              },
              {
                title: "Why We're Different",
                desc: "Our collaborative approach combines cutting-edge technology with a deep understanding of user needs. We prioritize innovation, transparency, and measurable results, setting us apart in delivering transformative digital solutions.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="border border-gray-300 p-8 bg-white/90 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                <h3 className="text-3xl font-bold font-roboto-condensed text-black">{item.title}</h3>
                <p className="text-gray-700 mt-4 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 max-w-7xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-roboto-condensed text-black">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[
                { title: "Innovation", desc: "We push boundaries with creative solutions, leveraging the latest technologies to stay ahead of the curve." },
                { title: "Collaboration", desc: "We work closely with our clients, fostering partnerships built on trust, communication, and shared goals." },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 bg-gray-100 rounded-lg"
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }}
                >
                  <h4 className="text-xl font-semibold text-black">{value.title}</h4>
                  <p className="text-gray-700 mt-2">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-10 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/10 w-fit mx-auto mb-6 project-card"
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              >
                <Sparkles className="h-4 w-4 text-black" />
                <span className="text-sm font-medium text-black uppercase tracking-wide">First Projects</span>
              </motion.div> */}
              <motion.h2 
                className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none font-roboto-condensed"
                style={{ y: yText }}
                whileHover={{ y: -5 }}
              >
                Our Early Work
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mt-4"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                whileHover={{ color: "#000" }}
              >
                Small but meaningful projects from our first clients in Q1 2025. Building our portfolio, one startup at a time.
              </motion.p>
              <div className="mt-6 border-t border-gray-300" />
            </motion.div>

            <style>{`
              .project-card {
                transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                will-change: transform, box-shadow;
                overflow: hidden;
                position: relative;
                border: 1px solid rgba(0,0,0,0.1);
              }
              .project-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(0,0,0,0.02), rgba(0,0,0,0.05));
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 0;
              }
              .project-card:hover::before {
                opacity: 1;
              }
              .tech-tag {
                background: rgba(0,0,0,0.05);
                border: 1px solid rgba(0,0,0,0.1);
                padding: 0.25rem 0.75rem;
                border-radius: 9999px;
                font-size: 0.75rem;
                font-weight: 500;
                transition: all 0.3s ease;
              }
              .tech-tag:hover {
                background: rgba(0,0,0,0.1);
                transform: scale(1.05);
              }
              .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                gap: 1rem;
              }
              .stat-item {
                text-align: center;
                padding: 0.75rem;
                background: rgba(0,0,0,0.02);
                border-radius: 0.5rem;
                border: 1px solid rgba(0,0,0,0.05);
                transition: all 0.3s ease;
                font-size: 0.875rem;
              }
              .stat-item:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
              }
              .image-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2));
                opacity: 0;
                transition: opacity 0.3s ease;
                display: flex;
                align-items: flex-end;
                padding: 2rem;
              }
              .project-card:hover .image-overlay {
                opacity: 1;
              }
              .shimmer {
                position: relative;
                overflow: hidden;
              }
              .shimmer::after {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                transform: skewX(-25deg);
                opacity: 0;
                transition: opacity 0.6s;
              }
              .shimmer:hover::after {
                opacity: 1;
                animation: shimmer 1.5s infinite;
              }
              @keyframes shimmer {
                0% { transform: translateX(-100%) skewX(-25deg); }
                100% { transform: translateX(100%) skewX(-25deg); }
              }
              .button-shimmer {
                position: relative;
                overflow: hidden;
              }
              .button-shimmer::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
                transition: left 0.6s;
              }
              .button-shimmer:hover::before {
                left: 100%;
              }
              .completed-badge {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: rgba(0,128,0,0.1);
                color: #16a34a;
                padding: 0.25rem 0.75rem;
                border-radius: 9999px;
                font-size: 0.75rem;
                font-weight: 600;
                border: 1px solid rgba(22,163,74,0.2);
                z-index: 10;
              }
              .disabled-button {
                text-black/30 cursor-not-allowed;
              }
            `}</style>

            <motion.div
              ref={projectsRef}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="project-card bg-white rounded-2xl overflow-hidden shimmer relative"
                  variants={cardHoverVariants}
                  whileHover="hover"
                >
                  <div className="completed-badge">Completed</div>
                  
                  <div className="relative aspect-[16/9] overflow-hidden group">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      onError={() => handleImgError(index)}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <div className="image-overlay">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="tech-tag text-white/90">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 relative z-10">
                    <motion.p 
                      className="text-xs uppercase tracking-wide text-black/60 mb-2 project-card"
                      whileHover={{ color: "#000" }}
                    >
                      {project.category}
                    </motion.p>
                    
                    <motion.h3 
                      className="text-xl font-semibold text-black mb-3 project-card"
                      whileHover={{ y: -1 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-black/80 mb-4 leading-relaxed text-sm project-card"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    <div className="stats-grid mb-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <motion.div 
                          key={key} 
                          className="stat-item project-card"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="font-bold text-black">{value}</div>
                          <div className="text-black/60 uppercase tracking-wide text-xs">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-black/10 gap-4">
                      {/* <motion.button
                        className={`button-shimmer flex items-center gap-2 font-medium text-sm tech-tag project-card ${
                          project.caseStudy ? "text-black/70 hover:text-black" : "text-black/30 cursor-not-allowed"
                        }`}
                        whileHover={project.caseStudy ? { scale: 1.05, x: 3 } : {}}
                        onClick={project.caseStudy ? () => navigate(project.caseStudy) : undefined}
                        disabled={!project.caseStudy}
                        aria-label={`View case study for ${project.title}`}
                      >
                        <BarChart3 className="h-3 w-3" />
                        Case Study
                      </motion.button> */}
                      
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-shimmer flex items-center gap-2 text-black/70 hover:text-black font-medium text-sm tech-tag project-card"
                          whileHover={{ scale: 1.05, x: 3 }}
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <Link2 className="h-3 w-3" />
                          Live Demo
                        </motion.a>
                      )}
                      
                      <motion.div
                        className="w-8 h-8 bg-black/5 rounded-lg flex items-center justify-center project-card"
                        whileHover={{ 
                          scale: 1.2, 
                          backgroundColor: "rgba(0,0,0,0.1)"
                        }}
                      >
                        <ArrowRight className="h-4 w-4 text-black" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-10 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="tracking-[0.25em] text-xs md:text-sm text-gray-600 font-roboto-mono uppercase">CONNECT</p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none font-roboto-condensed">
                CONTACT
              </h2>
              <div className="mt-6 border-t border-gray-300" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="lg:col-span-1 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="border p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a href="mailto:Uxinityofficial@gmail.com" className="text-lg font-semibold underline hover:text-gray-800 transition-colors">
                    Uxinityofficial@gmail.com
                  </a>
                </div>
                <div className="border p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a href="tel:+919446068542" className="text-lg font-semibold underline hover:text-gray-800 transition-colors">
                    +91 9446068542
                  </a>
                </div>
                <div className="border p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-3">Social</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { href: "https://www.facebook.com/share/1ABSH2corU/", label: "Facebook" },
                      { href: "https://wa.me/919446068542", label: "WhatsApp" },
                      { href: "https://www.instagram.com/uxin_ity?igsh=MW9jYTRqd3NzMmZudg==", label: "Instagram" },
                      { href: "mailto:Uxinityofficial@gmail.com", label: "Email" },
                    ].map((social, idx) => (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="border px-3 py-1 text-sm hover:bg-gray-100 rounded-md"
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        {social.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-2 border p-6 md:p-8 rounded-lg relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-3"
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <p className="text-green-700 font-medium">{submitMessage}</p>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3"
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700">{submitMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <h3 className="text-2xl font-bold">Start a Project</h3>
                <p className="text-gray-600 mt-1">Tell us about your goals and constraints—business first.</p>

                <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value="04bce140-9632-4d29-bd15-13496445aa19" />
                  <input type="hidden" name="replyto" value="Uxinityofficial@gmail.com" />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <motion.input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name *"
                        required
                        className={`border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                          formErrors.name ? "border-red-500 ring-red-500" : ""
                        }`}
                        whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <motion.input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email *"
                        required
                        className={`border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                          formErrors.email ? "border-red-500 ring-red-500" : ""
                        }`}
                        whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <motion.input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company / Organization"
                    className="border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  />

                  <div>
                    <p className="text-xs text-gray-600 mb-2">Select Service</p>
                    <motion.select
                      value={selectedService}
                      onChange={handleServiceChange}
                      className="border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
                      whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </motion.select>
                  </div>

                  <div>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message *"
                      rows={6}
                      className={`border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        formErrors.message ? "border-red-500 ring-red-500" : ""
                      }`}
                      required
                      whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">We usually respond within 24–48 hours. <span className="text-green-600">*</span> Required fields</p>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center gap-2 px-5 py-2 text-sm font-medium border rounded-md transition-all ${
                        isSubmitting
                          ? 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed'
                          : 'bg-black text-white border-black hover:bg-gray-800'
                      }`}
                      whileHover={isSubmitting ? {} : { scale: 1.05, transition: { duration: 0.2 } }}
                      whileTap={isSubmitting ? {} : { scale: 0.95 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Toggle Menu */}
        <ToggleQuickMenu />
      </motion.div>
    </>
  );
}