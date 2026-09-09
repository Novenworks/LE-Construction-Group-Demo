import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-(--motion-fast,250ms) ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-teal text-on-teal hover:bg-teal-deep active:scale-[0.98]",
        night:
          "bg-night text-cream hover:bg-night-soft active:scale-[0.98]",
        outline:
          "border border-line-strong bg-transparent text-ink hover:bg-bg-warm",
        ghost: "text-ink hover:bg-bg-warm",
        light:
          "bg-cream text-ink hover:bg-surface active:scale-[0.98]",
      },
      size: {
        sm: "h-10 rounded-sm px-4 text-sm",
        md: "h-12 rounded-md px-5 text-[0.95rem]",
        lg: "h-14 rounded-md px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
