import type { Metadata } from "next";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Certifications</h1>
      {certifications.length > 0 ? (
        <ul className="mt-8 flex flex-col gap-4">
          {certifications.map((certification) => (
            <li key={`${certification.issuer}-${certification.title}`}>
              {certification.title}
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
}
