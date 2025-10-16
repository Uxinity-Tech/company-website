import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Code, 
  Zap, 
  BarChart3, 
  Sparkles, 
  Layout, 
  TrendingUp, 
  Shield,
  Eye,
  Link2,
  Monitor,
  Smartphone
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ToggleQuickMenu from "../components/ToggleQuickMenu";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const projectsRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    // Small completed project - first client work
    {
      title: "Local Business Dashboard",
      category: "Web Application",
      description: "Custom admin dashboard for a local service business with appointment booking and client management.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      live: "",
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
    // Small UI/UX project
    {
      title: "E-commerce Landing Pages",
      category: "UI/UX Design",
      description: "Responsive landing pages and checkout flow redesign for a small online store.",
      tech: ["Figma", "Webflow", "Tailwind CSS"],
      live: "",
      caseStudy: "/case-studies/ecommerce-landing",
      gradient: "from-green-500 to-emerald-600",
      stats: { 
        pages: "5 designed", 
        conversions: "+25% A/B test", 
        devices: "Mobile-first", 
        completed: "Delivered Q1 2025" 
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
    },
    // Security audit project
    {
      title: "Website Security Audit",
      category: "Cyber Security",
      description: "Comprehensive security assessment and vulnerability remediation for a small business website.",
      tech: ["OWASP", "SSL Labs", "Nmap", "Burp Suite"],
      live: "",
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
    // Digital marketing site
    {
      title: "Consulting Firm Website",
      category: "Digital Experience",
      description: "Modern website with lead capture forms, blog system, and SEO optimization for a consulting startup.",
      tech: ["Next.js", "Contentful", "Vercel", "Google Analytics"],
      live: "",
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const handleImgError = (index) => {
    const newImages = [...projects.map(p => p.image || '')];
    newImages[index] = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";
    // Update projects with fallback image
    const updatedProjects = [...projects];
    updatedProjects[index].image = newImages[index];
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
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
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/10 w-fit mx-auto mb-6 project-card"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
            >
              <Sparkles className="h-4 w-4 text-black" />
              <span className="text-sm font-medium text-black uppercase tracking-wide">First Projects</span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-black leading-tight"
              style={{ y: yText }}
              whileHover={{ y: -5 }}
            >
              Our Early Work
            </motion.h1>
            <motion.p 
              className="text-xl text-black/70 max-w-3xl mx-auto mt-4"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              whileHover={{ color: "#000" }}
            >
              Small but meaningful projects from our first clients in Q1 2025. Building our portfolio, one startup at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
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

                  <div className="flex items-center justify-between pt-4 border-t border-black/10">
                    <motion.button
                      className="button-shimmer flex items-center gap-2 text-black/70 hover:text-black font-medium text-sm tech-tag project-card"
                      whileHover={{ scale: 1.05, x: 3 }}
                      onClick={() => navigate(project.caseStudy)}
                    >
                      <BarChart3 className="h-3 w-3" />
                      Case Study
                    </motion.button>
                    
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

      {/* Services Teaser Section */}
      <section className="py-20 px-6 bg-black/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-4">What We Do</h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Specializing in web applications, digital experiences, cyber security, and UI/UX design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Monitor, title: "Web Apps", desc: "Full-stack development" },
              { icon: Smartphone, title: "UI/UX", desc: "User-centered design" },
              { icon: Shield, title: "Cyber Security", desc: "Secure systems" },
              { icon: Zap, title: "Digital", desc: "Interactive experiences" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-black/10 project-card"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-12 h-12 bg-black mx-auto mb-4 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="font-semibold text-black mb-2">{service.title}</h3>
                <p className="text-black/60 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-4">Our Delivery Process</h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              How we successfully delivered our first projects
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-black/20 h-full z-0"></div>
            <div className="space-y-12">
              {[
                { step: "Discovery", title: "Research & Planning", icon: Zap, desc: "Client interviews, requirements gathering, technical scoping" },
                { step: "Design", title: "Prototyping", icon: Layout, desc: "Wireframes, design systems, security planning" },
                { step: "Build", title: "Development", icon: Code, desc: "Agile sprints, security implementation, testing" },
                { step: "Launch", title: "Deployment", icon: TrendingUp, desc: "Production deployment, training, ongoing support" }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  className={`flex items-center ${index % 2 ? 'flex-row-reverse justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-5/12 p-6 rounded-2xl border border-black/10 bg-white project-card ${index % 2 ? 'ml-auto mr-12' : 'mr-auto ml-12'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div 
                        className="w-10 h-10 bg-black rounded-full flex items-center justify-center project-card"
                        whileHover={{ scale: 1.1 }}
                      >
                        <phase.icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-black">{phase.title}</h3>
                        <p className="text-sm text-black/60">{phase.step}</p>
                      </div>
                    </div>
                    <p className="text-black/80 text-sm">{phase.desc}</p>
                  </div>
                  <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center z-10 relative">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for Your Project?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              We've successfully delivered our first projects. Let's build yours next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/consultation">
              <motion.button
                className="button-shimmer bg-white text-black font-semibold py-4 px-8 rounded-lg project-card"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 35px rgba(255,255,255,0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/contact')}
              >
                Start Project
              </motion.button>
              </a>
              <motion.button 
                className="button-shimmer border border-white/30 text-white py-4 px-8 rounded-lg project-card"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <ToggleQuickMenu />
    </div>
  );
}