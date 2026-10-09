import type { Metadata } from "next";
import { Container, Heading, sectionSpacing } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <Heading>Contact</Heading>
    </Container>
  );
}
