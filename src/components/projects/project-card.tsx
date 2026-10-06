import Image from "next/image";
import Link from "next/link";
import { ProjectTags } from "@/components/projects/project-tags";
import { formatProjectStatus } from "@/components/projects/project-status";
import { Badge, Card, CardText, CardTitle } from "@/components/ui";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col">
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
        <Badge tone="accent">{project.category}</Badge>
        <Badge>{formatProjectStatus(project.status)}</Badge>
        {project.featured ? <Badge>Featured</Badge> : null}
      </div>
      <CardTitle className="mt-4">
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </CardTitle>
      <CardText className="line-clamp-3">{project.description}</CardText>
      <div className="mt-5">
        <ProjectTags technologies={project.technologies} />
      </div>
    </Card>
  );
}
