"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { EnergyMark } from "@/components/mark";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, studio } from "@/lib/studio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="bg-accent px-4 py-2 text-center text-sm text-accent-foreground">
        20% discount for students using promo code{" "}
        <span className="font-medium tracking-wide">Student26</span>
      </div>
      <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-foreground"
          aria-label={`${studio.name} home`}
        >
          <EnergyMark priority className="h-12 w-auto" />
          <span className="font-heading text-[1.35rem] leading-none tracking-tight">
            {studio.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/?intent=booking#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "hidden h-9 px-3.5 sm:inline-flex",
            )}
          >
            Book now
          </Link>

          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "lg:hidden",
              )}
              aria-label="Open menu"
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="font-heading text-xl font-normal">
                  {studio.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-2">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-muted"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/?intent=booking#contact"
                      className="mt-1 rounded-lg bg-primary px-3 py-3 text-base text-primary-foreground hover:bg-primary/90"
                    />
                  }
                >
                  Book now
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
