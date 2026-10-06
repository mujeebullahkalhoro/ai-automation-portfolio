import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16" />
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
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
      {project.summary ? <p className="mt-4">{project.summary}</p> : null}
    </main>
  );
}
