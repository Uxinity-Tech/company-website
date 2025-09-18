import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Our Services',
      href: '/services',
      subLinks: [
        { name: 'Web Development', href: '/services' },
        { name: 'UI/UX Design', href: '/services' },
        { name: 'Mobile Apps', href: '/services' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ], []);

  const socialLinks = [
  {
        name: 'Twitter',
        href: 'https://x.com/uxinity',
        icon: 'M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.1 0c-2.63 0-4.77 2.14-4.77 4.77 0 .37.04.73.12 1.08C7.69 5.7 4.07 3.8 1.64.9c-.41.7-.64 1.5-.64 2.37 0 1.64.83 3.1 2.1 3.95a4.48 4.48 0 01-2.16-.6v.06c0 2.29 1.63 4.2 3.78 4.63a4.5 4.5 0 01-2.15.08c.6 1.9 2.35 3.29 4.42 3.33A9.06 9.06 0 010 19.54a12.79 12.79 0 006.92 2.02c8.3 0 12.84-6.88 12.84-12.84l-.01-.58A9.18 9.18 0 0023 3z',
        color: 'hover:text-sky-400',
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/uxinity',
        icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 3a2 2 0 110 4 2 2 0 010-4z',
        color: 'hover:text-blue-500',
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com/uxinity',
        icon: 'M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6-2a1.5 1.5 0 11-3 .001A1.5 1.5 0 0118 5z',
        color: 'hover:text-pink-500',
      },
      {
        name: 'WhatsApp',
        href: 'https://wa.me/919876543210',
        icon: 'M16.988 3.012A9.96 9.96 0 0012 2C6.48 2 2 6.48 2 12c0 1.77.46 3.474 1.34 4.988L2 22l5.14-1.319A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10 0-2.65-1.04-5.15-2.9-7.01A9.94 9.94 0 0016.99 3.01zM12 20c-1.6 0-3.15-.44-4.49-1.27l-.32-.2-3.05.78.81-2.98-.21-.34A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8a7.95 7.95 0 015.66 2.34A7.95 7.95 0 0120 12c0 4.41-3.59 8-8 8zm4.29-5.71c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.75-1.79-.2-.47-.4-.41-.54-.42l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01s.86 2.34.99 2.49c.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z',
        color: 'hover:text-green-500',
      },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, color: '#facc15', transition: { duration: 0.2 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const ctaVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.06,
      backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, when: 'beforeChildren', staggerChildren: 0.1 },
    },
  };

  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - radius;
    const y = e.clientY - rect.top - radius;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'absolute bg-white/30 rounded-full scale-0 animate-ripple pointer-events-none';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-black backdrop-blur-sm text-white shadow-md transition-shadow duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="flex items-center"
        >
          <a href="/" className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="UXinity Logo"
              className="h-12 w-12 object-contain"
              loading="lazy"
            />
           <span className="ml-[-15px] mt-[10px] text-2xl font-extrabold tracking-wide text-white-800 sm:text-xl font-serif">
  Uxinity
</span>

          </a>
        </motion.div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.subLinks ? (
                <div
                  className="group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <motion.a
                    href={link.href}
                    className="text-sm font-medium text-white hover:text-yellow-400 transition"
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    {link.name}
                  </motion.a>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.name}
                            href={subLink.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-yellow-400 transition"
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-yellow-400 transition"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {link.name}
                </motion.a>
              )}
            </div>
          ))}
        </nav>

        <motion.button
          className="hidden lg:block relative px-6 py-2.5 text-sm font-semibold text-white rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          variants={ctaVariants}
          initial="idle"
          whileHover="hover"
          whileTap="tap"
          onClick={handleButtonClick}
          aria-label="Get Started"
        >
          <a href="/contact">
            <span className="relative z-10 flex items-center">
  Get Started
  <svg
    className="w-4 h-4 ml-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</span>

          </a>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
          <motion.span
            className="absolute inset-0 rounded-lg"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.15, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent)' }}
          />
        </motion.button>

      {/* Mobile menu toggle */}
{/* 9-Dot Grid Menu Toggle */}
<button
  className="lg:hidden w-12 h-12 bg-brown-700 rounded-md p-2 grid grid-cols-3 grid-rows-3 gap-1 focus:outline-none shadow-md"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
  aria-expanded={isMenuOpen}
>
  {Array.from({ length: 9 }).map((_, i) => (
    <motion.span
      key={i}
      className="w-2.5 h-2.5 bg-white rounded-full"
      animate={
        isMenuOpen
          ? { scale: [1, 0, 1], opacity: 0.7 }
          : { scale: 1, opacity: 1 }
      }
      transition={{ duration: 0.3, delay: i * 0.05 }}
    />
  ))}
</button>


      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              className="lg:hidden fixed top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="px-4 py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.subLinks ? (
                      <div>
                        <button
                          className="w-full text-left text-sm font-medium text-white hover:text-yellow-400 transition"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          aria-expanded={isServicesOpen}
                        >
                          {link.name}
                          <svg
                            className={`inline-block w-4 h-4 ml-2 transform ${isServicesOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              className="pl-4 mt-2 space-y-2"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {link.subLinks.map((subLink) => (
                                <a
                                  key={subLink.name}
                                  href={subLink.href}
                                  className="block text-sm text-gray-300 hover:text-yellow-400 transition"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subLink.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.a
                        href={link.href}
                        className="text-sm font-medium text-white hover:text-yellow-400 transition"
                        variants={linkVariants}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </motion.a>
                    )}
                  </div>
                ))}
                <motion.button
                  className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-5 py-3 rounded-lg font-semibold shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  variants={ctaVariants}
                  initial="idle"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={(e) => {
                    handleButtonClick(e);
                    setIsMenuOpen(false);
                  }}
                  aria-label="Get Started"
                >
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
                  <motion.span
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent)' }}
                  />
                </motion.button>
                <div className="flex justify-center space-x-4 pt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .animate-ripple {
          animation: ripple 0.6s linear;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;