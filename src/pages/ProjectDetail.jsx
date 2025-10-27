// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowLeft, Link2, Zap, Shield, Globe } from "lucide-react";
// import ToggleQuickMenu from "../components/ToggleQuickMenu";
// import ecart1 from "../assets/ecart1.jpg";
// import Market1 from "../assets/Market1.png";
// import Hotel1 from "../assets/Hotel1.png";
// import { useEffect, useState } from "react";

// export default function ProjectDetail() {
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   const projects = [
//     {
//       id: "mini-ecommerce",
//       title: "Mini E-Commerce Website",
//       category: "Web Application",
//       image: ecart1,
//       overview: `
// A modern e-commerce solution designed for small businesses to launch online stores quickly.
// This system includes an intuitive product listing interface, cart functionality, secure checkout, and real-time database integration.
// The goal was to provide a simple yet scalable shopping experience with minimal setup.
//       `,
//       features: [
//         "Dynamic product catalog with search and filters",
//         "User-friendly cart and checkout process",
//         "Admin dashboard for managing products and users",
//         "Responsive mobile-first UI with Tailwind CSS",
//         "Integrated with Node.js API and MongoDB",
//       ],
//       tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
//       process: [
//         {
//           phase: "Research & Planning",
//           desc: "Analyzed user needs and market trends for small businesses needing affordable digital storefronts.",
//         },
//         {
//           phase: "UI/UX Design",
//           desc: "Created a clean, intuitive shopping interface optimized for mobile and desktop users.",
//         },
//         {
//           phase: "Development",
//           desc: "Built frontend with React & Tailwind, backend APIs using Node.js and MongoDB for real-time updates.",
//         },
//         {
//           phase: "Testing & Launch",
//           desc: "Implemented security validation, cross-browser testing, and deployment on Netlify.",
//         },
//       ],
//       challenges: [
//         {
//           title: "Simplifying Admin Controls",
//           solution: "Developed an easy-to-use admin dashboard with CRUD operations and visual analytics.",
//         },
//         {
//           title: "Optimizing Speed on Low-End Devices",
//           solution: "Used lazy loading and code-splitting in React to reduce initial load time.",
//         },
//       ],
//       results: [
//         "Achieved 100+ daily active shoppers within the first month.",
//         "Reduced product upload time by 70% with streamlined admin dashboard.",
//         "Page load performance improved to 1.8s average.",
//       ],
//       stats: {
//         "Active Users": "100+",
//         Uptime: "99.9%",
//         Delivered: "Q3 2025",
//       },
//       live: "https://ecartszz.netlify.app/",
//     },
//     {
//       id: "hypermarket-dashboard",
//       title: "Hypermarket Billing & Business Dashboard",
//       category: "Enterprise Web System",
//       image: Market1,
//       overview: `
// A comprehensive business dashboard built for hypermarkets to streamline billing, inventory, and analytics in one place.
// The system enables managers to track sales, stock, customer data, and employee performance through a single interface.
//       `,
//       features: [
//         "Real-time billing and sales tracking",
//         "Inventory and supplier management",
//         "Advanced analytics dashboard with data charts",
//         "Role-based admin and staff logins",
//         "Automated daily sales reports and exports",
//       ],
//       tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
//       process: [
//         {
//           phase: "Discovery",
//           desc: "Collaborated with retail managers to identify manual pain points in daily operations.",
//         },
//         {
//           phase: "Architecture",
//           desc: "Defined backend data structures for multi-user environments with role-based access.",
//         },
//         {
//           phase: "Implementation",
//           desc: "Integrated Chart.js for analytics visualization and optimized database queries.",
//         },
//         {
//           phase: "Delivery & Support",
//           desc: "Provided staff training, documentation, and continuous maintenance.",
//         },
//       ],
//       challenges: [
//         {
//           title: "Handling Large Daily Transactions",
//           solution: "Implemented efficient batch processing and optimized MongoDB indexing.",
//         },
//         {
//           title: "Security & Data Access Control",
//           solution: "Used JWT authentication and granular access roles for admin/staff separation.",
//         },
//       ],
//       results: [
//         "Reduced manual billing time by 60%.",
//         "Real-time stock tracking improved supply accuracy by 40%.",
//         "Successfully scaled for multiple branch usage.",
//       ],
//       stats: {
//         "Core Features": "15",
//         Users: "50+ active",
//         Uptime: "99.8%",
//         Delivered: "Q3 2025",
//       },
//       live: "https://projectszzss.netlify.app/",
//     },
//     {
//       id: "hotel-booking",
//       title: "Hotel Booking System",
//       category: "Web Application",
//       image: Hotel1,
//       overview: `
// A fully-featured online hotel booking platform for managing reservations, rooms, and payments.
// Built to help hotels and resorts manage operations seamlessly with an elegant client-facing interface and powerful admin tools.
//       `,
//       features: [
//         "Live room availability and dynamic pricing",
//         "Secure online payment gateway",
//         "Admin dashboard for managing rooms, guests, and reports",
//         "Email notifications for bookings",
//         "Multi-role authentication (Admin, Manager, Guest)",
//       ],
//       tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
//       process: [
//         {
//           phase: "Ideation",
//           desc: "Designed for small hotels wanting to digitize booking processes.",
//         },
//         {
//           phase: "Development",
//           desc: "Built real-time availability system synced with MongoDB for instant updates.",
//         },
//         {
//           phase: "Integration",
//           desc: "Added secure payment system and automated email confirmations.",
//         },
//         {
//           phase: "Testing",
//           desc: "Simulated real-world booking load and optimized for performance.",
//         },
//       ],
//       challenges: [
//         {
//           title: "Managing Room Availability",
//           solution: "Used aggregation pipelines and cache layers to keep availability accurate and fast.",
//         },
//         {
//           title: "Payment Security",
//           solution: "Integrated secure payment APIs with token-based validation.",
//         },
//       ],
//       results: [
//         "Handled 500+ bookings in the first 3 months.",
//         "Cut manual reservation errors by 90%.",
//         "Achieved 99.9% uptime since launch.",
//       ],
//       stats: {
//         Rooms: "120+",
//         Bookings: "500+",
//         Uptime: "99.9%",
//         Delivered: "Q2 2025",
//       },
//       live: "https://pprojectzz.netlify.app/",
//     },
//   ];

//   const project = projects.find((p) => p.id === id);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <motion.div
//           className="w-16 h-16 border-4 border-black border-t-transparent rounded-full"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           aria-label="Loading spinner"
//         />
//       </div>
//     );
//   }

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white text-black">
//         <ToggleQuickMenu />
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Project not found. Coming soon...
//         </motion.p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white text-black font-sans">
//       <style>{`
//         .gradient-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
//         }
//         .button-shimmer {
//           position: relative;
//           overflow: hidden;
//         }
//         .button-shimmer::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
//           transition: left 0.6s ease;
//         }
//         .button-shimmer:hover::before {
//           left: 100%;
//         }
//         .card {
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
//         .card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 10px 20px rgba(0,0,0,0.15);
//         }
//       `}</style>

//       {/* Hero Section */}
//       <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black">
//         <div className="gradient-overlay" />
//         <div className="relative max-w-7xl mx-auto">
//           <motion.button
//             onClick={() => navigate(-1)}
//             className="group flex items-center gap-2 mb-8 text-white text-sm font-medium uppercase tracking-wide bg-black/30 rounded-full px-4 py-2 hover:bg-black/50 button-shimmer"
//             whileHover={{ scale: 1.05, x: -5 }}
//             transition={{ duration: 0.2 }}
//             aria-label="Go back to projects"
//           >
//             <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
//             Back to Projects
//           </motion.button>
//           <p className="tracking-[0.3em] text-sm md:text-base text-gray-300 font-roboto-mono uppercase mb-4">
//             About <span className="font-bold text-white">UXinity</span>
//           </p>
//           <motion.h1
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 font-roboto-condensed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {project.title}
//           </motion.h1>
//           <motion.p
//             className="text-lg sm:text-xl text-gray-300 font-medium"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             {project.category}
//           </motion.p>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-auto rounded-2xl shadow-lg mb-8 object-cover"
//             loading="lazy"
//           />
//           <h2 className="text-3xl font-bold mb-4 font-roboto-condensed">
//             Project Overview
//           </h2>
//           <p className="text-gray-800 leading-relaxed text-lg whitespace-pre-line">
//             {project.overview}
//           </p>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
//             Key Features
//           </h2>
//           <ul className="grid sm:grid-cols-2 gap-4">
//             {project.features.map((feature, i) => (
//               <motion.li
//                 key={i}
//                 className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm card border border-gray-200"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Zap className="h-5 w-5 text-black flex-shrink-0 mt-1" />
//                 <span className="text-gray-800 text-base">{feature}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Technology Stack Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
//           Technology Stack
//         </h2>
//         <div className="flex flex-wrap gap-3">
//           {project.tech.map((tech, i) => (
//             <motion.span
//               key={i}
//               className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 button-shimmer"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}
//             >
//               {tech}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* Development Process Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
//             Development Process
//           </h2>
//           <div className="space-y-6">
//             {project.process.map((step, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white rounded-xl p-6 shadow-sm card border border-gray-200"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h3 className="text-xl font-semibold text-black mb-2">
//                   {step.phase}
//                 </h3>
//                 <p className="text-gray-800 text-base">{step.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Challenges & Solutions Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
//           Challenges & Solutions
//         </h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {project.challenges.map((challenge, i) => (
//             <motion.div
//               key={i}
//               className="bg-white rounded-xl p-6 shadow-sm card border border-gray-200"
//               whileHover={{ y: -4 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Shield className="w-6 h-6 mb-2 text-black" />
//               <h4 className="text-lg font-semibold mb-2 text-black">
//                 {challenge.title}
//               </h4>
//               <p className="text-gray-800 text-base">{challenge.solution}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Results & Impact Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
//             Results & Impact
//           </h2>
//           <ul className="space-y-4">
//             {project.results.map((result, i) => (
//               <motion.li
//                 key={i}
//                 className="text-gray-800 text-lg"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <span className="inline-block w-2 h-2 bg-black rounded-full mr-2" />
//                 {result}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Stats & Live Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
//         <div className="grid sm:grid-cols-3 gap-6 mb-8">
//           {Object.entries(project.stats).map(([key, value], i) => (
//             <motion.div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow-sm card border border-gray-200"
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h4 className="text-xl font-bold text-black">{value}</h4>
//               <p className="text-gray-600 text-sm uppercase tracking-wide">
//                 {key}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {project.live && (
//           <motion.a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium button-shimmer hover:bg-gray-800"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//             aria-label={`Visit live project: ${project.title}`}
//           >
//             <Globe className="w-5 w-5" />
//             Visit Live Project
//           </motion.a>
//         )}
//       </section>

//       <ToggleQuickMenu />
//     </div>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Link2, Zap, Shield, Globe, } from "lucide-react";
import ToggleQuickMenu from "../components/ToggleQuickMenu";
import ecart1 from "../assets/ecart1.jpg";
import Market1 from "../assets/Market1.png";
import Hotel1 from "../assets/Hotel1.png";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: "mini-ecommerce",
      title: "Mini E-Commerce Website",
      category: "Web Application",
      image: ecart1,
      screenshots: [
        ecart1,
        // Replace with actual image paths
    //    ecart1,
    //    ecart1,
      ],
      overview: `
A modern e-commerce solution designed for small businesses to launch online stores quickly.
This system includes an intuitive product listing interface, cart functionality, secure checkout, and real-time database integration.
The goal was to provide a simple yet scalable shopping experience with minimal setup.
      `,
      features: [
        "Dynamic product catalog with search and filters",
        "User-friendly cart and checkout process",
        "Admin dashboard for managing products and users",
        "Responsive mobile-first UI with Tailwind CSS",
        "Integrated with Node.js API and MongoDB",
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      process: [
        {
          phase: "Research & Planning",
          desc: "Analyzed user needs and market trends for small businesses needing affordable digital storefronts.",
        },
        {
          phase: "UI/UX Design",
          desc: "Created a clean, intuitive shopping interface optimized for mobile and desktop users.",
        },
        {
          phase: "Development",
          desc: "Built frontend with React & Tailwind, backend APIs using Node.js and MongoDB for real-time updates.",
        },
        {
          phase: "Testing & Launch",
          desc: "Implemented security validation, cross-browser testing, and deployment on Netlify.",
        },
      ],
      challenges: [
        {
          title: "Simplifying Admin Controls",
          solution: "Developed an easy-to-use admin dashboard with CRUD operations and visual analytics.",
        },
        {
          title: "Optimizing Speed on Low-End Devices",
          solution: "Used lazy loading and code-splitting in React to reduce initial load time.",
        },
      ],
      results: [
        "Achieved 100+ daily active shoppers within the first month.",
        "Reduced product upload time by 70% with streamlined admin dashboard.",
        "Page load performance improved to 1.8s average.",
      ],
      stats: {
        "Active Users": "100+",
        Uptime: "99.9%",
        Delivered: "Q3 2025",
      },
      live: "https://ecartszz.netlify.app/",
    },
    {
      id: "hypermarket-dashboard",
      title: "Hypermarket Billing & Business Dashboard",
      category: "Enterprise Web System",
      image: Market1,
      screenshots: [
        Market1,
        // Replace with actual image paths
        // require("../assets/Market2.png"),
        // require("../assets/Market3.png"),
      ],
      overview: `
A comprehensive business dashboard built for hypermarkets to streamline billing, inventory, and analytics in one place.
The system enables managers to track sales, stock, customer data, and employee performance through a single interface.
      `,
      features: [
        "Real-time billing and sales tracking",
        "Inventory and supplier management",
        "Advanced analytics dashboard with data charts",
        "Role-based admin and staff logins",
        "Automated daily sales reports and exports",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      process: [
        {
          phase: "Discovery",
          desc: "Collaborated with retail managers to identify manual pain points in daily operations.",
        },
        {
          phase: "Architecture",
          desc: "Defined backend data structures for multi-user environments with role-based access.",
        },
        {
          phase: "Implementation",
          desc: "Integrated Chart.js for analytics visualization and optimized database queries.",
        },
        {
          phase: "Delivery & Support",
          desc: "Provided staff training, documentation, and continuous maintenance.",
        },
      ],
      challenges: [
        {
          title: "Handling Large Daily Transactions",
          solution: "Implemented efficient batch processing and optimized MongoDB indexing.",
        },
        {
          title: "Security & Data Access Control",
          solution: "Used JWT authentication and granular access roles for admin/staff separation.",
        },
      ],
      results: [
        "Reduced manual billing time by 60%.",
        "Real-time stock tracking improved supply accuracy by 40%.",
        "Successfully scaled for multiple branch usage.",
      ],
      stats: {
        "Core Features": "15",
        Users: "50+ active",
        Uptime: "99.8%",
        Delivered: "Q3 2025",
      },
      live: "https://projectszzss.netlify.app/",
    },
    {
      id: "hotel-booking",
      title: "Hotel Booking System",
      category: "Web Application",
      image: Hotel1,
      screenshots: [
        Hotel1,
        // Replace with actual image paths
        // require("../assets/Hotel2.png"),
        // require("../assets/Hotel3.png"),
      ],
      overview: `
A fully-featured online hotel booking platform for managing reservations, rooms, and payments.
Built to help hotels and resorts manage operations seamlessly with an elegant client-facing interface and powerful admin tools.
      `,
      features: [
        "Live room availability and dynamic pricing",
        "Secure online payment gateway",
        "Admin dashboard for managing rooms, guests, and reports",
        "Email notifications for bookings",
        "Multi-role authentication (Admin, Manager, Guest)",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      process: [
        {
          phase: "Ideation",
          desc: "Designed for small hotels wanting to digitize booking processes.",
        },
        {
          phase: "Development",
          desc: "Built real-time availability system synced with MongoDB for instant updates.",
        },
        {
          phase: "Integration",
          desc: "Added secure payment system and automated email confirmations.",
        },
        {
          phase: "Testing",
          desc: "Simulated real-world booking load and optimized for performance.",
        },
      ],
      challenges: [
        {
          title: "Managing Room Availability",
          solution: "Used aggregation pipelines and cache layers to keep availability accurate and fast.",
        },
        {
          title: "Payment Security",
          solution: "Integrated secure payment APIs with token-based validation.",
        },
      ],
      results: [
        "Handled 500+ bookings in the first 3 months.",
        "Cut manual reservation errors by 90%.",
        "Achieved 99.9% uptime since launch.",
      ],
      stats: {
        Rooms: "120+",
        Bookings: "500+",
        Uptime: "99.9%",
        Delivered: "Q2 2025",
      },
      live: "https://pprojectzz.netlify.app/",
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <motion.div
          className="w-16 h-16 border-4 border-black border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          aria-label="Loading spinner"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <ToggleQuickMenu />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Project not found. Coming soon...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <style>{`
        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
        }
        .button-shimmer {
          position: relative;
          overflow: hidden;
        }
        .button-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
        }
        .button-shimmer:hover::before {
          left: 100%;
        }
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="gradient-overlay" />
        <div className="relative max-w-7xl mx-auto">
          <motion.button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 mb-8 text-white text-sm font-medium uppercase tracking-wide bg-black/30 rounded-full px-4 py-2 hover:bg-black/50 button-shimmer"
            whileHover={{ scale: 1.05, x: -5 }}
            transition={{ duration: 0.2 }}
            aria-label="Go back to projects"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>
          <p className="tracking-[0.3em] text-sm md:text-base text-gray-300 font-roboto-mono uppercase mb-4">
            About <span className="font-bold text-white">UXinity</span>
          </p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 font-roboto-condensed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.category}
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-2xl shadow-lg mb-8 object-cover"
            loading="lazy"
          />
          <h2 className="text-3xl font-bold mb-4 font-roboto-condensed">
            Project Overview
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg whitespace-pre-line">
            {project.overview}
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
            Key Features
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm card border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="h-5 w-5 text-black flex-shrink-0 mt-1" />
                <span className="text-gray-800 text-base">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 button-shimmer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
            Development Process
          </h2>
          <div className="space-y-6">
            {project.process.map((step, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm card border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-black mb-2">
                  {step.phase}
                </h3>
                <p className="text-gray-800 text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
          Challenges & Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.challenges.map((challenge, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm card border border-gray-200"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <Shield className="w-6 h-6 mb-2 text-black" />
              <h4 className="text-lg font-semibold mb-2 text-black">
                {challenge.title}
              </h4>
              <p className="text-gray-800 text-base">{challenge.solution}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results & Impact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
            Results & Impact
          </h2>
          <ul className="space-y-4">
            {project.results.map((result, i) => (
              <motion.li
                key={i}
                className="text-gray-800 text-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-block w-2 h-2 bg-black rounded-full mr-2" />
                {result}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Screenshots Section */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-roboto-condensed">
            Project Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, i) => (
              <motion.div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  onError={(e) => (e.target.src = project.image)} // Fallback to primary image
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Stats & Live Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {Object.entries(project.stats).map(([key, value], i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm card border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-xl font-bold text-black">{value}</h4>
              <p className="text-gray-600 text-sm uppercase tracking-wide">
                {key}
              </p>
            </motion.div>
          ))}
        </div>

        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium button-shimmer hover:bg-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            aria-label={`Visit live project: ${project.title}`}
          >
            <Globe className="w-5 w-5" />
            Visit Live Project
          </motion.a>
        )}
      </section>

      <ToggleQuickMenu />
    </div>
  );
}