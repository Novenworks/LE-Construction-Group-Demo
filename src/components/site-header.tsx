import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt={site.name}
            className="h-10 w-auto sm:h-11"
            width={896}
            height={264}
          />
        </Link>

        <nav className="hidden items-center gap-7 text-[0.95rem] text-ink-soft md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="hover:text-ink"
              activeProps={{ className: "text-ink font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneTel}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink"
          >
            <Phone className="size-4 text-teal" />
            {site.phone}
          </a>
          <Button asChild size="sm">
            <Link to="/contact">Request an Estimate</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-line bg-surface text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-line bg-surface md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-md px-3 py-3 text-base text-ink hover:bg-bg-warm"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneTel}
            className="rounded-md px-3 py-3 text-base text-ink hover:bg-bg-warm"
          >
            Call {site.phone}
          </a>
          <Button asChild className="mt-2 w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Request an Estimate
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
