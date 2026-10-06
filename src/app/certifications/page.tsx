import type { Metadata } from "next";
import { Container, Heading, sectionSpacing, Text } from "@/components/ui";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <Heading>Certifications</Heading>
      {certifications.length > 0 ? (
        <ul className="mt-10 flex max-w-2xl flex-col gap-4">
          {certifications.map((certification) => (
            <li key={`${certification.issuer}-${certification.title}`}>
              <Text>{certification.title}</Text>
            </li>
          ))}
        </ul>
      ) : null}
    </Container>
  );
}
