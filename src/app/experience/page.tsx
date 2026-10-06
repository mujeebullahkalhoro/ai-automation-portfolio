import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Container, sectionSpacing } from "@/components/ui";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <ExperienceTimeline />
    </Container>
  );
}
