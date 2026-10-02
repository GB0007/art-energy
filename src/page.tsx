import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { ContactForm } from "@/components/contact-form";
import { Gallery } from "@/components/gallery";
import { ReikiCopy } from "@/components/reiki-copy";
import { SampleReadingDrawer } from "@/components/sample-reading-drawer";
import { SessionCard } from "@/components/session-card";
import { StudioMap } from "@/components/studio-map";
import { buttonVariants } from "@/components/ui/button";
import {
  atelier,
  bio,
  gallery,
  galleryCopy,
  location,
  reiki,
  reikiPrinciples,
  sessions,
  studio,
} from "@/lib/studio";
import { cn } from "@/lib/utils";

const preceptMarks = [
  "#a67c4a",
  "#c45b8c",
  "#2f6f9a",
  "#6a7a3c",
  "#c49a42",
  "#8a3548",
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:py-16 lg:py-28">
          <div className="order-2 md:order-1">
            <p className="text-sm font-bold tracking-[0.16em]">
              Giovanna Ferrari
            </p>
            <p className="mt-1.5 text-sm tracking-[0.16em] text-muted-foreground">
              Artist and Reiki Practitioner
            </p>
            <div className="mt-5 h-px w-16 bg-foreground/20" aria-hidden />
            <h1 className="font-heading mt-5 max-w-xl text-5xl leading-[0.95] font-medium tracking-tight sm:text-7xl">
              Art & Energy
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Art & Energy is a quiet studio for Reiki and intuitive art. A
              private room for rest, listening, and connection. When it feels
              right, we give what moved through the session a simple shape
              through drawing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/?intent=booking#contact" className={cn(buttonVariants(), "h-11 px-6 text-sm")}>
                Book now
              </Link>
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 px-6 text-sm",
                )}
              >
                Contact me
              </Link>
            </div>
          </div>
          <div className="order-1 flex items-center justify-center md:order-2">
            <Image
              src="/brand/mark.svg"
              alt="art & energy mark — a stacked column of watercolor energy forms"
              width={420}
              height={1176}
              className="h-52 w-auto md:h-64 lg:h-[32rem]"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* About me + Reiki + principles */}
      <section id="about" className="scroll-mt-24 bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start lg:gap-12">
            <div>
              <div className="aspect-square overflow-hidden rounded-3xl bg-secondary ring-1 ring-foreground/10 md:aspect-auto">
                <Image
                  src={bio.portrait.src}
                  alt={bio.portrait.alt}
                  width={bio.portrait.width}
                  height={bio.portrait.height}
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 42vw, 90vw"
                  className="h-full w-full object-cover object-[center_18%] md:h-auto md:max-h-[28rem] md:object-contain md:object-top lg:max-h-none lg:object-cover"
                />
              </div>
              <p className="font-heading mt-5 text-3xl leading-tight">{bio.name}</p>
              <p className="mt-1.5 text-sm tracking-wide text-primary">{bio.role}</p>
            </div>
            <div>
              <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
                About me
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-muted-foreground">
                {bio.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center py-16" aria-hidden>
            <Image
              src="/brand/mandala-mark.png"
              alt=""
              width={280}
              height={281}
              className="block h-36 w-36 sm:h-44 sm:w-44"
              unoptimized
            />
          </div>

          <div className="grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 className="font-heading text-3xl">{reiki.heading}</h3>
              <ReikiCopy
                paragraphs={reiki.body}
                disclaimer={reiki.disclaimer}
              />
            </div>

            <div className="relative min-h-0 lg:h-full">
              <div className="flex flex-col lg:absolute lg:inset-0">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                The precepts
              </p>
              <h3 className="font-heading mt-2 text-3xl">
                Five precepts, held by one vow
              </h3>

              <ol className="relative mt-6 ml-1.5 flex min-h-0 flex-1 flex-col justify-between border-l border-primary/25 pl-9">
                {reikiPrinciples.map((p, index) => (
                  <li key={p.title} className="relative py-1">
                    <span
                      aria-hidden
                      className="absolute top-2.5 -left-[42px] size-3 rounded-full shadow-[0_0_0_6px_var(--secondary)]"
                      style={{ backgroundColor: preceptMarks[index] }}
                    />
                    <p className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                      {p.romaji}
                    </p>
                    <p
                      className={
                        index === 0
                          ? "font-heading mt-0.5 text-xl leading-tight italic"
                          : "font-heading mt-0.5 text-xl leading-tight"
                      }
                    >
                      {p.title}
                    </p>
                    <p className="mt-0.5 max-w-sm text-sm leading-snug text-muted-foreground">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <section id="sessions" className="scroll-mt-24 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                The work
              </p>
              <h2 className="font-heading mt-2 text-4xl sm:text-5xl">Sessions</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                All treatments are given fully clothed. Arrive as you are. If you
                are unsure which session to book, write a note and we can choose
                together.
              </p>
            </div>
            <Link
              href="/?intent=inquiry#contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-10 shrink-0 px-4",
              )}
            >
              Inquire about a session
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {sessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                accent={session.id === "intuitive-energy-readings"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Energy mapping gallery */}
      <section id="gallery" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div>
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {galleryCopy.eyebrow}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-heading text-4xl sm:text-5xl">
                {galleryCopy.heading}
              </h2>
              <SampleReadingDrawer
                label={galleryCopy.sampleCta}
                triggerClassName={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-10 shrink-0 px-4",
                )}
              />
            </div>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {galleryCopy.intro}
            </p>
          </div>
          <div className="mt-12">
            <Gallery items={gallery} />
          </div>
        </div>
      </section>

      {/* Visual art */}
      <section id="atelier" className="scroll-mt-24 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase opacity-80">
              {atelier.eyebrow}
            </p>
            <h2 className="font-heading mt-3 text-4xl leading-tight sm:text-5xl">
              {atelier.heading}
            </h2>
            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-primary-foreground/85">
              {atelier.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={atelier.primary.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-primary-foreground px-5 text-sm font-medium text-primary transition hover:bg-primary-foreground/90"
              >
                {atelier.primary.label}
              </a>
              <a
                href={atelier.secondary.href}
                className="inline-flex h-11 items-center justify-center rounded-lg border border-primary-foreground/40 px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                {atelier.secondary.label}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {atelier.images.map((image, index) => (
              <div
                key={image.src}
                className={cn(
                  "overflow-hidden rounded-2xl ring-1 ring-primary-foreground/20",
                  index === 1 && "mt-8",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="aspect-[3/4] h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + map */}
      <section id="contact" className="scroll-mt-24 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Contact
            </p>
            <h2 className="font-heading mt-2 text-4xl sm:text-5xl">Contact me</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Questions about a session or try to book a session, write a few
              lines and Giovanna will reply personally. {location.note}
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Suspense fallback={<FormSkeleton />}>
              <ContactForm />
            </Suspense>
            <div className="space-y-6">
              <StudioMap />
              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm">
                    <a className="underline" href={`mailto:${studio.email}`}>
                      {studio.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FormSkeleton() {
  return (
    <div className="space-y-4 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
      <div className="h-10 animate-pulse rounded-lg bg-muted" />
      <div className="h-10 animate-pulse rounded-lg bg-muted" />
      <div className="h-10 animate-pulse rounded-lg bg-muted" />
      <div className="h-24 animate-pulse rounded-lg bg-muted" />
      <p className="text-sm text-muted-foreground">Loading the contact form…</p>
    </div>
  );
}
