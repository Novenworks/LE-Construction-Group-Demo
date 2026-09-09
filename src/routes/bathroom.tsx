import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/section";
import { bathroomCapabilities, site } from "@/lib/site";
import { bathroomGallery, photos } from "@/lib/projects";

export const Route = createFileRoute("/bathroom")({
  head: () => ({
    meta: [{ title: "Bathroom Remodeling | L & E Construction Group" }],
  }),
  component: BathroomPage,
});

function BathroomPage() {
  return (
    <SiteShell>
      <section className="relative isolate min-h-[52vh] overflow-hidden bg-night">
        <img
          src={photos.bathVanityGold.src}
          alt={photos.bathVanityGold.alt}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-night/55" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-6xl items-end px-4 py-16 sm:px-6">
          <div>
            <Eyebrow className="text-teal-bright">Bathrooms</Eyebrow>
            <h1 className="mt-3 max-w-3xl text-4xl text-cream sm:text-5xl">
              Pamper yourself—one detail at a time
            </h1>
          </div>
        </div>
      </section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg text-ink-soft">
              Your dream bathroom is made up of a thousand little details. We
              take pride in each and every element, so that the style and
              function of your bathroom vision comes to life.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-2xl">From idea…</h2>
                <p className="mt-3 text-sm text-ink-soft">
                  If you need help coming up with ideas, inspiration, or just
                  someone to consult with, L&E can help through all the
                  considerations when remodeling your bathroom.
                </p>
              </div>
              <div>
                <h2 className="text-2xl">To completion</h2>
                <p className="mt-3 text-sm text-ink-soft">
                  Once your vision is decided upon, L&E will take the care
                  necessary to get the job done right, with an emphasis on
                  customer experience and the company’s principles.
                </p>
              </div>
            </div>
          </div>
          <aside className="rounded-lg border border-line bg-surface p-6 lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-widest text-muted">
              We can also help with
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {bathroomCapabilities.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-2 last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
      <Section tone="warm">
        <Eyebrow>Bathroom work</Eyebrow>
        <h2 className="mt-3 text-3xl">From the gallery</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {bathroomGallery.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="aspect-4/5 w-full rounded-md object-cover"
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild>
            <Link to="/contact">Talk through a bathroom</Link>
          </Button>
          <a
            href={site.phoneTel}
            className="text-sm font-medium text-teal-deep"
          >
            {site.phone}
          </a>
        </div>
      </Section>
    </SiteShell>
  );
}
