import React, { useState } from 'react';
import { X, Download, Copy, Check, ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2, Layers, GitBranch, Database, Info } from 'lucide-react';

interface DiagramViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDiagram?: 'workflow' | 'architecture' | 'database';
}

export const DiagramViewerModal: React.FC<DiagramViewerModalProps> = ({
  isOpen,
  onClose,
  initialDiagram = 'workflow'
}) => {
  const [selectedDiagram, setSelectedDiagram] = useState<'workflow' | 'architecture' | 'database'>(initialDiagram);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 15, 200));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 15, 60));
  const handleResetZoom = () => setZoomLevel(100);

  // SVG Source Generators - Vector Crisp High-Resolution
  const getWorkflowSvg = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020 620" width="100%" height="100%" style="background:#FAF8F5;font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
  <rect width="1020" height="620" fill="#FAF8F5"/>
  
  <!-- Header Title -->
  <text x="510" y="42" font-size="22" font-weight="700" text-anchor="middle" fill="#1C1917">CLAUDE AI — 8-STAGE END-TO-END PIPELINE WORKFLOW</text>
  <text x="510" y="68" font-size="13" text-anchor="middle" fill="#78716C">Anthropic Constitutional AI &amp; Distributed Transformer Forward-Pass</text>
  
  <!-- Marker Definition -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#78716C"/>
    </marker>
  </defs>

  <!-- Row 1: Steps 1 to 4 -->
  <!-- Box 1: User Access -->
  <g id="step1">
    <rect x="40" y="105" width="200" height="96" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="40" y="105" width="200" height="26" rx="8" fill="#F5F5F4"/>
    <text x="140" y="123" font-size="11" font-weight="700" fill="#78350F" text-anchor="middle">STEP 01 · USER ACCESS</text>
    <text x="140" y="152" font-size="13" font-weight="600" fill="#1C1917" text-anchor="middle">Web / Mobile / API / IDE</text>
    <text x="140" y="174" font-size="11" fill="#78716C" text-anchor="middle">TLS 1.3 · Edge GeoDNS Routing</text>
    <text x="140" y="191" font-size="10" font-family="monospace" fill="#059669" text-anchor="middle">Latency: 10-25ms</text>
  </g>

  <!-- Arrow 1->2 -->
  <line x1="240" y1="153" x2="280" y2="153" stroke="#78716C" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Box 2: Input Submission -->
  <g id="step2">
    <rect x="280" y="105" width="200" height="96" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="280" y="105" width="200" height="26" rx="8" fill="#F5F5F4"/>
    <text x="380" y="123" font-size="11" font-weight="700" fill="#78350F" text-anchor="middle">STEP 02 · INPUT SUBMISSION</text>
    <text x="380" y="152" font-size="13" font-weight="600" fill="#1C1917" text-anchor="middle">Text / PDF / Image / Code</text>
    <text x="380" y="174" font-size="11" fill="#78716C" text-anchor="middle">Multimodal Token Encoding</text>
    <text x="380" y="191" font-size="10" font-family="monospace" fill="#059669" text-anchor="middle">Latency: 15-40ms</text>
  </g>

  <!-- Arrow 2->3 -->
  <line x1="480" y1="153" x2="520" y2="153" stroke="#78716C" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Box 3: Auth & Rate Limiting -->
  <g id="step3">
    <rect x="520" y="105" width="200" height="96" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="520" y="105" width="200" height="26" rx="8" fill="#F5F5F4"/>
    <text x="620" y="123" font-size="11" font-weight="700" fill="#78350F" text-anchor="middle">STEP 03 · AUTH &amp; RATE LIMIT</text>
    <text x="620" y="152" font-size="13" font-weight="600" fill="#1C1917" text-anchor="middle">Token Bucket / JWT / API Key</text>
    <text x="620" y="174" font-size="11" fill="#78716C" text-anchor="middle">Redis Cluster · Quota Check</text>
    <text x="620" y="191" font-size="10" font-family="monospace" fill="#059669" text-anchor="middle">Latency: 2-5ms</text>
  </g>

  <!-- Arrow 3->4 -->
  <line x1="720" y1="153" x2="760" y2="153" stroke="#78716C" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Box 4: Prompt Processing -->
  <g id="step4">
    <rect x="760" y="105" width="220" height="96" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="760" y="105" width="220" height="26" rx="8" fill="#F5F5F4"/>
    <text x="870" y="123" font-size="11" font-weight="700" fill="#78350F" text-anchor="middle">STEP 04 · PROMPT PROCESSING</text>
    <text x="870" y="152" font-size="13" font-weight="600" fill="#1C1917" text-anchor="middle">BPE Tokenizer &amp; Context Assembly</text>
    <text x="870" y="174" font-size="11" fill="#78716C" text-anchor="middle">Constitutional AI Input Filter</text>
    <text x="870" y="191" font-size="10" font-family="monospace" fill="#059669" text-anchor="middle">Latency: 15-30ms</text>
  </g>

  <!-- Vertical Connection Row 1 to Row 2 -->
  <path d="M 870 201 L 870 255 L 870 280" fill="none" stroke="#78716C" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Row 2: Steps 5 to 8 (Reversed Right to Left) -->
  <!-- Box 5: Model Inference (H100 Focus) -->
  <g id="step5">
    <rect x="760" y="280" width="220" height="106" rx="8" fill="#1C1917" stroke="#000000" stroke-width="1.5"/>
    <rect x="760" y="280" width="220" height="26" rx="8" fill="#292524"/>
    <text x="870" y="298" font-size="11" font-weight="700" fill="#FBBF24" text-anchor="middle">STEP 05 · MODEL INFERENCE</text>
    <text x="870" y="327" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle">NVIDIA H100s / TPU v5p</text>
    <text x="870" y="347" font-size="11" fill="#D6D3D1" text-anchor="middle">PagedAttention · 200K Tokens</text>
    <text x="870" y="367" font-size="10" font-family="monospace" fill="#FDE047" text-anchor="middle">TTFT: 150-400ms · TP=8</text>
  </g>

  <!-- Arrow 5->6 (Leftwards) -->
  <line x1="760" y1="333" x2="720" y2="333" stroke="#78716C" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Box 6: Output Generation -->
  <g id="step6">
    <rect x="520" y="280" width="200" height="106" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="520" y="280" width="200" height="26" rx="8" fill="#F5F5F4"/>
    <text x="620" y="298" font-size="11" font-weight="700" fill="#78350F" text-anchor="middle">STEP 06 · OUTPUT GENERATION</text>
    <text x="620" y="327" font-size="13" font-weight="600" fill="#1C1917" text-anchor="middle">Autoregressive Sampling</text>
    <text x="620" y="347" font-size="11" fill="#78716C" text-anchor="middle">Safety Stream Guardrail Verification</text>
    <text x="620" y="367" font-size="10" font-family="monospace" fill="#059669" text-anchor="middle">Speed: 25-50 tokens/s</text>
  </g>

  <!-- Arrow 6->7 (Leftwards) -->
  <line x1="520" y1="333" x2="480" y2="333" stroke="#78716C" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Box 7: Response Delivery -->
  <g id="step7">
    <rect x="280" y="280" width="200" height="106" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="280" y="280" width="200" height="26" rx="8" fill="#F5F5F4"/>
    <text x="380" y="298" font-size="11" font-weight="700" fill="#78350F" text-anchor="middle">STEP 07 · RESPONSE DELIVERY</text>
    <text x="380" y="327" font-size="13" font-weight="600" fill="#1C1917" text-anchor="middle">Server-Sent Events (SSE)</text>
    <text x="380" y="347" font-size="11" fill="#78716C" text-anchor="middle">Chunked JSON &amp; Async DB Write</text>
    <text x="380" y="367" font-size="10" font-family="monospace" fill="#059669" text-anchor="middle">Stream: &lt; 50ms chunk</text>
  </g>

  <!-- Arrow 7->8 (Leftwards) -->
  <line x1="280" y1="333" x2="240" y2="333" stroke="#78716C" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Box 8: User Feedback -->
  <g id="step8">
    <rect x="40" y="280" width="200" height="106" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="40" y="280" width="200" height="26" rx="8" fill="#F5F5F4"/>
    <text x="140" y="298" font-size="11" font-weight="700" fill="#78350F" text-anchor="middle">STEP 08 · USER FEEDBACK</text>
    <text x="140" y="327" font-size="13" font-weight="600" fill="#1C1917" text-anchor="middle">RLHF Signals &amp; DPO</text>
    <text x="140" y="347" font-size="11" fill="#78716C" text-anchor="middle">Kafka Logged for Model Alignment</text>
    <text x="140" y="367" font-size="10" font-family="monospace" fill="#059669" text-anchor="middle">Async Pipeline</text>
  </g>

  <!-- Bottom Informational Bar -->
  <rect x="40" y="440" width="940" height="120" rx="8" fill="#F5F5F4" stroke="#E7E5E4" stroke-width="1"/>
  <text x="60" y="470" font-size="12" font-weight="700" fill="#1C1917">CORE PIPELINE HIGHLIGHTS &amp; SAFETY GUARANTEES</text>
  <text x="60" y="495" font-size="11" fill="#44403C">• Dual Safety Guardrails: Inbound requests pass through Constitutional AI classifiers (Step 4); output streams undergo continuous checks (Step 6).</text>
  <text x="60" y="515" font-size="11" fill="#44403C">• PagedAttention KV Cache (Step 5): Reuses pre-computed attention keys up to 200,000 tokens, achieving up to 90% cost and latency reductions.</text>
  <text x="60" y="535" font-size="11" fill="#44403C">• Asynchronous Storage (Step 7 &amp; 8): User responses stream immediately without waiting for relational billing or telemetry commits.</text>

  <!-- Footer signature -->
  <text x="510" y="595" font-size="11" text-anchor="middle" fill="#A8A29E">Engineering Monograph · Prepared by Mohammed Ghouse A. (Rajalakshmi Engineering College)</text>
</svg>`;

  const getArchitectureSvg = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020 680" width="100%" height="100%" style="background:#FAF8F5;font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
  <rect width="1020" height="680" fill="#FAF8F5"/>
  <text x="510" y="38" font-size="22" font-weight="700" text-anchor="middle" fill="#1C1917">CLAUDE AI — 5-LAYER TECHNICAL ARCHITECTURE</text>
  
  <!-- Layer 1 -->
  <rect x="40" y="60" width="940" height="92" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
  <text x="60" y="85" font-size="12" font-weight="700" fill="#78350F">LAYER 1 · CLIENT / INTERFACE LAYER</text>
  <rect x="60" y="98" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="165" y="118" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">Web App (claude.ai)</text>
  <text x="165" y="132" font-size="10" text-anchor="middle" fill="#78716C">Next.js · React · Artifacts</text>

  <rect x="290" y="98" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="395" y="118" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">Mobile Applications</text>
  <text x="395" y="132" font-size="10" text-anchor="middle" fill="#78716C">iOS &amp; Android Native</text>

  <rect x="520" y="98" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="625" y="118" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">Developer SDKs</text>
  <text x="625" y="132" font-size="10" text-anchor="middle" fill="#78716C">Python · TypeScript · Go · REST</text>

  <rect x="750" y="98" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="855" y="118" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">IDE Extensions</text>
  <text x="855" y="132" font-size="10" text-anchor="middle" fill="#78716C">VS Code · Cursor · LSP</text>

  <!-- Layer 2 -->
  <rect x="40" y="172" width="940" height="92" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
  <text x="60" y="197" font-size="12" font-weight="700" fill="#78350F">LAYER 2 · API GATEWAY &amp; EDGE SECURITY LAYER</text>
  <rect x="60" y="210" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="165" y="230" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">Global Load Balancers</text>
  <text x="165" y="244" font-size="10" text-anchor="middle" fill="#78716C">AWS ALB / NLB Proxy</text>

  <rect x="290" y="210" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="395" y="230" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">Rate Limiter &amp; Quotas</text>
  <text x="395" y="244" font-size="10" text-anchor="middle" fill="#78716C">Redis Token Bucket (2-4ms)</text>

  <rect x="520" y="210" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="625" y="230" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">Authentication &amp; RBAC</text>
  <text x="625" y="244" font-size="10" text-anchor="middle" fill="#78716C">JWT / Argon2 API Keys</text>

  <rect x="750" y="210" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="855" y="230" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">WAF &amp; DDoS Defense</text>
  <text x="855" y="244" font-size="10" text-anchor="middle" fill="#78716C">L7 Payload Scrubbing</text>

  <!-- Layer 3 -->
  <rect x="40" y="284" width="940" height="92" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
  <text x="60" y="309" font-size="12" font-weight="700" fill="#78350F">LAYER 3 · APPLICATION SERVICES &amp; ORCHESTRATION LAYER</text>
  <rect x="60" y="322" width="170" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="145" y="342" font-size="11" font-weight="600" text-anchor="middle" fill="#1C1917">Prompt Assembler</text>
  <text x="145" y="356" font-size="9" text-anchor="middle" fill="#78716C">Rust BPE Tokenizer</text>

  <rect x="250" y="322" width="170" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="335" y="342" font-size="11" font-weight="600" text-anchor="middle" fill="#1C1917">Safety &amp; Moderation</text>
  <text x="335" y="356" font-size="9" text-anchor="middle" fill="#78716C">Constitutional AI Filters</text>

  <rect x="440" y="322" width="170" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="525" y="342" font-size="11" font-weight="600" text-anchor="middle" fill="#1C1917">Tool Orchestrator</text>
  <text x="525" y="356" font-size="9" text-anchor="middle" fill="#78716C">Firecracker MicroVMs</text>

  <rect x="630" y="322" width="170" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="715" y="342" font-size="11" font-weight="600" text-anchor="middle" fill="#1C1917">RAG Vector Service</text>
  <text x="715" y="356" font-size="9" text-anchor="middle" fill="#78716C">Pinecone / Weaviate HNSW</text>

  <rect x="820" y="322" width="140" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="890" y="342" font-size="11" font-weight="600" text-anchor="middle" fill="#1C1917">Kafka Usage</text>
  <text x="890" y="356" font-size="9" text-anchor="middle" fill="#78716C">Token Metering</text>

  <!-- Layer 4: Model Inference (Dark High Contrast) -->
  <rect x="40" y="396" width="940" height="114" rx="8" fill="#1C1917" stroke="#000000" stroke-width="1.5"/>
  <text x="60" y="422" font-size="12" font-weight="700" fill="#FBBF24">LAYER 4 · MODEL INFERENCE &amp; GPU ACCELERATION (CLUSTER INFRASTRUCTURE)</text>
  
  <rect x="60" y="438" width="210" height="58" rx="6" fill="#292524" stroke="#44403C"/>
  <text x="165" y="462" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Dynamic Model Router</text>
  <text x="165" y="478" font-size="10" fill="#D6D3D1" text-anchor="middle">Claude 3.5 Sonnet / Opus / Haiku</text>
  <text x="165" y="490" font-size="9" font-family="monospace" fill="#A8A29E" text-anchor="middle">SLO Latency Queue Balancing</text>

  <rect x="290" y="438" width="210" height="58" rx="6" fill="#292524" stroke="#44403C"/>
  <text x="395" y="462" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">NVIDIA H100 / TPU v5p</text>
  <text x="395" y="478" font-size="10" fill="#D6D3D1" text-anchor="middle">8-Way Tensor Parallelism (TP=8)</text>
  <text x="395" y="490" font-size="9" font-family="monospace" fill="#A8A29E" text-anchor="middle">InfiniBand 3.2 Tbps Fabric</text>

  <rect x="520" y="438" width="210" height="58" rx="6" fill="#292524" stroke="#44403C"/>
  <text x="625" y="462" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">PagedAttention KV Cache</text>
  <text x="625" y="478" font-size="10" fill="#D6D3D1" text-anchor="middle">Non-Contiguous GPU Memory</text>
  <text x="625" y="490" font-size="9" font-family="monospace" fill="#A8A29E" text-anchor="middle">200K Tokens · FlashAttention-2</text>

  <rect x="750" y="438" width="210" height="58" rx="6" fill="#292524" stroke="#44403C"/>
  <text x="855" y="462" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Continuous Batching</text>
  <text x="855" y="478" font-size="10" fill="#D6D3D1" text-anchor="middle">Iteration Boundary Scheduling</text>
  <text x="855" y="490" font-size="9" font-family="monospace" fill="#A8A29E" text-anchor="middle">GPU Core Utilization &gt; 75%</text>

  <!-- Layer 5 -->
  <rect x="40" y="530" width="940" height="92" rx="8" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
  <text x="60" y="555" font-size="12" font-weight="700" fill="#78350F">LAYER 5 · POLYGLOT PERSISTENCE, CACHE &amp; HYPERSCALER RUNTIMES</text>
  <rect x="60" y="568" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="165" y="588" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">PostgreSQL (Aurora)</text>
  <text x="165" y="602" font-size="10" text-anchor="middle" fill="#78716C">Users · Subscriptions · Billing</text>

  <rect x="290" y="568" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="395" y="588" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">DynamoDB / MongoDB</text>
  <text x="395" y="602" font-size="10" text-anchor="middle" fill="#78716C">Dialog Turns · Message Trees</text>

  <rect x="520" y="568" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="625" y="588" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">Pinecone Vector DB</text>
  <text x="625" y="602" font-size="10" text-anchor="middle" fill="#78716C">Dense Project Embeddings</text>

  <rect x="750" y="568" width="210" height="42" rx="5" fill="#F5F5F4" stroke="#E7E5E4"/>
  <text x="855" y="588" font-size="12" font-weight="600" text-anchor="middle" fill="#1C1917">AWS Bedrock &amp; Vertex AI</text>
  <text x="855" y="602" font-size="10" text-anchor="middle" fill="#78716C">Private VPC Enclaves</text>

  <text x="510" y="655" font-size="11" text-anchor="middle" fill="#A8A29E">System Design Architecture · Mohammed Ghouse A. (Rajalakshmi Engineering College)</text>
</svg>`;

  const getDatabaseSvg = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020 620" width="100%" height="100%" style="background:#FAF8F5;font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
  <rect width="1020" height="620" fill="#FAF8F5"/>
  <text x="510" y="38" font-size="22" font-weight="700" text-anchor="middle" fill="#1C1917">CLAUDE AI — ENTITY RELATIONSHIP (ER) DATA MODEL</text>
  <text x="510" y="62" font-size="13" text-anchor="middle" fill="#78716C">Polyglot Relational, Document &amp; Dense Vector Schemas</text>

  <!-- USERS -->
  <g id="table_users">
    <rect x="50" y="90" width="200" height="160" rx="6" fill="#FFFFFF" stroke="#1C1917" stroke-width="1.5"/>
    <rect x="50" y="90" width="200" height="32" rx="6" fill="#1C1917"/>
    <text x="150" y="112" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">USERS (PostgreSQL)</text>
    <text x="65" y="140" font-size="11" fill="#78350F" font-weight="700">PK user_id (UUID)</text>
    <text x="65" y="162" font-size="11" fill="#44403C">email (VARCHAR UNIQUE)</text>
    <text x="65" y="184" font-size="11" fill="#44403C">name (VARCHAR)</text>
    <text x="65" y="206" font-size="11" fill="#44403C">plan_type (ENUM)</text>
    <text x="65" y="228" font-size="11" fill="#44403C">api_key_hash (VARCHAR)</text>
  </g>

  <!-- Line USERS -> CONVERSATIONS -->
  <line x1="250" y1="150" x2="380" y2="150" stroke="#78716C" stroke-width="2"/>
  <text x="315" y="142" font-size="11" font-weight="600" fill="#78716C" text-anchor="middle">1 : N</text>

  <!-- CONVERSATIONS -->
  <g id="table_conversations">
    <rect x="380" y="90" width="210" height="160" rx="6" fill="#FFFFFF" stroke="#1C1917" stroke-width="1.5"/>
    <rect x="380" y="90" width="210" height="32" rx="6" fill="#1C1917"/>
    <text x="485" y="112" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">CONVERSATIONS (Dynamo)</text>
    <text x="395" y="140" font-size="11" fill="#78350F" font-weight="700">PK convo_id (UUID)</text>
    <text x="395" y="162" font-size="11" fill="#1E3A8A" font-weight="600">FK user_id (UUID)</text>
    <text x="395" y="184" font-size="11" fill="#44403C">title (VARCHAR)</text>
    <text x="395" y="206" font-size="11" fill="#44403C">model_used (VARCHAR)</text>
    <text x="395" y="228" font-size="11" fill="#44403C">created_at (TIMESTAMP)</text>
  </g>

  <!-- Line CONVERSATIONS -> MESSAGES -->
  <line x1="590" y1="150" x2="720" y2="150" stroke="#78716C" stroke-width="2"/>
  <text x="655" y="142" font-size="11" font-weight="600" fill="#78716C" text-anchor="middle">1 : N</text>

  <!-- MESSAGES -->
  <g id="table_messages">
    <rect x="720" y="90" width="220" height="180" rx="6" fill="#FFFFFF" stroke="#1C1917" stroke-width="1.5"/>
    <rect x="720" y="90" width="220" height="32" rx="6" fill="#1C1917"/>
    <text x="830" y="112" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">MESSAGES (DynamoDB)</text>
    <text x="735" y="140" font-size="11" fill="#78350F" font-weight="700">PK msg_id (UUID)</text>
    <text x="735" y="162" font-size="11" fill="#1E3A8A" font-weight="600">FK convo_id (UUID)</text>
    <text x="735" y="184" font-size="11" fill="#44403C">role (user / assistant)</text>
    <text x="735" y="206" font-size="11" fill="#44403C">content (TEXT / JSON)</text>
    <text x="735" y="228" font-size="11" fill="#44403C">token_count (INTEGER)</text>
    <text x="735" y="250" font-size="11" fill="#44403C">feedback (ENUM rating)</text>
  </g>

  <!-- Line MESSAGES -> ATTACHMENTS (Down) -->
  <line x1="830" y1="270" x2="830" y2="330" stroke="#78716C" stroke-width="2"/>
  <text x="845" y="305" font-size="11" font-weight="600" fill="#78716C">1 : N</text>

  <!-- ATTACHMENTS -->
  <g id="table_attachments">
    <rect x="720" y="330" width="220" height="150" rx="6" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="720" y="330" width="220" height="28" rx="6" fill="#44403C"/>
    <text x="830" y="350" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">ATTACHMENTS (Postgres)</text>
    <text x="735" y="375" font-size="11" fill="#78350F" font-weight="700">PK attach_id (UUID)</text>
    <text x="735" y="397" font-size="11" fill="#1E3A8A" font-weight="600">FK msg_id (UUID)</text>
    <text x="735" y="419" font-size="11" fill="#44403C">file_name / file_type</text>
    <text x="735" y="441" font-size="11" fill="#44403C">storage_url (S3 presigned)</text>
  </g>

  <!-- USERS -> PROJECTS -->
  <line x1="150" y1="250" x2="150" y2="330" stroke="#78716C" stroke-width="2"/>
  <text x="165" y="295" font-size="11" font-weight="600" fill="#78716C">1 : N</text>

  <g id="table_projects">
    <rect x="50" y="330" width="200" height="150" rx="6" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="50" y="330" width="200" height="28" rx="6" fill="#44403C"/>
    <text x="150" y="350" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">PROJECTS (Postgres)</text>
    <text x="65" y="375" font-size="11" fill="#78350F" font-weight="700">PK project_id (UUID)</text>
    <text x="65" y="397" font-size="11" fill="#1E3A8A" font-weight="600">FK user_id (UUID)</text>
    <text x="65" y="419" font-size="11" fill="#44403C">name (VARCHAR)</text>
    <text x="65" y="441" font-size="11" fill="#44403C">system_prompt (TEXT)</text>
  </g>

  <!-- PROJECTS -> PROJECT_DOCUMENTS -->
  <line x1="250" y1="400" x2="380" y2="400" stroke="#78716C" stroke-width="2"/>
  <text x="315" y="392" font-size="11" font-weight="600" fill="#78716C" text-anchor="middle">1 : N</text>

  <g id="table_project_documents">
    <rect x="380" y="330" width="210" height="150" rx="6" fill="#FFFFFF" stroke="#D6D3D1" stroke-width="1.5"/>
    <rect x="380" y="330" width="210" height="28" rx="6" fill="#44403C"/>
    <text x="485" y="350" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">PROJECT_DOCUMENTS</text>
    <text x="395" y="375" font-size="11" fill="#78350F" font-weight="700">PK doc_id (UUID)</text>
    <text x="395" y="397" font-size="11" fill="#1E3A8A" font-weight="600">FK project_id (UUID)</text>
    <text x="395" y="419" font-size="11" fill="#44403C">file_name / file_type</text>
    <text x="395" y="441" font-size="11" fill="#44403C">vector_ids (Pinecone HNSW)</text>
  </g>

  <!-- Footer note -->
  <text x="510" y="575" font-size="11" text-anchor="middle" fill="#A8A29E">Polyglot Storage Design · Mohammed Ghouse A. (Rajalakshmi Engineering College)</text>
</svg>`;

  const getActiveSvgString = () => {
    if (selectedDiagram === 'workflow') return getWorkflowSvg();
    if (selectedDiagram === 'architecture') return getArchitectureSvg();
    return getDatabaseSvg();
  };

  const handleDownload = () => {
    const svgStr = getActiveSvgString();
    const blob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `claude_ai_${selectedDiagram}_diagram.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopySvg = () => {
    navigator.clipboard.writeText(getActiveSvgString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div
        className={`bg-[#FBF9F5] border border-stone-300 rounded-xl w-full flex flex-col shadow-2xl relative transition-all duration-200 ${
          isFullscreen ? 'h-[96vh] max-w-[98vw]' : 'max-w-6xl my-4 max-h-[92vh]'
        }`}
      >
        {/* Top Header Controls Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white rounded-t-xl shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                SYSTEM DESIGN DIAGRAM VIEWER
              </span>
              <span className="text-[11px] font-mono text-stone-400">· Vector Zoomable</span>
            </div>
            <h3 className="text-lg sm:text-xl font-editorial font-semibold text-stone-900">
              {selectedDiagram === 'workflow' && 'Section 4: 8-Stage Pipeline Workflow Diagram'}
              {selectedDiagram === 'architecture' && 'Section 6: 5-Layer Technical Architecture Model'}
              {selectedDiagram === 'database' && 'Section 7: Polyglot Entity-Relationship (ER) Model'}
            </h3>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* Zoom Controls */}
            <div className="flex items-center bg-stone-100 rounded-lg p-0.5 border border-stone-200 text-xs font-mono">
              <button
                onClick={handleZoomOut}
                title="Zoom Out"
                className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded cursor-pointer"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                title="Reset Zoom"
                className="px-2 py-1 text-stone-700 hover:text-stone-900 cursor-pointer tabular-nums"
              >
                {zoomLevel}%
              </button>
              <button
                onClick={handleZoomIn}
                title="Zoom In"
                className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded cursor-pointer"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              className="p-2 text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              title="Close Diagram Viewer"
              className="p-2 text-stone-500 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Diagram Selection Tabs */}
        <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-stone-200 flex flex-wrap gap-2 bg-[#F7F4EE] shrink-0">
          <button
            onClick={() => { setSelectedDiagram('workflow'); setZoomLevel(100); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedDiagram === 'workflow'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-300'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5 text-amber-400" />
            <span>4. Workflow Pipeline Diagram</span>
          </button>

          <button
            onClick={() => { setSelectedDiagram('architecture'); setZoomLevel(100); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedDiagram === 'architecture'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-300'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>6. Technical Architecture Diagram</span>
          </button>

          <button
            onClick={() => { setSelectedDiagram('database'); setZoomLevel(100); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              selectedDiagram === 'database'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-300'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-amber-400" />
            <span>7. Database ER Model</span>
          </button>
        </div>

        {/* Main Canvas Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-auto bg-stone-100 flex items-center justify-center min-h-[350px]">
          <div
            className="transition-transform duration-150 origin-center bg-white rounded-lg shadow-sm border border-stone-300 p-2 sm:p-4 w-full flex items-center justify-center overflow-auto"
            style={{ transform: `scale(${zoomLevel / 100})` }}
            dangerouslySetInnerHTML={{ __html: getActiveSvgString() }}
          />
        </div>

        {/* Footer Action Bar */}
        <div className="p-4 bg-white border-t border-stone-200 rounded-b-xl flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <Info className="w-4 h-4 text-stone-400 shrink-0" />
            <span>
              Format: High-Resolution Scalable Vector Graphic (SVG). Ideal for Canva, draw.io, or LinkedIn articles.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySvg}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'SVG Copied!' : 'Copy Raw SVG'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-amber-300" />
              <span>Download SVG File</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
