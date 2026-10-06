import Image from "next/image";
import Link from "next/link";
import { ProjectTags } from "@/components/projects/project-tags";
import { formatProjectStatus } from "@/components/projects/project-status";
import { ProjectWorkflow } from "@/components/projects/project-workflow";
import { Badge, Card, CardText, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
  layout?: "standard" | "featured";
};

export function ProjectCard({ project, layout = "standard" }: ProjectCardProps) {
  const featured = layout === "featured";

  return (
    <Card
      className={cn(
        "flex h-full flex-col",
        featured && "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:gap-10",
      )}
    >
      <div className="flex h-full flex-col">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt=""
            width={1200}
            height={675}
            className="mb-6 aspect-video h-auto w-full rounded-md border border-border object-cover"
          />
        ) : null}
        <div className="flex flex-wrap gap-2">
          {project.category ? <Badge tone="accent">{project.category}</Badge> : null}
          <Badge>{formatProjectStatus(project.status)}</Badge>
          {project.featured ? <Badge>Featured</Badge> : null}
        </div>
        <CardTitle className={cn("mt-4", featured && "text-2xl sm:text-3xl")}>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </CardTitle>
        {project.description ? (
          <CardText className="line-clamp-3">{project.description}</CardText>
        ) : null}
        <div className="mt-5">
          <ProjectTags technologies={project.technologies} />
        </div>
      </div>
      {featured && project.workflow ? (
        <div className="mt-8 lg:mt-0">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Workflow
          </p>
          <ProjectWorkflow workflow={project.workflow} />
        </div>
      ) : null}
    </Card>
  );
}
