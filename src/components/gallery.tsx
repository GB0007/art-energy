"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import type { Artwork } from "@/lib/studio";
import { cn } from "@/lib/utils";

const MOBILE_PREVIEW = 4;

export function Gallery({ items }: { items: Artwork[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((current) =>
        current === null ? current : (current + dir + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const active = open === null ? null : items[open];

  return (
    <>
      <div className="gap-4 [column-fill:_balance] sm:columns-2 lg:columns-4">
        {items.map((art, index) => (
          <button
            key={art.src}
            type="button"
            onClick={() => setOpen(index)}
            className={cn(
              "group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-secondary text-left ring-1 ring-foreground/10 transition hover:ring-foreground/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              !showAll && index >= MOBILE_PREVIEW && "max-md:hidden",
            )}
            aria-label={`View ${art.title ?? "energy mapping sample"}`}
          >
            <span className="relative block">
              <Image
                src={art.src}
                alt={art.title ?? "Energy mapping sample"}
                width={art.width}
                height={art.height}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-56"
                unoptimized
              />
              {art.title ? (
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-4 pt-10 pb-3">
                  <span className="font-heading text-lg leading-tight text-white">
                    {art.title}
                  </span>
                </span>
              ) : null}
            </span>
          </button>
        ))}
      </div>
      {items.length > MOBILE_PREVIEW ? (
        <button
          type="button"
          aria-expanded={showAll}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-2 h-10 px-4 md:hidden",
          )}
          onClick={() => setShowAll((current) => !current)}
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      ) : null}

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title ?? "Energy mapping sample"}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-2 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next"
          >
            <ChevronRight className="size-6" />
          </button>

          <figure
            className="flex max-h-full max-w-4xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.title ?? "Energy mapping sample"}
              className={cn(
                "max-h-[78vh] w-auto rounded-lg object-contain shadow-2xl",
              )}
            />
            {active.title ? (
              <figcaption className="mt-4 text-center">
                <p className="font-heading text-xl text-white">{active.title}</p>
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </>
  );
}
