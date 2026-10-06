import type { Metadata } from "next";
import { Container, Heading, sectionSpacing } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <Heading>Contact</Heading>
    </Container>
  );
}
