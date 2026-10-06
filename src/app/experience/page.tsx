import type { Metadata } from "next";
import { Container, Heading, sectionSpacing, Text } from "@/components/ui";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <Heading>Experience</Heading>
      {experiences.length > 0 ? (
        <ul className="mt-10 flex max-w-2xl flex-col gap-4">
          {experiences.map((item) => (
            <li key={`${item.organization}-${item.role}-${item.start}`}>
              <Text>{item.role}</Text>
            </li>
          ))}
        </ul>
      ) : null}
    </Container>
  );
}
