import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence, easeOut } from "framer-motion";


const NAV_LINKS = ["Home", "About", "Causes", "Donate", "Blogs", "Contact"];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

const handleScroll = (id) => {
  navigate("/");
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};
  

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-md shadow-sm border-b border-slate-100/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5 shrink-0"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white font-display font-bold text-lg leading-none">
              H
            </span>
            <span className="font-display text-body-lg font-extrabold tracking-tight text-slate-900">
              HopeBridge
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link, i) => {
              const isRoute = link === "Blogs";

               return isRoute ? (
                <Link
                 key={link}
                 to="/blogs"
                 initial={{ opacity: 0, y: -10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                 className="relative px-4 py-2 text-body-xs font-medium font-body text-slate-600 hover:text-emerald-700 rounded-lg transition-colors duration-200 group tracking-wide"
                  >
                 {link}
                  <span className="absolute bottom-1.5 left-4 right-4 h-px bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
                 ) : (
                     <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                      onClick={() => handleScroll(link.toLowerCase())}
                      className="relative px-4 py-2 text-body-xs font-medium font-body text-slate-600 hover:text-emerald-700 rounded-lg transition-colors duration-200 group tracking-wide"
                      >
                      {link}
                    <span className="absolute bottom-1.5 left-4 right-4 h-px bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                     </a>
                     );
                  })}
                </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <motion.a
              href="#donate"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-emerald-600 text-white text-body-xs font-semibold font-body shadow hover:bg-emerald-700 transition-colors duration-200 tracking-wide"
            >
              Donate Now
            </motion.a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-[5px]">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 w-6 bg-current origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-6 bg-current"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 w-6 bg-current origin-center"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="md:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="px-5 pb-5 pt-2 flex flex-col gap-1">
               {NAV_LINKS.map((link, i) => {
              const isRoute = link === "Blogs";

               return isRoute ? (
                <Link
                 key={link}
                 to="/blogs"
                 initial={{ opacity: 0, y: -10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                 className="relative px-4 py-2 text-body-xs font-medium font-body text-slate-600 hover:text-emerald-700 rounded-lg transition-colors duration-200 group tracking-wide"
                  >
                 {link}
                  <span className="absolute bottom-1.5 left-4 right-4 h-px bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
                 ) : (
                     <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                      onClick={() => handleScroll(link.toLowerCase())}
                      className="relative px-4 py-2 text-body-xs font-medium font-body text-slate-600 hover:text-emerald-700 rounded-lg transition-colors duration-200 group tracking-wide"
                      >
                      {link}
                    <span className="absolute bottom-1.5 left-4 right-4 h-px bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                     </a>
                     );
                  })}
                
              <motion.a
                href="#donate"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-2 text-center px-5 py-3 rounded-full bg-emerald-600 text-white text-body-sm font-semibold hover:bg-emerald-700 transition-colors"
              >
                Donate Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
