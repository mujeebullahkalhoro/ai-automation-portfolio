"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Card, CardTitle, SectionHeading, sectionAnchor } from "@/components/ui";
import { additionalCredentials, featuredCertification } from "@/data/certifications";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types";

const primaryLinkClass =
  "inline-flex items-center justify-center gap-1.5 rounded-[7px] bg-[#8DE0C1] px-4 py-[10px] text-sm leading-none font-semibold whitespace-nowrap text-[#17283F] motion-safe:transition-[background-color,transform] motion-safe:duration-200 hover:bg-[#74D4B4] motion-safe:hover:-translate-y-px";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-[7px] border border-border bg-transparent px-4 py-[10px] text-sm leading-none font-medium text-foreground motion-safe:transition-colors motion-safe:duration-200 hover:border-accent hover:text-accent";

const iconClass = "size-5";

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const categoryIcons: Record<string, ReactNode> = {
  "AI Automation": (
    <IconFrame>
      <rect x="3.5" y="4" width="6" height="6" rx="1" />
      <rect x="14.5" y="4" width="6" height="6" rx="1" />
      <rect x="9" y="14" width="6" height="6" rx="1" />
      <path d="M9.5 7h5M12 10v4" />
    </IconFrame>
  ),
  "Backend & Development": (
    <IconFrame>
      <rect x="3.5" y="4" width="17" height="12" rx="1.5" />
      <path d="M8 9l2 2-2 2M13 13h3" />
    </IconFrame>
  ),
  "AI, Machine Learning & Data Science": (
    <IconFrame>
      <path d="M4 16.5 8.5 8l4 5 2.5-3.5L20 16.5" />
      <path d="M4 19.5h16" />
    </IconFrame>
  ),
  "Google AI & Prompt Engineering": (
    <IconFrame>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.5M12 18v2.5M3.5 12H6M18 12h2.5" />
    </IconFrame>
  ),
  DataCamp: (
    <IconFrame>
      <path d="M4 8.5 12 4.5l8 4-8 4-8-4Z" />
      <path d="M4 12.5 12 16.5l8-4" />
    </IconFrame>
  ),
};

function IconBadge({ category }: { category?: string }) {
  return (
    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
      {categoryIcons[category ?? ""] ?? categoryIcons.DataCamp}
    </span>
  );
}

function Arrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "previous" ? <path d="M10 3 5 8l5 5" /> : <path d="M6 3l5 5-5 5" />}
    </svg>
  );
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

function certificateLabel(type?: Certification["type"]) {
  return type === "specialization" ? "View Specialization" : "View Certificate";
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn(
        "size-4 motion-safe:transition-transform motion-safe:duration-200",
        open && "rotate-180",
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

type CarouselState = {
  index: number;
  thumb: number;
  offset: number;
  canPrevious: boolean;
  canNext: boolean;
};

const initialCarouselState: CarouselState = {
  index: 0,
  thumb: 1,
  offset: 0,
  canPrevious: false,
  canNext: false,
};

function cardStride(scroller: HTMLUListElement) {
  const cards = [...scroller.children] as HTMLElement[];

  if (cards.length < 2) {
    return 0;
  }

  return cards[1].offsetLeft - cards[0].offsetLeft;
}

function snapPositions(scroller: HTMLUListElement) {
  const stride = cardStride(scroller);
  const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
  const positions: number[] = [];

  for (let index = 0; index < scroller.children.length; index += 1) {
    const left = Math.min(index * stride, maxScroll);
    const previous = positions[positions.length - 1];

    if (previous === undefined || left > previous + 1) {
      positions.push(left);
    }
  }

  return positions.length > 0 ? positions : [0];
}

function nearestSnap(scroller: HTMLUListElement) {
  const positions = snapPositions(scroller);
  let index = 0;
  let bestDistance = Number.POSITIVE_INFINITY;

  positions.forEach((left, position) => {
    const distance = Math.abs(scroller.scrollLeft - left);

    if (distance < bestDistance) {
      index = position;
      bestDistance = distance;
    }
  });

  return { positions, index };
}

function readCarouselState(scroller: HTMLUListElement): CarouselState {
  const count = scroller.children.length;
  const { positions, index: snapIndex } = nearestSnap(scroller);
  const atStart = snapIndex === 0;
  const atEnd = snapIndex === positions.length - 1;
  const stride = cardStride(scroller);
  const cardIndex =
    atEnd || stride <= 0
      ? Math.max(count - 1, 0)
      : Math.min(Math.max(Math.round(scroller.scrollLeft / stride), 0), count - 1);
  const scrollWidth = Math.max(scroller.scrollWidth, 1);

  return {
    index: cardIndex,
    thumb: Math.min(Math.max(scroller.clientWidth / scrollWidth, 0), 1),
    offset: Math.min(Math.max(scroller.scrollLeft / scrollWidth, 0), 1),
    canPrevious: !atStart,
    canNext: !atEnd,
  };
}

function FeaturedSpecialization() {
  const certification = featuredCertification;
  const courses = certification.courses;
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <Card className="max-w-4xl p-5! shadow-[inset_0_2px_0_0_var(--accent)] sm:p-6!">
      <div className="flex items-center gap-3">
        <IconBadge category={certification.category} />
        <p className="font-mono text-[11px] font-medium tracking-[0.14em] text-accent uppercase">
          Featured specialization
        </p>
      </div>
      <h3 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-balance text-foreground">
        {certification.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-muted">{certification.issuer}</p>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{certification.description}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryLinkClass}
        >
          View Specialization
          <ExternalArrow />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <button
          type="button"
          className={cn(secondaryButtonClass, "min-w-44")}
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "Hide courses" : `Explore ${courses.length} courses`}
          <Chevron open={open} />
        </button>
      </div>
      <div
        id={listId}
        role="region"
        aria-label="Specialization courses"
        inert={!open}
        className={cn(
          "grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="grid gap-3 pt-5 sm:grid-cols-2">
            {courses.map((course, index) => (
              <li key={course.credentialUrl} className="min-w-0">
                <a
                  href={course.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-md border border-border px-3 py-3 motion-safe:transition-colors motion-safe:duration-200 hover:border-accent/70"
                >
                  <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 text-sm leading-5 font-medium text-foreground">
                    {course.title}
                  </span>
                  <span className="mt-1 text-sm text-muted">{course.issuer}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap text-foreground">
                    View Certificate
                    <ExternalArrow />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

function CredentialCard({ certification }: { certification: Certification }) {
  return (
    <Card className="flex h-full flex-col p-5! motion-safe:transition-[border-color,transform] motion-safe:duration-200 hover:border-accent/70 motion-safe:hover:-translate-y-px sm:p-6!">
      <IconBadge category={certification.category} />
      <CardTitle className="mt-4">{certification.title}</CardTitle>
      <p className="mt-2 text-sm leading-6 text-muted">{certification.issuer}</p>
      {certification.credentialUrl ? (
        <a
          href={certification.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium whitespace-nowrap text-foreground underline decoration-border underline-offset-[5px] motion-safe:transition-colors motion-safe:duration-200 hover:text-accent hover:decoration-accent"
        >
          {certificateLabel(certification.type)}
          <ExternalArrow />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : null}
    </Card>
  );
}

export function Certifications() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const carouselId = useId();
  const [carousel, setCarousel] = useState<CarouselState>(initialCarouselState);
  const count = additionalCredentials.length;

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      setCarousel(readCarouselState(scroller));
    };

    const requestUpdate = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    scroller.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  function scrollByCard(direction: -1 | 1) {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const { positions, index } = nearestSnap(scroller);
    const next = Math.min(Math.max(index + direction, 0), positions.length - 1);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    scroller.scrollTo({
      left: positions[next],
      behavior: reduce ? "auto" : "smooth",
    });
  }

  function onScrollerKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }
  }

  const positionLabel = `${String(carousel.index + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      tabIndex={-1}
      className={cn(sectionAnchor, "min-w-0 overflow-hidden")}
    >
      <SectionHeading
        headingId="certifications-heading"
        eyebrow="CERTIFICATIONS / PROFESSIONAL LEARNING"
        title="Certifications & learning"
        description="Specialized training in AI automation, intelligent systems, and software engineering."
      />
      <div className="mt-8">
        <FeaturedSpecialization />
      </div>
      <div className="mt-10 min-w-0" aria-roledescription="carousel">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0 max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Additional certifications
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Further learning in AI, machine learning, NLP, and software development.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground motion-safe:transition-colors motion-safe:duration-200 hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-foreground"
              aria-label="Previous credentials"
              aria-controls={carouselId}
              disabled={!carousel.canPrevious}
              onClick={() => scrollByCard(-1)}
            >
              <Arrow direction="previous" />
            </button>
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground motion-safe:transition-colors motion-safe:duration-200 hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-border disabled:hover:text-foreground"
              aria-label="Next credentials"
              aria-controls={carouselId}
              disabled={!carousel.canNext}
              onClick={() => scrollByCard(1)}
            >
              <Arrow direction="next" />
            </button>
          </div>
        </div>
        <div className="min-w-0 overflow-hidden">
          <ul
            id={carouselId}
            ref={scrollerRef}
            aria-label="Additional certifications"
            tabIndex={0}
            onKeyDown={onScrollerKeyDown}
            className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {additionalCredentials.map((certification) => (
              <li
                key={certification.credentialUrl}
                className="w-[85%] shrink-0 snap-start md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
              >
                <CredentialCard certification={certification} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <div
            className="relative h-0.5 min-w-0 flex-1 overflow-hidden rounded-full bg-border"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={count}
            aria-valuenow={carousel.index + 1}
            aria-valuetext={positionLabel}
            aria-label="Certification carousel progress"
          >
            <div
              className="absolute inset-y-0 rounded-full bg-accent motion-safe:transition-[left,width] motion-safe:duration-200"
              style={{
                width: `${carousel.thumb * 100}%`,
                left: `${carousel.offset * 100}%`,
              }}
            />
          </div>
          <p className="shrink-0 font-mono text-[11px] tracking-[0.14em] text-muted">
            {positionLabel}
          </p>
        </div>
      </div>
    </section>
  );
}
