import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Eye, Users, Zap, CheckCircle, ArrowRight, Mail, Phone, Globe, Server, Smartphone, Cloud, Bot, Settings } from "lucide-react";
import ServiceSlide from "../Landing/ServiceSlide";
import TestimonialsRotator from "../Landing/TestimonialsRotator";
import ThemedBanner from "../Landing/ThemedBanner";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ToggleQuickMenu from "../components/ToggleQuickMenu";
import Loader from "../components/Loader";
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

// Scroll-triggered animation hook
const useInView = (ref) => {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isInView;
};

export default function Landing() {
    useEffect(() => {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500); // show loader for 1.5s
      return () => clearTimeout(timer);
    }, []);
  const [selectedService, setSelectedService] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  // Form validation
  if (loading) return <Loader />; 
  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Simulate form submission
      console.log("Form submitted:", { ...formData, service: selectedService });
      // Reset form or navigate
      e.target.reset();
      setSelectedService("");
      navigate("/thank-you");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Sticky Navigation */}
      {/* <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-roboto-condensed text-black">UXinity</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-black transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav> */}

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
            <p className="tracking-[0.25em] text-xs md:text-sm text-gray-600 font-roboto-mono uppercase">PROJECTS</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none font-roboto-condensed">
              Our Projects
            </h2>
            <div className="mt-6 border-t border-gray-300" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Enterprise App Dashboard",
                desc: "Real-time analytics, role-based access, and clean design system.",
                category: "Web & App",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
              },
              {
                title: "Brand System & Marketing Site",
                desc: "Identity, components, and performance-focused launch pages.",
                category: "Brand",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
              },
              {
                title: "Secure Cloud Platform",
                desc: "Zero-trust, CI/CD, and observability baked into the workflow.",
                category: "Cloud & Security",
                img: "https://images.unsplash.com/photo-1556157381-9713e95fa3c1?q=80&w=1600&auto=format&fit=crop",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                className="border bg-white rounded-lg overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-600 uppercase tracking-wide">{project.category}</p>
                  <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.desc}</p>
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
                    { href: "https://www.linkedin.com", label: "LinkedIn" },
                    { href: "https://x.com", label: "X" },
                    { href: "https://www.instagram.com", label: "Instagram" },
                    { href: "https://github.com", label: "GitHub" },
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
              className="lg:col-span-2 border p-6 md:p-8 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Start a Project</h3>
              <p className="text-gray-600 mt-1">Tell us about your goals and constraints—business first.</p>

              <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <motion.input
                      name="name"
                      placeholder="Your Name"
                      required
                      className={`border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                      whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <motion.input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className={`border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                      whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <motion.input
                  name="company"
                  placeholder="Company / Organization"
                  className="border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                />

                <div>
                  <p className="text-xs text-gray-600 mb-2">Select Service</p>
                  <motion.select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <option value="">Choose a service</option>
                    <option value="cybersecurity">Cybersecurity Consulting</option>
                    <option value="software">Custom Software Development</option>
                    <option value="web_app">Web & Mobile App Development</option>
                    <option value="digital_transformation">Digital Transformation</option>
                    <option value="ui_ux">UI/UX Design</option>
                    <option value="ai_automation">AI-Powered Automation</option>
                    <option value="cloud_devops">Cloud & DevOps</option>
                    <option value="penetration_testing">Penetration Testing</option>
                  </motion.select>
                </div>

                <div>
                  <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className={`border px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-black transition-all ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    required
                    whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs text-gray-600">We usually respond within 24–48 hours.</p>
                  <motion.button
                    type="submit"
                    className="bg-black text-white px-5 py-2 text-sm font-medium border border-black rounded-md"
                    whileHover={{ scale: 1.05, backgroundColor: "#333", transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toggle Menu */}
      <ToggleQuickMenu />

      {/* Footer */}
      {/* <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-roboto-condensed">UXinity</h3>
            <p className="text-sm text-gray-400 mt-2">Crafting exceptional digital experiences since {new Date().getFullYear()}.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="mt-2 flex gap-4">
              {[
                { href: "https://www.linkedin.com", label: "LinkedIn" },
                { href: "https://x.com", label: "X" },
                { href: "https://www.instagram.com", label: "Instagram" },
                { href: "https://github.com", label: "GitHub" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} UXinity. All rights reserved.
        </div>
      </footer> */}
    </motion.div>
  );
}