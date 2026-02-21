import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/languagecontext";

export default function HeroSection() {
  const { t } = useLanguage();
  const titles = t.hero.titles;
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 80);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  const displayedText = titles[titleIndex].substring(0, charIndex);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(57,255,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[180px] opacity-20"
        style={{ background: "radial-gradient(circle, #39FF14, transparent)" }}
        animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[160px] opacity-10 right-0 top-1/4"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent)" }}
        animate={{ x: [0, -60, 60, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#39FF14]/20 bg-[#39FF14]/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
            <span className="text-[#39FF14] text-sm font-medium tracking-wider uppercase">
              {t.hero.available}
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Luiz Henrique
          <br />
          <span className="bg-gradient-to-r from-[#39FF14] via-[#00f0ff] to-[#39FF14] bg-clip-text text-transparent">
            Machado
          </span>
        </motion.h1>

        <motion.div
          className="h-10 sm:h-12 mb-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-xl sm:text-2xl text-gray-400 font-light">
            {displayedText}
          </span>
          <span className="w-[2px] h-7 bg-[#39FF14] ml-1 animate-pulse" />
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-3 text-gray-500 text-sm mb-10 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-[#39FF14]" />
            {t.hero.location}
          </span>
          <span className="hidden sm:inline text-gray-700">•</span>
          <span className="flex items-center gap-1.5">
            <Mail size={14} className="text-[#39FF14]" />
            machadoluiz659@gmail.com
          </span>
          <span className="hidden sm:inline text-gray-700">•</span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-[#39FF14]" />
            +55 41 98732-1919
          </span>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://github.com/LuizHMachado05"
            target="_blank"
            rel="noreferrer"
            className="group relative w-12 h-12 rounded-xl border border-gray-800 bg-[#111] flex items-center justify-center hover:border-[#39FF14]/50 transition-all duration-300"
          >
            <Github size={20} className="text-gray-400 group-hover:text-[#39FF14] transition-colors" />
            <div className="absolute inset-0 rounded-xl bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://www.linkedin.com/in/luiz-henrique-da-silva-machado/"
            target="_blank"
            rel="noreferrer"
            className="group relative w-12 h-12 rounded-xl border border-gray-800 bg-[#111] flex items-center justify-center hover:border-[#00f0ff]/50 transition-all duration-300"
          >
            <Linkedin size={20} className="text-gray-400 group-hover:text-[#00f0ff] transition-colors" />
            <div className="absolute inset-0 rounded-xl bg-[#00f0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="mailto:machadoluiz659@gmail.com"
            className="group relative w-12 h-12 rounded-xl border border-gray-800 bg-[#111] flex items-center justify-center hover:border-[#39FF14]/50 transition-all duration-300"
          >
            <Mail size={20} className="text-gray-400 group-hover:text-[#39FF14] transition-colors" />
            <div className="absolute inset-0 rounded-xl bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} className="text-gray-600" />
      </motion.div>
    </section>
  );
}