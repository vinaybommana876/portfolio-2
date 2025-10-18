import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Home, User, Code, Folder, Mail } from "lucide-react";

export default function Navbar({ currentIndex, heroItems }) {
  const [open, setOpen] = useState(false);

  const { topTextColor, bottomTextColor } = heroItems[currentIndex];

  const navLinks = [
    { name: "Home", href: "#Home", icon: <Home size={25} /> },
    { name: "About", href: "#about", icon: <User size={25} /> },
    { name: "Skills", href: "#skills", icon: <Code size={25} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={25} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={25} /> },
  ];
  console.log("topTextColor →", topTextColor, bottomTextColor);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="relative inline-block group">
          <h1
            className="relative z-10 text-3xl font-extrabold font-[Poppins]"
            style={{ color: topTextColor }}
          >
            PORTFOLIO
          </h1>

          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent 
                   translate-x-[-100%] group-hover:translate-x-[50%] 
                   transition-transform duration-700 ease-in-out blur-sm"
          ></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-2xl transition duration-300"
              style={{ color: topTextColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = topTextColor)}
            >
              {link.icon}
              {/* {link.name} */}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white/30 backdrop-blur-md border-t border-white/20"
          >
            <div className="flex flex-col items-center py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 text-black hover:text-${bottomTextColor}-600 transition text-lg`}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
