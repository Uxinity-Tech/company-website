import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.png"; // Replace with your logo path
export default function Loader({ onLoadComplete }) {
  const [isComplete, setIsComplete] = useState(false);

  // Simulate loading completion after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      // Call parent callback if provided
      if (onLoadComplete) {
        setTimeout(() => onLoadComplete(), 2000);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={isComplete ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: isComplete ? 2 : 0 }}
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl bg-white"
        animate={{
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-5 blur-3xl bg-white"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative flex flex-col items-center">
        {!isComplete ? (
          // Loading State
          <motion.div
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 w-32 h-32 rounded-full border-2 border-white/20"
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 3, 
                ease: "linear" 
              }}
            />

            {/* Middle spinning arc */}
            <motion.div
              className="absolute inset-2 w-28 h-28 rounded-full border-4 border-transparent border-t-white border-r-white/60"
              animate={{ rotate: -360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                ease: "linear" 
              }}
            />

            {/* Inner pulsing circle */}
            <motion.div
              className="absolute inset-6 w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.5)",
                  "0 0 40px rgba(255, 255, 255, 0.8)",
                  "0 0 20px rgba(255, 255, 255, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Logo/Image - Replace src with your image URL */}
              <motion.img
                src={Logo}
                alt="Logo"
                className="w-14 h-14 object-contain"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Orbiting dots */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  marginLeft: "-6px",
                  marginTop: "-6px",
                }}
                animate={{
                  x: [
                    Math.cos((i * Math.PI) / 2) * 60,
                    Math.cos((i * Math.PI) / 2 + Math.PI * 2) * 60,
                  ],
                  y: [
                    Math.sin((i * Math.PI) / 2) * 60,
                    Math.sin((i * Math.PI) / 2 + Math.PI * 2) * 60,
                  ],
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        ) : (
          // Completion State
          <motion.div
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Success Circle with Checkmark */}
            <motion.div
              className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Expanding ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-white"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1 }}
              />
              
              {/* Checkmark */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M20 6L9 17l-5-5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </svg>
            </motion.div>

            {/* Particle burst effect */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                initial={{ 
                  x: 0, 
                  y: 0, 
                  scale: 0,
                  opacity: 1 
                }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 12) * 100,
                  y: Math.sin((i * Math.PI * 2) / 12) * 100,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Text section */}
        {!isComplete ? (
          <>
            {/* Loading text with stagger effect */}
            <motion.div
              className="mt-16 flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {["L", "o", "a", "d", "i", "n", "g"].map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-2xl font-bold text-white"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              
              {/* Animated dots */}
              <div className="flex gap-1 items-end pb-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Progress bar */}
            <div className="mt-8 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Status text */}
            <motion.p
              className="mt-4 text-sm font-medium text-white/60 tracking-widest"
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              PLEASE WAIT
            </motion.p>
          </>
        ) : (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Complete!</h2>
            <p className="text-white/60 tracking-widest text-sm">READY TO GO</p>
          </motion.div>
        )}
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20"
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20"
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </motion.div>
  );
}