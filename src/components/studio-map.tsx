import { MapPin } from "lucide-react";

import { location } from "@/lib/studio";

export function StudioMap() {
  return (
    <div className="overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10">
      <div className="relative aspect-[4/3] w-full bg-secondary sm:aspect-[16/10]">
        <iframe
          title={`Map showing ${location.name} in ${location.neighborhood}`}
          src={location.mapEmbedSrc}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
          <div className="text-sm leading-relaxed">
            <p className="font-medium">{location.name}</p>
            {location.addressLines.map((line) => (
              <p key={line} className="text-muted-foreground">
                {line}
              </p>
            ))}
          </div>
        </div>
        <a
          href={location.mapLink}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-sm text-foreground underline-offset-4 hover:underline"
        >
          Open in maps →
        </a>
      </div>
    </div>
  );
}
