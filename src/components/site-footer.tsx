import Link from "next/link";

import { EnergyMark } from "@/components/mark";
import { location, nav, studio } from "@/lib/studio";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <EnergyMark className="h-9 w-auto" />
            <p className="font-heading text-2xl tracking-tight">{studio.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {studio.tagline} {studio.practitioner} holds sessions in a private
            room, by appointment.
          </p>
          <a
            href={studio.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-foreground hover:underline"
          >
            {studio.instagram}
          </a>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            {location.name}
          </p>
          <ul className="mt-3 space-y-1 text-sm text-foreground">
            {location.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Studio
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${studio.email}`} className="hover:underline">
                {studio.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/80">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {studio.name}. Reiki is complementary care,
          not a substitute for medical treatment.
        </p>
      </div>
    </footer>
  );
}
