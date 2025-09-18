import React from "react";
import { motion } from "framer-motion";

// Import your images (use placeholders for missing images)
import mission from "../assets/images/mission.png";
import choose from "../assets/images/choose.png";
import vision from "../assets/images/vision.png";
import img4 from "../assets/images/img4.jpg";
import whyy from "../assets/images/whyy.jpg";
import Teams from "../assets/images/Teams.jpg";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, rotate: 5 },
  visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.7, ease: "easeOut" } },
  hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const circleVariants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.1, 0.3, 0.1],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: { scale: 1.1, boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)", transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const About = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-950 to-purple-900 text-white font-poppins px-4 sm:px-8 lg:px-12 py-16 relative overflow-hidden"
      aria-label="About Us Section"
    >
      {/* Background animated circles */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl"
        variants={circleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"
        variants={circleVariants}
        animate="animate"
      />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            variants={headingVariants}
          >
            About <span>UXinity</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Discover our story, our passion, and what sets us apart in the digital world.
          </motion.p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 bg-blue-950/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-blue-500/20"
            variants={cardVariants}
            whileHover="hover"
            role="region"
            aria-labelledby="mission-heading"
          >
            <h3 id="mission-heading" className="text-3xl font-bold text-blue-300 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              We strive to redefine digital experiences with human-centered design and cutting-edge technology, delivering impactful software solutions.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src={mission}
              alt="Our Mission"
              className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover h-80"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* What We Do */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 bg-blue-950/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-blue-500/20"
            variants={cardVariants}
            whileHover="hover"
            role="region"
            aria-labelledby="services-heading"
          >
            <h3 id="services-heading" className="text-3xl font-bold text-blue-300 mb-4">
              What We Do
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              We craft responsive web designs, full-stack applications, and cloud-native platforms tailored to your business needs.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src={choose}
              alt="Our Services"
              className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover h-80"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 bg-blue-950/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-blue-500/20"
            variants={cardVariants}
            whileHover="hover"
            role="region"
            aria-labelledby="vision-heading"
          >
            <h3 id="vision-heading" className="text-3xl font-bold text-blue-300 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              To lead global digital innovation by transforming ideas into sustainable, powerful solutions that empower businesses and enhance lives.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src={vision}
              alt="Our Vision"
              className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover h-80"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 bg-blue-950/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-blue-500/20"
            variants={cardVariants}
            whileHover="hover"
            role="region"
            aria-labelledby="values-heading"
          >
            <h3 id="values-heading" className="text-3xl font-bold text-blue-300 mb-4">
              Our Core Values
            </h3>
            <motion.ul
              className="list-none space-y-3 text-lg text-gray-200"
              variants={containerVariants}
            >
              {[
                "✨ Integrity in every decision",
                "🤝 Collaboration for innovation",
                "🌍 Sustainability and responsibility",
                "🚀 Excellence in execution",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItemVariants}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-blue-400">{item.split(" ")[0]}</span>
                  <span>{item.slice(item.indexOf(" ") + 1)}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src={img4}
              alt="Our Core Values"
              className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover h-80"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 bg-blue-950/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-blue-500/20"
            variants={cardVariants}
            whileHover="hover"
            role="region"
            aria-labelledby="choose-heading"
          >
            <h3 id="choose-heading" className="text-3xl font-bold text-blue-300 mb-4">
              Why Choose Us
            </h3>
            <motion.ul
              className="list-none space-y-3 text-lg text-gray-200"
              variants={containerVariants}
            >
              {[
                "💡 Creative UI/UX design",
                "🚀 Fast, secure development",
                "🔧 Tailored solutions",
                "📞 Dedicated support",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItemVariants}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-blue-400">{item.split(" ")[0]}</span>
                  <span>{item.slice(item.indexOf(" ") + 1)}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src={whyy}
              alt="Why Choose Us"
              className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover h-80"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          className="flex flex-col lg:flex-row-reverse items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 bg-blue-950/60 p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-blue-500/20"
            variants={cardVariants}
            whileHover="hover"
            role="region"
            aria-labelledby="team-heading"
          >
            <h3 id="team-heading" className="text-3xl font-bold text-blue-300 mb-4">
              Meet Our Team
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our team of designers, developers, and innovators blends creativity and expertise to deliver exceptional solutions.
            </p>
          </motion.div>
          <motion.div
            className="flex-1 relative"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src={Teams}
              alt="Our Team"
              className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover h-80"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Build With Us?
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto">
            Let’s transform your ideas into innovative digital solutions that drive success.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Contact Us"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;