import { ButtonLink, Heading, Text, sectionAnchor } from "@/components/ui";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      tabIndex={-1}
      className={`${sectionAnchor} max-w-3xl`}
    >
      <Heading id="home-heading" className="max-w-4xl">
        {site.name}
      </Heading>
      <Heading level={2} size={3} className="mt-4 max-w-2xl text-balance">
        {site.role}
      </Heading>
      <Text variant="muted" className="mt-6 max-w-2xl">
        {site.summary}
      </Text>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink href="#projects" className="w-full sm:w-auto">
          View Projects
        </ButtonLink>
        <ButtonLink
          href={site.github}
          variant="secondary"
          external
          className="w-full sm:w-auto"
        >
          GitHub
        </ButtonLink>
        <ButtonLink href="#contact" variant="ghost" className="w-full sm:w-auto">
          Contact Me
        </ButtonLink>
      </div>
    </section>
  );
}
