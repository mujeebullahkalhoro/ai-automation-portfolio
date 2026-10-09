import Link from "next/link";
import { ProjectTags } from "@/components/projects/project-tags";
import { formatProjectStatus } from "@/components/projects/project-status";
import { WorkflowShowcase } from "@/components/projects/workflow-showcase";
import { Badge, Card, CardText, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  layout?: "standard" | "featured";
};

export function ProjectCard({ project, layout = "standard" }: ProjectCardProps) {
  const featured = layout === "featured";
  const hasShowcase = Boolean(project.thumbnail || project.video);

  return (
    <Card className="flex h-full flex-col">
      <WorkflowShowcase
        title={project.title}
        image={project.thumbnail}
        video={project.video}
        priority={featured}
        compact={!featured}
      />
      <div className={cn("flex h-full flex-col", hasShowcase && "mt-6")}>
        <div className="flex flex-wrap gap-2">
          {project.category ? <Badge tone="accent">{project.category}</Badge> : null}
          <Badge>{formatProjectStatus(project.status)}</Badge>
          {project.featured ? <Badge>Featured</Badge> : null}
        </div>
        <CardTitle level={2} className={cn("mt-4", featured && "text-2xl sm:text-3xl")}>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </CardTitle>
        {project.description ? (
          <CardText className="line-clamp-3">{project.description}</CardText>
        ) : null}
        <div className="mt-5">
          <ProjectTags technologies={project.technologies} />
        </div>
      </div>
    </Card>
  );
}
