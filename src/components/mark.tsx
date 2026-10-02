import Image from "next/image";

import { cn } from "@/lib/utils";

export function EnergyMark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/mark.svg"
      alt=""
      width={420}
      height={1176}
      className={cn("h-10 w-auto", className)}
      priority={priority}
      unoptimized
    />
  );
}
