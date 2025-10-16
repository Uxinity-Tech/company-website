import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ToggleQuickMenu from "../components/ToggleQuickMenu";
// Updated services data with emoji icons (strings)
const services = [
  {
    title: "Web Applications",
    description:
      "We develop robust, scalable web applications using cutting-edge technologies. Our solutions are designed for performance, security, and seamless user experiences, perfect for startups looking to launch MVPs or scale existing platforms.",
    icon: "🌐", // String emoji icon
    tech: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
    features: [
      "Responsive design",
      "API integration",
      "Real-time features",
      "Cloud deployment",
      "Performance optimization"
    ],
    path: "/services/web-applications"
  },
  {
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive interfaces that drive user engagement. We focus on user research, wireframing, and prototyping to deliver designs that not only look great but also convert visitors into loyal customers.",
    icon: "🎨", // String emoji icon
    tech: ["Figma", "Adobe XD", "Framer", "UserTesting", "Hotjar"],
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Design systems",
      "Accessibility compliance",
      "A/B testing"
    ],
    path: "/services/ui-ux-design"
  },
  {
    title: "Cyber Security",
    description:
      "We provide comprehensive security solutions to protect your digital assets. From vulnerability assessments to secure architecture design, we ensure your applications meet the highest security standards.",
    icon: "🔒", // String emoji icon
    tech: ["OAuth", "JWT", "SOC2", "Penetration Testing", "Encryption"],
    features: [
      "Security audits",
      "Threat modeling",
      "Compliance consulting",
      "Secure authentication",
      "Data encryption"
    ],
    path: "/services/cyber-security"
  },
  {
    title: "Digital Strategy",
    description:
      "We help startups craft data-driven strategies for growth. From market analysis to conversion optimization, our approach combines analytics and creativity to drive measurable results.",
    icon: "📈", // String emoji icon
    tech: ["Google Analytics", "Mixpanel", "SEO Tools", "Growth Hacking", "A/B Testing"],
    features: [
      "Market research",
      "Growth roadmaps",
      "Analytics setup",
      "Conversion optimization",
      "Content strategy"
    ],
    path: "/services/digital-strategy"
  },
];

// Navigation paths
const navPaths = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "What We Do", path: "/expertise" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.98 },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { 
    scale: 1.1, 
    transition: { duration: 0.3 } 
  },
};

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceClick = (path) => {
    navigate(path);
  };

  return (
    <section
      id="services"
      className="relative min-h-screen bg-white text-black flex flex-col justify-center items-center py-20 px-4 sm:px-8 lg:px-12 overflow-hidden"
      aria-label="Our Services"
    >
      {/* Content Container */}
      <motion.div
        className="max-w-7xl mx-auto w-full z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
            <span className="text-sm font-medium text-black">Core Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black">
            Our Services
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specializing in web applications, UI/UX design, cybersecurity, and digital strategy for early-stage startups.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-2 mb-16">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:bg-gray-50 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-md group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleServiceClick(service.path)}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
                aria-describedby={`service-${index}-title`}
              >
                {/* Service Icon Background */}
                <motion.div
                  variants={iconVariants}
                  className="relative w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-all duration-300"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon} {/* Now renders as string emoji */}
                  </span>
                </motion.div>

                {/* Content */}
                <h3
                  id={`service-${index}-title`}
                  className="text-xl sm:text-2xl font-semibold mb-4 text-black relative z-10"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed relative z-10 mb-6">
                  {service.description}
                </p>

                {/* Key Features Section */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-black mb-3 flex items-center gap-2">
                    <span>Key Features</span>
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle className="h-4 w-4 text-black flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-gray-500 text-sm">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          And {service.features.length - 3} more features
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {service.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                      +{service.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Learn More Link */}
                <motion.div 
                  className="pt-4 border-t border-gray-200 relative z-10"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.path);
                    }}
                    className="text-black hover:text-gray-800 font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 inline transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Process Timeline Section */}
        <motion.div 
          variants={fadeInUp} 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-black text-center mb-8">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🔍", title: "Discovery", desc: "Research & planning" },
              { icon: "✏️", title: "Design", desc: "Prototyping & validation" },
              { icon: "💻", title: "Development", desc: "Building & testing" },
              { icon: "🚀", title: "Deployment", desc: "Launch & optimization" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="font-semibold text-black mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Breadcrumbs */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4 text-sm text-gray-500"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-gray-400">Navigation:</span>
          {navPaths.map((nav, index) => (
            <Link
              key={nav.path}
              to={nav.path}
              className="hover:text-black transition-colors duration-200 hover:underline"
            >
              {nav.label}
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center relative z-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-black/20"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate('/contact')}
            aria-label="Start Your Project"
          >
            Start Your Project
            <motion.span
              className="group-hover:translate-x-1 transition-transform"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .group:focus {
          outline: 2px solid #000;
          outline-offset: 2px;
        }
      `}</style>
      <ToggleQuickMenu />
    </section>
  );
};

export default Services;