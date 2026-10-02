import type { Metadata } from "next";
import Image from "next/image";

import { DownloadButton } from "@/components/download-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Postcard",
  description: "Art & Energy postcard, front and back, 4.25 × 5.5 in.",
};

export default function PostcardPage() {
  return (
    <main className="mx-auto w-full max-w-xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
        4.25 × 5.5 in
      </p>
      <h1 className="font-heading mt-3 text-5xl leading-tight">Postcard</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Front, then back. Scroll down to see both sides, then click Download.
      </p>

      <figure className="mt-10">
        <Image
          src="/files/postcard-front.png"
          alt="Postcard front"
          width={1275}
          height={1650}
          className="w-full rounded-xl ring-1 ring-foreground/10"
          unoptimized
          priority
        />
        <figcaption className="mt-2 text-xs text-muted-foreground">
          Front
        </figcaption>
      </figure>

      <figure className="mt-8">
        <Image
          src="/files/postcard-back.png"
          alt="Postcard back"
          width={1275}
          height={1650}
          className="w-full rounded-xl ring-1 ring-foreground/10"
          unoptimized
        />
        <figcaption className="mt-2 text-xs text-muted-foreground">
          Back
        </figcaption>
      </figure>

      <div className="mt-10 flex flex-wrap gap-3">
        <DownloadButton
          filename="art-energy-postcard.pdf"
          label="Download PDF"
        />
        <DownloadButton
          filename="art-energy-postcard-bleed.pdf"
          label="PDF with bleed"
          variant="outline"
        />
        <DownloadButton
          filename="postcard-front.png"
          label="Front PNG"
          variant="outline"
        />
        <DownloadButton
          filename="postcard-back.png"
          label="Back PNG"
          variant="outline"
        />
        <a
          href="/files"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "inline-flex h-11 px-5",
          )}
        >
          All files
        </a>
      </div>
    </main>
  );
}
