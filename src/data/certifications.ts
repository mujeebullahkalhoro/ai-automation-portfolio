import type { Certification } from "@/types";

const learnKartS = "LearnKartS · Coursera";

export const featuredCertification = {
  title: "AI Automation Engineer with n8n",
  issuer: learnKartS,
  credentialUrl:
    "https://www.coursera.org/account/accomplishments/specialization/A8JMRB392VXM",
  featured: true,
  category: "AI Automation",
  type: "specialization",
  description:
    "A seven-course specialization covering n8n workflow automation, AI model integration, AI agents, RAG, MCP, multi-agent systems, API security, testing, and deployment.",
  courses: [
    {
      title: "Workflow Automation with n8n: Logic, Data & Error Handling",
      issuer: learnKartS,
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/XNO86IM5O96E",
    },
    {
      title: "Integrate AI Models in n8n: Prompt Engineering & Outputs",
      issuer: learnKartS,
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/YJKOKYB7FA1J",
    },
    {
      title: "Build AI Agents & Secure API Integrations with n8n",
      issuer: learnKartS,
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/UTZW4HBCWA5L",
    },
    {
      title: "AI Memory Systems: Production RAG Pipelines with n8n",
      issuer: learnKartS,
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/CKL2BLRBV059",
    },
    {
      title: "Build MCP Automation Projects with n8n: Connect AI Clients",
      issuer: learnKartS,
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/9869MP280PYY",
    },
    {
      title: "Multi-Agent Systems Design: AI Customer Support with n8n",
      issuer: learnKartS,
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/HPZA92PLRRDD",
    },
    {
      title: "Deploy, Test & Secure AI Workflows with n8n",
      issuer: learnKartS,
      credentialUrl:
        "https://www.coursera.org/account/accomplishments/verify/AYT5V1WYJD52",
    },
  ],
} as const satisfies Certification;

export const additionalCredentials: readonly Certification[] = [
  {
    title: "Google AI Essentials",
    issuer: "Google · Coursera",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/0EIEEYWSIOUZ",
    category: "Google AI & Prompt Engineering",
    type: "specialization",
  },
  {
    title: "Google Prompting Essentials Specialization",
    issuer: "Google · Coursera",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/B6HAR93U54LM",
    category: "Google AI & Prompt Engineering",
    type: "specialization",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/EGLTRZXYCJB4",
    category: "AI, Machine Learning & Data Science",
    type: "course",
  },
  {
    title: "Python for Data Science and AI",
    issuer: "Coursera credential hosted on Credly",
    credentialUrl:
      "https://www.credly.com/badges/520e6877-1c11-4069-928c-568301c553f9/public_url",
    category: "AI, Machine Learning & Data Science",
    type: "course",
  },
  {
    title: "Natural Language Processing (NLP) in Python",
    issuer: "DataCamp",
    credentialUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/course/49c345149547b96b3ce33fa9ef57a1c6cb202938",
    category: "AI, Machine Learning & Data Science",
    type: "course",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "Coursera",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/VNF7XAA5USNW",
    category: "Backend & Development",
    type: "course",
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Coursera",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/APXMEL2W10CY",
    category: "Backend & Development",
    type: "course",
  },
  {
    title: "FastAPI",
    issuer: "DataCamp",
    credentialUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/course/bf1015bb0e0ea54e0bd0cf1586cd63d15686e8d9",
    category: "Backend & Development",
    type: "course",
  },
  {
    title: "DataCamp Course Certificate",
    issuer: "DataCamp",
    credentialUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/course/4f8cbf61bc79b22e27b23360176a7efe9c5e67ac",
    category: "DataCamp",
    type: "course",
  },
  {
    title: "DataCamp Learning Track",
    issuer: "DataCamp",
    credentialUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/track/59b65e3b9f3f0495ccceacf7ef6af820fa7602dd",
    category: "DataCamp",
    type: "track",
  },
];
