import Link from "next/link";

import { SampleReadingDrawer } from "@/components/sample-reading-drawer";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Session } from "@/lib/studio";
import { cn } from "@/lib/utils";

export function SessionCard({
  session,
  accent = false,
}: {
  session: Session;
  accent?: boolean;
}) {
  return (
    <Card
      className={cn(
        "h-full",
        accent
          ? "bg-accent/60 ring-1 ring-foreground/10"
          : "bg-card/80",
      )}
    >
      <CardHeader>
        {session.duration ? (
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            {session.duration}
            {session.durationNote ? (
              <span className="ml-1 text-[0.85rem] font-normal tracking-normal text-muted-foreground normal-case italic">
                ({session.durationNote})
              </span>
            ) : null}
          </p>
        ) : null}
        <CardTitle className="font-heading text-2xl font-normal">
          {session.name}
        </CardTitle>
        <CardDescription className="text-[0.95rem] leading-relaxed">
          {session.summary}
        </CardDescription>
      </CardHeader>
      {session.prices?.length ? (
        <CardContent>
          <ul className="space-y-2">
            {session.prices.map((tier) => (
              <li
                key={tier.label}
                className="flex items-baseline justify-between gap-3"
              >
                <span className="text-sm text-muted-foreground">
                  {tier.label}
                  {tier.note ? (
                    <span className="ml-1 italic">({tier.note})</span>
                  ) : null}
                </span>
                <span className="font-heading text-2xl text-primary">
                  {tier.amount}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      ) : session.price ? (
        <CardContent>
          <p className="font-heading text-2xl text-primary">{session.price}</p>
        </CardContent>
      ) : null}
      <CardFooter className="flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        {session.link ? (
          <SampleReadingDrawer
            label={session.link.label}
            triggerClassName={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "h-auto px-0",
            )}
          />
        ) : session.forWhom ? (
          <p className="text-xs text-muted-foreground">{session.forWhom}</p>
        ) : (
          <span />
        )}
        <Link
          href={`/?session=${session.id}&intent=booking#contact`}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          Book now
        </Link>
      </CardFooter>
    </Card>
  );
}
