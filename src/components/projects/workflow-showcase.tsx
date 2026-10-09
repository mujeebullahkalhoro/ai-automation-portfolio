"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type WorkflowShowcaseProps = {
  title: string;
  image?: string;
  video?: string;
  priority?: boolean;
  compact?: boolean;
};

function isDirectVideo(url: string): boolean {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

function fileName(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 1] || path;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 h-5 w-5 fill-current">
      <path d="M8 5.5v13l11-6.5-11-6.5z" />
    </svg>
  );
}

export function WorkflowShowcase({
  title,
  image,
  video,
  priority = false,
  compact = false,
}: WorkflowShowcaseProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [failed, setFailed] = useState(false);
  const [view, setView] = useState<"image" | "video" | null>(null);
  const hasImage = Boolean(image) && !failed;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !view || dialog.open) {
      return;
    }

    dialog.showModal();
  }, [view]);

  if (!image && !video) {
    return null;
  }

  function open(next: "image" | "video") {
    setView(next);
  }

  function close() {
    dialogRef.current?.close();
  }

  const label = video ? `Play ${title} video demo` : `View ${title} workflow`;

  return (
    <figure>
      <button
        type="button"
        aria-label={label}
        onClick={() => open(video ? "video" : "image")}
        className="relative block w-full overflow-hidden rounded-lg border border-border bg-background text-left"
      >
        {hasImage ? (
          <Image
            src={image ?? ""}
            alt=""
            width={1600}
            height={900}
            unoptimized
            priority={priority}
            onError={() => setFailed(true)}
            className={cn(
              "h-auto w-full object-contain",
              compact && "max-h-72",
            )}
          />
        ) : (
          <span className="flex aspect-video flex-col items-center justify-center gap-2 px-6 text-center">
            <span className="text-sm font-medium text-foreground">Workflow image</span>
            <span className="max-w-full truncate font-mono text-xs text-muted">
              {image ? fileName(image) : "Not added yet"}
            </span>
          </span>
        )}
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground"
        >
          <PlayIcon />
        </span>
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => setView(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
        className="m-auto w-[min(100%-2rem,72rem)] max-h-[calc(100%-2rem)] overflow-auto rounded-lg border border-border bg-surface p-4 text-foreground backdrop:bg-foreground/50 sm:p-6"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id={titleId} className="text-base font-semibold tracking-tight">
            {title}
          </h2>
          <button
            type="button"
            onClick={close}
            className="inline-flex h-11 items-center rounded-md px-3 text-sm font-medium"
          >
            Close
          </button>
        </div>
        {view === "video" && video && isDirectVideo(video) ? (
          <video
            controls
            autoPlay
            playsInline
            src={video}
            className="aspect-video w-full rounded-md border border-border"
          />
        ) : null}
        {view === "video" && video && !isDirectVideo(video) ? (
          <a
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-md bg-foreground px-5 text-sm font-medium text-background"
          >
            Play video demo
          </a>
        ) : null}
        {view === "image" && hasImage ? (
          <Image
            src={image ?? ""}
            alt={`${title} workflow`}
            width={1600}
            height={900}
            unoptimized
            className="mx-auto h-auto max-h-[80vh] w-full object-contain"
          />
        ) : null}
        {view === "image" && !hasImage ? (
          <p className="text-sm leading-6 text-muted">
            {image
              ? `${fileName(image)} has not been added yet.`
              : "Workflow image has not been added yet."}
          </p>
        ) : null}
      </dialog>
    </figure>
  );
}
