import type { Project } from "@/types";

export const projects: readonly Project[] = [
  {
    title: "AI Email Triage & Summarization",
    slug: "ai-email-triage-summarization",
    description:
      "An n8n workflow that classifies incoming Gmail with OpenAI, summarizes the important path, continues through a Claude fallback, validates JSON, and writes the result to Notion.",
    technologies: ["n8n", "Gmail", "OpenAI", "Claude", "Notion"],
    featured: true,
    status: "private",
    architecture:
      "Incoming Gmail enters an n8n workflow. OpenAI classifies the message. IF Important is the condition on the documented path. OpenAI then writes a summary, and the next step is Claude Fallback. The output is normalized, validated as JSON, and written to Notion.",
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
    howItWorks: [
      {
        title: "Gmail Trigger",
        detail: "A Gmail message starts the workflow.",
      },
      {
        title: "OpenAI Classification",
        detail: "OpenAI classifies the message.",
      },
      {
        title: "IF Important",
        detail: "The documented path continues through the important condition.",
      },
      {
        title: "OpenAI Summary",
        detail: "OpenAI writes a summary.",
      },
      {
        title: "Claude Fallback",
        detail: "Claude runs as the fallback step after the OpenAI summary.",
      },
      {
        title: "Normalize Output",
        detail: "The output is normalized before it is checked.",
      },
      {
        title: "Validate JSON",
        detail: "The normalized output is validated as JSON.",
      },
      {
        title: "Notion",
        detail: "The validated result is written to Notion.",
      },
    ],
    implementation: [
      {
        name: "n8n",
        detail: "Connects the Gmail trigger, model steps, JSON check, and Notion.",
      },
      {
        name: "Gmail",
        detail: "Supplies the message that starts the workflow.",
      },
      {
        name: "OpenAI",
        detail: "Classifies the message and writes the summary.",
      },
      {
        name: "Claude",
        detail: "Runs as the Claude Fallback step after the OpenAI summary.",
      },
      {
        name: "Notion",
        detail: "Stores the normalized, JSON-validated result.",
      },
    ],
    businessValue:
      "The workflow classifies Gmail, summarizes the important path, and records the validated result in Notion.",
  },
  {
    title: "AI Research Agent with Web Search",
    slug: "ai-research-agent-web-search",
    description:
      "An n8n workflow where an AI agent takes a user query, makes a tool decision, calls SerpAPI through an Execute Workflow tool, and returns a final answer from the search results.",
    technologies: ["n8n", "AI Agent", "Execute Workflow", "SerpAPI"],
    featured: true,
    status: "private",
    architecture:
      "A user query is passed to an AI agent in n8n. The workflow reaches a tool decision, then calls SerpAPI through an Execute Workflow tool. Search results return to the AI agent, which produces the final answer.",
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
    howItWorks: [
      {
        title: "User Query",
        detail: "A user query starts the workflow.",
      },
      {
        title: "AI Agent",
        detail: "The AI agent receives the query.",
      },
      {
        title: "Tool Decision",
        detail: "The workflow reaches a tool decision.",
      },
      {
        title: "Execute Workflow Tool",
        detail: "The tool call runs through an Execute Workflow tool.",
      },
      {
        title: "SerpAPI",
        detail: "SerpAPI performs the web search.",
      },
      {
        title: "Search Results",
        detail: "The search results come back from SerpAPI.",
      },
      {
        title: "AI Agent",
        detail: "The AI agent receives the search results.",
      },
      {
        title: "Final Answer",
        detail: "The agent returns the final answer.",
      },
    ],
    implementation: [
      {
        name: "n8n",
        detail:
          "Hosts the agent, the tool decision, and the Execute Workflow step.",
      },
      {
        name: "AI Agent",
        detail:
          "Receives the user query and, later, the search results, then returns the final answer.",
      },
      {
        name: "Execute Workflow",
        detail: "Runs the SerpAPI call as a separate workflow step.",
      },
      {
        name: "SerpAPI",
        detail: "Performs the web search used for the final answer.",
      },
    ],
    businessValue:
      "The workflow returns a final answer to a user query using web search results from SerpAPI.",
  },
  {
    title: "Enterprise Document RAG",
    slug: "enterprise-document-rag",
    description:
      "An n8n workflow that loads a PDF, splits the text, embeds it with Gemini, stores the vectors in Supabase, and uses retrieval plus an LLM to return a grounded answer.",
    technologies: [
      "n8n",
      "Google Gemini",
      "Supabase",
      "Vector Store",
      "LLM",
    ],
    featured: true,
    status: "private",
    architecture:
      "The documented sequence has a document stage and a query stage. A PDF is loaded, split, embedded with Gemini, and stored in a Supabase vector store. A user query then retrieves from that store, and an LLM returns a grounded answer. Gemini is the embedding step. The answer step is the LLM.",
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
    howItWorks: [
      {
        title: "PDF",
        detail: "A PDF is the source document.",
      },
      {
        title: "Document Loader",
        detail: "The PDF is loaded.",
      },
      {
        title: "Text Splitter",
        detail: "The loaded text is split.",
      },
      {
        title: "Gemini Embeddings",
        detail: "Google Gemini creates embeddings from the split text.",
      },
      {
        title: "Supabase Vector Store",
        detail: "The embeddings are stored in Supabase.",
      },
      {
        title: "User Query",
        detail: "A user query follows the stored document.",
      },
      {
        title: "Retrieval",
        detail: "The workflow retrieves from the vector store for that query.",
      },
      {
        title: "LLM",
        detail: "An LLM receives the retrieved text. This step is separate from Gemini embeddings.",
      },
      {
        title: "Grounded Answer",
        detail: "The LLM returns an answer grounded in the retrieved text.",
      },
    ],
    implementation: [
      {
        name: "n8n",
        detail: "Connects document ingestion and the query path.",
      },
      {
        name: "Document Loader",
        detail: "Loads the PDF.",
      },
      {
        name: "Text Splitter",
        detail: "Splits the loaded document before embedding.",
      },
      {
        name: "Google Gemini",
        detail: "Creates the embeddings.",
      },
      {
        name: "Supabase",
        detail: "Stores the vectors.",
      },
      {
        name: "LLM",
        detail:
          "Produces the grounded answer from retrieved text. It is a separate step from Gemini embeddings.",
      },
    ],
    businessValue:
      "A PDF is stored for retrieval, and a user query receives an answer grounded in the retrieved text.",
  },
  {
    title: "Gmail Auto-Labeling & Slack Alerts",
    slug: "gmail-auto-labeling-slack-alerts",
    description:
      "An n8n workflow that starts from Gmail, routes messages with a Switch, applies a Gmail label on the Accounting branch, and sends a Slack alert on the Lead branch.",
    technologies: ["n8n", "Gmail", "Slack", "Switch"],
    featured: true,
    status: "private",
    architecture:
      "Gmail triggers an n8n workflow. A Switch splits that path into two branches. Accounting applies a Gmail label. Lead sends a Slack alert.",
    workflow: `Gmail Trigger
↓
Switch
├── Accounting → Gmail Label
└── Lead → Slack Alert`,
    howItWorks: [
      {
        title: "Gmail Trigger",
        detail: "A Gmail message starts the workflow.",
      },
      {
        title: "Switch",
        detail: "The message is routed through a Switch with two branches.",
        branches: [
          {
            title: "Accounting",
            detail: "This branch applies a Gmail label.",
          },
          {
            title: "Lead",
            detail: "This branch sends a Slack alert.",
          },
        ],
      },
    ],
    implementation: [
      {
        name: "n8n",
        detail: "Runs the Gmail trigger, Switch, label, and Slack alert.",
      },
      {
        name: "Gmail",
        detail: "Starts the workflow and applies the label on the Accounting branch.",
      },
      {
        name: "Switch",
        detail: "Routes messages to the Accounting and Lead branches.",
      },
      {
        name: "Slack",
        detail: "Receives the alert on the Lead branch.",
      },
    ],
    businessValue:
      "Accounting messages are labeled in Gmail, and Lead messages send a Slack alert.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
