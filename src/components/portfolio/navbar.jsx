import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/languagecontext";

const linkKeys = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "certificates", href: "#certificates" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = linkKeys.map(({ key, href }) => ({ label: t.nav[key], href }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-800/50" : ""
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => handleClick("#")} className="text-white font-bold text-lg tracking-tight">
            LH<span className="text-[#39FF14]">.</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-800 text-gray-400 text-sm hover:border-[#39FF14]/50 hover:text-[#39FF14] transition-colors"
              title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              <span className={lang === "pt" ? "font-semibold text-[#39FF14]" : ""}>PT</span>
              <span className="text-gray-600">|</span>
              <span className={lang === "en" ? "font-semibold text-[#39FF14]" : ""}>EN</span>
            </button>
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-gray-500 text-sm hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#39FF14] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="px-2.5 py-1 rounded-lg border border-gray-800 text-gray-400 text-xs font-medium"
            >
              {lang === "pt" ? "EN" : "PT"}
            </button>
            <button
              className="text-gray-400"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-2xl text-gray-300 hover:text-[#39FF14] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}