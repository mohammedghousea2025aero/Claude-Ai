import React, { useState } from 'react';
import { TECHNICAL_CHALLENGES, SUGGESTED_IMPROVEMENTS } from '../data/analysisData';
import { Layers, Eye, Wrench, Shield, FolderGit2, Code2, AlertCircle, Sparkles, Check, ChevronDown, ChevronUp, Sliders } from 'lucide-react';

export const FeaturesAndImprovementsSection: React.FC = () => {
  // Context calculator slider state
  const [tokenSlider, setTokenSlider] = useState<number>(140000);
  const [activeChallengeId, setActiveChallengeId] = useState<string>('scalability');
  const [activeImprovementId, setActiveImprovementId] = useState<string>('explainability-layer');

  // Explainability prototype state
  const [explainExpanded, setExplainExpanded] = useState<boolean>(true);

  // Calculations for Context Slider
  const wordsEquivalent = Math.round(tokenSlider * 0.75);
  const pagesEquivalent = Math.round(wordsEquivalent / 300);
  const cacheDiscountPct = tokenSlider >= 20000 ? 90 : 0;
  const standardCost = ((tokenSlider / 1000000) * 3).toFixed(3);
  const cachedCost = ((tokenSlider / 1000000) * 0.3).toFixed(3);

  const features = [
    {
      id: "context",
      title: "1. Extended Context Window (200K Tokens)",
      icon: Layers,
      summary: "Ingest up to 150,000 words (500+ book pages) in a single turn without lossy chunking or vector loss.",
      benefit: "Eliminates manual document slicing; unlocks cross-document contract reconciliation and repository-wide code refactoring.",
      business: "Dominates document-heavy industries (legal, healthcare, finance) where partial summaries risk catastrophic omissions."
    },
    {
      id: "multimodal",
      title: "2. Native Multimodal Vision + Text",
      icon: Eye,
      summary: "Direct image and chart tokenization alongside textual dialog in unified attention matrices.",
      benefit: "Engineers can upload UI screenshots, circuit schematics, or complex financial charts for instant debugging and extraction.",
      business: "Expands TAM into industrial design, radiology triage, and automated visual QA testing."
    },
    {
      id: "tools",
      title: "3. Tool Use & Agentic Function Calling",
      icon: Wrench,
      summary: "Model autonomy to invoke REST APIs, execute sandboxed Python code, and query SQL databases.",
      benefit: "Transforms Claude from a passive chatbot into an autonomous agent capable of resolving multi-step workflows.",
      business: "Foundational infrastructure for agentic workflows; dramatically increases API stickiness and token volume."
    },
    {
      id: "cai",
      title: "4. Constitutional AI (CAI) Safety Framework",
      icon: Shield,
      summary: "Critique and revision against an explicit ethical constitution, reducing reliance on manual red-teaming.",
      benefit: "Delivers nuanced refusal calibration; avoids preachy or false-positive refusals while preventing jailbreaks.",
      business: "Critical moat for Fortune 500 enterprise procurement, government contracts, and regulated industries."
    },
    {
      id: "projects",
      title: "5. Projects & Knowledge Repositories",
      icon: FolderGit2,
      summary: "Persistent shared workspaces with customized system instructions and uploaded reference documents.",
      benefit: "Teams share organizational precedent, brand guidelines, and domain taxonomies without repetitive re-prompting.",
      business: "Creates enterprise lock-in by embedding institutional intellectual property into the workspace."
    },
    {
      id: "artifacts",
      title: "6. Interactive Artifacts Generation",
      icon: Code2,
      summary: "Dedicated real-time side-panel rendering React components, interactive SVG diagrams, and HTML mockups.",
      benefit: "Users instantly inspect, run, and iterate on executable code without leaving the conversational interface.",
      business: "Positions Claude as a creation studio rather than a basic text window, drastically boosting user session duration."
    }
  ];

  return (
    <section className="mb-14 border-b border-stone-200 pb-12">
      {/* 5. Key Features */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
          <span>Section 05</span>
          <span aria-hidden="true">·</span>
          <span>Core Capabilities & Innovation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-stone-900 mb-4">
          5. Key Features & Competitive Architecture
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.id} className="p-5 bg-white border border-stone-200 rounded-xl shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800 mb-3 border border-stone-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-stone-900 mb-1.5">{f.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {f.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 space-y-2 text-[11px]">
                  <div>
                    <strong className="text-stone-900">User Benefit:</strong>{' '}
                    <span className="text-stone-600">{f.benefit}</span>
                  </div>
                  <div>
                    <strong className="text-stone-900">Business Value:</strong>{' '}
                    <span className="text-stone-600">{f.business}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive 200K Context Window Calculator */}
        <div className="p-6 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-2 mb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-0.5">
                INTERACTIVE CONTEXT ENGINE SIMULATOR
              </span>
              <h3 className="text-lg font-semibold text-white">
                Context Window & Prompt Caching Economics
              </h3>
            </div>
            <div className="text-xs font-mono text-stone-300">
              Capacity: Up to 200,000 Tokens (150K words)
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1 text-stone-300">
                <span>Input Context Size: <strong className="text-amber-400">{tokenSlider.toLocaleString()} tokens</strong></span>
                <span>Max: 200,000 Tokens</span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={tokenSlider}
                onChange={(e) => setTokenSlider(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-stone-800 rounded-lg appearance-none"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
                <span className="text-stone-400 block text-[10px]">WORD EQUIVALENT</span>
                <span className="text-base font-bold text-white tabular-nums">~{wordsEquivalent.toLocaleString()} words</span>
              </div>
              <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
                <span className="text-stone-400 block text-[10px]">BOOK PAGES</span>
                <span className="text-base font-bold text-white tabular-nums">~{pagesEquivalent} pages</span>
              </div>
              <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
                <span className="text-stone-400 block text-[10px]">COMPARED TO GPT-4</span>
                <span className="text-base font-bold text-emerald-400">
                  {tokenSlider > 128000 ? `+${((tokenSlider - 128000)/1000).toFixed(0)}k vs 128k` : 'Within 128k'}
                </span>
              </div>
              <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
                <span className="text-stone-400 block text-[10px]">PROMPT CACHE COST</span>
                <span className="text-base font-bold text-amber-400 tabular-nums">
                  ${cachedCost} <span className="text-[10px] text-stone-400 font-normal">(-{cacheDiscountPct}%)</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Constitutional AI Visual Asset Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold block">
              Core Alignment Innovation · Constitutional AI (CAI)
            </span>
            <h3 className="text-xl font-editorial font-semibold text-stone-900">
              Self-Supervised Alignment via Explicit Principles
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Traditional models rely heavily on human labelers (RLHF) who often disagree or harbor implicit biases.
              Anthropic&apos;s Constitutional AI trains the model to critique and revise its own drafts against a set
              of foundational rules derived from the Universal Declaration of Human Rights and AI safety guidelines.
            </p>
            <div className="p-3 bg-[#F7F4EE] border border-stone-200 rounded-md font-mono text-xs text-stone-700 space-y-1">
              <div><strong>Critique Pass:</strong> &quot;Identify any subtle deception, harmful assumptions, or sycophancy in draft response.&quot;</div>
              <div><strong>Revision Pass:</strong> &quot;Rewrite response to preserve maximal factual helpfulness while eliminating identified risks.&quot;</div>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-stone-200 aspect-16/9 bg-stone-950 shadow-xs">
            <img
              src="/src/assets/images/constitutional_ai_schematic_1790385677291.jpg"
              alt="Constitutional AI critique and alignment loop"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>

      {/* 8. Technical Challenges */}
      <div className="mb-12 pt-8 border-t border-stone-200">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
          <span>Section 08</span>
          <span aria-hidden="true">·</span>
          <span>System Bottlenecks & Mitigations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-stone-900 mb-4">
          8. Technical Challenges in Production
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-2">
            {TECHNICAL_CHALLENGES.map((ch) => {
              const isSelected = ch.id === activeChallengeId;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChallengeId(ch.id)}
                  className={`w-full p-3 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-stone-300 text-stone-800'
                  }`}
                >
                  <div className="text-xs font-semibold truncate pr-2">{ch.title}</div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ${
                    ch.severity === 'Critical'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {ch.severity}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 p-6 bg-white border border-stone-200 rounded-xl shadow-xs">
            {(() => {
              const ch = TECHNICAL_CHALLENGES.find((c) => c.id === activeChallengeId) || TECHNICAL_CHALLENGES[0];
              return (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <h3 className="text-base font-semibold text-stone-900">{ch.title}</h3>
                    <span className="text-xs font-mono text-stone-500">Severity: {ch.severity}</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-stone-500 mb-1">Architectural Challenge</h4>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {ch.challenge}
                    </p>
                  </div>
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                    <h4 className="text-xs font-mono uppercase text-amber-800 font-semibold mb-1">
                      Engineering Solution & Infrastructure Complexity
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                      {ch.engineeringComplexity}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* 9. Suggested Improvements & Explainability Prototype */}
      <div className="pt-8 border-t border-stone-200">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
          <span>Section 09</span>
          <span aria-hidden="true">·</span>
          <span>Architectural Roadmap & Next Frontiers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-stone-900 mb-4">
          9. Suggested Improvements & Prototype Roadmap
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {SUGGESTED_IMPROVEMENTS.map((imp) => {
            const isSelected = imp.id === activeImprovementId;
            return (
              <div
                key={imp.id}
                onClick={() => setActiveImprovementId(imp.id)}
                className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-50/70 border-amber-600 shadow-xs'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <div>
                  <h3 className="font-semibold text-sm text-stone-900 mb-2">{imp.title}</h3>
                  <div className="space-y-2 text-xs text-stone-600">
                    <div>
                      <strong className="text-stone-800 block text-[11px]">Current Limitation:</strong>
                      {imp.limitation}
                    </div>
                    <div>
                      <strong className="text-stone-800 block text-[11px]">Proposed Enhancement:</strong>
                      {imp.enhancement}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200 text-[11px]">
                  <strong className="text-stone-900">Technical Basis:</strong>{' '}
                  <span className="text-stone-600">{imp.technicalJustification}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Prototype: Explainability & Reasoning Inspector */}
        <div className="p-6 bg-white border border-stone-200 rounded-xl shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold block">
                Interactive Concept Prototype (Suggested Improvement 3)
              </span>
              <h3 className="text-base font-semibold text-stone-900">
                Explainability & Reasoning Transparency Layer
              </h3>
            </div>
            <button
              onClick={() => setExplainExpanded(!explainExpanded)}
              className="text-xs font-mono text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
            >
              <span>{explainExpanded ? 'Collapse Trace' : 'Expand Trace'}</span>
              {explainExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <p className="text-xs text-stone-600 mb-4">
            Prototype demonstrating transparent Chain-of-Thought attribution, confidence scoring, and source PDF grounding:
          </p>

          <div className="p-4 bg-stone-900 text-stone-100 rounded-lg font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-stone-400 border-b border-stone-800 pb-2">
              <span>QUERY: &quot;What is the maximum indemnity exposure under Delaware law in Section 12.3?&quot;</span>
              <span className="text-emerald-400">CONFIDENCE: 98.4%</span>
            </div>

            {explainExpanded && (
              <div className="space-y-2 text-stone-300 text-[11px] pt-1 border-b border-stone-800 pb-3">
                <div className="text-amber-400 font-semibold">ATTENTION & CHAIN-OF-THOUGHT TRACE:</div>
                <p>1. Ingested Exhibit C (Purchase Agreement, Delaware jurisdiction clause §18.2).</p>
                <p>2. Located §12.3 &quot;Indemnity Limits&quot;: Found $25,000,000 baseline general liability ceiling.</p>
                <p>3. Checked carve-out exception for fraud / intentional breach: Uncapped under Delaware Chancery precedent (ABRY Partners, 899 A.2d 769).</p>
              </div>
            )}

            <div className="pt-1 text-stone-100 font-sans text-xs sm:text-sm leading-relaxed">
              <strong className="text-white block font-mono text-xs mb-1">Synthesized Verified Response:</strong>
              Under Section 12.3, the maximum indemnity cap is strictly set at $25,000,000 for standard breaches.
              However, allegations involving intentional fraud or willful misconduct are legally uncapped under Delaware Chancery Court precedent.
            </div>

            <div className="pt-2 text-[10px] text-stone-400 flex flex-wrap gap-3">
              <span>Grounding: Exhibit C, Page 144, Line 18</span>
              <span>Constitutional Safety: Verified (0 violations)</span>
              <span>Attention Weight: 0.941</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
