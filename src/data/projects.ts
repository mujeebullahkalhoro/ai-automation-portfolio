import type { Project } from "@/types";

export const projects: readonly Project[] = [
  {
    title: "AI Email Triage & Summarization",
    slug: "ai-email-triage-summarization",
    technologies: ["n8n", "Gmail", "OpenAI", "Claude", "Notion"],
    featured: true,
    status: "private",
    workflow: `Gmail Trigger
↓
OpenAI Classification
↓
IF Important
↓
OpenAI Summary
↓
Claude Fallback
↓
Normalize Output
↓
Validate JSON
↓
Notion`,
  },
  {
    title: "AI Research Agent with Web Search",
    slug: "ai-research-agent-web-search",
    technologies: ["n8n", "AI Agent", "Execute Workflow", "SerpAPI"],
    featured: true,
    status: "private",
    workflow: `User Query
↓
AI Agent
↓
Tool Decision
↓
Execute Workflow Tool
↓
SerpAPI
↓
Search Results
↓
AI Agent
↓
Final Answer`,
  },
  {
    title: "Enterprise Document RAG",
    slug: "enterprise-document-rag",
    technologies: ["n8n", "Google Gemini", "Supabase", "Vector Store", "LLM"],
    featured: true,
    status: "private",
    workflow: `PDF
↓
Document Loader
↓
Text Splitter
↓
Gemini Embeddings
↓
Supabase Vector Store
↓
User Query
↓
Retrieval
↓
LLM
↓
Grounded Answer`,
  },
  {
    title: "Gmail Auto-Labeling & Slack Alerts",
    slug: "gmail-auto-labeling-slack-alerts",
    technologies: ["n8n", "Gmail", "Slack", "Switch"],
    featured: true,
    status: "private",
    workflow: `Gmail Trigger
↓
Switch
├── Accounting → Gmail Label
└── Lead → Slack Alert`,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
