import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { useLanguage } from "@/lib/languagecontext";

export default function FooterSection() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative py-20 px-6 border-t border-gray-800/50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#39FF14] text-sm font-mono tracking-widest uppercase mb-4 block">
            {t.footer.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.footer.title}<span className="text-[#39FF14]">?</span>
          </h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto">
            {t.footer.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="mailto:machadoluiz659@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#39FF14] text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300"
          >
            <Mail size={16} />
            machadoluiz659@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#39FF14] transition-colors">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#00f0ff] transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="tel:+5541987321919" className="text-gray-600 hover:text-[#39FF14] transition-colors">
            <Phone size={22} />
          </a>
        </motion.div>

        <p className="text-gray-700 text-xs flex items-center justify-center gap-1">
          {t.footer.madeBy} <Heart size={12} className="text-[#39FF14]" /> {t.footer.by} — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}