import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TeamSection } from './components/TeamSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { WhyInnovateX } from './components/WhyInnovateX';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PdfExportModal } from './components/PdfExportModal';
import TargetCursor from './components/TargetCursor';

export const App: React.FC = () => {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#071426] text-[#F0F4F8] font-sans antialiased selection:bg-[#356DFF] selection:text-white flex flex-col">
      {/* Custom Target Cursor */}
      <TargetCursor
        spinDuration={2}
        hoverDuration={0.1}
        hideDefaultCursor
        parallaxOn
        cursorColor="#356DFF"
        cursorColorOnTarget="#7FBAFF"
        targetSelector="button, a, [role='button'], .cursor-target"
        matchRadius
        padding={8}
      />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenPdfModal={() => setIsPdfModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section B: Hero */}
        <Hero />

        {/* Section C: About InnovateX */}
        <About />

        {/* Section D: Team Members */}
        <TeamSection />

        {/* Section E: Project Showcase */}
        <ProjectsSection />

        {/* Section F: Hackathon Achievements */}
        <AchievementsSection />

        {/* Section G: Our Workflow */}
        <WorkflowSection />

        {/* Section H: Why InnovateX */}
        <WhyInnovateX />

        {/* Section I: Contact / Closing CTA */}
        <ContactSection onOpenPdfModal={() => setIsPdfModalOpen(true)} />
      </main>

      {/* Section J: Footer */}
      <Footer />

      {/* PDF Export & Print Modal */}
      <PdfExportModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />
    </div>
  );
};

export default App;
