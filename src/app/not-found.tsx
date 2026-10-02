import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
        Missing page
      </p>
      <h1 className="font-heading mt-3 text-4xl">This page is not in the studio.</h1>
      <p className="mt-4 text-muted-foreground">
        The address may have changed, or the page was never here. Return home,
        or write through the contact form to book a session.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className={cn(buttonVariants(), "h-10 px-4")}>
          Home
        </Link>
        <Link
          href="/?intent=booking#contact"
          className={cn(buttonVariants({ variant: "outline" }), "h-10 px-4")}
        >
          Book now
        </Link>
      </div>
    </main>
  );
}
