import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/30",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-md border border-line bg-surface px-4 py-3 text-base text-ink placeholder:text-muted outline-none transition-colors focus-visible:border-teal focus-visible:ring-2 focus-visible:ring-teal/30",
        className,
      )}
      {...props}
    />
  );
}

export function Label({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-sm font-medium text-ink-soft",
        className,
      )}
      {...props}
    />
  );
}
