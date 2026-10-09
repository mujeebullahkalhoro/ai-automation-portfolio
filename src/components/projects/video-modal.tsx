"use client";

import { useEffect, useId, useRef, useState } from "react";

type VideoModalProps = {
  title: string;
  src: string;
  poster?: string;
  open: boolean;
  onClose: () => void;
};

function fileName(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 1] || path;
}

export function VideoModal({ title, src, poster, open, onClose }: VideoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleId = useId();
  const [failed, setFailed] = useState(false);

  function resetVideo() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();

    if (video.readyState > 0) {
      video.currentTime = 0;
    }

    video.removeAttribute("src");
    video.load();
  }

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      dialogRef.current?.close();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={() => {
        resetVideo();
        setFailed(false);
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.close();
        }
      }}
      className="m-auto w-[min(100%-1.5rem,56rem)] max-h-[calc(100dvh-1.5rem)] overflow-auto rounded-lg border border-border bg-surface p-4 text-foreground backdrop:bg-foreground/50 sm:p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h2 id={titleId} className="text-base font-semibold tracking-tight">
          {title}
        </h2>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="inline-flex h-11 shrink-0 items-center rounded-md px-3 text-sm font-medium"
        >
          Close
        </button>
      </div>
      {open && !failed ? (
        <video
          ref={videoRef}
          controls
          playsInline
          preload="none"
          poster={poster}
          src={src}
          className="aspect-video w-full rounded-md border border-border bg-background"
          onError={() => setFailed(true)}
        />
      ) : null}
      {open && failed ? (
        <p className="text-sm leading-6 text-muted">
          {fileName(src)} has not been added yet.
        </p>
      ) : null}
    </dialog>
  );
}
