import {React} from 'react';
import { motion, useScroll,AnimatePresence, useTransform } from 'framer-motion';
import right from '../assets/images/right.jpg';
import video from '../assets/video/video.mp4';
import mission from "../assets/images/mission.png"
import choose from "../assets/images/choose.png"
import vision from "../assets/images/vision.png"
import { FaCode, FaMobileAlt, FaSync,FaEnvelope ,FaPhoneAlt,FaMapMarkerAlt, FaPencilRuler, FaRobot, FaCloud,FaRocket, FaUsersCog, FaCogs, FaShieldAlt } from "react-icons/fa";
import { useState } from 'react';
const Home = () => {
  const { scrollY } = useScroll();

  // Parallax for video background (responsive adjustments)
  const bgY = useTransform(scrollY, [0, window.innerWidth < 768 ? 500 : 800], [0, window.innerWidth < 768 ? 50 : 120]);
  const bgScale = useTransform(scrollY, [0, window.innerWidth < 768 ? 500 : 800], [1, window.innerWidth < 768 ? 1.04 : 1.08]);
  const bgOpacity = useTransform(scrollY, [0, window.innerWidth < 768 ? 500 : 800], [1, window.innerWidth < 768 ? 0.9 : 0.85]);

  // Parallax for overlay
  const overlayOpacity = useTransform(scrollY, [0, window.innerWidth < 768 ? 500 : 800], [0.5, window.innerWidth < 768 ? 0.4 : 0.3]);
  const overlayScale = useTransform(scrollY, [0, window.innerWidth < 768 ? 500 : 800], [1, window.innerWidth < 768 ? 1.01 : 1.02]);

  // Parallax for content
  const contentY = useTransform(scrollY, [0, window.innerWidth < 768 ? 300 : 400], [0, window.innerWidth < 768 ? -10 : -20]);
  const contentOpacity = useTransform(scrollY, [0, window.innerWidth < 768 ? 300 : 400], [1, window.innerWidth < 768 ? 0.97 : 0.95]);

  const containerVariants ={
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
}

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, rotate: -5, scale: 0.9 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1], type: 'spring', stiffness: 80, damping: 20 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  };

  const primaryButtonVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: '#2563eb',
      boxShadow: '0 12px 24px rgba(37, 99, 235, 0.3)',
      transition: { scale: { duration: 0.3 }, backgroundColor: { duration: 0.3 }, boxShadow: { duration: 0.3 } },
    },
    tap: { scale: 0.95 },
  };

  const secondaryButtonVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: '#1e293b',
      color: '#60a5fa',
      borderColor: '#60a5fa',
      transition: { scale: { duration: 0.3 } },
    },
    tap: { scale: 0.95 },
  };

  const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

 const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    scale: 1.03,
    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  };

  const circleVariants = {
    animate: { scale: [1, 1.05, 1], opacity: [0.2, 0.25, 0.2], transition: { duration: 6, repeat: Infinity } },
  };
const glowVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.1, 0.2, 0.1],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};
const iconVariants = {
  hidden: { scale: 0, rotate: -10 },
  visible: { scale: 1, rotate: 0, transition: { duration: 0.4, ease: "easeOut" } },
  hover: { rotate: 5, transition: { duration: 0.3 } },
};
const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};
  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - radius;
    const y = e.clientY - rect.top - radius;
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'absolute bg-blue-500/30 rounded-full scale-0 animate-ripple pointer-events-none';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleButtonClick(e);
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring', stiffness: 100 } },
  };

  const aboutImgY = useTransform(scrollY, [600, 1000], [0, window.innerWidth < 768 ? -15 : -30]);

  const stats = [
    // { value: '10K+', label: 'Users Empowered' },
    // { value: '500+', label: 'Projects Launched' },
    // { value: '99.9%', label: 'Uptime Guaranteed' },
  ];

  const headingText = 'Innovate Boldly. Scale Swiftly.'.split('');
  // Service 
const services = [
  {
    icon: <FaCode className="text-4xl text-blue-400" />,
    title: "Custom Software Development",
    description: "Tailored software solutions that scale with your business, ensuring high performance and security."
  },
  {
    icon: <FaMobileAlt className="text-4xl text-blue-400" />,
    title: "Web & Mobile App Development",
    description: "Responsive and user-friendly applications built with modern frameworks for any platform."
  },
  {
    icon: <FaSync className="text-4xl text-blue-400" />,
    title: "Digital Transformation",
    description: "Helping businesses integrate the latest technologies to streamline operations and boost growth."
  },
  {
    icon: <FaPencilRuler className="text-4xl text-blue-400" />,
    title: "UI/UX Design",
    description: "Creating intuitive, visually appealing interfaces that deliver a smooth user experience."
  },
  {
    icon: <FaRobot className="text-4xl text-blue-400" />,
    title: "AI-Powered Automation",
    description: "Implementing AI solutions that automate workflows and improve decision-making processes."
  },
  {
    icon: <FaCloud className="text-4xl text-blue-400" />,
    title: "Cloud & DevOps",
    description: "Reliable cloud infrastructure and DevOps practices for faster deployment and higher uptime."
  }
];
const advantages = [
  {
    icon: <FaRocket />,
    title: "Rapid Innovation",
    description: "We harness cutting-edge technologies to deliver innovative solutions that keep you ahead of the curve.",
  },
  {
    icon: <FaUsersCog />,
    title: "Unmatched Support",
    description: "Our dedicated in-house team provides 24/7 support, ensuring your success every step of the way.",
  },
  {
    icon: <FaCogs />,
    title: "Swift Delivery",
    description: "Streamlined processes and agile methodologies guarantee fast, reliable project delivery without compromise.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Ironclad Security",
    description: "Enterprise-grade security protocols safeguard your data and ensure compliance with industry standards.",
  },
];
//  const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };

 const [status, setStatus] = useState(""); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      e.target.reset();

      // Hide success message after 4 seconds
      setTimeout(() => setStatus(""), 4000);
    } else {
      setStatus("error");

      // Hide error message after 4 seconds
      setTimeout(() => setStatus(""), 4000);
    }
  };
  return (
    <>
      <section className="min-h-screen relative text-white overflow-hidden" aria-label="Home Hero Section">
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity, scale: overlayScale }}
          />
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
            variants={circleVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
            variants={circleVariants}
            animate="animate"
          />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-center justify-between relative z-10"
          style={{ y: contentY, opacity: contentOpacity }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 max-w-lg space-y-6 text-center md:text-left"
            variants={containerVariants}
          >
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide" variants={headingVariants}>
              {headingText.map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed" variants={itemVariants}>
              Unleash your potential with cutting-edge solutions designed for rapid growth and seamless innovation.
            </motion.p>
         
            <motion.div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4" variants={itemVariants}>
             <a href='/about'>
              <motion.button
                className="relative bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold shadow-lg focus:ring-4 focus:ring-blue-400 overflow-hidden"
                variants={primaryButtonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                onClick={handleButtonClick}
                onKeyDown={handleKeyDown}
                aria-label="Start Now"
              >
                Start Now
              </motion.button>
              </a>
              <a href="/services">
              <motion.button
                className="relative bg-transparent border-2 border-blue-400 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold overflow-hidden"
                variants={secondaryButtonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
                onClick={handleButtonClick}
                onKeyDown={handleKeyDown}
                aria-label="Explore More"
              >
                Explore More
              </motion.button>
              </a>
            </motion.div>

            <motion.div className="mt-8 grid grid-cols-3 gap-4 text-center" variants={containerVariants}>
              {stats.map((stat, i) => (
                <motion.div key={i} className="space-y-1" variants={statVariants}>
                  <p className="text-xl sm:text-2xl font-bold text-blue-400">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 mt-8 md:mt-0 flex justify-center md:justify-end"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ y: aboutImgY }}
          >
            <div className="relative group">
               <img
    src={right}
    alt="Hero Illustration"
    className="w-[380px] sm:w-[420px] md:w-[480px] lg:w-[520px] object-contain rounded-2xl shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
    loading="lazy"
  />
  <motion.div
    className="absolute inset-0 border-4 border-blue-400 opacity-50 rounded-2xl transform -rotate-3 scale-105"
    whileHover={{ rotate: 3, opacity: 0.8 }}
    transition={{ duration: 0.4 }}
  />
            </div>
          </motion.div>
        </motion.div>

        <style>{`
          .animate-ripple {
            animation: ripple 0.6s linear;
          }
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}</style>
      </section>

      <section 
        className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-950 text-white font-poppins px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden"
        aria-label="About Us Section"
      >
        <motion.div
          className="absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-blue-400 opacity-15 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"
          variants={circleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-indigo-500 opacity-15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
          variants={circleVariants}
          animate="animate"
        />

        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              variants={headingVariants}
            >
              {'About '}
              <span className="text-blue-400">UXinity</span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Learn who we are, what we do, and why we’re different.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-1 bg-blue-950/50 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4">Our Mission</h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We aim to revolutionize digital experiences through human-centered design and powerful technology.
                Our mission is to deliver meaningful software solutions that create impact.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 relative"
              variants={imageVariants}
              style={{ y: aboutImgY }}
            >
              <img
                src={mission}
                alt="Our Mission"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-md mx-auto md:mx-0 rounded-2xl shadow-2xl object-cover h-64 sm:h-80 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 border-4 border-blue-400/30 rounded-2xl -rotate-2"
                whileHover={{ rotate: 2, opacity: 0.7 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-1 bg-blue-950/50 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4">What We Do</h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                From responsive web design to full-stack applications and cloud-native platforms, we craft scalable digital solutions tailored to your business goals.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 relative"
              variants={imageVariants}
              style={{ y: aboutImgY }}
            >
              <img
                src={choose}
                alt="Our Services"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-md mx-auto md:mx-0 rounded-2xl shadow-2xl object-cover h-64 sm:h-80 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 border-4 border-blue-400/30 rounded-2xl -rotate-2"
                whileHover={{ rotate: 2, opacity: 0.7 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex-1 bg-blue-950/50 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-sm"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4">Why Choose Us</h3>
              <motion.ul
                className="list-disc list-inside space-y-3 text-base sm:text-lg text-gray-300"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  '💡 Creative, modern UI/UX focused design',
                  '🚀 Fast, secure & scalable development',
                  '🔧 Custom solutions tailored to your needs',
                  '📞 Support that actually supports you',
                ].map((item, i) => (
                  <motion.li key={i} variants={listItemVariants} transition={{ delay: i * 0.1 }}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              className="flex-1 relative"
              variants={imageVariants}
              style={{ y: aboutImgY }}
            >
              <img
                src={vision}
                alt="Why Choose Us"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-md mx-auto md:mx-0 rounded-2xl shadow-2xl object-cover h-64 sm:h-80 transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 border-4 border-blue-400/30 rounded-2xl -rotate-2"
                whileHover={{ rotate: 2, opacity: 0.7 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
<section
      id="services"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center py-20 px-6 overflow-hidden"
      aria-label="Our Services"
    >
      {/* Background Effects */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 pointer-events-none"
        variants={glowVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"
        variants={glowVariants}
        animate="animate"
      />

      {/* Content Container */}
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expertise</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with innovative digital solutions designed to scale, adapt, and inspire.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800/30 border border-blue-500/20 rounded-xl p-6 sm:p-8 backdrop-blur-lg hover:bg-gray-800/50 transition-colors duration-300 cursor-pointer overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <motion.div variants={iconVariants} className="text-5xl text-blue-400 mb-6">
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
 
 <section
  id="why-choose-us"
  className="relative min-h-screen bg-gradient-to-b from-blue-900 to-indigo-950 text-white py-28 px-6 sm:px-12 lg:px-20 font-sans overflow-hidden"
  aria-label="Why Choose Us"
>
  {/* Background Effects */}
  <motion.div
    className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-pink-500/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none"
    variants={glowVariants}
    animate="animate"
  />
  <motion.div
    className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-pink-300/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"
    variants={glowVariants}
    animate="animate"
  />

  {/* Content Container */}
  <motion.div
    className="max-w-7xl mx-auto"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Header */}
    <motion.div variants={titleVariants} className="text-center mb-20">
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Why Choose Us
      </h2>
      <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Discover the difference with our commitment to excellence, speed, and trust.
      </p>
    </motion.div>

    {/* Advantage Cards Grid */}
    <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 relative z-10">
      <AnimatePresence>
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            className="relative bg-white/5 border border-pink-500/20 rounded-full p-8 aspect-square flex flex-col items-center justify-center text-center backdrop-blur-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Card Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 hover:opacity-100 rounded-full transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />

            {/* Icon */}
            <motion.div
              variants={iconVariants}
              className="text-5xl sm:text-6xl text-blue-500 mb-6"
            >
              {advantage.icon}
            </motion.div>

            {/* Content */}
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-white tracking-tight">
              {advantage.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-[80%]">
              {advantage.description}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

    {/* CTA Section */}
    <motion.div
      className="mt-32 text-center relative z-20"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400 mb-6">
        Ready to Work With Us?
      </h3>
      <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg sm:text-xl leading-relaxed">
        Let’s bring your vision to life with our expertise, creativity, and commitment to excellence.
      </p>
      <a href="/contact" >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-400 hover:to-blue-400 shadow-lg shadow-pink-500/30 transition-all duration-300"
      >
        Get Started Now
      </motion.button>
      </a>
    </motion.div>
  </motion.div>
</section>

        
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),transparent)] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.2),transparent)] rounded-full blur-3xl"></div>

      {/* Section Heading */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Contact Us
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Get in touch with us for any questions, collaborations, or support.
        </p>
      </motion.div>

      {/* Contact & Form Layout */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        
        {/* Left: Contact Info + Map */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div className="bg-white/5 border border-blue-500/20 p-6 rounded-2xl backdrop-blur-lg hover:bg-white/10 transition">
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <span className="text-gray-300">Uxinityofficial@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-blue-400 text-2xl" />
              <span className="text-gray-300">+91 9446068542</span>
            </div>
            {/* <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-400 text-2xl" />
              <span className="text-gray-300">123 Business Street</span>
            </div> */}
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-blue-500/20">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193082358796!2d144.95565131568667!3d-37.81720987975112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f3b9b1%3A0x2e7d0a5a5f5c1d9b!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1633072852405!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-lg space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="access_key" value="04bce140-9632-4d29-bd15-13496445aa19" />

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-black/20 border border-blue-500/20 focus:outline-none focus:border-blue-400 text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-black/20 border border-blue-500/20 focus:outline-none focus:border-blue-400 text-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-black/20 border border-blue-500/20 focus:outline-none focus:border-blue-400 text-white"
            ></textarea>
          </div>

          {/* Honeypot */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "sending"}
            className={`w-full py-3 rounded-lg font-bold text-lg text-white shadow-lg transition ${
              status === "sending"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-400 to-purple-400 shadow-blue-500/20"
            }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-center font-medium mt-3">
              ✅ Message Sent Successfully! We will get back to you soon.
            </p>
            
          )}
          {status === "error" && (
            <p className="text-red-400 text-center font-medium mt-3">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
    </>
  );
};

export default Home;