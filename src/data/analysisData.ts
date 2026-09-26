export interface EntityField {
  name: string;
  type: string;
  isPk?: boolean;
  isFk?: boolean;
  ref?: string;
  description: string;
}

export interface DatabaseEntity {
  id: string;
  name: string;
  storage: 'PostgreSQL' | 'MongoDB / DynamoDB' | 'Pinecone (Vector)';
  description: string;
  fields: EntityField[];
}

export interface ArchLayerComponent {
  id: string;
  name: string;
  protocol?: string;
  description: string;
  technologies: string[];
  latency?: string;
  details: string;
}

export interface ArchLayer {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  components: ArchLayerComponent[];
}

export const AUTHOR_INFO = {
  name: "Mohammed Ghouse A.",
  role: "Student Researcher & Engineer",
  department: "Department of Aeronautical Engineering",
  institution: "Rajalakshmi Engineering College",
  email: "mohammedghouse.a.2025.aero@rajalakshmi.edu.in",
  topic: "Claude AI by Anthropic – Engineering Product Analysis & System Design",
  hashtags: [
    "#ProductAnalysis",
    "#ClaudeAI",
    "#Anthropic",
    "#ArtificialIntelligence",
    "#SystemDesign",
    "#Engineering",
    "#LLM",
    "#TechArchitecture"
  ]
};

export const PRODUCT_OVERVIEW = {
  productName: "Claude AI (Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku, Claude 4 series)",
  company: "Anthropic PBC (Public Benefit Corporation)",
  headquarters: "San Francisco, California, USA",
  founded: "2021 by Dario Amodei, Daniela Amodei, and former OpenAI researchers",
  purpose: "To provide a safe, helpful, and honest large language model (LLM) capable of natural language understanding, generation, reasoning, code generation, and multimodal analysis.",
  targetUsers: [
    "Enterprise developers & software engineers",
    "Scientific researchers & academics",
    "Content creators & technical writers",
    "Customer support automation teams",
    "Legal and compliance professionals",
    "Educators and knowledge workers"
  ],
  coreServices: [
    "Conversational AI chatbot (claude.ai)",
    "API access for developers (/v1/messages)",
    "Claude for Enterprise with SSO and SCIM",
    "Multimodal document, code, and vision analysis",
    "Extended 200,000 token context window processing",
    "Tool Use and agentic function calling",
    "Interactive Artifacts (React, SVG, Code preview)"
  ]
};

export const BUSINESS_VALUE = {
  productivityAmplification: "Accelerates software development sprint velocity by 20–40% through intelligent code generation, bug refactoring, and instant document summarization.",
  costReduction: "Replaces repetitive cognitive tasks in customer support triage, contract analysis, and draft authoring, substantially lowering knowledge-work overhead.",
  decisionSupport: "Synthesizes multi-hundred-page SEC filings, clinical research papers, and technical whitepapers into high-fidelity, actionable briefs in seconds.",
  platformStickiness: "The Anthropic Messages API embeds deeply into enterprise CI/CD pipelines, customer support CRM, and RAG architectures, driving high net retention and customer lifetime value.",
  marketRelevance: {
    projectedMarket: "$200+ Billion by 2030 (Grand View Research)",
    partnerships: "Strategic capital and cloud distribution partnerships with Amazon (up to $4B investment / AWS Bedrock) and Google ($2B+ investment / GCP Vertex AI).",
    segment: "Frontier Enterprise AI segment competing directly against OpenAI GPT-4/GPT-4o, Google Gemini, and Meta Llama."
  },
  revenueStreams: [
    { tier: "Freemium Consumer Tier", pricing: "Free", description: "Standard usage limits for brand acquisition, organic user adoption, and model feedback." },
    { tier: "Claude Pro Subscription", pricing: "$20 / month", description: "5x higher usage limits, priority access during peak hours, and early access to frontier models." },
    { tier: "Claude Team Plan", pricing: "$30 / user / month", description: "Collaborative project workspaces, shared document repositories, higher rate limits, and team admin." },
    { tier: "Enterprise Plan", pricing: "Custom annual contract", description: "Dedicated SLA guarantees, SSO/SCIM integration, expanded admin governance, and customized compliance." },
    { tier: "API Usage-Based Pricing", pricing: "$3 / MTok in · $15 / MTok out (3.5 Sonnet)", description: "Granular pay-as-you-go token pricing with prompt caching discounts up to 90%." },
    { tier: "Hyperscaler Marketplaces", pricing: "AWS Bedrock & GCP Vertex AI", description: "Revenue sharing through enterprise cloud commits and seamless VPC integration." }
  ],
  competitiveAdvantages: [
    {
      title: "Constitutional AI (CAI)",
      desc: "Proprietary alignment technique guiding model behaviors through explicit constitutional rules, cutting manual red-teaming costs while yielding superior safety."
    },
    {
      title: "200K Extended Context Window",
      desc: "Allows entire codebases (~150,000 words or 500+ book pages) in a single turn without lossy chunking, dominating document-heavy legal and medical domains."
    },
    {
      title: "Nuanced Honesty & Refusal Calibration",
      desc: "Engineered to express calibrated uncertainty, admit lack of knowledge, refuse malicious prompts gracefully, and minimize dangerous hallucinations."
    },
    {
      title: "Multimodal Visual & Diagram Reasoning",
      desc: "Native vision tokenization processes architectural schematics, financial plots, UI mockups, and handwritten notes in unified attention contexts."
    },
    {
      title: "Enterprise Safety Brand Trust",
      desc: "Anthropic's Public Benefit Corporation structure and safety-first pedigree appeal to heavily regulated healthcare, banking, and government sectors."
    }
  ]
};

export const WORKFLOW_STEPS = [
  {
    step: 1,
    name: "User Access",
    channel: "Web / Mobile / API / IDE",
    summary: "User initiates an interaction through claude.ai, mobile apps, or programmatically via the Anthropic API, AWS Bedrock, or GCP Vertex AI.",
    latency: "10–25 ms",
    details: "TLS 1.3 handshake, session validation, geo-DNS routing to nearest cloud edge."
  },
  {
    step: 2,
    name: "Input Submission",
    channel: "Text / Vision / PDF / Code",
    summary: "User inputs multimodal prompts, uploaded PDFs, PNG/JPG screenshots, or code files. Multimodal files are encoded into uniform token representations.",
    latency: "15–40 ms",
    details: "MIME type verification, malware scanning on attachments, image resolution normalization."
  },
  {
    step: 3,
    name: "Auth & Rate Limiting",
    channel: "Token Bucket / JWT / API Key",
    summary: "Verifies user identity, parses subscription quota tier (Free, Pro, Team, Enterprise, API), and enforces burst & sliding-window rate limit checks.",
    latency: "2–5 ms",
    details: "Redis cluster token bucket check, JWT signature verify, hashed API key lookup."
  },
  {
    step: 4,
    name: "Prompt Processing",
    channel: "Tokenizer & Guardrails",
    summary: "Performs Byte-Pair Encoding (BPE) tokenization, concatenates system prompts, project instructions, and historical context; executes input safety guardrails.",
    latency: "15–30 ms",
    details: "Context window assembly up to 200,000 tokens, jailbreak prompt classifier, PII detection."
  },
  {
    step: 5,
    name: "Model Inference",
    channel: "H100 GPU Clusters / vLLM",
    summary: "Tokenized context passes through transformer layers using multi-head self-attention. PagedAttention reuses KV cache; orchestrates tool calls if required.",
    latency: "150–400 ms (TTFT)",
    details: "PagedAttention KV cache lookup, speculative decoding, continuous batch scheduler, tensor parallelism."
  },
  {
    step: 6,
    name: "Output Generation",
    channel: "Autoregressive Sampling",
    summary: "Model samples output tokens (temperature, top-p, top-k). Generated tokens pass through real-time Constitutional AI output safety filters.",
    latency: "25–50 tok/s",
    details: "Logit generation, de-tokenization, real-time safety stream evaluation."
  },
  {
    step: 7,
    name: "Response Delivery",
    channel: "SSE / WebSocket / JSON",
    summary: "Streams tokens in real-time to the client interface (Server-Sent Events for Web UI; chunked JSON for API). Persists turn to conversation database.",
    latency: "Sub-50 ms stream",
    details: "SSE chunk encoding, async write to DynamoDB/PostgreSQL, token accounting for billing."
  },
  {
    step: 8,
    name: "User Feedback",
    channel: "RLHF & Model Signals",
    summary: "User rates responses (thumbs up/down), submits follow-up edits, or copies artifacts. Signals feed into offline alignment pipelines.",
    latency: "Async background",
    details: "Feedback telemetry logged to Kafka, anonymized, and queued for DPO/RLHF datasets."
  }
];

export const TECHNICAL_LAYERS: ArchLayer[] = [
  {
    id: "client",
    title: "1. Client & Interface Layer",
    subtitle: "Front-end entry points across consumer, enterprise, and developer interfaces",
    badge: "User Facing",
    components: [
      {
        id: "web-client",
        name: "Web Application (claude.ai)",
        protocol: "HTTPS / SSE",
        description: "Next.js / React single-page application with streaming markdown rendering and interactive Artifact sandbox.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Server-Sent Events"],
        latency: "Client DOM",
        details: "Renders real-time text streams, manages client-side draft cache in IndexedDB, and executes sandboxed HTML/SVG/React artifacts inside an isolated iframe."
      },
      {
        id: "mobile-client",
        name: "Mobile Applications",
        protocol: "HTTPS / WSS",
        description: "Native iOS and Android client applications with voice dictation and camera-assisted multimodal capture.",
        technologies: ["Swift", "Kotlin", "WebRTC"],
        latency: "Client Native",
        details: "Optimized image compression before upload, biometric authentication, and offline draft storage."
      },
      {
        id: "api-client",
        name: "Developer SDKs & CLI",
        protocol: "REST / HTTPS",
        description: "Official SDKs in Python, TypeScript, Go, and Java supporting streaming, tool use, and structured outputs.",
        technologies: ["Python SDK", "TypeScript SDK", "cURL"],
        latency: "Developer Env",
        details: "Implements automatic retries with exponential backoff, connection pooling, and client-side prompt caching helpers."
      },
      {
        id: "ide-plugins",
        name: "IDE Integrations & Extensions",
        protocol: "LSP / HTTPS",
        description: "VS Code, Cursor, and JetBrains extensions for inline code completions and multi-file refactoring.",
        technologies: ["Language Server Protocol", "VS Code API"],
        latency: "Local IDE",
        details: "Captures repository context, git diffs, and compiler diagnostics to construct rich developer prompts."
      }
    ]
  },
  {
    id: "gateway",
    title: "2. API Gateway & Edge Security Layer",
    subtitle: "Edge routing, DDoS defense, authentication, and token-bucket rate limiting",
    badge: "Infrastructure",
    components: [
      {
        id: "load-balancer",
        name: "Global Load Balancers (AWS ALB / NLB)",
        protocol: "Anycast / BGP",
        description: "Distributes incoming traffic across geographically separated availability zones and compute clusters.",
        technologies: ["AWS NLB", "Envoy Proxy", "Cloudflare Anycast"],
        latency: "1–3 ms",
        details: "Terminates TLS 1.3 connections, applies SSL offloading, and performs round-robin or least-request backend routing."
      },
      {
        id: "rate-limiter",
        name: "Rate Limiter & Quota Service",
        protocol: "gRPC",
        description: "Token-bucket and sliding-window rate limit enforcement keyed by user ID, organization ID, and IP tier.",
        technologies: ["Redis Cluster", "Lua Scripts"],
        latency: "2–4 ms",
        details: "Enforces requests-per-minute (RPM) and tokens-per-minute (TPM) limits across Free, Pro, and Enterprise tiers."
      },
      {
        id: "auth-service",
        name: "Authentication & Authorization Service",
        protocol: "JWT / OAuth 2.0",
        description: "Validates API keys, sessions, and enterprise SSO SAML/SCIM credentials.",
        technologies: ["Okta / Auth0", "Argon2 / SHA-256", "JWT"],
        latency: "3–6 ms",
        details: "Validates hashed API keys with sub-millisecond in-memory cache and enforces role-based access control (RBAC)."
      },
      {
        id: "waf",
        name: "Web Application Firewall (WAF)",
        protocol: "Inline Filter",
        description: "Shields APIs against layer 7 DDoS floods, malicious payloads, and credential stuffing attacks.",
        technologies: ["AWS WAF", "ModSecurity"],
        latency: "< 1 ms",
        details: "Inspects HTTP headers, drops malicious request signatures, and prevents payload spoofing."
      }
    ]
  },
  {
    id: "app-services",
    title: "3. Application Services & Orchestration Layer",
    subtitle: "Business logic, safety moderation, RAG, tool calling, and billing tracking",
    badge: "Core Logic",
    components: [
      {
        id: "prompt-service",
        name: "Prompt Processing & Context Assembler",
        protocol: "gRPC",
        description: "Assembles conversation history, project instructions, system rules, and executes Byte-Pair Encoding.",
        technologies: ["Rust", "tiktoken/BPE", "gRPC"],
        latency: "10–20 ms",
        details: "Applies prompt caching mechanisms to store prefix attention vectors, reducing TTFT and API token cost up to 90%."
      },
      {
        id: "safety-service",
        name: "Safety & Moderation Service",
        protocol: "gRPC / C++",
        description: "Scans inbound prompts and outbound streams against Constitutional AI guidelines for harm, PII, and jailbreaks.",
        technologies: ["Constitutional AI Classifier", "Triton Inference"],
        latency: "8–15 ms",
        details: "Dual-stage guardrail: fast heuristic & embedding filter followed by lightweight neural verification classifier."
      },
      {
        id: "tool-orchestrator",
        name: "Tool Use & Function Orchestrator",
        protocol: "JSON-RPC / REST",
        description: "Parses model tool-call decisions, handles parameter validation, executes sandboxed code or API webhooks.",
        technologies: ["Docker / Firecracker MicroVMs", "Node.js"],
        latency: "50–300 ms",
        details: "Runs untrusted Python scripts in secure Firecracker microVM sandboxes with restricted network egress."
      },
      {
        id: "rag-service",
        name: "Retrieval-Augmented Generation (RAG)",
        protocol: "gRPC",
        description: "Coordinates semantic vector search across user project documents and knowledge bases.",
        technologies: ["Pinecone", "Weaviate", "HNSW Index"],
        latency: "25–60 ms",
        details: "Converts queries to dense embeddings, retrieves top-k relevant chunks, and injects citations into prompt context."
      },
      {
        id: "billing-service",
        name: "Billing & Usage Metering Service",
        protocol: "Kafka / Async",
        description: "Tracks exact input, output, and cached token consumption for invoicing and customer telemetry.",
        technologies: ["Apache Kafka", "Stripe API", "ClickHouse"],
        latency: "Async queue",
        details: "Decoupled via Kafka queues to guarantee zero latency penalty on user inference paths."
      }
    ]
  },
  {
    id: "inference",
    title: "4. Model Inference & GPU Cluster Layer",
    subtitle: "High-performance distributed compute clusters executing transformer forward passes",
    badge: "Compute Engine",
    components: [
      {
        id: "model-router",
        name: "Dynamic Model Router",
        protocol: "Internal gRPC",
        description: "Directs incoming requests to the optimal cluster: Claude 3.5 Sonnet, Claude 3 Opus, or Claude 3 Haiku.",
        technologies: ["Consul", "Envoy", "Custom Queue Scheduler"],
        latency: "1–2 ms",
        details: "Monitors real-time GPU queue depth, GPU temperature, and SLO latency thresholds across regions."
      },
      {
        id: "gpu-cluster",
        name: "GPU / TPU Inference Fleet",
        protocol: "InfiniBand / NVLink",
        description: "Massive clusters of NVIDIA H100 SXM5 / A100 GPUs and Google Cloud TPU v5p accelerators.",
        technologies: ["NVIDIA H100 80GB", "TensorRT-LLM", "Megatron-LM"],
        latency: "150–350 ms TTFT",
        details: "Runs 8-way Tensor Parallelism (TP=8) and Pipeline Parallelism across multi-node InfiniBand fabrics."
      },
      {
        id: "kv-cache",
        name: "KV Cache Manager (PagedAttention)",
        protocol: "CUDA C++",
        description: "Dynamically allocates GPU HBM memory blocks for Key-Value attention states without internal fragmentation.",
        technologies: ["PagedAttention (vLLM style)", "FlashAttention-2"],
        latency: "< 1 ms",
        details: "Prevents memory fragmentation when processing up to 200,000 tokens, enabling high batch concurrency."
      },
      {
        id: "batch-scheduler",
        name: "Continuous Batching Scheduler",
        protocol: "Internal CUDA",
        description: "Injects incoming requests at token-generation iteration boundaries rather than waiting for batch completion.",
        technologies: ["Orca-style iteration batching", "Speculative Decoding"],
        latency: "Continuous loop",
        details: "Maximizes GPU core utilization from typical 20% to over 75% under heavy concurrent workload."
      }
    ]
  },
  {
    id: "storage",
    title: "5. Database, Cache & External Layer",
    subtitle: "Persistent state, session caching, vector stores, and hyperscaler marketplace runtimes",
    badge: "Storage & Clouds",
    components: [
      {
        id: "postgres",
        name: "Relational DB (PostgreSQL)",
        protocol: "SQL / TLS",
        description: "Stores relational schemas: user accounts, subscriptions, organizations, and API credentials.",
        technologies: ["PostgreSQL Aurora", "PgBouncer", "Read Replicas"],
        latency: "2–8 ms",
        details: "ACID compliant, multi-AZ deployment with automated continuous failover and snapshot encryption."
      },
      {
        id: "dynamo",
        name: "Document Store (DynamoDB / MongoDB)",
        protocol: "HTTPS / Wire",
        description: "Stores massive conversation trees, message transcripts, and user feedback logs.",
        technologies: ["Amazon DynamoDB", "DocumentDB"],
        latency: "3–10 ms",
        details: "Horizontal partitioning by user_id and convo_id for predictable single-digit millisecond latency at scale."
      },
      {
        id: "vector-store",
        name: "Vector Database (Pinecone / Weaviate)",
        protocol: "gRPC",
        description: "Stores dense mathematical embeddings of user documents for Project Knowledge RAG.",
        technologies: ["Pinecone", "Weaviate", "Cos-sim / Dot-product"],
        latency: "15–40 ms",
        details: "Indexed using Hierarchical Navigable Small World (HNSW) graphs with dynamic metadata filtering."
      },
      {
        id: "hyperscaler-runtimes",
        name: "AWS Bedrock & GCP Vertex AI",
        protocol: "Cloud Fabric",
        description: "Enterprise runtime distribution providing private VPC endpoints and compliant data governance.",
        technologies: ["AWS PrivateLink", "Google Cloud Interconnect"],
        latency: "Cloud Native",
        details: "Ensures customer prompts never transit the public internet, satisfying FedRAMP, HIPAA, and SOC2 requirements."
      }
    ]
  }
];

export const DATABASE_ENTITIES: DatabaseEntity[] = [
  {
    id: "users",
    name: "USERS",
    storage: "PostgreSQL",
    description: "Master table for registered account identities, subscription plans, and security credentials.",
    fields: [
      { name: "user_id", type: "UUID", isPk: true, description: "Unique identifier for user account (Indexed)" },
      { name: "email", type: "VARCHAR(255)", description: "Unique verified email address (Unique Index)" },
      { name: "name", type: "VARCHAR(120)", description: "Full display name of user" },
      { name: "plan_type", type: "ENUM", description: "Values: 'free', 'pro', 'team', 'enterprise'" },
      { name: "api_key_hash", type: "VARCHAR(255)", description: "Argon2 cryptographic hash of primary developer key" },
      { name: "created_at", type: "TIMESTAMPTZ", description: "Timestamp of user account creation" },
      { name: "last_login", type: "TIMESTAMPTZ", description: "Timestamp of most recent successful session" }
    ]
  },
  {
    id: "conversations",
    name: "CONVERSATIONS",
    storage: "MongoDB / DynamoDB",
    description: "Metadata and configuration for individual multi-turn chat threads.",
    fields: [
      { name: "convo_id", type: "UUID", isPk: true, description: "Unique session identifier for the chat session" },
      { name: "user_id", type: "UUID", isFk: true, ref: "USERS.user_id", description: "Foreign key referencing session owner" },
      { name: "title", type: "VARCHAR(255)", description: "Auto-generated or user-edited conversation title" },
      { name: "model_used", type: "VARCHAR(64)", description: "e.g., 'claude-3-5-sonnet-20241022'" },
      { name: "created_at", type: "TIMESTAMPTZ", description: "Timestamp when the first prompt was initiated" },
      { name: "updated_at", type: "TIMESTAMPTZ", description: "Timestamp of latest message addition" },
      { name: "is_archived", type: "BOOLEAN", description: "Soft deletion and archival flag" }
    ]
  },
  {
    id: "messages",
    name: "MESSAGES",
    storage: "MongoDB / DynamoDB",
    description: "Chronological dialog turns containing prompt tokens, responses, and metrics.",
    fields: [
      { name: "msg_id", type: "UUID", isPk: true, description: "Unique message item ID" },
      { name: "convo_id", type: "UUID", isFk: true, ref: "CONVERSATIONS.convo_id", description: "Parent conversation ID" },
      { name: "role", type: "ENUM", description: "Values: 'user', 'assistant', 'system'" },
      { name: "content", type: "TEXT", description: "Full plaintext, Markdown, or JSON function call payload" },
      { name: "token_count", type: "INTEGER", description: "Accurate BPE token count for this specific turn" },
      { name: "model_version", type: "VARCHAR(64)", description: "Exact model snapshot identifier used for generation" },
      { name: "created_at", type: "TIMESTAMPTZ", description: "Millisecond timestamp of generation completion" },
      { name: "feedback", type: "ENUM", description: "Nullable: 'thumbs_up', 'thumbs_down', 'flagged'" }
    ]
  },
  {
    id: "attachments",
    name: "ATTACHMENTS",
    storage: "PostgreSQL",
    description: "Metadata records for files, code snippets, or images uploaded within messages.",
    fields: [
      { name: "attach_id", type: "UUID", isPk: true, description: "Unique file attachment ID" },
      { name: "msg_id", type: "UUID", isFk: true, ref: "MESSAGES.msg_id", description: "Associated message identifier" },
      { name: "file_name", type: "VARCHAR(255)", description: "Original filename uploaded by client" },
      { name: "file_type", type: "VARCHAR(64)", description: "MIME type (e.g., 'application/pdf', 'image/png')" },
      { name: "storage_url", type: "VARCHAR(512)", description: "Secure S3 presigned URI or internal object storage path" },
      { name: "file_size", type: "BIGINT", description: "File size in bytes" }
    ]
  },
  {
    id: "projects",
    name: "PROJECTS",
    storage: "PostgreSQL",
    description: "Persistent collaborative workspaces with custom system instructions and reference knowledge.",
    fields: [
      { name: "project_id", type: "UUID", isPk: true, description: "Unique workspace identifier" },
      { name: "user_id", type: "UUID", isFk: true, ref: "USERS.user_id", description: "Workspace owner ID" },
      { name: "name", type: "VARCHAR(120)", description: "Name of the project workspace" },
      { name: "system_prompt", type: "TEXT", description: "Custom instructions injected at top of context" },
      { name: "created_at", type: "TIMESTAMPTZ", description: "Workspace creation timestamp" }
    ]
  },
  {
    id: "project_documents",
    name: "PROJECT_DOCUMENTS",
    storage: "Pinecone (Vector)",
    description: "Document chunks and dense vector representations supporting semantic RAG retrieval.",
    fields: [
      { name: "doc_id", type: "UUID", isPk: true, description: "Unique document record ID" },
      { name: "project_id", type: "UUID", isFk: true, ref: "PROJECTS.project_id", description: "Parent project workspace" },
      { name: "file_name", type: "VARCHAR(255)", description: "Document title or source URL" },
      { name: "file_type", type: "VARCHAR(64)", description: "File format (PDF, Markdown, Code)" },
      { name: "vector_ids", type: "TEXT[]", description: "Array of vector chunk IDs stored in vector index" },
      { name: "uploaded_at", type: "TIMESTAMPTZ", description: "Upload timestamp" }
    ]
  },
  {
    id: "usage_logs",
    name: "USAGE_LOGS",
    storage: "PostgreSQL",
    description: "Granular audit trail for API billing, token consumption, and rate limit telemetry.",
    fields: [
      { name: "log_id", type: "UUID", isPk: true, description: "Unique billing event record" },
      { name: "user_id", type: "UUID", isFk: true, ref: "USERS.user_id", description: "Account billed" },
      { name: "convo_id", type: "UUID", isFk: true, ref: "CONVERSATIONS.convo_id", description: "Session reference" },
      { name: "model_used", type: "VARCHAR(64)", description: "Model tier charged" },
      { name: "input_tokens", type: "INTEGER", description: "Total tokens sent in prompt" },
      { name: "output_tokens", type: "INTEGER", description: "Total tokens generated in response" },
      { name: "cost", type: "NUMERIC(10, 6)", description: "Calculated USD cost for this API call" },
      { name: "timestamp", type: "TIMESTAMPTZ", description: "Execution timestamp" }
    ]
  },
  {
    id: "api_keys",
    name: "API_KEYS",
    storage: "PostgreSQL",
    description: "Developer API keys, access permissions, IP whitelists, and lifecycle states.",
    fields: [
      { name: "key_id", type: "UUID", isPk: true, description: "Unique credential identifier" },
      { name: "user_id", type: "UUID", isFk: true, ref: "USERS.user_id", description: "Key owner ID" },
      { name: "key_hash", type: "VARCHAR(255)", description: "Cryptographically salted hash of the secret key" },
      { name: "permissions", type: "JSONB", description: "Granular scopes (e.g. read, write, models:sonnet)" },
      { name: "created_at", type: "TIMESTAMPTZ", description: "Creation date" },
      { name: "last_used", type: "TIMESTAMPTZ", description: "Timestamp of last API call executed" },
      { name: "is_active", type: "BOOLEAN", description: "Revocation status toggle" }
    ]
  }
];

export const TECHNICAL_CHALLENGES = [
  {
    id: "scalability",
    title: "1. Massive Scalability & Dynamic Load Spikes",
    severity: "Critical",
    challenge: "Serving millions of concurrent developers and enterprise workers with sub-second latency while running models spanning hundreds of billions of parameters. During breaking-news events or product launches, demand spikes 10–50x above baseline.",
    engineeringComplexity: "Requires continuous batching (Orca/vLLM style), dynamic model tensor and pipeline parallelism across GPU nodes, and intelligent autoscaling of GPU clusters across multiple cloud availability zones."
  },
  {
    id: "high-availability",
    title: "2. High Availability & Enterprise SLAs (99.99%)",
    severity: "High",
    challenge: "Enterprise clients demand five-nines reliability. Any downtime in the inference cluster directly impacts hundreds of thousands of production software workflows, customer support desks, and clinical tools worldwide.",
    engineeringComplexity: "Multi-region automatic failover, cold and warm standby model clusters, graceful degradation (automatically routing to smaller models like Claude 3.5 Haiku when Opus is overloaded), and zero-downtime weight updates."
  },
  {
    id: "performance",
    title: "3. Long-Context Performance & Quadratic Attention Bottleneck",
    severity: "Critical",
    challenge: "A 200,000 token context window induces quadratic attention computational complexity (O(n²)), creating immense GPU High Bandwidth Memory (HBM) consumption and severe latency spikes without optimization.",
    engineeringComplexity: "Implementation of PagedAttention for non-contiguous KV allocation, FlashAttention-2 for fast kernel execution, speculative decoding, KV cache quantization (FP8), and chunked prefill to slash time-to-first-token (TTFT)."
  },
  {
    id: "security",
    title: "4. Multi-Tenant Enterprise Security & Privacy",
    severity: "High",
    challenge: "Enterprises submit confidential source code, legal contracts, and patient records. Cross-tenant contamination, data leakage, or prompt injection attacks pose existential enterprise liability.",
    engineeringComplexity: "End-to-end encryption (TLS 1.3 in transit, AES-256 at rest), zero-retention API policies, SOC 2 Type II and HIPAA compliance, strict hardware-isolated tenant compute, and dual-layer prompt injection defense."
  },
  {
    id: "hallucination",
    title: "5. Hallucination Control & Grounded Reliability",
    severity: "High",
    challenge: "Frontier language models naturally tend to generate syntactically convincing but factually incorrect assertions. In legal, financial, and medical contexts, hallucinations cause real damage.",
    engineeringComplexity: "Implementation of Constitutional AI safety critique passes, calibrated uncertainty expressions, semantic retrieval grounding (RAG), and automatic source citation verification."
  },
  {
    id: "real-time",
    title: "6. Real-Time Streaming & Time-to-First-Token (TTFT)",
    severity: "Medium",
    challenge: "Users expect responses to begin streaming within 200–500ms of submitting a 50-page prompt, demanding near-instantaneous prefill computation.",
    engineeringComplexity: "Disaggregated prefill and decode architectures where separate GPU nodes specialize in heavy context ingestion vs. fast iterative token generation, coupled with prefix caching."
  },
  {
    id: "global-deployment",
    title: "7. Global Sovereignty & Multi-Cloud Infrastructure",
    severity: "High",
    challenge: "Serving enterprise users across the US, European Union, and Asia-Pacific while respecting stringent data residency laws (GDPR, EU AI Act, Indian DPDP Act).",
    engineeringComplexity: "Geo-partitioned inference deployments across AWS Bedrock and Google Cloud Vertex AI, ensuring data never crosses designated regional borders."
  }
];

export const SUGGESTED_IMPROVEMENTS = [
  {
    id: "offline-mode",
    title: "1. Offline / On-Device Inference Mode",
    limitation: "Claude requires constant high-speed cloud internet. Field engineers, defense personnel, and rural clinicians cannot access the model in low-connectivity or air-gapped environments.",
    enhancement: "Develop a quantized, distilled version of Claude (7B–13B parameters) optimized for on-device inference using ONNX Runtime, llama.cpp, or Apple Core ML / WebGPU.",
    expectedBenefit: "Enables zero-latency offline use, guarantees 100% data sovereignty for confidential environments, and slashes cloud inference infrastructure costs for lightweight tasks.",
    technicalJustification: "Knowledge distillation from frontier teacher models combined with INT4/INT8 quantization preserves 85–92% of reasoning capabilities while fitting within 8–16GB consumer RAM."
  },
  {
    id: "collaborative-workspaces",
    title: "2. Real-Time Collaborative Multi-User Workspaces",
    limitation: "Claude Projects allows shared document storage but lacks real-time multiplayer co-prompting, live cursors, or shared conversation branching.",
    enhancement: "Integrate Conflict-Free Replicated Data Types (CRDTs via Yjs or Automerge) over WebSockets to support real-time collaborative prompting, simultaneous annotation, and role-based permissions.",
    expectedBenefit: "Drives higher enterprise Team and Enterprise tier upgrades by transforming Claude from a single-player tool into a real-time multiplayer war room for engineering and legal teams.",
    technicalJustification: "CRDTs provide provable eventual consistency without lock contention; WebSocket multiplexing easily sustains 100+ concurrent peers with sub-50ms synchronization latency."
  },
  {
    id: "explainability-layer",
    title: "3. Explainability & Reasoning Transparency Layer",
    limitation: "Claude operates as a black-box model. Regulated industries (FDA, SEC, FINRA) struggle to audit model conclusions without explicit internal reasoning verification.",
    enhancement: "Deploy an interactive Explainability Dashboard featuring: (1) Collapsible Chain-of-Thought reasoning steps, (2) Per-claim calibrated confidence scores, (3) Exact token citation links back to source PDFs, and (4) Attention heatmaps.",
    expectedBenefit: "Dramatically accelerates compliance approval in regulated industries, empowers software engineers to debug prompt logic, and eliminates blind trust in AI answers.",
    technicalJustification: "Leverages Anthropic's mechanistic interpretability research (sparse autoencoders for feature dictionaries) to surface verifiable cognitive pathways directly in the user interface."
  }
];
