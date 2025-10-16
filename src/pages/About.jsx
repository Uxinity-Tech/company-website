import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  Shield, 
  Users, 
  Zap, 
  Code, 
  Globe,
  Calendar,
  Award,
  Star,
  TrendingUp,
  Rocket,
  Clock,
  Target,
  BarChart3,
  Sparkles
} from "lucide-react";
import ToggleQuickMenu from "../components/ToggleQuickMenu";
import mission from '../assets/images/mission.png';
import vision from '../assets/images/vision.png';

// Animation variants
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

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  rest: { scale: 1, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" },
  hover: {
    scale: 1.02,
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.98 }, 
};

const fallbackImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const yImage1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

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
          font-weight: 700;
        }
        .uxinity-highlight::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #000;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s ease-out;
        }
        .uxinity-highlight:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .stats-number {
          font-size: 3rem;
          font-weight: 800;
          color: #000;
        }
        .feature-highlight {
          color: #000;
          font-weight: 600;
        }
      `}</style>

      {/* Hero Section - Clean White */}
      <section className="relative py-24 px-6 pt-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={childVariants} className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-black/5 rounded-full border border-black/10">
              <Sparkles className="h-4 w-4 text-black" />
              <span className="text-sm font-medium text-black uppercase tracking-wide">Founded 2025</span>
            </motion.div>
            <motion.h1
              variants={childVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-black">About </span>
              <motion.span className="uxinity-highlight">
                UXinity
              </motion.span>
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed"
            >
              Freshly founded in 2025, we're the new force in startup design. 
              We build digital products that launch fast and scale big.
            </motion.p>
          </motion.div>

          {/* Early Stage Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "0", label: "Years Experience", icon: Calendar, note: "(But battle-tested founders)" },
              { number: "5", label: "Active Projects", icon: Code },
              { number: "3", label: "Core Team", icon: Users },
              { number: "100%", label: "Founder Focus", icon: Target },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={childVariants}
                className="text-center p-6 bg-black/5 rounded-xl border border-black/10"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-black" />
                <div className="stats-number">{stat.number}</div>
                <p className="text-black/70 mt-2 text-sm font-medium">{stat.label}</p>
                {stat.note && <p className="text-xs text-black/50 mt-1 italic">{stat.note}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="about" className="py-24 px-6 bg-white" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          
          {/* Mission Row */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
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
              className="p-8 bg-white rounded-2xl border border-black/10"
            >
              <motion.div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-black/5 rounded-xl border border-black/10">
                  <Shield className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black mb-2">Our Mission</h3>
                  <p className="text-sm text-black/70 font-medium">Launch products that matter</p>
                </div>
              </motion.div>
              <p className="text-black/80 leading-relaxed text-lg">
                We're a 2025 startup solving the biggest pain point for founders: 
                going from idea to launched product without losing momentum. 
                We focus on speed, simplicity, and solutions that actually work.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "MVP delivery in 30 days",
                  "No bloated processes",
                  "Founder-first approach",
                  "Real results, not promises"
                ].map((item, index) => (
                  <motion.li key={index} className="flex items-center gap-3 text-black/70">
                    <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div style={{ y: yImage1 }} className="relative">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/5 p-2">
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={mission}
                  alt="Our mission in action"
                  onError={(e) => { e.currentTarget.src = fallbackImage; }}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Vision Row */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              style={{ y: yImage2 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/5 p-2">
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={vision}
                  alt="Our vision for the future"
                  onError={(e) => { e.currentTarget.src = fallbackImage; }}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="p-8 bg-white rounded-2xl border border-black/10 order-1 lg:order-2"
            >
              <motion.div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-black/5 rounded-xl border border-black/10">
                  <Globe className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black mb-2">Our Vision</h3>
                  <p className="text-sm text-black/70 font-medium">Be the startup's secret weapon</p>
                </div>
              </motion.div>
              <p className="text-black/80 leading-relaxed text-lg mb-6">
                We want to be the design partner every founder wishes they had from day one. 
                In a world full of bloated agencies, we're building the lean, fast, 
                no-BS alternative that actually delivers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Rocket, label: "Ship Fast", color: "black" },
                  { icon: Zap, label: "No Fluff", color: "black" },
                  { icon: Target, label: "Founder Focus", color: "black" },
                  { icon: Star, label: "Real Impact", color: "black" }
                ].map((feature) => (
                  <motion.div key={feature.label} className="flex items-center gap-3 p-3 bg-black/5 rounded-lg border border-black/10">
                    <div className={`p-2 bg-${feature.color}/10 rounded-lg`}>
                      <feature.icon className="h-5 w-5 text-black" />
                    </div>
                    <span className="text-sm font-medium text-black/80">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Core Values - Startup Reality */}
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={childVariants} className="text-4xl font-bold mb-4 text-black">
              Why We're Different
            </motion.h3>
            <motion.p variants={childVariants} className="text-xl text-black/70 max-w-2xl mx-auto mb-12">
              We're not another agency. We're founders who get it.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Zero Corporate BS",
                  description: "No account managers, no endless meetings, no 100-page proposals. Just results.",
                  icon: Zap
                },
                {
                  title: "Founder Empathy",
                  description: "We've been in your shoes - bootstrapped, stressed, and racing against time.",
                  icon: Users
                },
                {
                  title: "Brutal Honesty",
                  description: "We tell you what won't work, not just what sounds good. Save time and money.",
                  icon: Shield
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="p-8 bg-white rounded-2xl border border-black/10"
                >
                  <motion.div 
                    className="p-4 bg-black/5 rounded-xl mb-6 mx-auto w-fit border border-black/10"
                    variants={childVariants}
                  >
                    <value.icon className="h-10 w-10 text-black" />
                  </motion.div>
                  <h4 className="font-bold text-xl mb-4 text-black">{value.title}</h4>
                  <p className="text-black/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline - Fresh Startup */}
          <motion.div 
            ref={timelineRef}
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={childVariants} className="text-3xl font-bold text-center mb-4 text-black">
              Our 2025 Journey
            </motion.h3>
            <motion.p variants={childVariants} className="text-center text-black/70 mb-12 max-w-2xl mx-auto">
              Just getting started, but moving fast
            </motion.p>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black/20 h-full"></div>
              <div className="space-y-12">
                {[
                  {
                    date: "Jan 2025",
                    title: "Founded",
                    description: "Three founders tired of agency nonsense decided to build something better.",
                    milestone: "Day 1 hustle"
                  },
                  {
                    date: "Feb 2025",
                    title: "First Project",
                    description: "Landed our first client and shipped MVP in 3 weeks. No sleep, all results.",
                    milestone: "Real revenue ✓"
                  },
                  {
                    date: "Mar 2025",
                    title: "Scaling Up",
                    description: "Hired first engineer. Process refined. Ready for more founders.",
                    milestone: "3 projects live"
                  },
                  {
                    date: "Now",
                    title: "Open for Business",
                    description: "We're small, scrappy, and taking on new startup clients.",
                    milestone: "Your turn →"
                  }
                ].map((milestone, index) => (
                  <motion.div
                    key={milestone.title}
                    variants={childVariants}
                    className={`flex items-center justify-center ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`w-5/12 p-6 rounded-2xl border border-black/10 bg-white ${
                      index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-black/10 rounded-full">
                          <Calendar className="h-5 w-5 text-black" />
                        </div>
                        <span className="font-bold text-black">{milestone.date}</span>
                      </div>
                      <h4 className="font-bold text-xl mb-2 text-black">{milestone.title}</h4>
                      <p className="text-black/70 mb-3">{milestone.description}</p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <TrendingUp className="h-4 w-4" />
                        {milestone.milestone}
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Why Choose Us - Startup Reality */}
          <motion.div
            className="py-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto px-6">
              <motion.div className="text-center mb-16">
                <motion.h3 variants={childVariants} className="text-4xl font-bold mb-4 text-black">
                  Why Bet on UXinity
                </motion.h3>
                <motion.p variants={childVariants} className="text-xl text-black/70 max-w-2xl mx-auto">
                  We're new but we're not naive. Here's what you get:
                </motion.p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    icon: Rocket,
                    title: "30-Day MVPs",
                    description: "From wireframe to live product in one month. No excuses.",
                    benefit: "Launch before competitors even spec"
                  },
                  {
                    icon: Zap,
                    title: "Fixed Price Projects",
                    description: "Know your costs upfront. No surprise invoices or scope creep.",
                    benefit: "Budget with confidence"
                  },
                  {
                    icon: Target,
                    title: "Founder-to-Founder",
                    description: "Direct access to decision makers. No middlemen slowing you down.",
                    benefit: "Move at startup speed"
                  },
                  {
                    icon: Shield,
                    title: "No-BS Guarantee",
                    description: "Don't like the work? Don't pay. We're that confident.",
                    benefit: "Zero risk partnership"
                  }
                ].map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    variants={childVariants}
                    className="flex items-start gap-6 p-6 bg-black/5 rounded-2xl border border-black/10"
                  >
                    <div className="p-3 bg-white rounded-xl border flex-shrink-0 mt-1">
                      <advantage.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-black mb-2">{advantage.title}</h4>
                      <p className="text-black/80 mb-3">{advantage.description}</p>
                      <p className="text-sm text-black/60 font-medium">{advantage.benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <motion.div
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="mt-16 p-8 bg-black text-white rounded-2xl border"
              >
                <h3 className="text-2xl font-bold mb-4">Ready to Ship?</h3>
                <p className="text-white/90 mb-6">We're taking 3 new clients this month. Spots filling fast.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                    Start Project
                  </button>
                  <button className="flex items-center gap-2 text-white/80 hover:text-white font-medium border border-white/30 py-3 px-6 rounded-lg">
                    See Our Work
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <ToggleQuickMenu />
    </motion.div>
  );
}