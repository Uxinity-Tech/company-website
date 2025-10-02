import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
// Sample services data with detailed descriptions
const services = [
  {
    title: "Web Development",
    description:
      "We build responsive, high-performance websites and web applications using modern frameworks like React, Next.js, and Node.js. Our solutions are tailored to your business needs, ensuring scalability, security, and seamless user experiences across all devices.",
    icon: "🌐",
  },
  {
    title: "UI/UX Design",
    description:
      "Our human-centered design approach creates intuitive and visually stunning interfaces. From wireframes to pixel-perfect prototypes, we prioritize user experience to craft digital products that engage and delight your audience.",
    icon: "🎨",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of the cloud with our expertise in AWS, Azure, and Google Cloud. We design and deploy scalable, secure, and cost-efficient cloud-native architectures to support your business growth and digital transformation.",
    icon: "☁️",
  },
  {
    title: "Mobile App Development",
    description:
      "We create cross-platform mobile applications with React Native and Flutter, delivering fast, reliable, and engaging apps for iOS and Android. Our apps are optimized for performance and designed to meet your unique business goals.",
    icon: "📱",
  },
  {
    title: "Data Analytics",
    description:
      "Unlock actionable insights with our advanced data analytics services. From data visualization to predictive modeling, we help businesses harness the power of their data to make informed decisions and drive success.",
    icon: "📊",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our comprehensive cybersecurity solutions. We offer vulnerability assessments, penetration testing, and secure development practices to safeguard your applications and data from threats.",
    icon: "🔒",
  },
];

// Animation Variants
const glowVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.1, 0.3, 0.1],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.98 },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { rotate: 10, scale: 1.2, transition: { duration: 0.3 } },
};

const Services = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1500); // show loader for 1.5s
        return () => clearTimeout(timer);
      }, []);
  return (
    <section
      id="services"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white flex flex-col justify-center items-center py-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
      aria-label="Our Services"
    >
      {/* Background Effects */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        variants={glowVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-96 sm:w-[28rem] h-96 sm:h-[28rem] bg-purple-600/15 rounded-full blur-3xl pointer-events-none"
        variants={glowVariants}
        animate="animate"
      />

      {/* Content Container */}
      <motion.div
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We deliver innovative digital solutions that empower businesses to scale, adapt, and thrive in a competitive landscape.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800/40 border border-blue-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-lg hover:bg-gray-800/60 transition-colors duration-300 cursor-pointer overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                role="article"
                aria-labelledby={`service-${index}-title`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className="text-5xl sm:text-6xl text-blue-400 mb-6"
                  aria-hidden="true"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3
                  id={`service-${index}-title`}
                  className="text-xl sm:text-2xl font-semibold mb-4 text-white"
                >
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Get Started with Our Services"
          >
            Get Started
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;