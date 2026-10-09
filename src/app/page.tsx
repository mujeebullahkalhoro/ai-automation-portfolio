import type { Metadata } from "next";
import { Hero } from "@/components/hero/hero";
import { Container, sectionSpacing } from "@/components/ui";
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
    <Container
      as="main"
      className={`flex flex-1 flex-col justify-center ${sectionSpacing}`}
    >
      <Hero />
    </Container>
  );
}
