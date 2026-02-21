import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "Experiência",
    value: "CNH Industrial",
    desc: "Analista de BI",
  },
  {
    icon: GraduationCap,
    label: "Formação",
    value: "Eng. de Software",
    desc: "UniSenai - 2023/2026",
  },
  {
    icon: Globe,
    label: "Idiomas",
    value: "3 idiomas",
    desc: "PT | EN | ES",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#39FF14] text-sm font-mono tracking-widest uppercase mb-4 block">
            // sobre mim
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Quem sou eu<span className="text-[#39FF14]">.</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Estudante de Engenharia de Software com sólida vivência corporativa em{" "}
          <span className="text-white font-medium">Business Intelligence</span> e{" "}
          <span className="text-white font-medium">Análise de Dados</span> na CNH Industrial.
          Experiência prática na construção de dashboards estratégicos (Power BI),
          manipulação de dados (SQL/Databricks) e automação de processos que geraram{" "}
          <span className="text-[#39FF14] font-semibold">30% de ganho em eficiência operacional</span>.
          Atualmente, direciono meu foco para Engenharia de Dados e Software,
          unindo minha base analítica com habilidades de desenvolvimento Full Stack.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="group relative p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-b from-[#111] to-[#0a0a0a] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <item.icon size={28} className="text-[#39FF14] mb-4" />
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-white text-xl font-semibold mb-1">{item.value}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}