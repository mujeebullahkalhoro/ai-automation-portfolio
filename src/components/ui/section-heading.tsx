import { cn } from "@/lib/utils";
import { Heading, Text } from "@/components/ui/typography";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  headingId?: string;
  level?: 1 | 2 | 3;
  className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  description,
  headingId,
  level = 2,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={headingId}
        level={level}
        className={eyebrow ? "mt-3" : undefined}
      >
        {title}
      </Heading>
      {description ? (
        <Text variant="muted" className="mt-4 max-w-xl">
          {description}
        </Text>
      ) : null}
    </header>
  );
}
