import type { Metadata } from "next";
import { Container, Heading, sectionSpacing, TextLink } from "@/components/ui";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <Heading>Projects</Heading>
      {projects.length > 0 ? (
        <ul className="mt-10 flex max-w-2xl flex-col gap-4">
          {projects.map((project) => (
            <li key={project.slug}>
              <TextLink href={`/projects/${project.slug}`}>
                {project.title}
              </TextLink>
            </li>
          ))}
        </ul>
      ) : null}
    </Container>
  );
}
