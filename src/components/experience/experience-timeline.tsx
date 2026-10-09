import {
  Card,
  CardText,
  CardTitle,
  SectionHeading,
  Text,
  sectionAnchor,
} from "@/components/ui";
import { experiences } from "@/data/experience";
import type { Experience } from "@/types";

function formatPeriod(item: Experience): string {
  if (!item.end) {
    return item.start;
  }

  return `${item.start} – ${item.end}`;
}

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      tabIndex={-1}
      className={sectionAnchor}
    >
      <SectionHeading headingId="experience-heading" title="Experience" />
      {experiences.length > 0 ? (
        <ol className="mt-10 flex max-w-3xl flex-col">
          {experiences.map((item, index) => {
            const isLast = index === experiences.length - 1;

            return (
              <li
                key={`${item.organization}-${item.role}-${item.start}`}
                className="relative pl-8"
              >
                <span
                  aria-hidden
                  className="absolute top-8 left-0 size-2 -translate-x-1/2 rounded-full bg-foreground"
                />
                {isLast ? null : (
                  <span
                    aria-hidden
                    className="absolute top-10 bottom-0 left-0 w-px bg-border"
                  />
                )}
                <Card className={isLast ? undefined : "mb-8"}>
                  <Text variant="small" className="font-mono tracking-wide">
                    {formatPeriod(item)}
                  </Text>
                  <CardTitle className="mt-3">
                    {item.role}
                  </CardTitle>
                  <p className="mt-2 text-sm font-medium">{item.organization}</p>
                  {item.location ? (
                    <p className="mt-1 text-sm text-muted">{item.location}</p>
                  ) : null}
                  {item.summary ? <CardText>{item.summary}</CardText> : null}
                </Card>
              </li>
            );
          })}
        </ol>
      ) : null}
    </section>
  );
}
