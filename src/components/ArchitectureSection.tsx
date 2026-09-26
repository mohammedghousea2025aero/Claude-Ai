import React, { useState } from 'react';
import { TECHNICAL_LAYERS, ArchLayerComponent } from '../data/analysisData';
import { Layers, Network, Cpu, Database, Server, Play, CheckCircle2, ChevronRight, X, ArrowDown, ExternalLink } from 'lucide-react';

interface ArchitectureSectionProps {
  onOpenDiagramsModal: () => void;
}

export const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({ onOpenDiagramsModal }) => {
  const [selectedComponent, setSelectedComponent] = useState<ArchLayerComponent | null>(null);
  const [tracingActive, setTracingActive] = useState<boolean>(false);
  const [traceStep, setTraceStep] = useState<number>(-1);

  const startTrace = () => {
    setTracingActive(true);
    setTraceStep(0);
    const interval = setInterval(() => {
      setTraceStep((prev) => {
        if (prev < 4) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTracingActive(false);
          return -1;
        }
      });
    }, 1100);
  };

  const traceStepsInfo = [
    { title: "Client Handshake", desc: "User submits 150K token prompt over HTTPS with SSE streaming channel." },
    { title: "Gateway & Auth", desc: "AWS ALB routes traffic; Redis verifies token bucket rate limit; JWT validated in 3ms." },
    { title: "Prompt Assembly & Guardrails", desc: "Rust BPE tokenizer chunks input; Constitutional AI input filter verifies safety in 12ms." },
    { title: "Distributed GPU Inference", desc: "Model Router dispatches to H100 cluster; PagedAttention reuses 90% KV cache; 8-way Tensor Parallelism executes forward pass." },
    { title: "Streaming Response & Async Telemetry", desc: "Tokens stream to client via SSE; message logged to DynamoDB; token count queued to Kafka for billing." }
  ];

  return (
    <section className="mb-14 border-b border-stone-200 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
            <span>Section 06</span>
            <span aria-hidden="true">·</span>
            <span>Distributed System Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-stone-900">
            6. Technical Architecture Diagram (Engineering Model)
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={startTrace}
            disabled={tracingActive}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              tracingActive
                ? 'bg-amber-600 text-white animate-pulse'
                : 'bg-stone-900 hover:bg-stone-800 text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{tracingActive ? `Tracing Layer 0${traceStep + 1}...` : 'Trace Live Request Packet'}</span>
          </button>
          <button
            onClick={onOpenDiagramsModal}
            className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-md transition-colors cursor-pointer"
          >
            View &amp; Zoom Diagram
          </button>
        </div>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed mb-6">
        The Claude AI architecture is engineered for multi-tenant, ultra-low latency inference across frontier
        transformer models. Click any individual component in the 5 layers below to inspect protocol definitions,
        underlying infrastructure, and engineering mechanics.
      </p>

      {/* Tracing Banner */}
      {traceStep >= 0 && (
        <div className="mb-6 p-4 bg-amber-50 border border-amber-300 rounded-lg flex items-center justify-between text-xs text-stone-800 animate-fadeIn">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-mono flex items-center justify-center font-bold">
              {traceStep + 1}
            </span>
            <div>
              <strong className="text-stone-900 font-semibold">{traceStepsInfo[traceStep].title}:</strong>{' '}
              {traceStepsInfo[traceStep].desc}
            </div>
          </div>
          <span className="font-mono text-amber-800 font-medium">Layer {traceStep + 1} of 5</span>
        </div>
      )}

      {/* 5-Layer Architectural Stack */}
      <div className="space-y-4 mb-8">
        {TECHNICAL_LAYERS.map((layer, layerIdx) => {
          const isLayerActiveInTrace = traceStep === layerIdx;

          return (
            <div
              key={layer.id}
              className={`p-5 rounded-xl border transition-all ${
                isLayerActiveInTrace
                  ? 'bg-amber-50/70 border-amber-500 shadow-md ring-2 ring-amber-500/20'
                  : 'bg-white border-stone-200 shadow-xs'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-stone-500">
                    LAYER 0{layerIdx + 1}
                  </span>
                  <span aria-hidden="true" className="text-stone-300">/</span>
                  <h3 className="text-sm sm:text-base font-semibold text-stone-900">
                    {layer.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-500 hidden md:inline">
                    {layer.subtitle}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                    {layer.badge}
                  </span>
                </div>
              </div>

              {/* Components Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {layer.components.map((comp) => {
                  const isSelected = selectedComponent?.id === comp.id;

                  return (
                    <div
                      key={comp.id}
                      onClick={() => setSelectedComponent(comp)}
                      className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50/60 border-stone-200 hover:border-stone-300 hover:bg-stone-100/70 text-stone-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className={`text-[10px] font-mono ${isSelected ? 'text-amber-300' : 'text-stone-500'}`}>
                          {comp.protocol || 'INTER-NODE'}
                        </span>
                        {comp.latency && (
                          <span className={`text-[10px] font-mono ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                            {comp.latency}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold truncate">
                        {comp.name}
                      </h4>
                      <p className={`text-[11px] mt-1 line-clamp-2 leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                        {comp.description}
                      </p>
                      <div className="mt-2 pt-2 border-t border-stone-200/50 flex flex-wrap gap-1">
                        {comp.technologies.slice(0, 2).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                              isSelected ? 'bg-stone-800 text-stone-200' : 'bg-stone-200/60 text-stone-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Downward flow indicator between layers */}
              {layerIdx < TECHNICAL_LAYERS.length - 1 && (
                <div className="flex justify-center -mb-7 mt-3 relative z-10">
                  <div className="w-5 h-5 rounded-full bg-white border border-stone-300 flex items-center justify-center text-stone-400 shadow-2xs">
                    <ArrowDown className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Component Detail Modal / Drawer */}
      {selectedComponent && (
        <div className="p-6 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 shadow-md mb-8">
          <div className="flex items-start justify-between gap-4 pb-3 border-b border-stone-800 mb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                COMPONENT DEEP DIVE · PROTOCOL: {selectedComponent.protocol}
              </span>
              <h4 className="text-lg font-semibold text-white">
                {selectedComponent.name}
              </h4>
            </div>
            <button
              onClick={() => setSelectedComponent(null)}
              className="p-1 rounded-md text-stone-400 hover:text-white bg-stone-800 hover:bg-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300 pt-2">
            <div className="md:col-span-2 space-y-3">
              <p className="text-sm text-stone-200 leading-relaxed">
                {selectedComponent.description}
              </p>
              <div className="p-3 bg-stone-950/70 border border-stone-800 rounded-lg">
                <strong className="text-amber-300 font-mono block mb-1">Engineering Specification:</strong>
                <p className="text-stone-300 leading-relaxed font-sans text-xs">
                  {selectedComponent.details}
                </p>
              </div>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-stone-800 pt-3 md:pt-0 md:pl-6 space-y-3 font-mono">
              <div>
                <span className="text-[10px] text-stone-400 block mb-1">LATENCY PROFILE</span>
                <span className="text-sm font-semibold text-white">{selectedComponent.latency || 'N/A'}</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 block mb-1">UNDERLYING TECHNOLOGIES</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedComponent.technologies.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-stone-800 rounded text-stone-200 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engineering Level Architecture Explanation */}
      <div className="p-6 bg-white border border-stone-200 rounded-xl shadow-xs">
        <h3 className="text-lg font-editorial font-semibold text-stone-900 mb-3">
          Engineering-Level Request Lifecycle & Data Pipeline
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-stone-900 mb-2">How Requests Travel Through the System</h4>
            <ol className="list-decimal list-inside space-y-2 text-stone-600">
              <li>
                <strong>Client Entry:</strong> User prompt transmits via HTTPS or SDK to global Load Balancers (AWS ALB/NLB).
              </li>
              <li>
                <strong>Gateway Security:</strong> Edge WAF filters malicious payloads; Redis Token Bucket verifies rate limits; JWT validates identity.
              </li>
              <li>
                <strong>Prompt Orchestration:</strong> Context Assembler tokenizes input via BPE, injects system instructions, checks input guardrails.
              </li>
              <li>
                <strong>Inference Dispatch:</strong> Model Router selects GPU cluster (Haiku vs Sonnet vs Opus) based on queue depths.
              </li>
              <li>
                <strong>Transformer Forward Pass:</strong> InfiniBand-connected H100s compute attention with PagedAttention and FlashAttention-2.
              </li>
              <li>
                <strong>Real-Time Stream:</strong> Output tokens stream via SSE; safety stream classifier verifies compliance before delivery.
              </li>
            </ol>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-stone-900 mb-1">Data Processing Workflow</h4>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg font-mono text-xs text-stone-700 leading-relaxed">
                Raw Input &rarr; BPE Tokenization &rarr; Embedding Lookup &rarr; Multi-Head Self-Attention &rarr; Feed-Forward Layers &rarr; Logit Generation &rarr; Top-P Sampling &rarr; Detokenization &rarr; Constitutional AI Filter &rarr; SSE Client Stream
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-stone-900 mb-1">Inter-Component Protocols</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 border border-stone-200 rounded bg-white">
                  <span className="font-mono font-semibold text-stone-900 block">gRPC:</span>
                  <span className="text-stone-600">Low-latency internal RPC between microservices</span>
                </div>
                <div className="p-2 border border-stone-200 rounded bg-white">
                  <span className="font-mono font-semibold text-stone-900 block">NVLink & InfiniBand:</span>
                  <span className="text-stone-600">Inter-GPU tensor parallelism synchronization</span>
                </div>
                <div className="p-2 border border-stone-200 rounded bg-white">
                  <span className="font-mono font-semibold text-stone-900 block">SSE (Server-Sent Events):</span>
                  <span className="text-stone-600">Real-time token streaming to web clients</span>
                </div>
                <div className="p-2 border border-stone-200 rounded bg-white">
                  <span className="font-mono font-semibold text-stone-900 block">Apache Kafka:</span>
                  <span className="text-stone-600">Asynchronous billing & telemetry ingestion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
