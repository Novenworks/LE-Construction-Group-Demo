import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "warm" | "night" | "surface";
}) {
  const tones = {
    paper: "bg-bg text-ink",
    warm: "bg-bg-warm text-ink",
    surface: "bg-surface text-ink",
    night: "bg-night text-cream",
  } as const;

  return (
    <section id={id} className={cn(tones[tone], className)}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.18em] text-teal-deep",
        className,
      )}
    >
      {children}
    </p>
  );
}
