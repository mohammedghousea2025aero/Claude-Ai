import React from 'react';
import { AUTHOR_INFO, PRODUCT_OVERVIEW } from '../data/analysisData';
import { ExternalLink, Sparkles, Building2, UserCheck, Layers, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onNavigateTab: (tabId: string) => void;
  openDiagramsModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateTab, openDiagramsModal }) => {
  return (
    <section className="mb-14 border-b border-stone-200 pb-12">
      {/* Editorial Header Monograph */}
      <div className="pt-6 pb-4">
        {/* Unboxed metadata with typographic separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
          <span>Engineering Analysis</span>
          <span aria-hidden="true">·</span>
          <span>System Design Monograph</span>
          <span aria-hidden="true">·</span>
          <span>Target: LinkedIn Article</span>
          <span aria-hidden="true">·</span>
          <span>14 Min Read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-medium text-stone-900 tracking-tight leading-tight max-w-4xl text-balance mb-4">
          Claude AI by Anthropic: Product Analysis & System Design
        </h1>

        <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-3xl mb-6">
          An in-depth engineering analysis examining Anthropic&apos;s frontier LLM architecture — spanning
          Constitutional AI safety alignment, 200K token KV cache orchestration, continuous GPU batching,
          and relational data pipelines powering mission-critical enterprise workflows.
        </p>

        {/* Author Credit Strip - Unboxed, elegant */}
        <div className="p-4 bg-stone-100/80 border border-stone-200 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-stone-700">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-stone-900">{AUTHOR_INFO.name}</span>
            <span aria-hidden="true">·</span>
            <span>{AUTHOR_INFO.department}</span>
            <span aria-hidden="true">·</span>
            <span>{AUTHOR_INFO.institution}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500 font-mono">{AUTHOR_INFO.email}</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={openDiagramsModal}
              className="text-stone-900 hover:text-amber-800 font-semibold underline underline-offset-4 cursor-pointer"
            >
              View System Architecture &amp; Workflow Diagrams &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Hero Visual Asset */}
      <div className="my-8 relative overflow-hidden rounded-xl border border-stone-200 bg-stone-950 aspect-16/9 max-h-[460px] shadow-sm">
        <img
          src="/src/assets/images/claude_architecture_hero_1790385658700.jpg"
          alt="Claude AI transformer architecture and neural attention schematic"
          className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
          loading="eager"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Resilient fallback container if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Measured scrim overlay ensuring WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
          <p className="text-xs uppercase font-mono tracking-widest text-amber-300 mb-1">
            FIG 1.0 · SYSTEM OVERVIEW
          </p>
          <h2 className="text-xl sm:text-2xl font-editorial text-stone-100 max-w-2xl">
            Distributed GPU inference cluster handling 200,000 token context windows with PagedAttention and Constitutional AI guardrails.
          </h2>
        </div>
      </div>

      {/* Executive Overview Matrix Table */}
      <div className="mt-8">
        <h2 className="text-xl font-editorial font-semibold text-stone-900 mb-4">
          1. Product Overview
        </h2>

        <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F7F4EE] border-b border-stone-200 text-stone-700 font-medium">
              <tr>
                <th className="py-3 px-4 w-1/4">System Attribute</th>
                <th className="py-3 px-4 w-3/4">Architectural & Product Detail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-900 bg-stone-50/50">Product Name</td>
                <td className="py-3 px-4">{PRODUCT_OVERVIEW.productName}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-900 bg-stone-50/50">Company / Organization</td>
                <td className="py-3 px-4">{PRODUCT_OVERVIEW.company}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-900 bg-stone-50/50">Headquarters & Founded</td>
                <td className="py-3 px-4">{PRODUCT_OVERVIEW.headquarters} (Founded {PRODUCT_OVERVIEW.founded})</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-900 bg-stone-50/50">Purpose of the Product</td>
                <td className="py-3 px-4 leading-relaxed">{PRODUCT_OVERVIEW.purpose}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-900 bg-stone-50/50">Target Users</td>
                <td className="py-3 px-4">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {PRODUCT_OVERVIEW.targetUsers.map((user, idx) => (
                      <span key={idx} className="text-stone-700">
                        {user}{idx < PRODUCT_OVERVIEW.targetUsers.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-900 bg-stone-50/50">Core Services Offered</td>
                <td className="py-3 px-4">
                  <ul className="list-disc list-inside space-y-1 text-stone-700">
                    {PRODUCT_OVERVIEW.coreServices.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Brief Introduction Prose */}
      <div className="mt-8 prose prose-stone max-w-none text-stone-700 leading-relaxed">
        <p className="text-base sm:text-lg first-letter:text-4xl first-letter:font-editorial first-letter:font-semibold first-letter:float-left first-letter:mr-2 first-letter:text-stone-900">
          Claude AI is a family of frontier large language models developed by Anthropic, an AI safety research company.
          Unlike many competitors, Anthropic&apos;s founding mission centers on building AI systems that are{' '}
          <em className="font-serif">interpretable, steerable, and aligned with human values</em>. Claude is accessed through
          a consumer-facing web interface at <strong>claude.ai</strong>, a mobile application, and a robust developer API.
          The product distinguishes itself through its emphasis on Constitutional AI (CAI) training methodology,
          extended context windows up to 200,000 tokens, nuanced reasoning capabilities, and strong safety guardrails that
          minimize harmful outputs while maximizing helpfulness.
        </p>
      </div>

      {/* Quick Jump Bar */}
      <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap gap-2 text-xs">
        <span className="text-stone-500 font-mono py-1.5 mr-2">Jump to Architecture Sections:</span>
        <button
          onClick={() => onNavigateTab('workflow')}
          className="px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium transition-colors cursor-pointer"
        >
          4. 8-Step Workflow Pipeline &rarr;
        </button>
        <button
          onClick={() => onNavigateTab('architecture')}
          className="px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium transition-colors cursor-pointer"
        >
          6. Technical Architecture Diagram &rarr;
        </button>
        <button
          onClick={() => onNavigateTab('database')}
          className="px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium transition-colors cursor-pointer"
        >
          7. Database ER & Data Pipeline &rarr;
        </button>
        <button
          onClick={() => onNavigateTab('challenges')}
          className="px-3 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium transition-colors cursor-pointer"
        >
          8. Challenges & Improvements &rarr;
        </button>
      </div>
    </section>
  );
};
