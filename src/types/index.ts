export type Site = {
  name: string;
  role: string;
  summary: string;
  github: string;
};

export type ProjectStatus = "in-progress" | "completed";

export type Project = {
  title: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  thumbnail?: string;
  video?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  status: ProjectStatus;
  architecture?: string;
  workflow?: string;
  challenges?: string;
  results?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  issuedAt?: string;
  credentialUrl?: string;
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
