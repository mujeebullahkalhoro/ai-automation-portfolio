import { SectionHeading, Text, sectionAnchor } from "@/components/ui";
import { about } from "@/data/about";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      tabIndex={-1}
      className={sectionAnchor}
    >
      <SectionHeading
        headingId="about-heading"
        eyebrow={about.positioning}
        title="About"
      />
      <div className="mt-6 flex max-w-2xl flex-col gap-4">
        {about.paragraphs.map((paragraph) => (
          <Text key={paragraph}>{paragraph}</Text>
        ))}
      </div>
    </section>
  );
}
