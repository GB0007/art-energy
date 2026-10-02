"use client";

import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sampleReading } from "@/lib/studio";
import { cn } from "@/lib/utils";

export function SampleReadingCopy() {
  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-xl bg-muted">
        <Image
          src={sampleReading.image.src}
          alt={sampleReading.image.alt}
          width={sampleReading.image.width}
          height={sampleReading.image.height}
          className="h-auto w-full object-contain"
          unoptimized
        />
      </div>
      <div className="space-y-4 text-[1.02rem] leading-relaxed">
        {sampleReading.preamble.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {sampleReading.sections.map((section) => (
        <section key={section.heading} className="space-y-4">
          <h3 className="font-heading text-xl font-medium leading-snug sm:text-2xl">
            {section.heading}
          </h3>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[1.02rem] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      {sampleReading.afterword ? (
        <p className="text-[1.02rem] leading-relaxed">
          {sampleReading.afterword}
        </p>
      ) : null}
    </div>
  );
}

export function SampleReadingDrawer({
  label = sampleReading.cta,
  triggerClassName,
}: {
  label?: string;
  triggerClassName?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger className={triggerClassName}>{label}</SheetTrigger>
      <SheetContent
        side="right"
        className="sample-reading-sheet gap-0 overflow-hidden p-0"
      >
        <SheetHeader className="shrink-0 border-b border-border pr-12">
          <p className="text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
            {sampleReading.eyebrow}
          </p>
          <SheetTitle className="font-heading text-3xl font-medium leading-tight sm:text-4xl">
            {sampleReading.title}
          </SheetTitle>
          <SheetDescription className="sr-only">
            {sampleReading.preamble[0]}
          </SheetDescription>
        </SheetHeader>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6">
          <SampleReadingCopy />
        </div>
        <SheetFooter className="mt-0 shrink-0 flex-col gap-2 border-t border-border sm:flex-row sm:justify-start">
          <SheetClose
            nativeButton={false}
            render={
              <Link
                href={sampleReading.bookHref}
                className={cn(buttonVariants(), "h-11 px-5")}
              />
            }
          >
            {sampleReading.bookLabel}
          </SheetClose>
          <SheetClose
            className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5")}
          >
            {sampleReading.closeLabel}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
