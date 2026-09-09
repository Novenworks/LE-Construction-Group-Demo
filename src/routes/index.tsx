import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { EstimateForm } from "@/components/estimate-form";
import { photos } from "@/lib/projects";
import { site, testimonials } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "L & E Construction Group | Orange County Remodeling",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <TrustStrip />
      <Services />
      <Work />
      <AboutEric />
      <Process />
      <MoreCapabilities />
      <Quotes />
      <Local />
      <FinalCta />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[min(92dvh,820px)] overflow-hidden bg-night">
      <img
        src={photos.heroDining.src}
        alt={photos.heroDining.alt}
        width={photos.heroDining.w}
        height={photos.heroDining.h}
        className="absolute inset-0 size-full object-cover object-[50%_60%]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-r from-night/90 via-night/70 to-night/25" />
      <div className="relative mx-auto flex min-h-[min(92dvh,820px)] max-w-6xl flex-col justify-end px-4 py-16 sm:px-6 sm:py-20 lg:justify-center">
        <Eyebrow className="text-teal-bright">
          Santa Ana · Orange County
        </Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-[2.35rem] leading-[1.05] text-cream sm:text-5xl lg:text-[3.65rem]">
          A contractor who cares about the work—and the experience
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
          L & E Construction Group pairs hands-on owner involvement with
          remodeling expertise across kitchens, bathrooms, additions, flooring,
          finishes, and larger residential projects.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link to="/contact">Request an Estimate</Link>
          </Button>
          <Button asChild size="lg" variant="light">
            <Link to="/work">View Our Work</Link>
          </Button>
          <a
            href={site.phoneTel}
            className="inline-flex h-14 items-center justify-center gap-2 px-2 text-cream/90 hover:text-cream"
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { k: "Owner-led", v: `Eric Bernal and family` },
    { k: "License", v: `CSLB #${site.license.number}` },
    { k: "Classification", v: site.license.classification },
    { k: "Based in", v: "Santa Ana, CA" },
  ];
  return (
    <div className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.k}>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
              {item.k}
            </p>
            <p className="mt-1 text-sm font-medium text-ink">{item.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  const cards = [
    {
      title: "Kitchens",
      href: "/kitchen",
      img: photos.kitchenWhiteGold,
      copy: "Layout, cabinetry, islands, counters, lighting, and the details that make a kitchen actually work in the morning.",
    },
    {
      title: "Bathrooms",
      href: "/bathroom",
      img: photos.bathMarbleRain,
      copy: "Walk-in showers, tile, vanities, plumbing, and ventilation—the thousand little details a bathroom has to get right.",
    },
    {
      title: "Additions & larger work",
      href: "/services",
      img: photos.jobsite,
      copy: "In-law additions, condo remodels, and projects that run from modest remodels to new construction homes.",
    },
  ];
  return (
    <Section>
      <Eyebrow>What we take on</Eyebrow>
      <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-xl text-3xl sm:text-4xl">
          Grouped around the decisions homeowners actually make
        </h2>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal-deep hover:text-ink"
        >
          All services <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.href}
            className="group overflow-hidden rounded-lg bg-surface shadow-(--shadow-soft)"
          >
            <div className="aspect-4/5 overflow-hidden">
              <img
                src={card.img.src}
                alt={card.img.alt}
                width={card.img.w}
                height={card.img.h}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-2xl">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {card.copy}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Work() {
  const shots = [
    photos.kitchenIslandClose,
    photos.bathVanityGold,
    photos.heroIsland,
    photos.bathHexShower,
    photos.kitchenShaker,
    photos.bathGlassShower,
  ];
  return (
    <Section tone="warm" id="work">
      <Eyebrow>Finished work</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
        Real kitchens and bathrooms from the L & E gallery—not catalog filler
      </h2>
      <p className="mt-4 max-w-2xl text-ink-soft">
        These photographs come from the company’s own project gallery. They are
        the work, not a mood board.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {shots.map((shot, i) => (
          <figure
            key={shot.src}
            className={
              i === 2 || i === 3 ? "col-span-2 md:col-span-1" : undefined
            }
          >
            <img
              src={shot.src}
              alt={shot.alt}
              width={shot.w}
              height={shot.h}
              loading="lazy"
              className="aspect-4/5 w-full rounded-md object-cover"
            />
          </figure>
        ))}
      </div>
      <div className="mt-8">
        <Button asChild variant="night">
          <Link to="/work">See the full gallery</Link>
        </Button>
      </div>
    </Section>
  );
}

function AboutEric() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-lg">
          <img
            src={photos.jobsite.src}
            alt={photos.jobsite.alt}
            width={photos.jobsite.w}
            height={photos.jobsite.h}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>Family owned. Family first.</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            The relationship and the finished work are the same job
          </h2>
          <p className="mt-5 text-ink-soft">
            L & E Construction Group is owned and operated by Eric Bernal and
            his family. Over the years, Eric’s success has been built upon the
            relationships he’s fostered and the finished work he leaves behind.
          </p>
          <p className="mt-4 text-ink-soft">
            His areas of expertise span modest remodels to new construction
            homes—grading the size and importance of a job only on his clients’
            passion. Eric believes clients should maintain the same level of
            excitement throughout the entire process, from the moment he’s hired
            until the job is done.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link to="/about">How Eric works</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Talk it through",
      body: "Call or write. Eric wants to understand the house, the budget worry, and what “done” should feel like—not a generic lead form.",
    },
    {
      n: "02",
      title: "Plan the work",
      body: "Kitchens and bathrooms are a thousand details. Layout, materials, plumbing, and finishes get decided before the dust starts.",
    },
    {
      n: "03",
      title: "Build cleanly",
      body: "One of the company’s three principles is a clean work site. Clients have called out that the site was clean at the end of the day.",
    },
    {
      n: "04",
      title: "Leave it finished",
      body: "The standard is that you keep the excitement you had on day one. Walk the job. Live in it.",
    },
  ];
  return (
    <Section tone="night">
      <Eyebrow className="text-teal-bright">A simple process</Eyebrow>
      <h2 className="mt-3 max-w-xl text-3xl text-cream sm:text-4xl">
        No mystery. No manufactured timeline.
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.n} className="border-t border-cream/15 pt-5">
            <p className="font-display text-sm text-teal-bright">{step.n}</p>
            <h3 className="mt-2 text-xl text-cream">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/70">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function MoreCapabilities() {
  const items = [
    "Flooring",
    "Interior & exterior painting",
    "Venetian plaster finishes",
    "Structural work",
    "Custom home improvements",
    "Complete interior remodeling",
  ];
  return (
    <Section tone="surface">
      <Eyebrow>Also on the truck</Eyebrow>
      <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
        Finishes and whole-home work, not a menu of every trade
      </h2>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-line bg-bg px-4 py-4 text-sm font-medium"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Quotes() {
  return (
    <Section>
      <Eyebrow>From the current site</Eyebrow>
      <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl">
        Three clients, in their own words
      </h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="flex h-full flex-col rounded-lg border border-line bg-surface p-6"
          >
            <p className="flex-1 text-[0.98rem] leading-relaxed text-ink-soft">
              “{t.quote}”
            </p>
            <footer className="mt-6 border-t border-line pt-4">
              <p className="font-medium text-ink">
                {t.name}, {t.place}
              </p>
              <p className="text-sm text-muted">{t.project}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}

function Local() {
  return (
    <Section tone="warm">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Where the work is</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Santa Ana home base, Orange County work
          </h2>
          <p className="mt-5 text-ink-soft">
            The company lists Orange County as home. The shop address on the
            current site and with the Contractors State License Board is{" "}
            {site.address.street}, {site.address.city}.
          </p>
          <p className="mt-4 text-ink-soft">
            First-party testimonials on the existing site come from Santa Ana,
            Long Beach, and Los Angeles—useful as evidence of who has hired
            Eric, not as a manufactured service-area map.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-surface p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted">
            License
          </p>
          <p className="mt-2 font-display text-3xl">
            CSLB #{site.license.number}
          </p>
          <p className="mt-2 text-ink-soft">
            {site.license.classification}. {site.license.status} as of{" "}
            {site.license.verifiedAsOf}. Qualifier listed on the license:{" "}
            {site.license.qualifier}.
          </p>
          <a
            href={site.license.checkUrl}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-deep"
          >
            Check the license on CSLB <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section id="estimate">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Eyebrow>Start here</Eyebrow>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Tell Eric what you want the house to feel like
          </h2>
          <p className="mt-4 text-ink-soft">
            The fastest path is still a phone call. Hours on the current site:{" "}
            {site.hours}.
          </p>
          <a
            href={site.phoneTel}
            className="mt-6 inline-flex items-center gap-3 font-display text-3xl text-teal-deep hover:text-ink"
          >
            {site.phone}
          </a>
          <p className="mt-2 text-sm text-muted">{site.email}</p>
        </div>
        <EstimateForm />
      </div>
    </Section>
  );
}
