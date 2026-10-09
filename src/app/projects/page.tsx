import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Container, SectionHeading, sectionSpacing } from "@/components/ui";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of AI automation workflows, including email triage, research, document retrieval, and Gmail routing.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <SectionHeading level={1} title="Projects" />
      <ProjectGrid projects={projects} />
    </Container>
  );
}
