import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/types";

type ProjectGridProps = {
  projects: readonly Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return null;
  }

  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);
  const [lead, ...featuredRest] = featured;

  return (
    <div className="mt-10 flex flex-col gap-4">
      {lead ? <ProjectCard project={lead} layout="featured" /> : null}
      {featuredRest.length > 0 ? (
        <ul className="grid gap-4 md:grid-cols-2">
          {featuredRest.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : null}
      {rest.length > 0 ? (
        <ul className="grid gap-4 md:grid-cols-2">
          {rest.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
