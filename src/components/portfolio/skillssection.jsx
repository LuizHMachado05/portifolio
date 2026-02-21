import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/languagecontext";

export default function SkillsSection() {
  const { t } = useLanguage();
  const skillGroups = t.skills.groups;

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#39FF14] text-sm font-mono tracking-widest uppercase mb-4 block">
            {t.skills.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
            {t.skills.title}<span className="text-[#39FF14]">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              className="p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-b from-[#111] to-[#0a0a0a]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * gi }}
            >
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-[#1a1a1a] text-gray-300 border border-gray-800 hover:border-[#39FF14]/40 hover:text-[#39FF14] hover:bg-[#39FF14]/5 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.03 * si + 0.1 * gi }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}