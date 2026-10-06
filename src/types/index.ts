export type Site = {
  name: string;
  role: string;
  summary: string;
  github: string;
};

export type ProjectStatus = "in-progress" | "completed";

export type Project = {
  slug: string;
  title: string;
  summary?: string;
  status: ProjectStatus;
  technologies: string[];
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
  start: string;
  end?: string;
  summary?: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};
