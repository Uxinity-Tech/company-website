// import { motion, useScroll, useTransform } from "framer-motion";

// export default function ThemedBanner() {
//   // Add parallax transforms based on page scroll
//   const { scrollYProgress } = useScroll();
//   const yPoster = useTransform(scrollYProgress, [0, 1], [0, -120]); // background-ish
//   const yCTA = useTransform(scrollYProgress, [0, 1], [0, -40]); // foreground-ish

//   // Animation variants for staggered entrance
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.08,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 50, 
//       scale: 0.8,
//       rotateX: -90,
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const buttonVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 30,
//       scale: 0.9,
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 12,
//         delay: 0.8,
//       },
//     },
//   };

//   const handleConsultationClick = () => {
//     // Add your consultation form/modal trigger here
//     console.log("Get Consultation clicked");
//     // Example: open modal, scroll to form, etc.
//   };

//   return (
//     <section
//       className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
//       style={{
//         backgroundColor: "#ffffff",
//         backgroundImage: "none",
//         backgroundSize: "auto",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css?family=Heebo:800,900&display=swap');
//         @import url('https://fonts.googleapis.com/css?family=Work+Sans:600,900&display=swap');
//         .poster-wrapper { width: 100%; max-width: 1200px; position: relative; }
//         .poster { position: relative; display: grid; grid-template-rows: 1fr 1fr 1fr 1fr 1fr; grid-template-columns: 1fr 1fr 1fr 1fr; overflow: hidden; }
//         .poster span:not(.pop-out) { overflow: hidden; }
//         .poster span { font-size: 38vw; line-height: 0.5; font-family: 'Work Sans', system-ui, sans-serif; }
//         @media (min-width: 768px) {
//           .poster span { font-size: 22vw; }
//         }
//         .poster span:nth-child(odd) { color: black; }
//         .poster span:nth-child(even) { color: white; background: black; }
//         .poster .reverse-color:nth-child(odd) { color: white; background: black; }
//         .poster .reverse-color:nth-child(even) { color: black; background: none; }
//         .poster .small-text { align-self: center; font-size: 2.5vw; padding: 2vw 4vw; line-height: 1.3; align-self: end; }

//         /* Add: black text + animated underline highlight for the small 'Uxinity' label */
//         .poster .small-text.highlight {
//           position: relative;
//           color: #000;
//           background: none !important;
//           display: inline-block;
//         }
//         .poster .small-text.highlight::after {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: -0.6vw;
//           height: 0.35vw;
//           width: 0;
//           background: #000;
//           border-radius: 9999px;
//           animation: underlineGrow 1.2s ease-out 0.4s forwards;
//         }
//         @keyframes underlineGrow {
//           from { width: 0; }
//           to { width: 80%; }
//         }

//         .letter-l.letter-l { margin-top: -7vw; font-size: 45vw; }
//         .letter-k { text-indent: -2vw; }
//         .letter-a.letter-a.letter-a { background: linear-gradient(to right, black 70%, white 70%); }
//         .letter-e { text-indent: -2vw; }
//         .letter-h { margin-top: -2vw; text-indent: -2vw; }
//         .letter-w { text-indent: -6vw; }
//         .letter-r { text-indent: -2vw; }
//         .letter-i { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); overflow: visible; z-index: 10; }
//         .visibly-hidden { position: absolute; top: -9999px; left: -9999px; }

//         /* Position the logo directly above the 'Uxinity' small text area */
//         .poster-logo {
//           position: absolute;
//           left: 50%;
//           transform: translateX(-50%);
//           bottom: 2.2vw;
//           width: clamp(120px, 13vw, 220px);
//           height: auto;
//           z-index: 15;
//         }
//         @media (min-width: 768px) {
//           .poster-logo { bottom: 1.2vw; }
//         }

//         /* Get Consultation Button Styles */
//         .consultation-btn {
//           position: relative;
//           z-index: 30;
//           background: black;
//           color: white;
//           border: 2px solid black;
//           padding: 1rem 2.5rem;
//           font-family: 'Work Sans', sans-serif;
//           font-weight: 600;
//           font-size: 1.1rem;
//           letter-spacing: 0.05em;
//           text-transform: uppercase;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.15);
//           overflow: hidden;
//         }
//         .consultation-btn:hover {
//           background: white;
//           color: black;
//           transform: translateY(-2px);
//           box-shadow: 0 8px 30px rgba(0,0,0,0.2);
//         }
//         .consultation-btn:active {
//           transform: translateY(0);
//         }
//         .consultation-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
//           transition: left 0.5s;
//         }
//         .consultation-btn:hover::before {
//           left: 100%;
//         }
//         @media (max-width: 768px) {
//           .consultation-btn {
//             padding: 0.9rem 2rem;
//             font-size: 1rem;
//           }
//         }
//       `}</style>

//       <div className="relative z-20 grid place-items-center text-center px-6 mt-30">
//         <motion.div
//           initial={{ opacity: 0, y: 12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col items-center"
//         >
//           {/* Accessible text for screen readers */}
//           <div className="visibly-hidden">
//             <h1>Uxinity</h1>
//             <p>The future is UXinity † Design with intent. Build with impact.</p>
//           </div>

//           {/* Poster grid with parallax */}
//           <motion.div
//             className="poster-wrapper"
//             aria-hidden
//             style={{ y: yPoster, willChange: "transform" }}
//           >
//             <motion.div 
//               className="poster" 
//               aria-hidden
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               style={{ overflow: 'hidden' }}
//             >
//               <motion.span variants={itemVariants}>U</motion.span>
//               <motion.span className="letter-l" variants={itemVariants}>X</motion.span>
//               <motion.span className="letter-aa" variants={itemVariants}>i</motion.span>
//               <motion.span className="letter-k" variants={itemVariants}>n</motion.span>
//               <motion.span className="reverse-color letter-a" variants={itemVariants}>i</motion.span>
//               <motion.span className="reverse-color letter-t pop-out" variants={itemVariants}>t</motion.span>
//               <motion.span className="reverse-color letter-e" variants={itemVariants}>y</motion.span>
//               <motion.span className="small-text highlight" variants={itemVariants}>Uxinity</motion.span>

//               <motion.span variants={itemVariants}>S</motion.span>
//               <motion.span variants={itemVariants}>o</motion.span>
//               <motion.span className="letter-h" variants={itemVariants}>l</motion.span>
//               <motion.span className="letter-w" variants={itemVariants}>u</motion.span>
//               <motion.span className="reverse-color" variants={itemVariants}>t</motion.span>
//               <motion.span className="reverse-color pop-out letter-r" variants={itemVariants}>i</motion.span>
//               <motion.span className="reverse-color" variants={itemVariants}>o</motion.span>
//               <motion.span className="reverse-color" variants={itemVariants}>n</motion.span>
//               <motion.span className="reverse-color small-text" variants={itemVariants}>
//                 The future is UXinity + Design with intent. Build with impact.
//               </motion.span>

//               <motion.span className="letter-w" variants={itemVariants}>U</motion.span>
//               <motion.span variants={itemVariants}>X</motion.span>
//               <motion.span variants={itemVariants}>i</motion.span>
//               <motion.span variants={itemVariants}>n</motion.span>
//               <motion.span variants={itemVariants}>i</motion.span>
//               <motion.span variants={itemVariants}>t</motion.span>
//               <motion.span variants={itemVariants}>y</motion.span>
//             </motion.div>
//           </motion.div>

//           {/* Get Consultation Button */}
//           <motion.a
//   href="/consultation" // 🔁 change to your link (e.g., "#consultation")
//   className="consultation-btn mt-12 inline-block"
//   variants={buttonVariants}
//   initial="hidden"
//   animate="visible"
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.98 }}
//   aria-label="Get a free consultation"
// >
//   Get Consultation
// </motion.a>

//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export default function ThemedBanner() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const yPoster = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yCTA = useTransform(scrollYProgress, [0, 1], [0, -40]);
  
  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX / innerWidth - 0.5) * 2;
      const yPct = (clientY / innerHeight - 0.5) * 2;
      mouseX.set(xPct * 20);
      mouseY.set(yPct * 20);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.85,
      rotateX: -75,
      filter: "blur(10px)",
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.85,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 12,
        delay: 1,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&family=Inter:wght@600;700&display=swap');
        
        .poster-wrapper { 
          width: 100%; 
          max-width: 1200px; 
          position: relative;
          filter: drop-shadow(0 0 80px rgba(0,0,0,0.05));
        }
        
        .poster { 
          position: relative; 
          display: grid; 
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
          grid-template-columns: 1fr 1fr 1fr 1fr; 
          overflow: hidden;
          perspective: 1000px;
        }
        
        .poster span:not(.pop-out) { overflow: hidden; }
        
        .poster span { 
          font-size: 38vw; 
          line-height: 0.5; 
          font-family: 'Space Grotesk', 'Work Sans', system-ui, sans-serif;
          font-weight: 900;
          letter-spacing: -0.02em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @media (min-width: 768px) {
          .poster span { font-size: 22vw; }
        }
        
        .poster span:nth-child(odd) { 
          color: #000; 
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          text-shadow: 2px 2px 4px rgba(0,0,0,0.05);
        }
        
        .poster span:nth-child(even) { 
          color: #fff; 
          background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
          text-shadow: 2px 2px 8px rgba(255,255,255,0.1);
        }
        
        .poster span:hover {
          transform: scale(1.02) translateZ(10px);
          filter: brightness(1.1);
        }
        
        .poster .reverse-color:nth-child(odd) { 
          color: #fff; 
          background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
        }
        
        .poster .reverse-color:nth-child(even) { 
          color: #000; 
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
        }
        
        .poster .small-text { 
          align-self: center; 
          font-size: 2.5vw; 
          padding: 2vw 4vw; 
          line-height: 1.4; 
          align-self: end;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
        }

        .poster .small-text.highlight {
          position: relative;
          color: #000;
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%) !important;
          display: inline-block;
          backdrop-filter: blur(10px);
        }
        
        .poster .small-text.highlight::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -0.6vw;
          height: 0.4vw;
          width: 0;
          background: linear-gradient(90deg, #000 0%, #333 100%);
          border-radius: 9999px;
          animation: underlineGrow 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        
        @keyframes underlineGrow {
          from { width: 0; }
          to { width: 85%; }
        }

        .letter-l.letter-l { margin-top: -7vw; font-size: 45vw; }
        .letter-k { text-indent: -2vw; }
        .letter-a.letter-a.letter-a { 
          background: linear-gradient(to right, #000 70%, #fff 70%);
        }
        .letter-e { text-indent: -2vw; }
        .letter-h { margin-top: -2vw; text-indent: -2vw; }
        .letter-w { text-indent: -6vw; }
        .letter-r { text-indent: -2vw; }
        .visibly-hidden { position: absolute; top: -9999px; left: -9999px; }

        .consultation-btn {
          position: relative;
          z-index: 30;
          background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
          color: white;
          border: 2px solid #000;
          padding: 1.2rem 3rem;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0,0,0,0.15), 0 0 0 0 rgba(0,0,0,0.1);
          overflow: hidden;
          border-radius: 2px;
        }
        
        .consultation-btn:hover {
          background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
          color: #000;
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.25), 0 0 80px rgba(0,0,0,0.1);
          border-color: #000;
        }
        
        .consultation-btn:active {
          transform: translateY(-2px);
        }
        
        .consultation-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .consultation-btn:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .consultation-btn::after {
          content: '→';
          position: absolute;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%) translateX(0);
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 1.3rem;
        }
        
        .consultation-btn:hover::after {
          opacity: 1;
          transform: translateY(-50%) translateX(8px);
        }
        
        @media (max-width: 768px) {
          .consultation-btn {
            padding: 1rem 2.2rem;
            font-size: 1rem;
          }
        }

        /* Floating gradient orbs */
        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          animation: float 20s ease-in-out infinite;
          pointer-events: none;
        }
        
        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%);
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(100,100,100,0.2) 0%, transparent 70%);
          bottom: -10%;
          right: -10%;
          animation-delay: -10s;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }

        /* Grid overlay */
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          opacity: 0.5;
        }
      `}</style>

      {/* Animated background elements */}
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="grid-overlay" />

      <div className="relative z-20 grid place-items-center text-center px-6 mt-25">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
          style={{ x, y }}
        >
          <div className="visibly-hidden">
            <h1>Uxinity</h1>
            <p>The future is UXinity † Design with intent. Build with impact.</p>
          </div>

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
            >
              <motion.span variants={itemVariants} whileHover={{ scale: 1.05 }}>U</motion.span>
              <motion.span className="letter-l" variants={itemVariants} whileHover={{ scale: 1.05 }}>X</motion.span>
              <motion.span className="letter-aa" variants={itemVariants} whileHover={{ scale: 1.05 }}>i</motion.span>
              <motion.span className="letter-k" variants={itemVariants} whileHover={{ scale: 1.05 }}>n</motion.span>
              <motion.span className="reverse-color letter-a" variants={itemVariants} whileHover={{ scale: 1.05 }}>i</motion.span>
              <motion.span className="reverse-color letter-t pop-out" variants={itemVariants} whileHover={{ scale: 1.05 }}>t</motion.span>
              <motion.span className="reverse-color letter-e" variants={itemVariants} whileHover={{ scale: 1.05 }}>y</motion.span>
              <motion.span className="small-text highlight" variants={itemVariants}>Uxinity</motion.span>

              <motion.span variants={itemVariants} whileHover={{ scale: 1.05 }}>S</motion.span>
              <motion.span variants={itemVariants} whileHover={{ scale: 1.05 }}>o</motion.span>
              <motion.span className="letter-h" variants={itemVariants} whileHover={{ scale: 1.05 }}>l</motion.span>
              <motion.span className="letter-w" variants={itemVariants} whileHover={{ scale: 1.05 }}>u</motion.span>
              <motion.span className="reverse-color" variants={itemVariants} whileHover={{ scale: 1.05 }}>t</motion.span>
              <motion.span className="reverse-color pop-out letter-r" variants={itemVariants} whileHover={{ scale: 1.05 }}>i</motion.span>
              <motion.span className="reverse-color" variants={itemVariants} whileHover={{ scale: 1.05 }}>o</motion.span>
              <motion.span className="reverse-color" variants={itemVariants} whileHover={{ scale: 1.05 }}>n</motion.span>
              <motion.span className="reverse-color small-text" variants={itemVariants}>
                The future is UXinity + Design with intent. Build with impact.
              </motion.span>

              <motion.span className="letter-w" variants={itemVariants} whileHover={{ scale: 1.05 }}>U</motion.span>
              <motion.span variants={itemVariants} whileHover={{ scale: 1.05 }}>X</motion.span>
              <motion.span variants={itemVariants} whileHover={{ scale: 1.05 }}>i</motion.span>
              <motion.span variants={itemVariants} whileHover={{ scale: 1.05 }}>n</motion.span>
              <motion.span variants={itemVariants} whileHover={{ scale: 1.05 }}>i</motion.span>
              <motion.span variants={itemVariants} whileHover={{ scale: 1.05 }}>t</motion.span>
              <motion.span variants={itemVariants} whileHover={{ scale: 1.05 }}>y</motion.span>
            </motion.div>
          </motion.div>

          <motion.a
            href="/consultation"
            className="consultation-btn mt-12 inline-block"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Get a free consultation"
            style={{ y: yCTA }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Get Consultation</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}