import React, { useState } from 'react';
import { BUSINESS_VALUE } from '../data/analysisData';
import { TrendingUp, DollarSign, Award, Globe2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export const BusinessAndImpactSection: React.FC = () => {
  const [selectedAdvantage, setSelectedAdvantage] = useState<number>(0);

  return (
    <section className="mb-14 border-b border-stone-200 pb-12">
      {/* 2. Business Value of the Product */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
          <span>Section 02</span>
          <span aria-hidden="true">·</span>
          <span>Economic Engine & Market Dynamics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-stone-900 mb-4">
          2. Business Value of the Product
        </h2>

        {/* 4 Pillars of Value Generation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-stone-900 font-semibold text-base">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Productivity Amplification</span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              {BUSINESS_VALUE.productivityAmplification}
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-stone-900 font-semibold text-base">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Cost Reduction in Knowledge Work</span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              {BUSINESS_VALUE.costReduction}
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-stone-900 font-semibold text-base">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Executive Decision Support</span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              {BUSINESS_VALUE.decisionSupport}
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-lg shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-stone-900 font-semibold text-base">
              <ShieldCheck className="w-4 h-4 text-stone-800" />
              <span>Platform Stickiness & High LTV</span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed">
              {BUSINESS_VALUE.platformStickiness}
            </p>
          </div>
        </div>

        {/* Revenue Model Breakdown Table */}
        <h3 className="text-lg font-editorial font-semibold text-stone-900 mt-8 mb-3">
          Revenue Model Architecture
        </h3>
        <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F7F4EE] border-b border-stone-200 text-stone-700 font-medium">
              <tr>
                <th className="py-3 px-4 w-1/4">Revenue Stream</th>
                <th className="py-3 px-4 w-1/4">Pricing Model</th>
                <th className="py-3 px-4 w-2/4">Commercial & Operational Mechanics</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-800">
              {BUSINESS_VALUE.revenueStreams.map((stream, idx) => (
                <tr key={idx} className="hover:bg-stone-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-stone-900">{stream.tier}</td>
                  <td className="py-3 px-4 font-mono text-stone-700">{stream.pricing}</td>
                  <td className="py-3 px-4 text-stone-600">{stream.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Competitive Advantages & Market Relevance */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-editorial font-semibold text-stone-900 mb-3">
              Core Competitive Moats
            </h3>
            <div className="space-y-3">
              {BUSINESS_VALUE.competitiveAdvantages.map((adv, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedAdvantage(idx)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    selectedAdvantage === idx
                      ? 'bg-stone-100/90 border-stone-400 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm text-stone-900">{adv.title}</h4>
                    <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900 text-stone-100 p-6 rounded-xl border border-stone-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Market Relevance</span>
              </div>
              <h4 className="text-xl font-editorial font-medium text-white mb-3">
                $200B Generative AI Industry by 2030
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                Grand View Research projects exponential expansion across enterprise generative modeling.
                Anthropic secures hyperscaler distribution via massive co-development pacts:
              </p>
              <ul className="text-xs space-y-2 text-stone-300 border-t border-stone-800 pt-3">
                <li>
                  <strong className="text-white">Amazon AWS:</strong> Up to $4B strategic investment, with Claude as the premier flagship LLM on Amazon Bedrock and AWS Trainium/Inferentia accelerators.
                </li>
                <li>
                  <strong className="text-white">Google Cloud:</strong> $2B+ strategic capital, scaling Claude on Google Cloud Vertex AI and next-gen TPU clusters.
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-800/80 text-[11px] font-mono text-stone-400">
              High-growth Enterprise AI Tier vs. OpenAI GPT-4o & Google Gemini
            </div>
          </div>
        </div>
      </div>

      {/* 3. Impact of the Product on Society */}
      <div className="mt-12 pt-8 border-t border-stone-200">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
          <span>Section 03</span>
          <span aria-hidden="true">·</span>
          <span>Societal & Ethical Dimensions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-stone-900 mb-4">
          3. Impact of the Product on Society
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <div className="p-4 bg-white border border-stone-200 rounded-lg">
            <h4 className="font-semibold text-sm text-stone-900 mb-1">Democratization of Expertise</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Enables solo developers, researchers, and small businesses to access high-caliber writing, legal draft parsing, and code architecture that formerly required entire departments.
            </p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-lg">
            <h4 className="font-semibold text-sm text-stone-900 mb-1">Socratic Educational Tutor</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Provides step-by-step reasoning and debugging pedagogy rather than passive answers, improving comprehension across STEM and engineering curriculums.
            </p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-lg">
            <h4 className="font-semibold text-sm text-stone-900 mb-1">Economic Value Creation</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              McKinsey estimates generative AI will contribute $2.6–$4.4 trillion annually to global GDP; Claude powers core workflow synthesis in enterprise backoffices.
            </p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-lg">
            <h4 className="font-semibold text-sm text-stone-900 mb-1">Healthcare & Legal Triage</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Condenses complex clinical trials and hundred-page regulatory dossiers, freeing healthcare and legal practitioners to focus on high-stakes judgment calls.
            </p>
          </div>
        </div>

        {/* Associated Challenges & Concerns Box */}
        <div className="p-5 bg-amber-50/60 border border-amber-200/80 rounded-xl">
          <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span>Associated Challenges, Risks & Mitigation Realities</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-stone-700 mt-3">
            <div>
              <strong className="text-stone-900 block mb-0.5">Hallucination & Misinformation:</strong>
              Even frontier aligned models can fabricate plausible-sounding falsehoods in esoteric edge cases, necessitating RAG grounding.
            </div>
            <div>
              <strong className="text-stone-900 block mb-0.5">Labor Reallocation:</strong>
              Junior programming, basic technical writing, and Tier-1 customer support roles undergo rapid structural transformation.
            </div>
            <div>
              <strong className="text-stone-900 block mb-0.5">Environmental Compute Cost:</strong>
              Massive frontier training runs and multi-billion parameter inference draw gigawatt-hours of power, requiring carbon offset initiatives.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
