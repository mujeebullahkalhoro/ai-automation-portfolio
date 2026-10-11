export type Site = {
  name: string;
  role: string;
  title: string;
  summary: string;
  github: string;
  linkedin: string;
  email: string;
};

export type ProjectStatus = "completed" | "in-progress" | "private";

export type ProjectStep = {
  title: string;
  detail: string;
  branches?: readonly Pick<ProjectStep, "title" | "detail">[];
};

export type ProjectComponent = {
  name: string;
  detail: string;
};

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type Project = {
  title: string;
  slug: string;
  description?: string;
  category?: string;
  technologies: string[];
  thumbnail?: string;
  video?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  architecture?: string;
  workflow?: string;
  howItWorks?: readonly ProjectStep[];
  implementation?: readonly ProjectComponent[];
  challenges?: readonly ProjectChallenge[];
  businessValue?: string;
  results?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  issuedAt?: string;
  credentialUrl?: string;
  featured?: boolean;
  courses?: readonly string[];
};

export type Experience = {
  role: string;
  organization: string;
  location?: string;
  start: string;
  end?: string;
  summary?: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};
