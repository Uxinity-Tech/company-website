import { motion, useScroll, useTransform } from "framer-motion";

export default function ThemedBanner() {
  // Add parallax transforms based on page scroll
  const { scrollYProgress } = useScroll();
  const yPoster = useTransform(scrollYProgress, [0, 1], [0, -120]); // background-ish
  const yCTA = useTransform(scrollYProgress, [0, 1], [0, -40]); // foreground-ish

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.8,
      rotateX: -90,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "none",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Heebo:800,900&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Work+Sans:600,900&display=swap');
        .poster-wrapper { width: 100%; max-width: 1200px; position: relative; }
        .poster { position: relative; display: grid; grid-template-rows: 1fr 1fr 1fr 1fr 1fr; grid-template-columns: 1fr 1fr 1fr 1fr; overflow: hidden; }
        .poster span:not(.pop-out) { overflow: hidden; }
        .poster span { font-size: 38vw; line-height: 0.5; font-family: 'Work Sans', system-ui, sans-serif; }
        @media (min-width: 768px) {
          .poster span { font-size: 22vw; }
        }
        .poster span:nth-child(odd) { color: black; }
        .poster span:nth-child(even) { color: white; background: black; }
        .poster .reverse-color:nth-child(odd) { color: white; background: black; }
        .poster .reverse-color:nth-child(even) { color: black; background: none; }
        .poster .small-text { align-self: center; font-size: 2.5vw; padding: 2vw 4vw; line-height: 1.3; align-self: end; }

        /* Add: black text + animated underline highlight for the small 'Uxinity' label */
        .poster .small-text.highlight {
          position: relative;
          color: #000;
          background: none !important;
          display: inline-block;
        }
        .poster .small-text.highlight::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -0.6vw;
          height: 0.35vw;
          width: 0;
          background: #000;
          border-radius: 9999px;
          animation: underlineGrow 1.2s ease-out 0.4s forwards;
        }
        @keyframes underlineGrow {
          from { width: 0; }
          to { width: 80%; }
        }

        .letter-l.letter-l { margin-top: -7vw; font-size: 45vw; }
        .letter-k { text-indent: -2vw; }
        .letter-a.letter-a.letter-a { background: linear-gradient(to right, black 70%, white 70%); }
        .letter-e { text-indent: -2vw; }
        .letter-h { margin-top: -2vw; text-indent: -2vw; }
        .letter-w { text-indent: -6vw; }
        .letter-r { text-indent: -2vw; }
        .letter-i { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); overflow: visible; z-index: 10; }
        .visibly-hidden { position: absolute; top: -9999px; left: -9999px; }

        /* Position the logo directly above the 'Uxinity' small text area */
        .poster-logo {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 2.2vw;
          width: clamp(120px, 13vw, 220px);
          height: auto;
          z-index: 15;
        }
        @media (min-width: 768px) {
          .poster-logo { bottom: 1.2vw; }
        }
      `}</style>

      <div className="relative z-20 grid place-items-center text-center px-6 mt-30">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Accessible text for screen readers */}
          <div className="visibly-hidden">
            <h1>Uxinity</h1>
            <p>The future is UXinity † Design with intent. Build with impact.</p>
          </div>

          {/* Poster grid with parallax */}
          <motion.div
            className="poster-wrapper"
            aria-hidden
            style={{ y: yPoster, willChange: "transform" }}
          >
            <motion.div 
              className="poster" 
              aria-hidden
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ overflow: 'hidden' }}
            >
              <motion.span variants={itemVariants}>U</motion.span>
              <motion.span className="letter-l" variants={itemVariants}>X</motion.span>
              <motion.span className="letter-aa" variants={itemVariants}>i</motion.span>
              <motion.span className="letter-k" variants={itemVariants}>n</motion.span>
              <motion.span className="reverse-color letter-a" variants={itemVariants}>i</motion.span>
              <motion.span className="reverse-color letter-t pop-out" variants={itemVariants}>t</motion.span>
              <motion.span className="reverse-color letter-e" variants={itemVariants}>y</motion.span>
              <motion.span className="small-text highlight" variants={itemVariants}>Uxinity</motion.span>

              <motion.span variants={itemVariants}>S</motion.span>
              <motion.span variants={itemVariants}>o</motion.span>
              <motion.span className="letter-h" variants={itemVariants}>l</motion.span>
              <motion.span className="letter-w" variants={itemVariants}>u</motion.span>
              <motion.span className="reverse-color" variants={itemVariants}>t</motion.span>
              <motion.span className="reverse-color pop-out letter-r" variants={itemVariants}>i</motion.span>
              <motion.span className="reverse-color" variants={itemVariants}>o</motion.span>
              <motion.span className="reverse-color" variants={itemVariants}>n</motion.span>
              <motion.span className="reverse-color small-text" variants={itemVariants}>
                The future is UXinity + Design with intent. Build with impact.
              </motion.span>

              <motion.span className="letter-w" variants={itemVariants}>U</motion.span>
              <motion.span variants={itemVariants}>X</motion.span>
              <motion.span variants={itemVariants}>i</motion.span>
              <motion.span variants={itemVariants}>n</motion.span>
              <motion.span variants={itemVariants}>i</motion.span>
              <motion.span variants={itemVariants}>t</motion.span>
              <motion.span variants={itemVariants}>y</motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}