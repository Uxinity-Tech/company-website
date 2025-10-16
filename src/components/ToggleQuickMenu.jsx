import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ToggleQuickMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const menuListVariants = {
    closed: { opacity: 0, transition: { staggerChildren: 0, staggerDirection: -1 } },
    open: { opacity: 1, transition: { delayChildren: 0.05, staggerChildren: 0.06 } },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -6 },
    open: { opacity: 1, y: 0 },
  };

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50" ref={menuRef}>
      <nav className="relative">
        {/* Label */}
        <div
          className={`mx-auto mb-2 w-[72px] select-none rounded-md bg-white px-2 py-1 text-center text-xs font-semibold text-black shadow transition-all duration-300 ${
            menuOpen ? "w-[92px]" : ""
          }`}
        >
          <span className={`${menuOpen ? "hidden" : "block"}`}>Look!</span>
          <span className={`${menuOpen ? "block" : "hidden"} text-[11px] text-black`}>
            Choose!
          </span>
        </div>

        {/* Menu Container */}
        <div
          className={`relative mx-auto overflow-hidden border border-black bg-white px-1 transition-all duration-300 ${
            menuOpen ? "w-40 rounded-xl pb-1" : "w-10 rounded-full"
          }`}
          onMouseEnter={() => setMenuOpen(true)} // Open on hover
          onMouseLeave={() => setMenuOpen(false)} // Close when leaving
        >
          {/* Toggle Button */}
          <button
            type="button"
            aria-label="Toggle quick menu"
            onClick={() => setMenuOpen((v) => !v)} // Toggle on click
            className="absolute left-1/2 top-2 z-10 grid h-5 w-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black text-white transition-all duration-300"
          >
            <motion.span
              className="text-sm leading-none"
              animate={{ rotate: menuOpen ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              +
            </motion.span>
          </button>

          {/* Menu Items */}
          <motion.ul
            className={`transition-all duration-500 ${
              menuOpen ? "mt-8 opacity-100" : "mt-7 opacity-0"
            }`}
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            variants={menuListVariants}
          >
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "What We Do", path: "/expertise" },
              { label: "Our Work", path: "/service" },
              { label: "Projects", path: "/projects" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <motion.li
                key={item.path}
                className="mb-1 overflow-hidden"
                variants={menuItemVariants}
              >
                <a
                  href={item.path}
                  className={`block w-full text-center rounded-md bg-neutral-100 px-2 py-0 text-xs text-black hover:bg-black hover:text-white transition-colors ${
                    menuOpen ? "h-6" : "h-0 pointer-events-none"
                  }`}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </div>
  );
}
