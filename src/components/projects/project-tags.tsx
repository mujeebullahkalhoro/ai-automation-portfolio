import { Badge } from "@/components/ui";

type ProjectTagsProps = {
  technologies: readonly string[];
};

export function ProjectTags({ technologies }: ProjectTagsProps) {
  if (technologies.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <li key={technology}>
          <Badge>{technology}</Badge>
        </li>
      ))}
    </ul>
  );
}
