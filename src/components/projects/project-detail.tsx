import Image from "next/image";
import { ProjectTags } from "@/components/projects/project-tags";
import { formatProjectStatus } from "@/components/projects/project-status";
import { ProjectWorkflow } from "@/components/projects/project-workflow";
import {
  Badge,
  ButtonLink,
  Heading,
  Text,
  TextLink,
} from "@/components/ui";
import type { Project } from "@/types";

type ProjectDetailProps = {
  project: Project;
};

const caseStudyFields = [
  ["Architecture", "architecture"],
  ["Challenges", "challenges"],
  ["Results", "results"],
] as const;

function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="max-w-3xl">
      <TextLink href="/projects">All projects</TextLink>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.category ? <Badge tone="accent">{project.category}</Badge> : null}
        <Badge>{formatProjectStatus(project.status)}</Badge>
        {project.featured ? <Badge>Featured</Badge> : null}
      </div>
      <Heading className="mt-4 max-w-3xl">{project.title}</Heading>
      {project.description ? (
        <Text variant="muted" className="mt-6">
          {project.description}
        </Text>
      ) : null}
      <div className="mt-6">
        <ProjectTags technologies={project.technologies} />
      </div>
      {project.thumbnail ? (
        <Image
          src={project.thumbnail}
          alt=""
          width={1200}
          height={675}
          priority
          className="mt-8 aspect-video h-auto w-full rounded-lg border border-border object-cover"
        />
      ) : null}
      {project.video ? (
        <div className="mt-8">
          {isDirectVideo(project.video) ? (
            <video
              controls
              src={project.video}
              className="aspect-video w-full rounded-lg border border-border"
            />
          ) : (
            <ButtonLink href={project.video} variant="secondary" external>
              Watch
            </ButtonLink>
          )}
        </div>
      ) : null}
      {project.githubUrl || project.demoUrl ? (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {project.githubUrl ? (
            <ButtonLink
              href={project.githubUrl}
              external
              className="w-full sm:w-auto"
            >
              GitHub
            </ButtonLink>
          ) : null}
          {project.demoUrl ? (
            <ButtonLink
              href={project.demoUrl}
              variant="secondary"
              external
              className="w-full sm:w-auto"
            >
              Demo
            </ButtonLink>
          ) : null}
        </div>
      ) : null}
      {project.workflow ? (
        <section className="mt-12">
          <Heading level={2} size={3}>
            Workflow
          </Heading>
          <div className="mt-4">
            <ProjectWorkflow workflow={project.workflow} />
          </div>
        </section>
      ) : null}
      {caseStudyFields.map(([label, field]) => {
        const body = project[field];

        if (!body) {
          return null;
        }

        return (
          <section key={field} className="mt-12">
            <Heading level={2} size={3}>
              {label}
            </Heading>
            <Text className="mt-4">{body}</Text>
          </section>
        );
      })}
    </article>
  );
}
