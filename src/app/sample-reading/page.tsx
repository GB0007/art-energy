import type { Metadata } from "next";
import Link from "next/link";

import { SampleReadingCopy } from "@/components/sample-reading-drawer";
import { buttonVariants } from "@/components/ui/button";
import { sampleReading } from "@/lib/studio";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: sampleReading.title,
  description: sampleReading.preamble[0],
};

export default function SampleReadingPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
        {sampleReading.eyebrow}
      </p>
      <h1 className="font-heading mt-3 text-4xl leading-tight sm:text-5xl">
        {sampleReading.title}
      </h1>
      <div className="mt-10">
        <SampleReadingCopy />
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href={sampleReading.bookHref}
          className={cn(buttonVariants(), "h-11 px-5")}
        >
          {sampleReading.bookLabel}
        </Link>
        <Link
          href="/#sessions"
          className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5")}
        >
          Back to sessions
        </Link>
      </div>
    </main>
  );
}
