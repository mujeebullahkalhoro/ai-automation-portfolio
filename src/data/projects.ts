import type { Project } from "@/types";

export const projects: readonly Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
