import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "Sistema de Gerenciamento Industrial",
    date: "Ago 2025",
    description:
      "Sistema web de gerenciamento de projetos industriais do Power Mill com arquitetura full-stack: Frontend (HTML5, CSS3, JavaScript responsivo), Backend (Node.js com APIs RESTful), Banco de Dados (MongoDB), Deploy (Vercel e Render).",
    tags: ["Node.js", "MongoDB", "JavaScript", "REST API", "Vercel", "Render", "React", "Tailwind CSS"],
    image: "/projetos/simoldes1.png",
    color: "#39FF14",
  },
  {
    title: "Dashboards Interativos Power BI",
    date: "Mar 2024",
    description:
      "Desenvolvimento de dashboards para análise de dados com filtros dinâmicos, indicadores KPI e gráficos interativos para diversos setores (Produção, Financeiro e RH).",
    tags: ["Power BI", "SQL", "Databricks", "ETL", "KPIs"],
    image: "/projetos/powerbi.png",
    color: "#00f0ff",
  },
  {
    title: "Dashboard de KPIs Empresarial",
    date: "nov de 2024",
    description:
      "Desenvolvimento de um dashboard interativo de KPIs para apoiar a tomada de decisão gerencial, consolidando indicadores operacionais e de negócio em uma única solução analítica.",
    tags: ["Power BI", "SQL", "Databricks", "ETL", "KPIs"],
    image: "/projetos/empresadash.jpg",
    color: "#00f0ff",
  },
  {
    title: "Site Portfólio Pessoal",
    date: "Abr 2024",
    description:
      "Criação de site responsivo com HTML, CSS e JavaScript para apresentação de projetos e contato profissional com design moderno e otimizado para SEO.",
    tags: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsivo"],
    image: "/projetos/portfolio.jpeg",
    color: "#39FF14",
  },
  {
    title: "Jogo RPG com Python",
    date: "Out 2025",
    description:
      "Jogo de perguntas e respostas com temática de batalha em turnos no estilo RPG utilizando Python e biblioteca Pygame, implementando lógica de programação avançada.",
    tags: ["Python", "Pygame", "Game Dev", "OOP"],
    image: "/projetos/jogo.jpg",
    color: "#00f0ff",
  },
  {
    title: "Dashboard Web de Gerencialmento de impressoras 3d",
    date: "Dez 2025",
    description:
      "Desenvolvimento de um dashboard web para gerenciamento e monitoramento de impressoras 3d, contando com indicadores de distancia do eixo e status da impressora",
    tags: ["Docker", "HTML5", "CSS3", "JavaScript", "Node-RED"],
    image: "/projetos/metabee.png",
    color: "#39FF14",
  },
  {
    title: "Enciclopédia de Mobs – Projeto Web",
    date: "Jul 2023",
    description:
      "Site educacional com interface interativa apresentando mobs inspirados no Minecraft.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/projetos/minecraft.png",
    color: "#39FF14",
  },
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const project = projects[current];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#39FF14] text-sm font-mono tracking-widest uppercase mb-4 block">
            // projetos
          </span>
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Projetos em destaque<span className="text-[#39FF14]">.</span>
            </h2>
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl border border-gray-800 bg-[#111] flex items-center justify-center hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all"
              >
                <ChevronLeft size={18} className="text-gray-400" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-xl border border-gray-800 bg-[#111] flex items-center justify-center hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all"
              >
                <ChevronRight size={18} className="text-gray-400" />
              </button>
            </div>
          </div>
        </motion.div>

        <div ref={containerRef} className="relative overflow-hidden rounded-3xl">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gradient-to-br from-[#111] to-[#0d0d0d] border border-gray-800/50 rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 lg:h-[420px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111]" />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider"
                  style={{
                    color: project.color,
                    backgroundColor: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  {project.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-800 text-gray-400 bg-[#0a0a0a] hover:border-gray-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="relative h-2 rounded-full transition-all duration-500"
              style={{
                width: i === current ? 32 : 8,
                backgroundColor: i === current ? "#39FF14" : "#333",
              }}
            >
              {i === current && (
                <div className="absolute inset-0 rounded-full bg-[#39FF14] animate-pulse opacity-40" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-xl border border-gray-800 bg-[#111] flex items-center justify-center"
          >
            <ChevronLeft size={18} className="text-gray-400" />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-xl border border-gray-800 bg-[#111] flex items-center justify-center"
          >
            <ChevronRight size={18} className="text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}