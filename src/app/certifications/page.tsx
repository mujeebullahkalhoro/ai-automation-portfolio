import type { Metadata } from "next";
import { Certifications } from "@/components/certifications/certifications";
import { Container, sectionSpacing } from "@/components/ui";

export const metadata: Metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <Certifications />
    </Container>
  );
}
