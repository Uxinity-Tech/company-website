import { useState } from "react";
import { motion } from "framer-motion";
import ToggleQuickMenu from "../components/ToggleQuickMenu"; // adjust path if needed
import { useEffect } from "react";
export default function ProjectsPage() {
      useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1500); // show loader for 1.5s
        return () => clearTimeout(timer);
      }, []);
  const projects = [
    {
      title: "Enterprise App Dashboard",
      category: "Web & App",
      description: "Real‑time analytics, role‑based access, and clean design system.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Brand System & Marketing Site",
      category: "Brand",
      description: "Identity, components, and performance‑focused launch pages.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Secure Cloud Platform",
      category: "Cloud & Security",
      description: "Zero‑trust, CI/CD, and observability baked into the workflow.",
      img: "https://images.unsplash.com/photo-1556157381-9713e95fa3c1?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const [images, setImages] = useState(projects.map(p => p.img));

  const handleImgError = (index) => {
    const newImages = [...images];
    newImages[index] =
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";
    setImages(newImages);
  };

  // Animation variants for the container and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-10 mt-19">
        <motion.div
          className="mb-8 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="tracking-[0.25em] text-xs md:text-sm uppercase text-gray-600">PROJECTS</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-black">
            Our Project
          </h1>
          <div className="mt-6 border-t border-gray-300" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 bg-white rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <motion.img
                  src={images[index]}
                  alt={project.title}
                  loading="lazy"
                  onError={() => handleImgError(index)}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-gray-600">{project.category}</p>
                <h3 className="text-lg font-semibold mt-1 text-black">{project.title}</h3>
                <p className="text-sm mt-1 text-gray-700">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <ToggleQuickMenu />
    </div>
  );
}