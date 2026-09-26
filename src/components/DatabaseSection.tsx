import React, { useState } from 'react';
import { DATABASE_ENTITIES, DatabaseEntity } from '../data/analysisData';
import { Database, HardDrive, Key, FileText, Cpu, GitFork, ArrowRight, Layers, Table, Check } from 'lucide-react';

interface DatabaseSectionProps {
  onOpenDiagramsModal: () => void;
}

export const DatabaseSection: React.FC<DatabaseSectionProps> = ({ onOpenDiagramsModal }) => {
  const [selectedEntityId, setSelectedEntityId] = useState<string>('users');
  const [activePipelineStage, setActivePipelineStage] = useState<number>(0);

  const selectedEntity = DATABASE_ENTITIES.find((e) => e.id === selectedEntityId) || DATABASE_ENTITIES[0];

  const pipelineStages = [
    {
      stage: "1. Data Creation",
      sub: "Ingestion & Upload",
      desc: "User submits prompt, documents, or images. Attachments upload to S3/GCS with SHA-256 hash. The turn is assigned a UUID msg_id."
    },
    {
      stage: "2. Data Processing",
      sub: "Tokenization & Vectorization",
      desc: "Text is tokenized via BPE. Reference documents are chunked (512 tokens with 10% overlap), passed through embedding model, and indexed."
    },
    {
      stage: "3. Data Storage",
      sub: "Polyglot Tiering",
      desc: "Structured accounts & billing persist to PostgreSQL. Dialog turns write to DynamoDB. Dense 1536-dim embeddings persist to Pinecone HNSW index."
    },
    {
      stage: "4. Data Retrieval",
      sub: "Sub-10ms Session Fetch",
      desc: "Session history is retrieved from DynamoDB via partition key. RAG queries run Approximate Nearest Neighbor (ANN) search on Pinecone."
    },
    {
      stage: "5. Analytics & BI",
      sub: "Kafka & BigQuery",
      desc: "Usage logs stream through Kafka to Snowflake/BigQuery for token consumption reporting, gross margin analytics, and RLHF data pipelines."
    }
  ];

  return (
    <section className="mb-14 border-b border-stone-200 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
            <span>Section 07</span>
            <span aria-hidden="true">·</span>
            <span>Polyglot Persistence Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-stone-900">
            7. Database Working Model & ER Diagram
          </h2>
        </div>
        <button
          onClick={onOpenDiagramsModal}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-md transition-colors cursor-pointer self-start sm:self-auto"
        >
          View &amp; Zoom ER Diagram
        </button>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed mb-6">
        Claude AI employs a polyglot persistence model: <strong>PostgreSQL</strong> guarantees ACID transactions
        for identities and billing, <strong>DynamoDB/MongoDB</strong> provides horizontal scalability for high-throughput
        chat dialogs, and <strong>Pinecone/Weaviate</strong> manages dense vector embeddings for Project Knowledge.
      </p>

      {/* Interactive Entity Selector & ER Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left Entity List */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
            Database Schema Entities (8 Tables)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {DATABASE_ENTITIES.map((ent) => {
              const isSelected = ent.id === selectedEntityId;
              return (
                <button
                  key={ent.id}
                  onClick={() => setSelectedEntityId(ent.id)}
                  className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-stone-300 text-stone-800'
                  }`}
                >
                  <div>
                    <div className="text-xs font-semibold">{ent.name}</div>
                    <div className={`text-[10px] font-mono ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                      {ent.storage}
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-stone-800 text-amber-300' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {ent.fields.length} cols
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-3 bg-stone-100/70 border border-stone-200 rounded-lg text-xs text-stone-600 mt-4">
            <strong className="text-stone-900 block mb-1">Entity Cardinality:</strong>
            <ul className="space-y-1 text-[11px] font-mono">
              <li>• USERS 1 : N CONVERSATIONS</li>
              <li>• CONVERSATIONS 1 : N MESSAGES</li>
              <li>• MESSAGES 1 : N ATTACHMENTS</li>
              <li>• USERS 1 : N PROJECTS 1 : N DOCUMENTS</li>
              <li>• USERS 1 : N USAGE_LOGS</li>
              <li>• USERS 1 : N API_KEYS</li>
            </ul>
          </div>
        </div>

        {/* Right Entity Details Inspector */}
        <div className="lg:col-span-8 p-5 bg-white border border-stone-200 rounded-xl shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-200 mb-3 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-stone-700" />
                <h4 className="text-base font-semibold text-stone-900">
                  {selectedEntity.name}
                </h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                  {selectedEntity.storage}
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                {selectedEntity.description}
              </p>
            </div>
            <span className="text-xs font-mono text-stone-400">
              {selectedEntity.fields.length} Defined Attributes
            </span>
          </div>

          {/* Fields Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F7F4EE] border-b border-stone-200 text-stone-700 font-medium">
                <tr>
                  <th className="py-2.5 px-3">Column Name</th>
                  <th className="py-2.5 px-3">Data Type</th>
                  <th className="py-2.5 px-3">Key Constraints</th>
                  <th className="py-2.5 px-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {selectedEntity.fields.map((field, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/60">
                    <td className="py-2 px-3 font-mono font-semibold text-stone-900">
                      {field.name}
                    </td>
                    <td className="py-2 px-3 font-mono text-stone-600">
                      {field.type}
                    </td>
                    <td className="py-2 px-3">
                      {field.isPk && (
                        <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] font-bold mr-1">
                          PK
                        </span>
                      )}
                      {field.isFk && (
                        <span className="px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 font-mono text-[10px] font-medium" title={`Ref: ${field.ref}`}>
                          FK &rarr; {field.ref}
                        </span>
                      )}
                      {!field.isPk && !field.isFk && (
                        <span className="text-stone-400 font-mono text-[11px]">—</span>
                      )}
                    </td>
                    <td className="py-2 px-3 text-stone-600">
                      {field.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sample SQL Schema Generator */}
          <div className="mt-4 pt-3 border-t border-stone-200">
            <span className="text-[11px] font-mono text-stone-500 block mb-1">
              POSTGRES / DDL DEFINITION PREVIEW:
            </span>
            <pre className="p-3 bg-stone-950 text-stone-300 rounded-lg font-mono text-[11px] overflow-x-auto">
{`CREATE TABLE ${selectedEntity.name.toLowerCase()} (
${selectedEntity.fields.map(f => `  ${f.name.padEnd(16)} ${f.type}${f.isPk ? ' PRIMARY KEY' : ''}${f.isFk ? ` REFERENCES ${f.ref?.toLowerCase()}` : ''}`).join(',\n')}
);`}
            </pre>
          </div>
        </div>
      </div>

      {/* 5-Stage Data Pipeline Architecture */}
      <h3 className="text-lg font-editorial font-semibold text-stone-900 mb-3">
        Data Pipeline Workflow (Ingestion to Analytical Warehouse)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
        {pipelineStages.map((p, idx) => (
          <div
            key={idx}
            onClick={() => setActivePipelineStage(idx)}
            className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
              activePipelineStage === idx
                ? 'bg-amber-50/80 border-amber-600 shadow-xs'
                : 'bg-white border-stone-200 hover:border-stone-300 text-stone-800'
            }`}
          >
            <span className="text-[10px] font-mono text-stone-500 block mb-1">STAGE 0{idx + 1}</span>
            <h4 className="text-xs font-semibold text-stone-900">{p.stage}</h4>
            <span className="text-[11px] font-mono text-amber-800 block mt-0.5">{p.sub}</span>
            <p className="text-[11px] text-stone-600 mt-2 leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
