import { Badge, Card, CardTitle, SectionHeading, TextLink } from "@/components/ui";
import { certifications } from "@/data/certifications";
import type { Certification } from "@/types";

function CredentialLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <TextLink href={href} className="mt-4 inline-flex">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </TextLink>
  );
}

function CourseList({ courses }: { courses: readonly string[] }) {
  return (
    <ol className="mt-6 hidden flex-col gap-3 border-t border-border pt-6 group-open:flex">
      {courses.map((course, index) => (
        <li key={course} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3">
          <span className="font-mono text-xs font-medium text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-6">{course}</span>
        </li>
      ))}
    </ol>
  );
}

function FeaturedCertification({ certification }: { certification: Certification }) {
  const courses = certification.courses ?? [];

  return (
    <Card>
      <Badge tone="accent">Specialization</Badge>
      <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {certification.title}
      </h2>
      <p className="mt-3 text-sm font-medium">{certification.issuer}</p>
      {certification.credentialUrl ? (
        <CredentialLink href={certification.credentialUrl}>
          View specialization
        </CredentialLink>
      ) : null}
      {courses.length > 0 ? (
        <details className="group mt-8">
          <summary className="inline-flex h-11 cursor-pointer list-none items-center rounded-md border border-border px-5 text-sm font-medium marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Show {courses.length} courses</span>
            <span className="hidden group-open:inline">Hide courses</span>
          </summary>
          <CourseList courses={courses} />
        </details>
      ) : null}
    </Card>
  );
}

function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <Card className="flex h-full flex-col">
      <CardTitle level={2}>{certification.title}</CardTitle>
      <p className="mt-2 text-sm text-muted">{certification.issuer}</p>
      {certification.credentialUrl ? (
        <CredentialLink href={certification.credentialUrl}>
          View credential
        </CredentialLink>
      ) : null}
    </Card>
  );
}

export function Certifications() {
  const featured = certifications.filter((certification) => certification.featured);
  const rest = certifications.filter((certification) => !certification.featured);

  return (
    <section>
      <SectionHeading level={1} title="Certifications" />
      {featured.length > 0 ? (
        <div className="mt-10 flex max-w-3xl flex-col gap-4">
          {featured.map((certification) => (
            <FeaturedCertification
              key={`${certification.issuer}-${certification.title}`}
              certification={certification}
            />
          ))}
        </div>
      ) : null}
      {rest.length > 0 ? (
        <ul
          className={`grid max-w-5xl gap-4 md:grid-cols-2 ${featured.length > 0 ? "mt-8" : "mt-10"}`}
        >
          {rest.map((certification) => (
            <li key={`${certification.issuer}-${certification.title}`}>
              <CertificationCard certification={certification} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
