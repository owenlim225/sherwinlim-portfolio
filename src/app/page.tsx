"use client";

import {
  Background,
  Navigation,
  // CertificationsSection,
  // ContactSection,
  ExperienceSection,
  OverviewSection,  
  Footer,
  HeroSection,
  // ProjectsSection,
  // TechStackSection,
  // TestimonialsSection
} from "@/components/portfolio";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        {/* <ProjectsSection /> */}

        {/* Experience Section */}
        <ExperienceSection />

        {/* Overview Section */}
        <OverviewSection />

        {/* Tech Stack Section */}
        {/* <TechStackSection /> */}



        {/* Testimonials Section */}
        {/* <TestimonialsSection /> */}

        {/* Certifications Section */}
        {/* <CertificationsSection /> */}

        {/* Contact Section */}
        {/* <ContactSection /> */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
} 