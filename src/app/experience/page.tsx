import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Container, sectionSpacing } from "@/components/ui";
import { experiences } from "@/data/experience";

const experience = experiences[0];

export const metadata: Metadata = {
  title: "Experience",
  description: experience
    ? `${experience.role} at ${experience.organization}${experience.location ? `, ${experience.location}` : ""}, ${experience.start}${experience.end ? ` – ${experience.end}` : ""}.`
    : "Professional experience.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <ExperienceTimeline />
    </Container>
  );
}
