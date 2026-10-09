import type { ReactNode } from "react";
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
import type { Project, ProjectStep } from "@/types";

type ProjectDetailProps = {
  project: Project;
};

function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

function StudySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-16 border-t border-border pt-10">
      <Heading level={2} size={3}>
        {title}
      </Heading>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function HowItWorks({ steps }: { steps: readonly ProjectStep[] }) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, index) => (
        <li key={`${index}-${step.title}`} className="border-l border-border py-5 pl-6">
          <p className="font-mono text-xs font-medium text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-base font-semibold tracking-tight">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
          {step.branches ? (
            <ul className="mt-4 flex flex-col gap-3">
              {step.branches.map((branch) => (
                <li
                  key={branch.title}
                  className="rounded-md border border-border bg-surface px-4 py-3"
                >
                  <p className="text-sm font-semibold">{branch.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {branch.detail}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  if (!project.video && !project.demoUrl && !project.thumbnail) {
    return null;
  }

  return (
    <StudySection title="Video / demo">
      <div className="overflow-hidden rounded-lg border border-border bg-surface">
        {project.video && isDirectVideo(project.video) ? (
          <video
            controls
            playsInline
            src={project.video}
            className="aspect-video w-full"
          />
        ) : null}
        {!project.video && project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt=""
            width={1200}
            height={675}
            priority
            className="aspect-video h-auto w-full object-cover"
          />
        ) : null}
        {project.video && !isDirectVideo(project.video) ? (
          <div className="flex aspect-video items-center justify-center px-6">
            <ButtonLink href={project.video} variant="secondary" external>
              Watch
            </ButtonLink>
          </div>
        ) : null}
        {!project.video && !project.thumbnail && project.demoUrl ? (
          <div className="flex aspect-video items-center justify-center px-6">
            <ButtonLink href={project.demoUrl} external>
              View Demo
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </StudySection>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const hasLinks = Boolean(project.demoUrl || project.githubUrl);

  return (
    <article className="max-w-3xl">
      <TextLink href="/projects">All projects</TextLink>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.category ? (
          <Badge tone="accent">{project.category}</Badge>
        ) : null}
        <Badge>{formatProjectStatus(project.status)}</Badge>
        {project.featured ? <Badge>Featured</Badge> : null}
      </div>
      <Heading className="mt-4 max-w-3xl">{project.title}</Heading>
      {project.description ? (
        <Text variant="muted" className="mt-6 max-w-2xl">
          {project.description}
        </Text>
      ) : null}

      {project.technologies.length > 0 ? (
        <StudySection title="Technology stack">
          <ProjectTags technologies={project.technologies} />
        </StudySection>
      ) : null}

      <ProjectMedia project={project} />

      {project.architecture ? (
        <StudySection title="Architecture">
          <Text>{project.architecture}</Text>
        </StudySection>
      ) : null}

      {project.workflow ? (
        <StudySection title="Workflow">
          <ProjectWorkflow workflow={project.workflow} />
        </StudySection>
      ) : null}

      {project.howItWorks && project.howItWorks.length > 0 ? (
        <StudySection title="How It Works">
          <HowItWorks steps={project.howItWorks} />
        </StudySection>
      ) : null}

      {project.implementation && project.implementation.length > 0 ? (
        <StudySection title="Technical Implementation">
          <ul className="grid gap-4 sm:grid-cols-2">
            {project.implementation.map((component) => (
              <li
                key={component.name}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <h3 className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  {component.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {component.detail}
                </p>
              </li>
            ))}
          </ul>
        </StudySection>
      ) : null}

      {project.challenges && project.challenges.length > 0 ? (
        <StudySection title="Challenges & Solutions">
          <ul className="flex flex-col gap-6">
            {project.challenges.map((item) => (
              <li
                key={item.challenge}
                className="rounded-lg border border-border p-5 sm:p-6"
              >
                <h3 className="text-sm font-semibold tracking-tight">
                  {item.challenge}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {item.solution}
                </p>
              </li>
            ))}
          </ul>
        </StudySection>
      ) : null}

      {project.businessValue ? (
        <StudySection title="Business Value">
          <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <Text>{project.businessValue}</Text>
          </div>
        </StudySection>
      ) : null}

      {hasLinks ? (
        <StudySection title="Links">
          <div className="flex flex-col gap-3 sm:flex-row">
            {project.demoUrl ? (
              <ButtonLink
                href={project.demoUrl}
                external
                className="w-full sm:w-auto"
              >
                View Demo
              </ButtonLink>
            ) : null}
            {project.githubUrl ? (
              <ButtonLink
                href={project.githubUrl}
                variant="secondary"
                external
                className="w-full sm:w-auto"
              >
                Source / GitHub
              </ButtonLink>
            ) : null}
          </div>
        </StudySection>
      ) : null}
    </article>
  );
}
