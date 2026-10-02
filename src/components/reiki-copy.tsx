"use client";

import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ReikiCopy({
  paragraphs,
  disclaimer,
}: {
  paragraphs: readonly string[];
  disclaimer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
        {paragraphs.map((line, index) => (
          <p
            key={line}
            className={index === 0 || open ? undefined : "max-md:hidden"}
          >
            {line}
          </p>
        ))}
        <p className={cn("text-sm italic", !open && "max-md:hidden")}>
          ** {disclaimer}
        </p>
      </div>
      <button
        type="button"
        aria-expanded={open}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mt-5 h-10 px-4 md:hidden",
        )}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
