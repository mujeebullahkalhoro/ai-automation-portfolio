import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Container, Heading, sectionSpacing, Text } from "@/components/ui";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <Container as="main" className={`flex-1 ${sectionSpacing}`} />
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <Heading className="max-w-3xl">{project.title}</Heading>
      {project.summary ? (
        <Text variant="muted" className="mt-6 max-w-2xl">
          {project.summary}
        </Text>
      ) : null}
    </Container>
  );
}
