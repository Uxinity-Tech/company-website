import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png';
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="UXinity" className="h-15 w-15" />
            <span className="text-xl font-bold">UXinity</span>

          </div>
        </div>
        <div>
          <h4 className="font-medium mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Uxinityofficial@gmail.com</li>
            <li>+91 9446068542</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Follow Us</h4>
          <p className="text-sm text-muted-foreground">Stay connected for updates</p>
        </div>
      </div>
      <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
        © 2025 UXinity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
