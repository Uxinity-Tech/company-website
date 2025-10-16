import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Code, 
  Target, 
  Shield, 
  BarChart3, 
  Calendar, 
  Users, 
  Sparkles,
  Lightbulb,
  Layout,
  TrendingUp,
  Clock,
  Star,
  Grid,
  Layers
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ServiceSlide from "../Landing/ServiceSlide";
import ToggleQuickMenu from "../components/ToggleQuickMenu";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function ExpertisePage() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const expertiseAreas = [
    {
      title: "Market Intelligence",
      subtitle: "Data-Driven Decisions",
      description: "We analyze market trends, customer behaviors, and competitive landscapes to validate your startup's potential before you invest.",
      features: [
        "Customer persona development",
        "Competitive benchmarking", 
        "Market opportunity sizing",
        "Trend forecasting"
      ],
      icon: BarChart3,
      metric: "+75% validation accuracy"
    },
    {
      title: "Brand Architecture",
      subtitle: "Strategic Identity",
      description: "We build brand foundations that evolve with your startup—from MVP to market leader—with systems that scale seamlessly.",
      features: [
        "Brand positioning strategy",
        "Visual identity systems",
        "Messaging frameworks",
        "Brand experience mapping"
      ],
      icon: Sparkles,
      metric: "3x faster brand adoption"
    },
    {
      title: "Product Design",
      subtitle: "User-Centric Interfaces",
      description: "We create intuitive digital experiences that drive user engagement and business growth through rigorous design thinking.",
      features: [
        "User journey mapping",
        "Interactive prototyping",
        "Design system creation",
        "Accessibility optimization"
      ],
      icon: Layout,
      metric: "42% conversion uplift"
    },
    {
      title: "Growth Engineering",
      subtitle: "Acquisition Systems",
      description: "We architect scalable growth funnels that acquire and retain customers efficiently across multiple channels.",
      features: [
        "Funnel optimization",
        "A/B testing frameworks",
        "Analytics implementation",
        "Retention strategy"
      ],
      icon: TrendingUp,
      metric: "4.2x customer acquisition"
    }
  ];

  const workflowStages = [
    {
      stage: "Research & Discovery",
      duration: "Days 1-5",
      description: "Deep dive into your market, users, and business goals",
      icon: Lightbulb,
      deliverables: ["Research report", "User personas", "Competitor analysis"]
    },
    {
      stage: "Strategy & Planning", 
      duration: "Days 6-10",
      description: "Define your product roadmap and growth strategy",
      icon: Target,
      deliverables: ["Product roadmap", "Design brief", "Success metrics"]
    },
    {
      stage: "Design & Development",
      duration: "Days 11-25",
      description: "Build and iterate with parallel design/development sprints",
      icon: Code,
      deliverables: ["Design system", "Working prototype", "Beta version"]
    },
    {
      stage: "Launch & Optimization",
      duration: "Day 26+",
      description: "Go live with monitoring and continuous improvement",
      icon: Zap,
      deliverables: ["Live product", "Performance dashboard", "Growth playbook"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white"
    >
      <style>{`
        .expertise-metric {
          font-size: 0.875rem;
          font-weight: 600;
          color: #000;
          background: linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.1));
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          display: inline-block;
          margin-top: 1rem;
        }
        .feature-item {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 0.75rem;
        }
        .feature-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.25rem;
          width: 1rem;
          height: 1rem;
          background: #000;
          border-radius: 50%;
          opacity: 0.3;
        }
        .workflow-connector {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: linear-gradient(to bottom, #000, transparent);
          z-index: 0;
        }
      `}</style>

      {/* Modular Hero */}
      <section ref={heroRef} className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.01)_50%,rgba(0,0,0,0.02)_100%)]"></div>
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={titleVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/10 w-fit">
              <Sparkles className="h-4 w-4 text-black" />
              <span className="text-sm font-medium text-black uppercase tracking-wide">2025 Capabilities</span>
            </motion.div>
            <motion.h1 
              variants={titleVariants}
              className="text-5xl lg:text-6xl font-bold text-black leading-tight"
            >
              Modular Expertise
              <br />
              <span className="text-black/80">For Rapid Deployment</span>
            </motion.h1>
            <motion.p 
              variants={titleVariants}
              className="text-lg text-black/70 max-w-lg leading-relaxed"
            >
              Pick and choose capabilities that fit your startup stage. No bloated packages, just focused expertise.
            </motion.p>
            <motion.div variants={titleVariants} className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-black/90 transition-colors"
                onClick={() => navigate('/contact')}
              >
                Build Your Package
              </button>
              <button className="border border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black/5 transition-colors">
                View Capabilities
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 gap-4 mt-8 lg:mt-0"
          >
            {[
              { value: "30", label: "Days to Ship", icon: Clock },
              { value: "95%", label: "Success Rate", icon: Target },
              { value: "3x", label: "Faster Launch", icon: Zap },
              { value: "100%", label: "Custom Fit", icon: Shield }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                custom={i}
                className="p-6 bg-black/5 rounded-xl border border-black/10 text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-black" />
                <div className="text-2xl font-bold text-black">{stat.value}</div>
                <p className="text-sm text-black/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capability Matrix */}
      <section ref={servicesRef} className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={titleVariants} className="text-4xl font-bold text-black mb-4">
              Capability Matrix
            </motion.h2>
            <motion.p variants={titleVariants} className="text-black/70 max-w-2xl mx-auto">
              Select the expertise modules your startup needs right now
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white border border-black/10 rounded-2xl p-8 hover:shadow-2xl hover:border-black/20 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-black/5 rounded-xl border border-black/10 flex-shrink-0">
                      <area.icon className="h-8 w-8 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-1">{area.title}</h3>
                      <p className="text-black/60 uppercase tracking-wide text-sm font-medium">{area.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-black/80 leading-relaxed mb-6 relative z-10">{area.description}</p>
                  
                  <div className="space-y-3 mb-6 relative z-10">
                    {area.features.map((feature, i) => (
                      <div key={i} className="feature-item text-black/70 text-sm">
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="expertise-metric">{area.metric}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-black/70 hover:text-black font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                      onClick={() => navigate(`/services/${area.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`)}
                    >
                      Dive Deeper
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Workflow */}
      <section className="py-20 px-6 bg-black/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={titleVariants} className="text-4xl font-bold text-black mb-4">
              30-Day Workflow
            </motion.h2>
            <motion.p variants={titleVariants} className="text-black/70 max-w-2xl mx-auto">
              Predictable delivery with clear milestones and deliverables
            </motion.p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex space-x-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {workflowStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-80 bg-white border border-black/10 rounded-2xl p-6 snap-center"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-black/10 rounded-full">
                      <stage.icon className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black">{stage.stage}</h3>
                      <p className="text-sm text-black/60">{stage.duration}</p>
                    </div>
                  </div>
                  <p className="text-black/80 mb-4">{stage.description}</p>
                  <div className="space-y-2">
                    {stage.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-black/70">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Framework */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={titleVariants} className="text-4xl font-bold text-black mb-4">
              Success Framework
            </motion.h2>
            <motion.p variants={titleVariants} className="text-black/70 max-w-2xl mx-auto">
              Our methodology combines startup speed with enterprise-grade processes
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lean Validation",
                description: "Test hypotheses with minimal resources before scaling",
                icon: Target,
                stats: ["MVP validation", "Risk reduction", "Fast iteration"]
              },
              {
                title: "Parallel Streams",
                description: "Design, development, and testing happen simultaneously",
                icon: Zap,
                stats: ["50% faster delivery", "Quality assurance", "Continuous feedback"]
              },
              {
                title: "Metrics-First",
                description: "Every decision backed by data and business outcomes",
                icon: BarChart3,
                stats: ["ROI tracking", "Growth metrics", "Performance optimization"]
              }
            ].map((framework, index) => (
              <motion.div
                key={framework.title}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                className="p-6 bg-black/5 rounded-xl border border-black/10"
              >
                <framework.icon className="h-12 w-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-bold text-black mb-4 text-center">{framework.title}</h3>
                <p className="text-black/80 mb-6 text-center">{framework.description}</p>
                <div className="space-y-2">
                  {framework.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-center gap-2 text-sm text-black/70">
                      <CheckCircle className="h-4 w-4" />
                      {stat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceSlide />

      {/* Modular CTA */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={titleVariants} className="text-4xl font-bold mb-6">
              Build Your Custom Package
            </motion.h2>
            <motion.p variants={titleVariants} className="text-white/90 mb-8 max-w-2xl mx-auto">
              Select only what you need. No forced bundles. Startup pricing with enterprise delivery.
            </motion.p>
            <motion.div variants={titleVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                "Market Research - $5K",
                "Brand Foundation - $8K", 
                "Product Design - $12K",
                "Growth Setup - $7K"
              ].map((packageItem, i) => (
                <motion.div 
                  key={i}
                  variants={cardVariants}
                  custom={i}
                  className="bg-white/5 rounded-lg p-4 border border-white/10"
                >
                  <p className="text-white/80 text-sm">{packageItem}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-black font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => navigate('/contact')}
              >
                Configure Package
              </button>
              <Link 
                to="/services" 
                className="border border-white/30 text-white py-4 px-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                Full Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ToggleQuickMenu />
    </motion.div>
  );
}