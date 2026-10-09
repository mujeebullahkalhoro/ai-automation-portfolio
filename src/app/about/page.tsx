import type { Metadata } from "next";
import { About } from "@/components/about/about";
import { Skills } from "@/components/skills/skills";
import { Container, sectionSpacing } from "@/components/ui";
import { about } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: about.paragraphs.join(" "),
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <About />
      <Skills className="mt-20 sm:mt-28" />
    </Container>
  );
}
