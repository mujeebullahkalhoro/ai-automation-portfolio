import type { Metadata } from "next";
import { Container, Heading, sectionSpacing } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <Heading>About</Heading>
    </Container>
  );
}
