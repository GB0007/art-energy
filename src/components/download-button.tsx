import { buttonVariants } from "@/components/ui/button";
import { downloadHref } from "@/lib/downloads";
import { cn } from "@/lib/utils";

export function DownloadButton({
  filename,
  label = "Download",
  variant = "default",
  className,
}: {
  filename: string;
  label?: string;
  variant?: "default" | "outline";
  className?: string;
}) {
  return (
    <form action={downloadHref(filename)} method="get">
      <button
        type="submit"
        className={cn(
          buttonVariants({ variant }),
          "mt-0 inline-flex h-11 px-5",
          className,
        )}
      >
        {label}
      </button>
    </form>
  );
}
