import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      {projects.length > 0 ? (
        <ul className="mt-8 flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}
