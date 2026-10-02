import type { Metadata } from "next";
import Image from "next/image";

import { DownloadButton } from "@/components/download-button";
import { studioFiles } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Files",
  description: "Download the Art & Energy logo and studio folder.",
};

export default function FilesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
        Downloads
      </p>
      <h1 className="font-heading mt-3 text-5xl leading-tight">Files</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        The button you want is right here. It saves every postcard, business
        card, and logo in one folder.
      </p>
      <div className="mt-8">
        <DownloadButton
          filename="art-and-energy-folder.zip"
          label="Download all files"
          className="h-14 px-8 text-base"
        />
      </div>

      <figure className="mt-12">
        <Image
          src="/files/business-card-front-and-back.png"
          alt="Business card front and back side by side"
          width={2334}
          height={866}
          className="w-full rounded-xl ring-1 ring-foreground/10"
          unoptimized
        />
        <figcaption className="mt-2 text-xs text-muted-foreground">
          Business card, 3.5 × 2 in
        </figcaption>
      </figure>

      <figure className="mt-8">
        <Image
          src="/files/postcard-front-and-back.png"
          alt="Postcard front and back side by side"
          width={2784}
          height={1928}
          className="w-full rounded-xl ring-1 ring-foreground/10"
          unoptimized
        />
        <figcaption className="mt-2 text-xs text-muted-foreground">
          Postcard, 4.25 × 5.5 in
        </figcaption>
      </figure>

      <ul className="mt-10 max-w-2xl space-y-4">
        {studioFiles.map((file) => (
          <li
            key={file.filename}
            className="rounded-2xl bg-card p-6 ring-1 ring-foreground/10"
          >
            <h2 className="font-heading text-2xl">{file.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {file.detail}
            </p>
            <div className="mt-5">
              <DownloadButton filename={file.filename} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
