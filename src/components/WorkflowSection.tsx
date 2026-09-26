import React, { useState, useEffect } from 'react';
import { WORKFLOW_STEPS } from '../data/analysisData';
import { Play, Pause, RotateCcw, CheckCircle2, ChevronRight, Activity, Cpu, Shield, ArrowRight, Download, Layers } from 'lucide-react';

interface WorkflowSectionProps {
  onOpenDiagramsModal: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenDiagramsModal }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [scenario, setScenario] = useState<'legal' | 'coding' | 'multimodal'>('legal');
  const [tokensProcessed, setTokensProcessed] = useState<number>(0);

  const scenarios = {
    legal: {
      name: "180-Page M&A Purchase Agreement (PDF)",
      input: "Analyze Section 8.4 Indemnification caps and cross-reference with Exhibit B disclosure schedules.",
      tokenEst: 142000,
      model: "Claude 3.5 Sonnet",
      ttft: "285 ms",
      cached: "135,000 tokens (95% cache hit)",
      outputSample: "Under Section 8.4(b), the General Cap is strictly limited to 10% of Aggregate Purchase Price ($14.2M), excluding Fundamental Representations which remain uncapped..."
    },
    coding: {
      name: "React TypeScript & WebGL Canvas Bug (Image + Code)",
      input: "Review screenshot of distorted matrix transformation and fix the vertex shader projection bug in buffer.ts.",
      tokenEst: 8400,
      model: "Claude 3.5 Sonnet",
      ttft: "140 ms",
      cached: "0 tokens",
      outputSample: "The distortion stems from column-major vs row-major transpose mismatch on line 42 of buffer.ts. When passing glm::mat4 to WebGL uniformMatrix4fv, transpose flag must be false..."
    },
    multimodal: {
      name: "Medical Diagnostic Protocol & MRI Slice Summary",
      input: "Evaluate axial T2 FLAIR series notes against 2026 neuro-imaging guidelines.",
      tokenEst: 19500,
      model: "Claude 3 Opus",
      ttft: "390 ms",
      cached: "12,000 tokens",
      outputSample: "Per 2026 diagnostic consensus, the hyperintense periventricular lesions correspond to McDonald criteria dissemination in space (DIS). Recommend CSF oligoclonal band testing..."
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev < WORKFLOW_STEPS.length - 1) {
            setTokensProcessed(Math.round(((prev + 1) / (WORKFLOW_STEPS.length - 1)) * scenarios[scenario].tokenEst));
            return prev + 1;
          } else {
            setIsSimulating(false);
            return prev;
          }
        });
      }, 700);
    }
    return () => clearInterval(interval);
  }, [isSimulating, scenario]);

  const handleStartSimulation = () => {
    setActiveStep(0);
    setTokensProcessed(0);
    setIsSimulating(true);
  };

  const handleReset = () => {
    setIsSimulating(false);
    setActiveStep(0);
    setTokensProcessed(0);
  };

  const currentStepData = WORKFLOW_STEPS[activeStep];
  const currentScenario = scenarios[scenario];

  return (
    <section className="mb-14 border-b border-stone-200 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
            <span>Section 04</span>
            <span aria-hidden="true">·</span>
            <span>End-to-End Pipeline Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-stone-900">
            4. Workflow Diagram of the Product
          </h2>
        </div>
        <button
          onClick={onOpenDiagramsModal}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Layers className="w-3.5 h-3.5 text-stone-700" />
          <span>View &amp; Zoom Diagram</span>
        </button>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed mb-6">
        Below is the authoritative 8-step user-facing and backend execution workflow. Use the interactive
        simulator to trace a request through authentication, BPE tokenization, transformer forward pass,
        and Constitutional AI safety moderation.
      </p>

      {/* Interactive Simulator Controller Bar */}
      <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-xl shadow-xs mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs font-mono text-stone-500 block mb-1">Test Workload Scenario:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setScenario('legal'); handleReset(); }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  scenario === 'legal'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                142K Token Legal Audit
              </button>
              <button
                onClick={() => { setScenario('coding'); handleReset(); }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  scenario === 'coding'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                Code & Vision Bugfix
              </button>
              <button
                onClick={() => { setScenario('multimodal'); handleReset(); }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  scenario === 'multimodal'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                Medical Triage Protocol
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isSimulating ? (
              <button
                onClick={handleStartSimulation}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-amber-700 hover:bg-amber-800 rounded-md transition-colors cursor-pointer shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Run Pipeline Simulation</span>
              </button>
            ) : (
              <button
                onClick={() => setIsSimulating(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-800 bg-stone-200 hover:bg-stone-300 rounded-md transition-colors cursor-pointer"
              >
                <Pause className="w-3.5 h-3.5" />
                <span>Pause</span>
              </button>
            )}
            <button
              onClick={handleReset}
              className="p-2 text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Live Scenario Telemetry Bar */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div>
            <span className="text-stone-400 block text-[11px]">TARGET MODEL</span>
            <span className="font-semibold text-stone-800">{currentScenario.model}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[11px]">CONTEXT SIZE</span>
            <span className="font-semibold text-stone-800 tabular-nums">{currentScenario.tokenEst.toLocaleString()} tokens</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[11px]">EST. TTFT</span>
            <span className="font-semibold text-stone-800 tabular-nums">{currentScenario.ttft}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[11px]">KV CACHE STATE</span>
            <span className="font-semibold text-emerald-700">{currentScenario.cached}</span>
          </div>
        </div>
      </div>

      {/* 8-Step Visual Pipeline Stepper */}
      <div className="mb-8">
        <h3 className="text-sm font-mono uppercase tracking-wider text-stone-500 mb-3">
          Pipeline Execution Sequence (Click step to inspect)
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {WORKFLOW_STEPS.map((s, idx) => {
            const isCurrent = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <button
                key={s.step}
                onClick={() => { setActiveStep(idx); setIsSimulating(false); }}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer relative ${
                  isCurrent
                    ? 'bg-amber-50/90 border-amber-600 shadow-xs ring-1 ring-amber-500/20'
                    : isCompleted
                    ? 'bg-stone-100/80 border-stone-300 text-stone-800'
                    : 'bg-white border-stone-200 hover:border-stone-300 text-stone-500'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono ${isCurrent ? 'text-amber-700 font-bold' : 'text-stone-400'}`}>
                    STEP 0{s.step}
                  </span>
                  {isCompleted && <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />}
                </div>
                <div className="text-xs font-semibold truncate text-stone-900">
                  {s.name}
                </div>
                <div className="text-[10px] text-stone-500 truncate mt-0.5 font-mono">
                  {s.latency}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Deep-Dive Inspector */}
      <div className="p-6 bg-white border border-stone-200 rounded-xl shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-stone-900 text-white font-mono text-xs flex items-center justify-center font-bold">
              0{currentStepData.step}
            </span>
            <div>
              <h4 className="text-base font-semibold text-stone-900">
                {currentStepData.name}
              </h4>
              <span className="text-xs font-mono text-stone-500">
                Subsystem Channel: {currentStepData.channel} · Latency Budget: {currentStepData.latency}
              </span>
            </div>
          </div>
          <div className="text-xs font-mono text-stone-500">
            Progress: Step {activeStep + 1} of 8
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs sm:text-sm">
          <div>
            <h5 className="font-semibold text-stone-900 mb-1.5">Operational Overview</h5>
            <p className="text-stone-600 leading-relaxed">
              {currentStepData.summary}
            </p>
            <div className="mt-3 p-3 bg-stone-50 border border-stone-200 rounded-md font-mono text-xs text-stone-700">
              <strong className="text-stone-900 block mb-0.5">Low-Level Protocol:</strong>
              {currentStepData.details}
            </div>
          </div>

          <div className="p-4 bg-stone-950 text-stone-200 rounded-lg font-mono text-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-stone-800 pb-2 mb-2">
                <span>SIMULATION OUTPUT BUFFER</span>
                <span className="text-amber-400">STATE: {isSimulating ? 'TRANSMITTING' : 'READY'}</span>
              </div>
              <div className="space-y-1.5 text-stone-300">
                <p className="text-stone-400">{">"} Scenario: {currentScenario.name}</p>
                <p className="text-stone-400">{">"} Active Token Ingestion: {tokensProcessed.toLocaleString()} / {currentScenario.tokenEst.toLocaleString()}</p>
                {activeStep >= 4 ? (
                  <p className="text-emerald-400 pt-2 border-t border-stone-800 leading-relaxed font-sans text-xs">
                    &quot;{currentScenario.outputSample}&quot;
                  </p>
                ) : (
                  <p className="text-stone-500 italic pt-2">
                    Awaiting Transformer decode stage (Step 05+)...
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4 pt-2 border-t border-stone-800 text-[10px] text-stone-400 flex justify-between">
              <span>Constitutional Safety: PASS (Score: 0.998)</span>
              <span>Memory KV: Locked</span>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Workflow Block Reference Table */}
      <h3 className="text-lg font-editorial font-semibold text-stone-900 mb-3">
        Detailed Workflow Block Specification
      </h3>
      <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white shadow-xs">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-[#F7F4EE] border-b border-stone-200 text-stone-700 font-medium">
            <tr>
              <th className="py-3 px-4 w-12 text-center">Step</th>
              <th className="py-3 px-4 w-44">Workflow Block</th>
              <th className="py-3 px-4 w-48">Execution Channel</th>
              <th className="py-3 px-4">Engineering Purpose & Implementation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 text-stone-800">
            {WORKFLOW_STEPS.map((s) => (
              <tr
                key={s.step}
                onClick={() => setActiveStep(s.step - 1)}
                className={`transition-colors cursor-pointer ${
                  activeStep === s.step - 1 ? 'bg-amber-50/50 font-medium' : 'hover:bg-stone-50'
                }`}
              >
                <td className="py-3 px-4 text-center font-mono font-bold text-stone-500">
                  {s.step}
                </td>
                <td className="py-3 px-4 font-semibold text-stone-900">
                  {s.name}
                </td>
                <td className="py-3 px-4 font-mono text-stone-600 text-xs">
                  {s.channel}
                </td>
                <td className="py-3 px-4 text-stone-600 leading-relaxed">
                  {s.summary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
