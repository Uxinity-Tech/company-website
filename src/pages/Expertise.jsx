import ServiceSlide from "../Landing/ServiceSlide";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import ToggleQuickMenu from "../components/ToggleQuickMenu";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useEffect } from "react";
export default function ExpertisePage() {
      useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1500); // show loader for 1.5s
        return () => clearTimeout(timer);
      }, []);
  const navigate = useNavigate();

  // Animation variants for the section title
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for the category cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const expertiseCategories = [
    {
      title: "Market Research",
      description: "Insights that inform decisions",
    },
    {
      title: "Branding / Package Design",
      description: "Identity systems that scale",
    },
    {
      title: "UI / UX",
      description: "Clarity, flow, and accessibility",
    },
    {
      title: "Marketing Consultancy",
      description: "Acquisition with intent",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Expertise Overview */}
      <section className="py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Animated Section Title */}
          <motion.div
            className="mb-8 text-left md:text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 font-roboto-condensed">
              Expertise Overview
            </h2>
            <p className="text-muted-foreground font-roboto-mono uppercase tracking-[0.12em]">
              Business-first capabilities at a glance
            </p>
          </motion.div>
          {/* Animated Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertiseCategories.map((category, index) => (
              <motion.div
                key={index}
                className="box p-5 hover:shadow-lg transition-shadow duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                custom={index}
              >
                <p className="text-xs text-muted-foreground font-roboto-mono uppercase tracking-[0.18em]">
                  Category
                </p>
                <h3 className="text-lg font-semibold mt-1 font-roboto-condensed">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <ServiceSlide />
      {/* Toggle menu */}
      <ToggleQuickMenu />
    </div>
  );
}