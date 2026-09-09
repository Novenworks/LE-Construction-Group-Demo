import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/section";
import { gallery } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [{ title: "Our Work | L & E Construction Group" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-bg-warm">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Eyebrow>Gallery</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
            Kitchens, bathrooms, and a job in progress
          </h1>
          <p className="mt-5 max-w-2xl text-ink-soft">
            Photographs from L & E projects. Frames taken during construction
            are labeled in progress.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((photo) => (
            <figure key={photo.src} className="mb-4 break-inside-avoid">
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading="lazy"
                className="w-full rounded-md object-cover"
              />
              <figcaption className="mt-2 text-xs uppercase tracking-widest text-muted">
                {photo.category}
                {photo.stage === "in-progress" ? " · in progress" : ""}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 rounded-lg bg-night px-6 py-10 text-cream sm:px-10">
          <h2 className="text-3xl">Have a room in mind?</h2>
          <p className="mt-3 max-w-xl text-cream/75">
            If the work you want looks like this, the next step is a
            conversation with Eric.
          </p>
          <Button asChild className="mt-6" variant="primary">
            <Link to="/contact">Request an Estimate</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
