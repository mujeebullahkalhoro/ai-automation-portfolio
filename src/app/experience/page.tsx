import type { Metadata } from "next";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
      {experiences.length > 0 ? (
        <ul className="mt-8 flex flex-col gap-4">
          {experiences.map((item) => (
            <li key={`${item.organization}-${item.role}-${item.start}`}>
              {item.role}
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}
