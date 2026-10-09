import { ArchitectureDiagram } from "@/components/hero/architecture-diagram";
import { Container } from "@/components/ui";
import { site } from "@/data/site";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.68 7.68 0 0 1 8 4.77c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      tabIndex={-1}
      className="bg-[#17283F] bg-[linear-gradient(rgba(210,226,240,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(210,226,240,0.055)_1px,transparent_1px)] bg-[size:38px_38px] py-16 focus-visible:outline-none sm:py-20 lg:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <div className="min-w-0">
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#47627F] px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-[#C5D0DF] uppercase sm:text-xs sm:tracking-[0.14em]">
            <span className="size-1.5 shrink-0 rounded-full bg-[#8DE0C1]" />
            AI Automation / Systems Architect
          </p>
          <h1
            id="home-heading"
            className="mt-6 max-w-xl text-[2.35rem] leading-[1.05] font-bold tracking-tight text-[#F5F7FA] sm:text-5xl lg:text-[2.65rem]"
          >
            <span className="block">Designing and building</span>
            <span className="mt-1 block text-[#8DE0C1]">
              intelligent automation systems
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#C5D0DF] sm:text-lg sm:leading-8">
            Using AI agents, n8n, LLMs, APIs, RAG, MCP, and modern AI
            architecture.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#FFB454] px-5 text-sm font-semibold text-[#17283F] sm:w-auto"
            >
              View projects
              <ArrowIcon />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#47627F] bg-transparent px-5 text-sm font-semibold text-[#F5F7FA] sm:w-auto"
            >
              <GitHubIcon />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
        <ArchitectureDiagram />
      </Container>
    </section>
  );
}
