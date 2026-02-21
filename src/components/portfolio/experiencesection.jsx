import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "CNH Industrial",
    role: "Analista de BI",
    period: "Março 2024 — Agosto 2025",
    location: "Curitiba, Paraná, Brasil",
    responsibilities: [
      "Desenvolvimento de dashboards analíticos em Power BI com KPIs estratégicos, utilizados por gerentes e 2 equipes para tomada de decisões, otimizando em 30% o tempo de análises",
      "Manipulação e processamento de big data em Databricks com SQL e ETL usando Power BI para extração e tratamento de grandes volumes de dados operacionais",
      "Automação de processos críticos com Power Automate e integração com Power Apps e SharePoint",
      "Geração de insights estratégicos com Python para análise de dados operacionais e identificação de tendências",
      "Automação de relatórios gerenciais com macros no Excel, economizando 30 minutos por dia",
      "Desenvolvimento de soluções de BI para dashboards de Produção, Financeiro e RH",
    ],
  },
  {
    company: "FixFacil Assistência Virtual",
    role: "Assistente de desenvolvimento de sistemas",
    period: "Dezembro 2023 — Junho 2024",
    location: "Curitiba, Paraná, Brasil",
    responsibilities: [
      "Suporte ao desenvolvimento e manutenção de sistemas em startup de tecnologia em fase inicial",
      "Criação, alteração e manutenção de páginas de um sistema de gerenciamento de cotações de carnes, utilizando HTML, CSS e JavaScript",
      "Manutenção de sistema de controle de estoque",
      "Uso de ferramentas de IA (ChatGPT) para acelerar o desenvolvimento, resolver problemas e adaptar funcionalidades existentes, incluindo código em PHP",
      "Desenvolvimento de protótipo de landing page no Wix Studio para instituição de ensino superior",
    ],
  },
  {
    company: "Prefeitura Municipal de Curitiba",
    role: "Agente da Cidadania / Professor Assistente de Triathlon",
    period: "Abril 2022 — Abril 2024",
    location: "Curitiba, Paraná, Brasil",
    responsibilities: [
      "Atuação como agente da cidadania e professor assistente de triathlon, com suporte às atividades esportivas e educativas",
      "Organização e preparação dos equipamentos de natação e ciclismo",
      "Acompanhamento e cuidado das crianças durante os treinos e provas",
      "Contribuição para a segurança, disciplina e bom andamento das atividades",
    ],
  },
];

export default function ExperienceSection() {
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
            // experiência
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
            Trajetória profissional<span className="text-[#39FF14]">.</span>
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