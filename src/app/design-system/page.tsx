import type { Metadata } from "next";
import {
  Badge,
  Button,
  ButtonLink,
  Card,
  CardText,
  CardTitle,
  Container,
  SectionHeading,
  sectionSpacing,
  Text,
  TextLink,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Design system",
};

export default function DesignSystemPage() {
  return (
    <Container as="main" className={`flex flex-1 flex-col ${sectionSpacing}`}>
      <SectionHeading
        level={1}
        eyebrow="Foundation"
        title="Design system"
        description="Type, actions, tags, and surfaces used across the portfolio."
      />

      <section className="mt-16 sm:mt-20">
        <SectionHeading title="Typography" />
        <div className="mt-8 flex max-w-2xl flex-col gap-6">
          <Text>
            Body copy stays quiet so project work can carry the page.
          </Text>
          <Text variant="muted">
            Secondary text is for summaries, dates, and supporting detail.
          </Text>
          <Text variant="small">Small text is reserved for metadata.</Text>
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <SectionHeading title="Actions" />
        <div className="mt-8 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/projects" variant="secondary">
              View projects
            </ButtonLink>
            <TextLink href="/contact">Text link</TextLink>
          </div>
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <SectionHeading title="Tags" />
        <div className="mt-8 flex flex-wrap gap-2">
          <Badge>n8n</Badge>
          <Badge>RAG</Badge>
          <Badge tone="accent">In progress</Badge>
        </div>
      </section>

      <section className="mt-16 sm:mt-20">
        <SectionHeading title="Surfaces" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <CardTitle>Static card</CardTitle>
            <CardText>
              A bordered surface for a project, role, or certification.
            </CardText>
          </Card>
          <Card interactive>
            <CardTitle>Interactive card</CardTitle>
            <CardText>
              Hover only changes the border. The content stays still.
            </CardText>
          </Card>
        </div>
      </section>
    </Container>
  );
}
