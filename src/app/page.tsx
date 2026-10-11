import type { Metadata } from "next";
import { About } from "@/components/about/about";
import { Certifications } from "@/components/certifications/certifications";
import { Contact } from "@/components/contact/contact";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Hero } from "@/components/hero/hero";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Skills } from "@/components/skills/skills";
import { Container, SectionHeading, sectionAnchor } from "@/components/ui";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: site.title,
  },
  description: site.summary,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Container className="flex flex-1 flex-col">
        <About />
        <Skills />
        <ExperienceTimeline />
        <section
          id="projects"
          aria-labelledby="projects-heading"
          tabIndex={-1}
          className={sectionAnchor}
        >
          <SectionHeading headingId="projects-heading" title="Projects" />
          <ProjectGrid projects={projects} />
        </section>
        <Certifications />
      </Container>
      <Contact />
    </main>
  );
}
