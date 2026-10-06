import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/types";

type ProjectGridProps = {
  projects: readonly Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return null;
  }

  const ordered = [...projects].sort(
    (first, second) => Number(second.featured) - Number(first.featured),
  );

  return (
    <ul className="mt-10 grid gap-4 md:grid-cols-2">
      {ordered.map((project) => (
        <li
          key={project.slug}
          className={project.featured ? "md:col-span-2" : undefined}
        >
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
