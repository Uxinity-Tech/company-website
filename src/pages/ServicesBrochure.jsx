// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { ChevronLeft, ChevronRight, Download, Mail, Phone, Globe, Award, Users, Zap, Target, TrendingUp, Sparkles } from 'lucide-react';

// const BookBrochure = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [touchStartX, setTouchStartX] = useState(0);
//   const [touchEndX, setTouchEndX] = useState(0);
//   const containerRef = useRef(null);

//   // Mobile detection
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Touch handlers for swipe navigation
//   const handleTouchStart = (e) => {
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEndX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStartX || !touchEndX) return;
    
//     const diff = touchStartX - touchEndX;
//     const threshold = 50; // Minimum swipe distance

//     if (Math.abs(diff) > threshold) {
//       if (diff > 0) {
//         // Swipe left -> next page
//         nextPage();
//       } else {
//         // Swipe right -> previous page
//         prevPage();
//       }
//     }

//     // Reset
//     setTouchStartX(0);
//     setTouchEndX(0);
//   };

//   const nextPage = useCallback(() => {
//     if (currentPage < pages.length - 1 && !isAnimating) {
//       setIsAnimating(true);
//       setCurrentPage(currentPage + 1);
//       setTimeout(() => setIsAnimating(false), 800);
//     }
//   }, [currentPage, isAnimating]);

//   const prevPage = useCallback(() => {
//     if (currentPage > 0 && !isAnimating) {
//       setIsAnimating(true);
//       setCurrentPage(currentPage - 1);
//       setTimeout(() => setIsAnimating(false), 800);
//     }
//   }, [currentPage, isAnimating]);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowRight') nextPage();
//       if (e.key === 'ArrowLeft') prevPage();
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [nextPage, prevPage]);

//   const pages = [
//     // Page 1 - Cover with Hero Image
//     {
//       left: {
//         bg: 'bg-black',
//         content: (
//           <div className="h-full flex flex-col items-center justify-center text-white p-4 md:p-10 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-purple-500/20"></div>
//             <div className="relative z-10 text-center">
//               <div className="mb-4 md:mb-6">
//                 <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 text-pink-400" />
//               </div>
//               <h1 className="text-3xl md:text-6xl font-black mb-2 md:mb-4 bg-gradient-to-r from-pink-400 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent leading-tight">
//                 UXinity
//               </h1>
//               <div className="w-24 h-0.5 md:w-32 md:h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4 md:mb-6"></div>
//               <p className="text-lg md:text-2xl font-light tracking-wide mb-4 md:mb-8">Digital Excellence</p>
//               <p className="text-xs md:text-sm opacity-80 max-w-xs mx-auto leading-relaxed px-2">
//                 Transforming Ideas Into Extraordinary Digital Experiences
//               </p>
//             </div>
//             {/* Hero Image Section */}
//             {!isMobile && (
//               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent">
//                 <div className="relative h-full">
//                   <img 
//                     src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
//                     alt="Digital Innovation" 
//                     className="absolute inset-0 w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30"></div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )
//       },
//       right: {
//         bg: 'bg-white',
//         content: (
//           <div className="h-full p-4 md:p-10 flex flex-col justify-center">
//             <div className="space-y-4 md:space-y-6">
//               <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">Welcome to Innovation</h2>
//               <p className="text-gray-700 leading-relaxed text-base md:text-lg">
//                 We are a <span className="font-semibold text-black">creative digital agency</span> specializing in web development, UI/UX design, and digital transformation.
//               </p>
//               <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                 Our mission is to craft exceptional digital experiences that drive business growth, inspire user engagement, and push the boundaries of what's possible online.
//               </p>
//               <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-3'} gap-2 md:gap-4 pt-2 md:pt-4`}>
//                 <div className="text-center">
//                   <div className="text-2xl md:text-3xl font-bold text-black">150+</div>
//                   <div className="text-xs md:text-xs text-gray-600 mt-1">Projects</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl md:text-3xl font-bold text-black">50+</div>
//                   <div className="text-xs md:text-xs text-gray-600 mt-1">Clients</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl md:text-3xl font-bold text-black">98%</div>
//                   <div className="text-xs md:text-xs text-gray-600 mt-1">Satisfaction</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       }
//     },
//     // Page 2 - Services with Images
//     {
//       left: {
//         bg: 'bg-white',
//         content: (
//           <div className="h-full p-4 md:p-10 flex flex-col justify-center">
//             <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 md:mb-8">Our Services</h2>
//             <div className="space-y-4 md:space-y-5">
//               <div className="border-l-4 border-black pl-3 md:pl-4 hover:pl-5 md:hover:pl-6 transition-all">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Globe className="w-4 h-4 md:w-5 md:h-5 text-black" />
//                   <h3 className="font-bold text-lg md:text-xl text-black">Web Development</h3>
//                 </div>
//                 <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
//                   Build scalable, lightning-fast web applications using React, Node.js, and cutting-edge frameworks.
//                 </p>
//                 {!isMobile && (
//                   <img 
//                     src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                     alt="Web Development" 
//                     className="mt-2 w-full h-20 object-cover rounded shadow-lg"
//                   />
//                 )}
//               </div>
//               <div className="border-l-4 border-black pl-3 md:pl-4 hover:pl-5 md:hover:pl-6 transition-all">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-black" />
//                   <h3 className="font-bold text-lg md:text-xl text-black">UI/UX Design</h3>
//                 </div>
//                 <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
//                   Research-driven designs that captivate and convert intuitive interfaces.
//                 </p>
//                 {!isMobile && (
//                   <img 
//                     src="https://images.unsplash.com/photo-1559028005-4007820eb9e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                     alt="UI/UX Design" 
//                     className="mt-2 w-full h-20 object-cover rounded shadow-lg"
//                   />
//                 )}
//               </div>
//               <div className="border-l-4 border-black pl-3 md:pl-4 hover:pl-5 md:hover:pl-6 transition-all">
//                 <div className="flex items-center gap-2 mb-2">
//                   <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-black" />
//                   <h3 className="font-bold text-lg md:text-xl text-black">Digital Strategy</h3>
//                 </div>
//                 <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
//                   Elevate your brand with strategic branding, SEO optimization, and data-driven marketing.
//                 </p>
//                 {!isMobile && (
//                   <img 
//                     src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                     alt="Digital Strategy" 
//                     className="mt-2 w-full h-20 object-cover rounded shadow-lg"
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         )
//       },
//       right: {
//         bg: 'bg-black',
//         content: (
//           <div className="h-full p-4 md:p-10 flex flex-col justify-center text-white relative overflow-hidden">
//             {/* Background Image */}
//             {!isMobile && (
//               <div className="absolute inset-0 opacity-10">
//                 <img 
//                   src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
//                   alt="Innovation" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )}
//             <div className="relative z-10">
//               <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Why Choose Us?</h2>
//               <div className="space-y-4 md:space-y-6">
//                 <div className="flex items-start gap-3 md:gap-4">
//                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 font-bold text-base md:text-lg">
//                     1
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-base md:text-lg mb-1">Innovation First</h4>
//                     <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
//                       We stay ahead of trends, using cutting-edge tools and methodologies.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 md:gap-4">
//                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 font-bold text-base md:text-lg">
//                     2
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-base md:text-lg mb-1">User-Centric Approach</h4>
//                     <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
//                       Every pixel, every interaction is designed with your users in mind.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 md:gap-4">
//                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 font-bold text-base md:text-lg">
//                     3
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-base md:text-lg mb-1">Results Driven</h4>
//                     <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
//                       Measurable outcomes, proven ROI, and sustainable business growth.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       }
//     },
//     // Page 3 - Process & Tech with Images
//     {
//       left: {
//         bg: 'bg-black',
//         content: (
//           <div className="h-full p-4 md:p-10 flex flex-col justify-center text-white relative">
//             <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Our Process</h2>
//             <div className="space-y-3 md:space-y-4">
//               {[
//                 { num: '01', title: 'Discovery & Research', desc: 'Deep dive into your business goals', color: 'text-pink-400' },
//                 { num: '02', title: 'Strategy & Planning', desc: 'Create roadmaps and success metrics', color: 'text-fuchsia-400' },
//                 { num: '03', title: 'Design & Prototype', desc: 'Craft beautiful interfaces', color: 'text-purple-400' },
//                 { num: '04', title: 'Development & Testing', desc: 'Build with agile methodology', color: 'text-pink-300' },
//                 { num: '05', title: 'Launch & Optimize', desc: 'Deploy and continuously improve', color: 'text-fuchsia-300' }
//               ].map((step, index) => (
//                 <div key={index} className="flex gap-3 md:gap-4 items-start">
//                   <div className={`${step.color} font-bold text-xl md:text-2xl flex-shrink-0 w-8 md:w-10`}>{step.num}</div>
//                   <div>
//                     <h4 className="font-bold text-base md:text-lg mb-1">{step.title}</h4>
//                     <p className="text-xs md:text-sm text-gray-300">{step.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* Process Image */}
//             {!isMobile && (
//               <img 
//                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                 alt="Process" 
//                 className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover opacity-20"
//               />
//             )}
//           </div>
//         )
//       },
//       right: {
//         bg: 'bg-white',
//         content: (
//           <div className="h-full p-4 md:p-10 flex flex-col justify-center relative">
//             <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 md:mb-8">Technology Stack</h2>
//             <div className="space-y-4 md:space-y-6">
//               {[
//                 { icon: Zap, title: 'Frontend Excellence', tech: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
//                 { icon: Target, title: 'Backend Power', tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS'] },
//                 { icon: Award, title: 'Design Tools', tech: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator', 'After Effects'] }
//               ].map((section, index) => (
//                 <div key={index}>
//                   <h4 className="font-bold text-black mb-2 md:mb-3 flex items-center gap-2 text-base md:text-base">
//                     <section.icon className="w-4 h-4 md:w-5 md:h-5" />
//                     {section.title}
//                   </h4>
//                   <div className="flex flex-wrap gap-1 md:gap-2">
//                     {section.tech.map(tech => (
//                       <span key={tech} className="px-2 py-1 md:px-3 md:py-1 bg-black text-white text-xs font-semibold rounded-full">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* Tech Stack Visual */}
//             {!isMobile && (
//               <div className="absolute top-10 right-0 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-10"></div>
//             )}
//           </div>
//         )
//       }
//     },
//     // Page 4 - Portfolio with Image Gallery
//     {
//       left: {
//         bg: 'bg-white',
//         content: (
//           <div className="h-full p-4 md:p-10 flex flex-col justify-center">
//             <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">Recent Projects</h2>
//             <div className="space-y-3 md:space-y-4">
//               {[
//                 { title: 'E-Commerce Platform', desc: 'Modern marketplace with 50K+ users', tech: 'React • Node.js • Stripe', img: 'https://images.unsplash.com/photo-1556228573-58c97ce99b43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
//                 { title: 'Healthcare Dashboard', desc: 'HIPAA-compliant patient system', tech: 'Next.js • PostgreSQL • AWS', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
//                 { title: 'FinTech Mobile App', desc: 'Secure banking with real-time transactions', tech: 'React Native • Firebase', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
//               ].map((project, index) => (
//                 <div key={index} className="border-2 border-black p-3 md:p-4 hover:bg-black hover:text-white transition-all group relative overflow-hidden">
//                   {!isMobile && (
//                     <img 
//                       src={project.img} 
//                       alt={project.title} 
//                       className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity"
//                     />
//                   )}
//                   <div className="relative z-10">
//                     <h4 className="font-bold text-base md:text-lg mb-1">{project.title}</h4>
//                     <p className="text-xs md:text-sm mb-2 opacity-80">{project.desc}</p>
//                     <div className="text-xs font-semibold">{project.tech}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )
//       },
//       right: {
//         bg: 'bg-black',
//         content: (
//           <div className="h-full flex flex-col items-center justify-center text-white p-4 md:p-10 relative">
//             {/* Hero Contact Image */}
//             {!isMobile && (
//               <div className="absolute inset-0">
//                 <img 
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
//                   alt="Contact" 
//                   className="w-full h-full object-cover opacity-10"
//                 />
//               </div>
//             )}
//             <div className="relative z-10 text-center mb-6 md:mb-8">
//               <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Let's Connect</h2>
//               <p className="text-gray-300 text-base md:text-lg mb-1 md:mb-2">
//                 Ready to transform your digital presence?
//               </p>
//               <p className="text-sm md:text-sm text-gray-400">
//                 Schedule a free consultation today
//               </p>
//             </div>
            
//             <div className="space-y-2 md:space-y-3 w-full max-w-xs mb-6 md:mb-8">
//               <button className="w-full bg-white text-black py-2 md:py-3 px-4 md:px-6 rounded-none font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2 md:gap-3 text-sm">
//                 <Download size={16} className="md:size-18" />
//                 DOWNLOAD FULL BROCHURE
//               </button>
//               <button className="w-full bg-transparent border-2 border-white text-white py-2 md:py-3 px-4 md:px-6 rounded-none font-bold hover:bg-white hover:text-black transition text-sm">
//                 START YOUR PROJECT
//               </button>
//             </div>

//             <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
//               <div className="flex items-center gap-2 md:gap-3">
//                 <Mail className="w-3 h-3 md:w-4 md:h-4" />
//                 <span>hello@uxinity.com</span>
//               </div>
//               <div className="flex items-center gap-2 md:gap-3">
//                 <Phone className="w-3 h-3 md:w-4 md:h-4" />
//                 <span>+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center gap-2 md:gap-3">
//                 <Globe className="w-3 h-3 md:w-4 md:h-4" />
//                 <span>www.uxinity.com</span>
//               </div>
//             </div>

//             <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700 w-full text-center">
//               <p className="text-xs text-gray-500">© 2024 UXinity. All rights reserved.</p>
//             </div>
//           </div>
//         )
//       }
//     }
//   ];

//   // Mobile Responsive Container
//   const bookWidth = isMobile ? '100vw' : '900px';
//   const bookHeight = isMobile ? '80vh' : '600px';
//   const padding = isMobile ? 'p-2' : 'p-6';

//   return (
//     <div 
//       className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center ${padding}`}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="relative w-full max-w-full">
//         {/* Mobile Responsive Book Container */}
//         <div 
//           ref={containerRef}
//           className="relative mx-auto" 
//           style={{ 
//             width: bookWidth,
//             height: bookHeight,
//             perspective: isMobile ? '1000px' : '2500px',
//             transformStyle: 'preserve-3d',
//             touchAction: 'pan-y' // Prevents scrolling interference
//           }}
//         >
//           {/* Left Page - Mobile stacks content */}
//           <div 
//             className={`w-full md:w-1/2 h-full shadow-2xl transition-all duration-700 origin-right ${pages[currentPage].left.bg} ${isMobile ? 'md:absolute md:left-0' : 'absolute left-0'} ${isAnimating ? 'animate-fade-in' : ''}`}
//             style={{
//               transformStyle: 'preserve-3d',
//               transform: isAnimating && currentPage === 0 ? 'rotateY(-5deg)' : 'rotateY(0deg)',
//               boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
//             }}
//           >
//             <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
//               {pages[currentPage].left.content}
//             </div>
//           </div>

//           {/* Right Page */}
//           <div 
//             className={`w-full md:w-1/2 h-full shadow-2xl transition-all duration-700 origin-left ${pages[currentPage].right.bg} ${isMobile ? 'mt-4 md:absolute md:right-0' : 'absolute right-0'} ${isAnimating ? 'animate-flip' : ''}`}
//             style={{
//               transformStyle: 'preserve-3d',
//               transform: isAnimating ? 'rotateY(-180deg)' : 'rotateY(0deg)',
//               boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
//               zIndex: 2
//             }}
//           >
//             <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
//               {pages[currentPage].right.content}
//             </div>
//           </div>

//           {/* Book Spine - Hidden on mobile */}
//           {!isMobile && (
//             <div className="absolute left-1/2 top-0 w-2 h-full bg-gradient-to-b from-gray-600 via-gray-700 to-gray-600 transform -translate-x-1/2 z-10 shadow-lg"></div>
//           )}
//         </div>

//         {/* Responsive Navigation Buttons */}
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 0 || isAnimating}
//           className={`absolute left-2 md:left-[-80px] top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-4 rounded-full shadow-2xl transition-all z-20 ${
//             currentPage === 0 || isAnimating 
//               ? 'opacity-30 cursor-not-allowed' 
//               : 'hover:scale-110 hover:bg-black hover:text-white'
//           }`}
//         >
//           <ChevronLeft size={isMobile ? 20 : 28} />
//         </button>

//         <button
//           onClick={nextPage}
//           disabled={currentPage === pages.length - 1 || isAnimating}
//           className={`absolute right-2 md:right-[-80px] top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-4 rounded-full shadow-2xl transition-all z-20 ${
//             currentPage === pages.length - 1 || isAnimating 
//               ? 'opacity-30 cursor-not-allowed' 
//               : 'hover:scale-110 hover:bg-black hover:text-white'
//           }`}
//         >
//           <ChevronRight size={isMobile ? 20 : 28} />
//         </button>

//         {/* Responsive Page Counter */}
//         <div className={`absolute bottom-[-40px] md:bottom-[-60px] left-1/2 transform -translate-x-1/2 bg-black border-2 border-white px-3 md:px-6 py-2 md:py-3 rounded-none shadow-xl z-10`}>
//           <div className="flex items-center gap-2 md:gap-3">
//             <span className="text-white font-bold text-xs md:text-sm">
//               PAGE {currentPage + 1}
//             </span>
//             <div className="w-px h-3 md:h-4 bg-white"></div>
//             <span className="text-gray-400 text-xs md:text-sm">
//               OF {pages.length}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Swipe Instructions */}
//       {isMobile && (
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs text-center z-30">
//           <p>Swipe or tap arrows to navigate</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookBrochure;