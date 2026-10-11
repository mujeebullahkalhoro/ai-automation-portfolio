import { site } from "@/data/site";

const bookCallClass =
  "inline-flex shrink-0 items-center justify-center rounded-[7px] bg-[#8DE0C1] px-6 py-[10px] text-[14px] leading-none font-semibold text-[#17283F] motion-safe:transition-[background-color,transform] motion-safe:duration-200 hover:bg-[#74D4B4] motion-safe:hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent";

type ContactLink = {
  id: string;
  href: string;
  title: string;
  description: string;
  detail?: string;
  external: boolean;
};

function profileHandle(url: string) {
  const segments = new URL(url).pathname.split("/").filter(Boolean);
  return segments.at(-1) ?? url;
}

function ExternalArrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="size-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 11.5 11.5 4.5M6.5 4.5h5v5" />
    </svg>
  );
}

const contactLinks: readonly ContactLink[] = [
  {
    id: "github",
    href: site.github,
    title: "GitHub",
    description: "Profile for project work and source code.",
    detail: profileHandle(site.github),
    external: true,
  },
  {
    id: "linkedin",
    href: site.linkedin,
    title: "LinkedIn",
    description: "Professional profile and career updates.",
    detail: profileHandle(site.linkedin),
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      tabIndex={-1}
      className="bg-[var(--hero)] bg-[linear-gradient(var(--hero-grid)_1px,transparent_1px),linear-gradient(90deg,var(--hero-grid)_1px,transparent_1px)] bg-size-[38px_38px] py-16 focus-visible:outline-none sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:px-10">
        <div className="min-w-0">
          <p className="font-mono text-xs font-medium tracking-[0.16em] text-accent uppercase">
            Let&apos;s connect
          </p>
          <h2
            id="contact-heading"
            className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-[40px] sm:leading-[1.15] lg:text-[46px]"
          >
            Let&apos;s build something{" "}
            <span className="text-accent">intelligent.</span>
          </h2>
          <p className="mt-4 max-w-xl text-balance text-[17px] leading-[1.7] text-muted sm:text-[18px]">
            Have a workflow to automate or an AI system to build? Let&apos;s
            discuss your project.
          </p>
          <a href="#contact" className={`mt-8 ${bookCallClass}`}>
            Book a call
          </a>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
            <span className="font-medium text-accent">Open to</span> AI
            automation projects, AI agent development, RAG chatbot
            development, workflow engineering, and AI engineering
            opportunities.
          </p>
        </div>
        <div className="min-w-0">
          <div className="overflow-hidden rounded-[16px] border border-border bg-surface">
            <div className="flex h-12 items-center gap-3 border-b border-border bg-[var(--contact-panel-header)] px-5">
              <span className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-[var(--contact-dot)]" />
                <span className="size-2 rounded-full bg-[var(--contact-dot)]" />
                <span className="size-2 rounded-full bg-[var(--contact-dot)]" />
              </span>
              <p className="min-w-0 truncate font-mono text-[13px] leading-none text-muted">
                profiles / elsewhere
              </p>
            </div>
            <ul>
              {contactLinks.map((link) => (
                <li key={link.id} className="border-b border-border last:border-b-0">
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-5 py-[18px] motion-safe:transition-colors motion-safe:duration-200 hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset focus-visible:outline-none sm:gap-x-6"
                  >
                    <span className="col-start-1 row-start-1 text-[15px] leading-5 font-semibold tracking-tight text-foreground motion-safe:transition-colors motion-safe:duration-200 group-hover:text-accent">
                      {link.title}
                      {link.external ? (
                        <span className="sr-only"> (opens in a new tab)</span>
                      ) : null}
                    </span>
                    <span className="col-start-1 row-start-2 text-sm leading-5 text-muted">
                      {link.description}
                    </span>
                    {link.detail ? (
                      <span className="col-start-1 row-start-3 max-w-full min-w-0 justify-self-end truncate font-mono text-[12px] leading-5 text-[var(--contact-handle)] sm:col-start-2 sm:row-start-1 sm:w-max sm:max-w-none sm:overflow-visible sm:whitespace-nowrap">
                        {link.detail}
                      </span>
                    ) : null}
                    <span className="col-start-2 row-start-3 inline-flex shrink-0 justify-self-end text-accent sm:row-start-2">
                      <ExternalArrow />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 flex h-14 items-center justify-center rounded-2xl border border-accent/40 bg-transparent px-4 text-[15px] leading-none font-medium whitespace-nowrap text-foreground motion-safe:transition-[background-color,border-color] motion-safe:duration-200 hover:border-accent/70 hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none sm:h-16 sm:text-base"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
