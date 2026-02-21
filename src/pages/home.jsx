import React from "react";
import Navbar from "@/components/portfolio/navbar";
import HeroSection from "@/components/portfolio/herosection";
import AboutSection from "@/components/portfolio/aboutsection";
import ExperienceSection from "@/components/portfolio/experiencesection";
import ProjectsCarousel from "@/components/portfolio/projectscaroussel";
import SkillsSection from "@/components/portfolio/skillssection";
import CertificatesSection from "@/components/portfolio/certificatessection";
import FooterSection from "@/components/portfolio/footersection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#39FF14]/20 selection:text-[#39FF14]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsCarousel />
      <SkillsSection />
      <CertificatesSection />
      <FooterSection />
    </div>
  );
}