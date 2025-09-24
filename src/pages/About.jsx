import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, Settings, Shield } from "lucide-react";
import ToggleQuickMenu from "../components/ToggleQuickMenu";

// Stagger container animation for child elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Child animation for staggered effect
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Card hover and tap animation
const cardVariants = {
  rest: { scale: 1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.98 },
};

export default function AboutPage() {
  const sectionRef = useRef(null);

  // Parallax effect for images
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yImage1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-white"
    >
      <style>{`
        .uxinity-highlight {
          position: relative;
          color: #000;
          display: inline-block;
        }
        .uxinity-highlight::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #3b82f6;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s ease-out;
        }
        .uxinity-highlight:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50"
      >
        {/* <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/assets/Logo-Bzj2KXyx.png"
              alt="UXinity"
              className="h-8 w-8"
            />
          </motion.a>
        </div> */}
      </motion.nav>

      {/* About Section */}
      <section id="about" className="py-24 px-6 pt-32 bg-white" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={childVariants}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-2 font-roboto-condensed"
            >
              <span className="text-black">About </span>
              <motion.span
                className="uxinity-highlight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                UXinity
              </motion.span>
            </motion.h2>
            <motion.p
              variants={childVariants}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-roboto-mono uppercase tracking-[0.08em]"
            >
              Learn who we are, what we do, and why we're different.
            </motion.p>
          </motion.div>

          {/* Row 1 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="about-card p-6 md:p-7 bg-gray-100 rounded-lg"
            >
              <motion.div
                variants={childVariants}
                className="flex items-center gap-3 font-roboto-condensed"
              >
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-black">Our Mission</h3>
              </motion.div>
              <motion.p
                variants={childVariants}
                className="mt-3 text-sm md:text-base leading-7 text-gray-700"
              >
                We aim to revolutionize digital experiences through human-centered design and powerful technology.
                Our mission is to deliver meaningful software solutions that create impact.
              </motion.p>
            </motion.div>

            <motion.div
              style={{ y: yImage1 }}
              className="about-image overflow-hidden rounded-lg"
            >
              <motion.img
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
                alt="Mission visual"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";
                }}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              style={{ y: yImage2 }}
              className="about-image overflow-hidden rounded-lg md:order-1 order-2"
            >
              <motion.img
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
                alt="What we do visual"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";
                }}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="about-card p-6 md:p-7 bg-gray-100 rounded-lg md:order-2 order-1"
            >
              <motion.div
                variants={childVariants}
                className="flex items-center gap-3 font-roboto-condensed"
              >
                <Settings className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-black">What We Do</h3>
              </motion.div>
              <motion.p
                variants={childVariants}
                className="mt-3 text-sm md:text-base leading-7 text-gray-700"
              >
                From responsive web design to full-stack applications and cloud-native platforms,
                we craft scalable digital solutions tailored to your business goals.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Row 3: Our Values */}
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={childVariants}
              className="text-3xl font-bold mb-6"
            >
              Our Values
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Integrity",
                  description: "We are honest, transparent, and ethical in everything we do.",
                },
                {
                  title: "Innovation",
                  description: "We constantly push boundaries to deliver creative solutions.",
                },
                {
                  title: "Excellence",
                  description: "We strive for the highest standards in every project we undertake.",
                },
              ].map((value, idx) => (
                <motion.div
                  key={value.title}
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="p-6 bg-gray-100 rounded-lg shadow"
                >
                  <motion.div variants={childVariants}>
                    <CheckCircle className="h-8 w-8 text-primary mb-3 mx-auto" />
                    <h4 className="font-semibold mb-2 text-lg">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Row 4: Our Team (Commented Out, but with Animations) */}
          {/* <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={childVariants}
              className="text-3xl font-bold mb-6"
            >
              Meet Our Team
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "John Doe",
                  role: "CEO & Founder",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Jane Smith",
                  role: "Head of Design",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Mike Johnson",
                  role: "Lead Developer",
                  image: "https://randomuser.me/api/portraits/men/52.jpg",
                },
              ].map((member, idx) => (
                <motion.div
                  key={member.name}
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="p-6 rounded-lg shadow bg-white"
                >
                  <motion.img
                    variants={childVariants}
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h4
                    variants={childVariants}
                    className="font-semibold text-lg mb-1 text-gray-900"
                  >
                    {member.name}
                  </motion.h4>
                  <motion.p
                    variants={childVariants}
                    className="text-gray-600 text-sm"
                  >
                    {member.role}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Row 5: Testimonials */}
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={childVariants}
              className="text-3xl font-bold mb-6"
            >
              Testimonials
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  quote:
                    "UXinity helped transform our digital presence. Their team is incredibly talented and professional.",
                  author: "Sarah Williams",
                  role: "Marketing Manager",
                },
                {
                  quote:
                    "The solutions delivered by UXinity exceeded our expectations. Highly recommended!",
                  author: "David Brown",
                  role: "Product Owner",
                },
              ].map((testimonial, idx) => (
                <motion.div
                  key={testimonial.author}
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="p-6 bg-gray-100 rounded-lg shadow"
                >
                  <motion.p
                    variants={childVariants}
                    className="text-gray-700 mb-4"
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  <motion.h4
                    variants={childVariants}
                    className="font-semibold text-gray-900"
                  >
                    {testimonial.author}
                  </motion.h4>
                  <motion.p
                    variants={childVariants}
                    className="text-gray-600 text-sm"
                  >
                    {testimonial.role}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toggle menu */}
      <ToggleQuickMenu />
    </motion.div>
  );
}