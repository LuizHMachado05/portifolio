export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Skills",
      certificates: "Certificados",
      contact: "Contato",
    },
    hero: {
      available: "Disponível para projetos",
      titles: [
        "Engenheiro de Software",
        "Engenheiro de Dados",
        "Desenvolvedor Full Stack",
        "Analista de BI",
      ],
      location: "Curitiba, PR",
    },
    about: {
      tag: "// sobre mim",
      title: "Quem sou eu",
      paragraph:
        "Estudante de Engenharia de Software com sólida vivência corporativa em Business Intelligence e Análise de Dados na CNH Industrial. Experiência prática na construção de dashboards estratégicos (Power BI), manipulação de dados (SQL/Databricks) e automação de processos que geraram 30% de ganho em eficiência operacional. Atualmente, direciono meu foco para Engenharia de Dados e Software, unindo minha base analítica com habilidades de desenvolvimento Full Stack.",
      highlightExp: "Experiência",
      highlightExpValue: "CNH Industrial",
      highlightExpDesc: "Analista de BI",
      highlightEdu: "Formação",
      highlightEduValue: "Eng. de Software",
      highlightEduDesc: "UniSenai - 2023/2026",
      highlightLang: "Idiomas",
      highlightLangValue: "3 idiomas",
      highlightLangDesc: "PT | EN | ES",
    },
    experience: {
      tag: "// experiência",
      title: "Trajetória profissional",
      experiences: [
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
      ],
    },
    projects: {
      tag: "// projetos",
      title: "Projetos em destaque",
      items: [
        {
          title: "Sistema de Gerenciamento Industrial",
          date: "Ago 2025",
          description:
            "Sistema web de gerenciamento de projetos industriais do Power Mill com arquitetura full-stack: Frontend (HTML5, CSS3, JavaScript responsivo), Backend (Node.js com APIs RESTful), Banco de Dados (MongoDB), Deploy (Vercel e Render).",
          tags: ["Node.js", "MongoDB", "JavaScript", "REST API", "Vercel", "Render", "React", "Tailwind CSS"],
        },
        {
          title: "Dashboards Interativos Power BI",
          date: "Mar 2024",
          description:
            "Desenvolvimento de dashboards para análise de dados com filtros dinâmicos, indicadores KPI e gráficos interativos para diversos setores (Produção, Financeiro e RH).",
          tags: ["Power BI", "SQL", "Databricks", "ETL", "KPIs"],
        },
        {
          title: "Dashboard de KPIs Empresarial",
          date: "nov de 2024",
          description:
            "Desenvolvimento de um dashboard interativo de KPIs para apoiar a tomada de decisão gerencial, consolidando indicadores operacionais e de negócio em uma única solução analítica.",
          tags: ["Power BI", "SQL", "Databricks", "ETL", "KPIs"],
        },
        {
          title: "Site Portfólio Pessoal",
          date: "Abr 2024",
          description:
            "Criação de site responsivo com HTML, CSS e JavaScript para apresentação de projetos e contato profissional com design moderno e otimizado para SEO.",
          tags: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsivo"],
        },
        {
          title: "Jogo RPG com Python",
          date: "Out 2025",
          description:
            "Jogo de perguntas e respostas com temática de batalha em turnos no estilo RPG utilizando Python e biblioteca Pygame, implementando lógica de programação avançada.",
          tags: ["Python", "Pygame", "Game Dev", "OOP"],
        },
        {
          title: "Dashboard Web de Gerencialmento de impressoras 3d",
          date: "Dez 2025",
          description:
            "Desenvolvimento de um dashboard web para gerenciamento e monitoramento de impressoras 3d, contando com indicadores de distancia do eixo e status da impressora",
          tags: ["Docker", "HTML5", "CSS3", "JavaScript", "Node-RED"],
        },
        {
          title: "Enciclopédia de Mobs – Projeto Web",
          date: "Jul 2023",
          description:
            "Site educacional com interface interativa apresentando mobs inspirados no Minecraft.",
          tags: ["HTML5", "CSS3", "JavaScript"],
        },
      ],
    },
    skills: {
      tag: "// habilidades",
      title: "Stack técnica",
      groups: [
        { title: "Linguagens", skills: ["Python", "SQL", "JavaScript", "HTML5", "CSS3"] },
        { title: "Bancos de Dados", skills: ["MongoDB", "SQL Server", "Databricks", "Big Data"] },
        {
          title: "Ferramentas & Tech",
          skills: ["Power BI", "Power Automate", "Power Apps", "Git", "Vercel", "Render", "APIs REST", "Node.js"],
        },
        { title: "Outros", skills: ["Excel Avançado", "SharePoint", "Gen AI", "Microsoft Project", "Web Dev"] },
      ],
    },
    certificates: {
      tag: "// certificados & publicações",
      title: "Conquistas",
      certs: [
        {
          title: "B2 First Certificate",
          issuer: "Harvard University",
          date: "Ago 2025",
          description: "Qualificação internacionalmente reconhecida de proficiência em inglês.",
        },
        {
          title: "Formação Power BI: do Zero ao Pro",
          issuer: "DataDriven",
          date: "Abr 2025",
          description: "Formação completa em Power BI para análise e visualização de dados.",
        },
      ],
      scientificArticles: "Artigos Científicos",
      publications: [
        {
          title: "Proposta de mapeamento de aspectos e impactos ambientais em uma indústria automobilística",
          venue: "Inova+ — Volvo",
        },
        {
          title: "Certificação de qualidade em engenharia de requisitos: estudo de caso em uma indústria de automação",
          venue: "Inova+ — Selletra",
        },
      ],
    },
    footer: {
      tag: "// contato",
      title: "Vamos conversar",
      subtitle: "Estou disponível para novos projetos e oportunidades. Entre em contato!",
      madeBy: "Feito com",
      by: "por Luiz Henrique Machado",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      available: "Available for projects",
      titles: [
        "Software Engineer",
        "Data Engineer",
        "Full Stack Developer",
        "BI Analyst",
      ],
      location: "Curitiba, PR",
    },
    about: {
      tag: "// about me",
      title: "Who I am",
      paragraph:
        "Software Engineering student with solid corporate experience in Business Intelligence and Data Analysis at CNH Industrial. Hands-on experience building strategic dashboards (Power BI), data manipulation (SQL/Databricks), and process automation that achieved a 30% gain in operational efficiency. Currently focusing on Data and Software Engineering, combining my analytical background with Full Stack development skills.",
      highlightExp: "Experience",
      highlightExpValue: "CNH Industrial",
      highlightExpDesc: "BI Analyst",
      highlightEdu: "Education",
      highlightEduValue: "Software Eng.",
      highlightEduDesc: "UniSenai - 2023/2026",
      highlightLang: "Languages",
      highlightLangValue: "3 languages",
      highlightLangDesc: "PT | EN | ES",
    },
    experience: {
      tag: "// experience",
      title: "Professional journey",
      experiences: [
        {
          company: "CNH Industrial",
          role: "BI Analyst",
          period: "March 2024 — August 2025",
          location: "Curitiba, Paraná, Brazil",
          responsibilities: [
            "Development of analytical dashboards in Power BI with strategic KPIs, used by managers and 2 teams for decision-making, optimizing analysis time by 30%",
            "Big data manipulation and processing in Databricks with SQL and ETL using Power BI for extraction and processing of large operational data volumes",
            "Automation of critical processes with Power Automate and integration with Power Apps and SharePoint",
            "Strategic insights generation with Python for operational data analysis and trend identification",
            "Management reporting automation with Excel macros, saving 30 minutes per day",
            "BI solutions development for Production, Finance and HR dashboards",
          ],
        },
        {
          company: "FixFacil Assistência Virtual",
          role: "Systems development assistant",
          period: "December 2023 — June 2024",
          location: "Curitiba, Paraná, Brazil",
          responsibilities: [
            "Support for development and maintenance of systems in an early-stage tech startup",
            "Creation, modification and maintenance of pages for a meat quotation management system using HTML, CSS and JavaScript",
            "Inventory control system maintenance",
            "Use of AI tools (ChatGPT) to speed up development, solve problems and adapt existing functionality, including PHP code",
            "Landing page prototype development in Wix Studio for a higher education institution",
          ],
        },
        {
          company: "Curitiba City Hall",
          role: "Citizenship Agent / Triathlon Assistant Coach",
          period: "April 2022 — April 2024",
          location: "Curitiba, Paraná, Brazil",
          responsibilities: [
            "Acted as citizenship agent and triathlon assistant coach, supporting sports and educational activities",
            "Organization and preparation of swimming and cycling equipment",
            "Supervision and care of children during training and competitions",
            "Contribution to safety, discipline and smooth running of activities",
          ],
        },
      ],
    },
    projects: {
      tag: "// projects",
      title: "Featured projects",
      items: [
        {
          title: "Industrial Management System",
          date: "Aug 2025",
          description:
            "Web system for Power Mill industrial project management with full-stack architecture: Frontend (HTML5, CSS3, responsive JavaScript), Backend (Node.js with RESTful APIs), Database (MongoDB), Deploy (Vercel and Render).",
          tags: ["Node.js", "MongoDB", "JavaScript", "REST API", "Vercel", "Render", "React", "Tailwind CSS"],
        },
        {
          title: "Interactive Power BI Dashboards",
          date: "Mar 2024",
          description:
            "Development of dashboards for data analysis with dynamic filters, KPI indicators and interactive charts for various sectors (Production, Finance and HR).",
          tags: ["Power BI", "SQL", "Databricks", "ETL", "KPIs"],
        },
        {
          title: "Corporate KPI Dashboard",
          date: "Nov 2024",
          description:
            "Development of an interactive KPI dashboard to support management decision-making, consolidating operational and business indicators in a single analytical solution.",
          tags: ["Power BI", "SQL", "Databricks", "ETL", "KPIs"],
        },
        {
          title: "Personal Portfolio Site",
          date: "Apr 2024",
          description:
            "Responsive site with HTML, CSS and JavaScript for project presentation and professional contact with modern design and SEO optimization.",
          tags: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsive"],
        },
        {
          title: "RPG Game with Python",
          date: "Oct 2025",
          description:
            "Turn-based battle-style RPG question and answer game using Python and Pygame library, implementing advanced programming logic.",
          tags: ["Python", "Pygame", "Game Dev", "OOP"],
        },
        {
          title: "Web Dashboard for 3D Printer Management",
          date: "Dec 2025",
          description:
            "Web dashboard for 3D printer management and monitoring, with axis distance indicators and printer status.",
          tags: ["Docker", "HTML5", "CSS3", "JavaScript", "Node-RED"],
        },
        {
          title: "Mobs Encyclopedia – Web Project",
          date: "Jul 2023",
          description:
            "Educational site with interactive interface featuring Minecraft-inspired mobs.",
          tags: ["HTML5", "CSS3", "JavaScript"],
        },
      ],
    },
    skills: {
      tag: "// skills",
      title: "Tech stack",
      groups: [
        { title: "Languages", skills: ["Python", "SQL", "JavaScript", "HTML5", "CSS3"] },
        { title: "Databases", skills: ["MongoDB", "SQL Server", "Databricks", "Big Data"] },
        {
          title: "Tools & Tech",
          skills: ["Power BI", "Power Automate", "Power Apps", "Git", "Vercel", "Render", "REST APIs", "Node.js"],
        },
        { title: "Other", skills: ["Advanced Excel", "SharePoint", "Gen AI", "Microsoft Project", "Web Dev"] },
      ],
    },
    certificates: {
      tag: "// certificates & publications",
      title: "Achievements",
      certs: [
        {
          title: "B2 First Certificate",
          issuer: "Harvard University",
          date: "Aug 2025",
          description: "Internationally recognised English proficiency qualification.",
        },
        {
          title: "Power BI Training: Zero to Pro",
          issuer: "DataDriven",
          date: "Apr 2025",
          description: "Complete Power BI training for data analysis and visualisation.",
        },
      ],
      scientificArticles: "Scientific Articles",
      publications: [
        {
          title: "Proposal for mapping environmental aspects and impacts in an automotive industry",
          venue: "Inova+ — Volvo",
        },
        {
          title: "Quality certification in requirements engineering: case study in an automation industry",
          venue: "Inova+ — Selletra",
        },
      ],
    },
    footer: {
      tag: "// contact",
      title: "Let's talk",
      subtitle: "I'm available for new projects and opportunities. Get in touch!",
      madeBy: "Made with",
      by: "by Luiz Henrique Machado",
    },
  },
};
