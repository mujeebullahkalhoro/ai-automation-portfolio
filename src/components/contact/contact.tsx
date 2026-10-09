import { SectionHeading, TextLink, sectionAnchor } from "@/components/ui";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      tabIndex={-1}
      className={sectionAnchor}
    >
      <SectionHeading headingId="contact-heading" title="Contact" />
      <ul className="mt-8">
        <li>
          <TextLink href={site.github} external>
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </TextLink>
        </li>
      </ul>
    </section>
  );
}
