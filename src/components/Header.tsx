import React from 'react';
import { BookOpen, Share2, Printer, CheckSquare } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openDiagramsModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openDiagramsModal
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview & Value' },
    { id: 'workflow', label: 'Workflow Pipeline' },
    { id: 'architecture', label: 'System Architecture' },
    { id: 'database', label: 'Database & Pipeline' },
    { id: 'features', label: 'Features & Safety' },
    { id: 'challenges', label: 'Challenges & Roadmap' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200 no-print transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand title, single text element wordmark */}
        <a
          href="#overview"
          onClick={() => setActiveTab('overview')}
          className="text-base sm:text-lg font-brand font-semibold tracking-wider text-stone-900 shrink-0 hover:text-amber-800 transition-colors"
        >
          CLAUDE AI · SYSTEM ANALYSIS
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-stone-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`pb-1 transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                activeTab === item.id
                  ? 'border-stone-900 text-stone-950 font-semibold'
                  : 'border-transparent hover:text-stone-950 hover:border-stone-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={handlePrint}
            title="Print or Save as PDF"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-md transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-stone-600" />
            <span className="whitespace-nowrap">PDF</span>
          </button>

          <button
            onClick={openDiagramsModal}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md shadow-xs transition-colors cursor-pointer whitespace-nowrap"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-300" />
            <span>View Diagrams</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation rail */}
      <div className="lg:hidden border-t border-stone-200 overflow-x-auto scrollbar-none px-4 py-2 flex items-center gap-4 text-xs font-medium text-stone-600 bg-[#F7F4EE]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap pb-0.5 cursor-pointer ${
              activeTab === item.id
                ? 'text-stone-950 font-bold border-b border-stone-900'
                : 'hover:text-stone-900'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
