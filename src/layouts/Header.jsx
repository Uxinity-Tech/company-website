import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
  <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md border-b z-50">
      <div className="sticky flex justify-left py-2">
        <Link to="/">
          <img
            src={Logo}
            alt="UXinity"
            className="h-15 w-15 ml-10"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Header;

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.png";

// const Header = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm z-50">
//       <div className="flex justify-between items-center px-8 py-3 max-w-7xl mx-auto">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src={Logo}
//             alt="UXinity"
//             className="h-12 w-12 object-contain hover:scale-105 transition-transform duration-300"
//           />
//           {/* <span className="font-extrabold text-lg text-gray-800 tracking-tight">
//             UXinity
//           </span> */}
//         </Link>

//         {/* Brochure Button */}
//         <motion.div
//           whileHover={{
//             scale: 1.05,
//             boxShadow: "0 8px 25px rgba(247, 37, 133, 0.3)",
//           }}
//           whileTap={{ scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <Link
//             to="/brochure"
//             className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 rounded-full shadow-md group hover:shadow-xl"
//           >
//             <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//             <span className="relative flex items-center gap-2">
//               📘 Brochure
//             </span>
//           </Link>
//         </motion.div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
