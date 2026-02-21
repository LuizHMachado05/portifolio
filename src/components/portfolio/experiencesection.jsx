import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/languagecontext";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const experiences = t.experience.experiences;

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#39FF14] text-sm font-mono tracking-widest uppercase mb-4 block">
            {t.experience.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
            {t.experience.title}<span className="text-[#39FF14]">.</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#39FF14]/50 via-[#39FF14]/20 to-transparent" />

          <div className="relative pl-12 sm:pl-24 space-y-16">
            {experiences.map((exp, expIndex) => (
              <div key={expIndex} className="relative">
                <div className="absolute left-0 sm:left-8 top-2 w-3 h-3 -translate-x-[6px] rounded-full bg-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.5)]" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 ml-4 sm:ml-5">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Building2 size={20} className="text-[#39FF14]" />
                      {exp.company}
                    </h3>
                    <p className="text-[#00f0ff] font-medium mt-1">{exp.role}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{exp.location}</p>
                  </div>
                  <span className="flex items-center gap-2 text-gray-500 text-sm mt-2 sm:mt-1 shrink-0">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-4 ml-4 sm:ml-5">
                  {exp.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#39FF14] transition-colors shrink-0" />
                      <span className="text-gray-400 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}