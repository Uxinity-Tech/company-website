import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Zap, 
  Palette, 
  TrendingUp,
  Code,
  Users,
  Clock,
  Lightbulb,
  Target,
  Rocket,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ToggleQuickMenu from "../components/ToggleQuickMenu";

// Complete services data
const services = [
  {
    id: "web",
    title: "Web Applications",
    description: "We build scalable web applications from the ground up, using modern tech stacks that grow with your startup",
    icon: Code,
    gradient: "from-blue-600 to-indigo-700",
    approach: [
      "Technical discovery & architecture planning",
      "MVP development with rapid iteration",
      "Scalable cloud infrastructure setup",
      "Performance optimization from day one"
    ],
    path: "/services/web-applications"
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "User-centered design that validates ideas quickly and converts visitors into customers",
    icon: Palette,
    gradient: "from-pink-600 to-rose-600",
    approach: [
      "User research & persona development",
      "Rapid prototyping & validation",
      "Design systems for future scalability",
      "Conversion-focused interface design"
    ],
    path: "/services/ui-ux-design"
  },
  {
    id: "security",
    title: "Cyber Security",
    description: "Security built-in from the start to protect your startup's most valuable assets",
    icon: Shield,
    gradient: "from-green-600 to-teal-700",
    approach: [
      "Security-first architecture design",
      "Vulnerability assessments & audits",
      "Compliance roadmap planning",
      "Secure development practices"
    ],
    path: "/services/cyber-security"
  },
  {
    id: "strategy",
    title: "Digital Strategy",
    description: "Data-driven growth strategies tailored for early-stage startups",
    icon: TrendingUp,
    gradient: "from-orange-600 to-red-600",
    approach: [
      "Market analysis & competitive research",
      "Growth roadmap development",
      "Customer acquisition strategies",
      "Metrics & analytics setup"
    ],
    path: "/services/digital-strategy"
  }
];

const processSteps = [
  { 
    icon: Lightbulb, 
    title: "Discovery", 
    desc: "We start by deeply understanding your vision, goals, and challenges",
    details: "Market research, competitor analysis, technical discovery"
  },
  { 
    icon: Target, 
    title: "Strategy", 
    desc: "We craft a tailored roadmap with clear milestones and success metrics",
    details: "MVP planning, tech stack selection, growth strategy"
  },
  { 
    icon: Code, 
    title: "Build", 
    desc: "We develop with agile methodology, delivering working software early",
    details: "Rapid prototyping, continuous integration, quality assurance"
  },
  { 
    icon: Rocket, 
    title: "Launch", 
    desc: "We help you launch successfully and scale with confidence",
    details: "Deployment, monitoring, optimization, support"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerList = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

// Custom hook for scroll animations
const useScrollAnimation = (options = {}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    ...options,
  });

  return { ref, inView };
};

const ServiceCard = ({ service, inView, onClick }) => {
  const cardRef = useRef(null);
  const listRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:bg-gray-50 transition-colors duration-300 cursor-pointer shadow-sm hover:shadow-xl overflow-hidden"
      onClick={() => onClick(service.path)}
      role="button"
      tabIndex={0}
    >
      {/* Animated background gradient */}
      <motion.div 
        className={`absolute inset-0 ${service.gradient} opacity-0 pointer-events-none`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.03 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon container */}
      <motion.div 
        className="relative z-10 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div 
          className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          whileHover={{ scale: 1.1 }}
        >
          <service.icon className="w-8 h-8 text-white drop-shadow-md" />
        </motion.div>
      </motion.div>

      <motion.h3 
        variants={fadeInUp}
        className="text-2xl font-bold text-black mb-4"
        transition={{ delay: inView ? 0.1 : 0 }}
      >
        {service.title}
      </motion.h3>
      
      <motion.p 
        variants={fadeInUp}
        className="text-gray-600 mb-6 leading-relaxed"
        transition={{ delay: inView ? 0.2 : 0 }}
      >
        {service.description}
      </motion.p>

      {/* Approach list */}
      <motion.div 
        ref={listRef}
        variants={staggerList}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-6"
      >
        <motion.h4 
          variants={fadeInUp}
          className="font-semibold text-black mb-4 flex items-center gap-2"
          transition={{ delay: inView ? 0.3 : 0 }}
        >
          <Lightbulb className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          Our Approach
        </motion.h4>
        
        <AnimatePresence>
          {service.approach.slice(0, 3).map((item, index) => (
            <motion.li
              key={`${service.id}-approach-${index}`}
              variants={listItem}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: -20 }}
              className="flex items-start gap-3 text-sm text-gray-700 mb-2"
              transition={{ delay: inView ? 0.4 + index * 0.05 : 0 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: inView ? 0.5 + index * 0.05 : 0, 
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              </motion.div>
              <span>{item}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <motion.button 
        className="flex items-center gap-2 text-black font-semibold hover:text-gray-800 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Learn Our Process
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

const ProcessStep = ({ step, index, inView }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative"
      transition={{ delay: index * 0.1 }}
    >
      <motion.div 
        className="text-center mb-6"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div 
          className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:border-blue-500 transition-all duration-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          whileHover={{ scale: 1.05 }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1
          }}
        >
          <step.icon className="w-10 h-10 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
        </motion.div>
        <motion.h3 
          variants={fadeInUp}
          className="font-bold text-black mb-2"
          transition={{ delay: 0.1 }}
        >
          {step.title}
        </motion.h3>
      </motion.div>
      
      <motion.div 
        variants={fadeInUp}
        className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
        whileHover={{ 
          scale: 1.02,
          backgroundColor: "#f9fafb",
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <motion.p 
          className="text-gray-600 mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {step.desc}
        </motion.p>
        <p className="text-sm text-gray-500">{step.details}</p>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const navigate = useNavigate();
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation();
  const { ref: processRef, inView: processInView } = useScrollAnimation();
  const { ref: trustRef, inView: trustInView } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <section className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden mt-8">
      <div className="max-w-6xl mx-auto relative">
        {/* Floating particles background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-gray-300 rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Header */}
        <motion.div 
          ref={heroRef}
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-8 max-w-max mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Specialized for Startups</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6"
            transition={{ delay: 0.2 }}
          >
            We Build Startups That Scale
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            transition={{ delay: 0.3 }}
          >
            Partner with our expert team to transform your idea into a production-ready product. 
            We focus on rapid development, proven processes, and startup-friendly pricing.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-black text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all border border-black"
              transition={{ type: "spring", stiffness: 400 }}
            >
              Start Your Project
            </motion.button>
            <Link 
              to="/about" 
              className="px-6 py-4 text-black font-semibold border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Our Expertise
            </Link>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              inView={servicesInView}
              onClick={handleServiceClick}
            />
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.section 
          ref={processRef}
          variants={containerVariants}
          initial="hidden"
          animate={processInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
            transition={{ delay: 0.1 }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl font-bold text-black mb-4"
              transition={{ delay: 0.2 }}
            >
              Our Proven Process
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              transition={{ delay: 0.3 }}
            >
              We follow a battle-tested methodology that de-risks development and maximizes your chances of success
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={step}
                index={index}
                inView={processInView}
              />
            ))}
          </div>
        </motion.section>

        {/* Trust Section */}
        <motion.section 
          ref={trustRef}
          variants={containerVariants}
          initial="hidden"
          animate={trustInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold text-black mb-8"
            transition={{ delay: 0.1 }}
          >
            Why Startups Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Startup-First Approach",
                desc: "We understand bootstrapping, pivots, and rapid iteration"
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                desc: "MVP in 4-8 weeks with production-ready quality"
              },
              {
                icon: TrendingUp,
                title: "Scalable Solutions",
                desc: "Built to grow from 1 user to 1 million users"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 group"
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300"
                >
                  <item.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <motion.h3 
                  variants={fadeInUp}
                  className="font-semibold text-black mb-2"
                  transition={{ delay: 0.1 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  variants={fadeInUp}
                  className="text-gray-600"
                  transition={{ delay: 0.2 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="text-4xl font-bold text-black mb-6"
            transition={{ duration: 0.5 }}
          >
            Ready to Build Your Startup?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss your vision and create a custom plan that fits your budget and timeline
          </motion.p>
         <a href="/consultation">
  <motion.button
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
    }}
    whileTap={{ scale: 0.95 }}
    className="px-10 py-4 bg-black text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all border border-black text-lg"
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    Book Free Consultation
    <ArrowRight className="inline ml-2 w-5 h-5" />
  </motion.button>
</a>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 text-sm text-gray-500"
          >
            No commitment. Just expert advice for your startup journey.
          </motion.p>
        </motion.div>
      </div>

      <ToggleQuickMenu />
    </section>
  );
};

export default Services;