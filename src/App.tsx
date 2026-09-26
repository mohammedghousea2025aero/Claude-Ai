import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BusinessAndImpactSection } from './components/BusinessAndImpactSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { DatabaseSection } from './components/DatabaseSection';
import { FeaturesAndImprovementsSection } from './components/FeaturesAndImprovementsSection';
import { Footer } from './components/Footer';
import { DiagramViewerModal } from './components/DiagramViewerModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isDiagramsModalOpen, setIsDiagramsModalOpen] = useState<boolean>(false);
  const [initialDiagramTab, setInitialDiagramTab] = useState<'workflow' | 'architecture' | 'database'>('workflow');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Smooth scroll to section
    const el = document.getElementById(tabId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDiagramWithTab = (tab: 'workflow' | 'architecture' | 'database') => {
    setInitialDiagramTab(tab);
    setIsDiagramsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-stone-900">
      {/* Top Bar Contract (Single text brand, 4-6 links, 1-2 actions) */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        openDiagramsModal={() => handleOpenDiagramWithTab('workflow')}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div id="overview">
          <HeroSection
            onNavigateTab={handleTabChange}
            openDiagramsModal={() => handleOpenDiagramWithTab('workflow')}
          />
          <BusinessAndImpactSection />
        </div>

        <div id="workflow">
          <WorkflowSection
            onOpenDiagramsModal={() => handleOpenDiagramWithTab('workflow')}
          />
        </div>

        <div id="architecture">
          <ArchitectureSection
            onOpenDiagramsModal={() => handleOpenDiagramWithTab('architecture')}
          />
        </div>

        <div id="database">
          <DatabaseSection
            onOpenDiagramsModal={() => handleOpenDiagramWithTab('database')}
          />
        </div>

        <div id="features">
          <FeaturesAndImprovementsSection />
        </div>

        <div id="challenges">
          {/* Challenges & Roadmap are housed in FeaturesAndImprovementsSection */}
        </div>

        <Footer
          openDiagramsModal={() => handleOpenDiagramWithTab('workflow')}
        />
      </main>

      {/* Interactive Diagram Viewer Modal */}
      <DiagramViewerModal
        isOpen={isDiagramsModalOpen}
        onClose={() => setIsDiagramsModalOpen(false)}
        initialDiagram={initialDiagramTab}
      />
    </div>
  );
}
