import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Eyebrow, Section } from "@/components/section";
import { photos } from "@/lib/projects";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [{ title: "Services | L & E Construction Group" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-bg-warm">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
            Complete home remodeling, with kitchens and bathrooms at the center
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft">
            L & E provides complete home remodeling, kitchen and bathroom
            renovations, flooring, interior and exterior painting, and custom
            home improvements—with careful project management and clear
            communication from start to finish.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Link
            to="/kitchen"
            className="group overflow-hidden rounded-lg bg-surface"
          >
            <img
              src={photos.heroIsland.src}
              alt={photos.heroIsland.alt}
              className="aspect-3/2 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-3xl">Kitchen remodeling</h2>
              <p className="mt-2 text-ink-soft">
                From layout to countertops to the outlet that powers the first
                coffee. Custom cabinetry, islands, lighting, electrical, hoods,
                re-plumbing, and counters—including cement.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-deep">
                Kitchen work <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
          <Link
            to="/bathroom"
            className="group overflow-hidden rounded-lg bg-surface"
          >
            <img
              src={photos.bathMarbleRain.src}
              alt={photos.bathMarbleRain.alt}
              className="aspect-3/2 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="p-6">
              <h2 className="text-3xl">Bathroom remodeling</h2>
              <p className="mt-2 text-ink-soft">
                Walk-in showers, porcelain tubs, vanities, copper plumbing,
                lighting, electrical, ventilation, custom tile, and shower
                niches.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-deep">
                Bathroom work <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        </div>
      </Section>

      <Section tone="warm">
        <Eyebrow>Expertise</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
          Beyond the two rooms everyone starts with
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Custom kitchens and bathrooms",
            "Complete interior remodeling",
            "Venetian plaster finishes",
            "Structural work",
            "Flooring",
            "Interior and exterior painting",
            "Custom home improvements",
            "Projects from modest remodels to new construction homes",
          ].map((item) => (
            <li
              key={item}
              className="rounded-md border border-line bg-surface px-4 py-4 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </SiteShell>
  );
}
