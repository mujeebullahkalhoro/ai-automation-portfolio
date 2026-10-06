import { Container, Heading, sectionSpacing, Text } from "@/components/ui";
import { site } from "@/data/site";

export default function Home() {
  return (
    <Container
      as="main"
      className={`flex flex-1 flex-col justify-center ${sectionSpacing}`}
    >
      <Text variant="eyebrow">{site.role}</Text>
      <Heading className="mt-5 max-w-4xl">{site.name}</Heading>
    </Container>
  );
}
