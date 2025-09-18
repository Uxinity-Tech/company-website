import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const linkVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      color: '#60a5fa',
      transition: { duration: 0.3 },
    },
  };

  const socialVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.2,
      color: '#2563eb',
      transition: { duration: 0.3 },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-blue-950 text-gray-300 font-poppins py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-label="Website Footer"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
        {/* Navigation Links */}
        <motion.div className="space-y-4 text-center sm:text-left" variants={containerVariants}>
          <motion.h3 className="text-lg sm:text-xl font-semibold text-blue-400" variants={itemVariants}>
          Uxinity
          </motion.h3>
         <ul className="space-y-2">
  {[
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ].map((link, i) => (
    <motion.li key={i} variants={itemVariants}>
      <motion.a
        href={link.path}
        className="text-sm sm:text-base hover:text-blue-400 transition-colors"
        variants={linkVariants}
        initial="idle"
        whileHover="hover"
      >
        {link.name}
      </motion.a>
    </motion.li>
  ))}
</ul>

        </motion.div>

        {/* Contact Information */}
        <motion.div className="space-y-4 text-center sm:text-left" variants={containerVariants}>
          <motion.h3 className="text-lg sm:text-xl font-semibold text-blue-400" variants={itemVariants}>
            Contact Us
          </motion.h3>
          <motion.ul className="space-y-2 text-sm sm:text-base" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              <a href="mailto:info@uxinity.com" className="hover:text-blue-400 transition-colors">
                Uxinityofficial@gmail.com
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                +91 9446068542
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              {/* <span>123 Innovation St, Tech City, TC 12345</span> */}
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Social Media */}
       <motion.div className="space-y-4 text-center sm:text-left" variants={containerVariants}>
  <motion.h3
    className="text-lg sm:text-xl font-semibold text-blue-400"
    variants={itemVariants}
  >
    Follow Us
  </motion.h3>

  <motion.div
    className="flex justify-center sm:justify-start gap-5"
    variants={containerVariants}
  >
    {[
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
    ].map((social, i) => (
      <motion.a
        key={i}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-300 transition-colors duration-300 ${social.color}`}
        variants={socialVariants}
        initial="idle"
        whileHover="hover"
        aria-label={`Follow on ${social.name}`}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d={social.icon} />
        </svg>
      </motion.a>
    ))}
  </motion.div>
</motion.div>

      </div>

      {/* Copyright */}
      <motion.div
        className="mt-8 pt-8 border-t border-blue-400/30 text-center text-sm sm:text-base"
        variants={itemVariants}
      >
        <p>&copy; {currentYear} UXinity. All rights reserved.</p>
      </motion.div>

      <style>{`
        footer a:hover {
          text-decoration: none;
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;