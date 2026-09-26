import React from 'react';
import { AUTHOR_INFO } from '../data/analysisData';
import { Award, Mail, BookOpen, CheckSquare, Share2, Printer } from 'lucide-react';

interface FooterProps {
  openDiagramsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openDiagramsModal }) => {
  return (
    <footer className="mt-16 pt-12 pb-16 border-t border-stone-200 text-stone-700">
      {/* Conclusion Block */}
      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-editorial font-semibold text-stone-900 mb-4">
          Conclusion
        </h2>
        <div className="prose prose-stone text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
          <p>
            Claude AI represents a paradigm shift in how humans interact with artificial intelligence.
            From an engineering perspective, its architecture — spanning distributed GPU inference clusters,
            polyglot database storage systems, real-time streaming pipelines, and sophisticated Constitutional AI
            safety layers — exemplifies the complexity of modern AI infrastructure at scale.
          </p>
          <p>
            Anthropic&apos;s commitment to Constitutional AI and safety-first design differentiates Claude in an
            increasingly crowded market, while its extended context window (200K tokens), multimodal capabilities,
            and agentic tool use position it as a foundational platform for enterprise AI applications.
            As the product evolves, addressing challenges in offline accessibility, real-time multiplayer collaboration,
            and model explainability will be critical to maintaining its competitive edge and societal impact.
          </p>
        </div>
      </div>

      {/* Attribution & Publishing Card */}
      <div className="max-w-4xl mx-auto p-6 bg-white border border-stone-200 rounded-xl shadow-xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-semibold block mb-0.5">
              AUTHOR & ACADEMIC ATTRIBUTION
            </span>
            <h3 className="text-base font-semibold text-stone-900">
              {AUTHOR_INFO.name}
            </h3>
            <p className="text-xs text-stone-600">
              {AUTHOR_INFO.department} · {AUTHOR_INFO.institution}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openDiagramsModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-300" />
              <span>View System Diagrams</span>
            </button>
          </div>
        </div>

        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-stone-600">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-stone-400 shrink-0" />
            <span className="truncate">{AUTHOR_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-stone-400 shrink-0" />
            <span>Format: LinkedIn Article</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-stone-400 shrink-0" />
            <span>Aeronautical Eng. 2025–2026</span>
          </div>
        </div>
      </div>

      {/* Quiet copyright & metadata footer */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
        <p>
          © 2026 {AUTHOR_INFO.name}. All Rights Reserved. Prepared for LinkedIn Technical Publication.
        </p>
        <p className="font-mono text-[11px]">
          Tag: @AnthropicResearch · #ProductAnalysis #ClaudeAI #Anthropic
        </p>
      </div>
    </footer>
  );
};
