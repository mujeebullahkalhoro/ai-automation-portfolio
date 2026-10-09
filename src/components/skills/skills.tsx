import { Badge, Card, CardTitle, SectionHeading } from "@/components/ui";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

type SkillsProps = {
  className?: string;
};

export function Skills({ className }: SkillsProps) {
  return (
    <section className={cn(className)}>
      <SectionHeading title="Skills" />
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <li key={group.name} className="min-w-0">
            <Card className="h-full">
              <CardTitle>{group.name}</CardTitle>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
