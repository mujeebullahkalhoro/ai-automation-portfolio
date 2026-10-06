import { Hero } from "@/components/hero/hero";
import { Container, sectionSpacing } from "@/components/ui";

export default function Home() {
  return (
    <Container
      as="main"
      className={`flex flex-1 flex-col justify-center ${sectionSpacing}`}
    >
      <Hero />
    </Container>
  );
}
