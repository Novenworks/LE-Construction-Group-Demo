import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/section";
import { photos } from "@/lib/projects";
import { principles, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About | L & E Construction Group" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-bg-warm">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
            Family owned. Family first.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            L&E Construction Group is owned and operated by Eric Bernal and his
            family.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <img
            src={photos.jobsite.src}
            alt={photos.jobsite.alt}
            className="aspect-4/3 w-full rounded-lg object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-ink-soft">
              Over the years, Eric’s success has been built upon the
              relationships he’s fostered and the finished work he leaves
              behind. His areas of expertise span modest remodels to new
              construction homes—grading the size and importance of a job only
              on his clients’ passion.
            </p>
            <p className="mt-4 text-ink-soft">
              Eric believes clients should maintain the same level of excitement
              throughout the entire process—from the moment he’s hired until the
              job is done.
            </p>
            <p className="mt-4 text-ink-soft">
              That standard shows up in the work people ask him to do: a
              difficult bathroom, an in-law addition over a garage, a total
              condo remodel.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="night">
        <Eyebrow className="text-teal-bright">Our principles</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl text-cream sm:text-4xl">
          Our approach to construction is different
        </h2>
        <p className="mt-4 max-w-2xl text-cream/70">
          When we’re talking about your home or business, construction can feel
          disruptive and stressful. We adhere to a set of principles to make it
          an easier, more positive experience.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.n} className="border-t border-cream/15 pt-5">
              <p className="font-display text-sm text-teal-bright">{p.n}</p>
              <h3 className="mt-2 text-xl text-cream">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <Eyebrow>License</Eyebrow>
        <h2 className="mt-3 text-3xl">California licensed contractor</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          {site.legalName} holds CSLB license #{site.license.number} (
          {site.license.classification}). The Contractors State License Board
          listed the license as {site.license.status.toLowerCase()} as of{" "}
          {site.license.verifiedAsOf}. The qualifying individual on the license
          is {site.license.qualifier}.
        </p>
        <a
          href={site.license.checkUrl}
          className="mt-4 inline-block text-sm font-medium text-teal-deep"
        >
          Verify on CSLB →
        </a>
        <div className="mt-10">
          <Button asChild>
            <Link to="/contact">Request an Estimate</Link>
          </Button>
        </div>
      </Section>
    </SiteShell>
  );
}
