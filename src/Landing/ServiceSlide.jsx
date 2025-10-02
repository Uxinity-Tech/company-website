import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: "webapp",
    name: "Web & App Development",
    projects: [
      {
        title: "Headless Commerce",
        description: "Fast storefront with strict accessibility.",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Design Systems",
        description: "Atomic UI and design tokens for scale.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity Consulting",
    projects: [
      {
        title: "Threat Modeling & Risk Assessment",
        description:
          "Identify vulnerabilities, quantify risk, and prioritize mitigations.",
        image:
          "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Incident Response & Hardening",
        description:
          "IR playbooks, patching, zero-trust controls, and continuous monitoring.",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing Consultancy",
    projects: [
      {
        title: "Growth Playbook",
        description:
          "Campaign systems and performance funnels for D2C.",
        image:
          "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Cross-Channel Strategy",
        description:
          "Cohesive messaging across email, social, and web.",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "brand",
    name: "Brand Consultancy",
    projects: [
      {
        title: "Identity Systems",
        description: "Foundational logo, grid, and motion rules.",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Narrative Framework",
        description:
          "Tone, voice, and value architecture for clarity.",
        image:
          "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "package",
    name: "Package Design",
    projects: [
      {
        title: "Retail Shelf Impact",
        description: "Minimal geometry with tactile materials.",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Sustainable Kits",
        description: "Eco-first packaging systems with inserts.",
        image:
          "https://images.unsplash.com/photo-1604335399105-a0c1f7d5b0d7?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "system",
    name: "System Design",
    projects: [
      {
        title: "Service Blueprints",
        description: "Ops orchestration across touchpoints.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
      },
      {
        title: "Workflow Engines",
        description: "Resilient pipelines with clear interfaces.",
        image:
          "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
];

export default function ServiceSlide() {
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const slideWidth = container.querySelector(".box")?.offsetWidth || 0;
    const totalSlides = slides.length;
    let currentSlide = 0;

    const scrollToSlide = (index) => {
      container.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    };

    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        scrollToSlide(currentSlide);
      }, 10000); // 5 seconds
    };

    startAutoSlide();

    const handleInteractionStart = () => {
      clearInterval(intervalRef.current);
    };

    const handleInteractionEnd = () => {
      // Update currentSlide based on scroll position when interaction ends
      currentSlide = Math.round(container.scrollLeft / slideWidth);
      startAutoSlide();
    };

    container.addEventListener("mouseenter", handleInteractionStart);
    container.addEventListener("touchstart", handleInteractionStart);
    container.addEventListener("mouseleave", handleInteractionEnd);
    container.addEventListener("touchend", handleInteractionEnd);

    return () => {
      clearInterval(intervalRef.current);
      container.removeEventListener("mouseenter", handleInteractionStart);
      container.removeEventListener("touchstart", handleInteractionStart);
      container.removeEventListener("mouseleave", handleInteractionEnd);
      container.removeEventListener("touchend", handleInteractionEnd);
    };
  }, []);

  return (
    <section id="whatwedo" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="tracking-[0.25em] text-xs md:text-sm text-muted-foreground font-roboto-mono uppercase">
            STUDIO
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none font-roboto-condensed">
            WHAT WE DO
          </h2>
          <div className="mt-6 border-t" />
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
        >
          {slides.map((slide, idx) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="box snap-start shrink-0 w-[88%] md:w-[70%] lg:w-[55%] border bg-white"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold">{slide.name}</h3>
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {slide.projects.map((p) => (
                    <div key={p.title} className="group border">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80";
                          }}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">Project</p>
                        <h4 className="font-semibold">{p.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}