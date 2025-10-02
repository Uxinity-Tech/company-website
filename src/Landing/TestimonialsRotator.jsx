import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  {
    quote:
      "They brought clarity and craft. The identity and system design elevated our entire org.",
    by: "Amal",
    role: "Founder ",
  },
  {
    quote:
      "From roadmap to launch, the team delivered with precision and taste. Truly business-first.",
    by: "Rohit",
    role: "CEO",
  },
  {
    quote:
      "A studio that understands both detail and direction. Our product now feels inevitable.",
    by: "Arathi",
    role: "Manager",
  },
];

export default function TestimonialsRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const current = quotes[index];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="tracking-[0.25em] text-xs md:text-sm text-muted-foreground font-roboto-mono uppercase">
            PERSPECTIVE
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none font-roboto-condensed">
            TESTIMONIALS
          </h2>
          <div className="mt-6 border-t" />
        </div>

        <div className="relative min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="text-xl md:text-2xl font-medium leading-relaxed"
            >
              "{current.quote}"
              <footer className="mt-4 text-sm text-muted-foreground">
                — {current.by}, {current.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
