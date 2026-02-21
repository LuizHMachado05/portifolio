import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, FileText, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "B2 First Certificate",
    issuer: "Harvard University",
    date: "Ago 2025",
    description: "Qualificação internacionalmente reconhecida de proficiência em inglês.",
    icon: Award,
    color: "#39FF14",
  },
  {
    title: "Formação Power BI: do Zero ao Pro",
    issuer: "DataDriven",
    date: "Abr 2025",
    description: "Formação completa em Power BI para análise e visualização de dados.",
    icon: BookOpen,
    color: "#00f0ff",
  },
];

const publications = [
  {
    title: "Proposta de mapeamento de aspectos e impactos ambientais em uma indústria automobilística",
    venue: "Inova+ — Volvo",
    image: "/projetos/Artigo.png",
    url: "http://app.fiepr.org.br/revistacientifica/index.php/inovamais/article/view/831/735",
  },
  {
    title: "Certificação de qualidade em engenharia de requisitos: estudo de caso em uma indústria de automação",
    venue: "Inova+ — Selletra",
    image: "/projetos/selletra.png",
    url: "http://app.fiepr.org.br/revistacientifica/index.php/inovamais/article/view/889",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#39FF14] text-sm font-mono tracking-widest uppercase mb-4 block">
            // certificados & publicações
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">
            Conquistas<span className="text-[#39FF14]">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="group relative p-6 rounded-2xl border border-gray-800/50 bg-gradient-to-b from-[#111] to-[#0a0a0a] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4 }}
            >
              <div
                className="absolute top-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${cert.color}40, transparent)` }}
              />
              <div className="flex items-start justify-between mb-4">
                <cert.icon size={28} style={{ color: cert.color }} />
                <span className="text-xs font-mono text-gray-600">{cert.date}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{cert.title}</h3>
              <p className="text-sm mb-3" style={{ color: cert.color }}>{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-white font-semibold text-xl mb-6 flex items-center gap-3">
            <FileText size={20} className="text-[#39FF14]" />
            Artigos Científicos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {publications.map((pub, i) => (
              <motion.a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-gray-800/50 bg-gradient-to-b from-[#111] to-[#0a0a0a] overflow-hidden hover:border-[#39FF14]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.08)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0d]">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#0a0a0a]/90 border border-gray-800">
                    <ExternalLink size={16} className="text-[#39FF14]" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-white font-medium text-sm leading-snug group-hover:text-[#39FF14] transition-colors">"{pub.title}"</p>
                  <p className="text-gray-500 text-xs mt-2">{pub.venue}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}