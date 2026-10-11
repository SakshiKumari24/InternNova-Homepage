import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { DomainCards } from './components/DomainCards';
import { MentorshipPathway } from './components/MentorshipPathway';
import { StudentCorner } from './components/StudentCorner';
import { Workshops } from './components/Workshops';
import { Testimonials } from './components/Testimonials';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';

export const App: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedDomainForApply, setSelectedDomainForApply] = useState<string | undefined>(undefined);

  const handleOpenApply = (domainId?: string) => {
    setSelectedDomainForApply(domainId);
    setIsApplyModalOpen(true);
  };

  const handleScrollToVerify = () => {
    const el = document.getElementById('student-corner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F8FAFC] selection:bg-[#7C3AED]/30 selection:text-white flex flex-col overflow-x-hidden font-sans">
      {/* Sticky Header */}
      <Navbar
        onOpenApply={() => handleOpenApply()}
        onOpenVerify={handleScrollToVerify}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onOpenApply={() => handleOpenApply()}
          onOpenVerify={handleScrollToVerify}
        />

        <StatsStrip />

        <DomainCards
          onSelectDomainForApply={(domainId) => handleOpenApply(domainId)}
        />

        <MentorshipPathway />

        <StudentCorner />

        <Workshops />

        <Testimonials />

        <FaqAccordion />
      </main>

      {/* Lead Capture Footer */}
      <Footer />

      {/* Interactive Application Modal */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        selectedDomainId={selectedDomainForApply}
      />
    </div>
  );
};

export default App;
