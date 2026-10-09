"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { VideoModal } from "@/components/projects/video-modal";
import { cn } from "@/lib/utils";

type WorkflowShowcaseProps = {
  title: string;
  image?: string;
  video?: string;
  priority?: boolean;
  compact?: boolean;
};

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

function PlayBadge({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-foreground",
        className,
      )}
    >
      <PlayIcon />
    </span>
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [failed, setFailed] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const hasImage = Boolean(image) && !failed;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !imageOpen || dialog.open) {
      return;
    }

    dialog.showModal();
  }, [imageOpen]);

  if (!image && !video) {
    return null;
  }

  function closeImage() {
    dialogRef.current?.close();
  }

  function returnFocus() {
    const button = buttonRef.current;

    requestAnimationFrame(() => {
      button?.focus();
    });
  }

  const label = video ? `Play ${title} video demo` : `View ${title} workflow`;

  return (
    <figure className="min-w-0">
      <button
        ref={buttonRef}
        type="button"
        aria-label={label}
        onClick={() => {
          if (video) {
            setVideoOpen(true);
            return;
          }

          setImageOpen(true);
        }}
        className="relative block w-full min-w-0 overflow-hidden rounded-lg border border-border bg-background text-left"
      >
        {hasImage ? (
          <Image
            src={image ?? ""}
            alt=""
            width={1600}
            height={900}
            unoptimized
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            onError={() => setFailed(true)}
            className={cn(
              "h-auto w-full object-contain",
              compact && "max-h-72",
            )}
          />
        ) : (
          <span className="flex aspect-video w-full min-w-0 flex-col items-center justify-center gap-3 px-4 text-center">
            <PlayBadge />
            <span className="text-sm font-medium text-foreground">Workflow image</span>
            <span className="w-full min-w-0 truncate font-mono text-xs text-muted">
              {image ? fileName(image) : "Not added yet"}
            </span>
          </span>
        )}
        {hasImage ? (
          <PlayBadge className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        ) : null}
      </button>
      {video ? null : (
        <dialog
          ref={dialogRef}
          aria-labelledby={titleId}
          onClose={() => {
            setImageOpen(false);
            returnFocus();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              event.currentTarget.close();
            }
          }}
          className="m-auto w-[min(100%-2rem,72rem)] max-h-[calc(100%-2rem)] overflow-auto rounded-lg border border-border bg-surface p-4 text-foreground backdrop:bg-foreground/50 sm:p-6"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <p id={titleId} className="min-w-0 flex-1 text-base font-semibold tracking-tight text-balance">
              {title}
            </p>
            <button
              type="button"
              onClick={closeImage}
              className="inline-flex h-11 shrink-0 items-center rounded-md border border-border px-3 text-sm font-medium"
            >
              Close
            </button>
          </div>
          {imageOpen && hasImage ? (
            <Image
              src={image ?? ""}
              alt={`${title} workflow`}
              width={1600}
              height={900}
              unoptimized
              className="mx-auto h-auto max-h-[80vh] w-full object-contain"
            />
          ) : null}
          {imageOpen && !hasImage ? (
            <p className="text-sm leading-6 text-muted">
              {image
                ? `${fileName(image)} has not been added yet.`
                : "Workflow image has not been added yet."}
            </p>
          ) : null}
        </dialog>
      )}
      {video ? (
        <VideoModal
          title={title}
          src={video}
          poster={image}
          open={videoOpen}
          onClose={() => {
            setVideoOpen(false);
            returnFocus();
          }}
        />
      ) : null}
    </figure>
  );
}
