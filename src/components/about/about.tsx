import { SectionHeading, Text } from "@/components/ui";
import { about } from "@/data/about";

export function About() {
  return (
    <section>
      <SectionHeading
        level={1}
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
