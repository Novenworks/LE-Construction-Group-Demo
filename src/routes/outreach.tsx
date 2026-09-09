import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/outreach")({
  head: () => ({
    meta: [
      { title: "Outreach brief | Novenworks operator" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: OutreachPage,
});

const captures = [
  {
    file: "before-original-desktop.png",
    label: "BEFORE — original desktop",
  },
  { file: "after-desktop.png", label: "AFTER — desktop 1440" },
  { file: "after-mobile.png", label: "AFTER — mobile 390" },
  { file: "after-scroll.gif", label: "AFTER — scrolling GIF" },
  { file: "after-scroll.mp4", label: "AFTER — scrolling MP4" },
] as const;

function OutreachPage() {
  return (
    <div className="min-h-dvh bg-night text-cream">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-bright">
          Operator only · noindex · unlinked
        </p>
        <h1 className="mt-3 font-display text-4xl">
          L & E Construction Group — outreach brief
        </h1>
        <p className="mt-3 text-cream/70">
          Speculative Novenworks redesign. The prospect is not a client. Do not
          imply otherwise.
        </p>

        <section className="mt-12 space-y-3 text-sm leading-relaxed text-cream/80">
          <h2 className="font-display text-2xl text-cream">Snapshot</h2>
          <p>
            <strong className="text-cream">Business:</strong> L & E Construction
            Group (L&E Construction Group Inc), Santa Ana / Orange County.
            Residential remodeling and construction. Owner: Eric Bernal /
            qualifier Eric Ray Bernal.
          </p>
          <p>
            <strong className="text-cream">Original site:</strong>{" "}
            <a className="underline" href="https://www.lneconstructiongroup.com/">
              https://www.lneconstructiongroup.com/
            </a>
          </p>
          <p>
            <strong className="text-cream">Phone:</strong>{" "}
            <a className="underline" href="tel:5626747723">
              (562) 674-7723
            </a>
            {" · "}
            <strong className="text-cream">Email:</strong>{" "}
            LNEconstructiongroup@gmail.com
          </p>
          <p>
            <strong className="text-cream">GitHub:</strong>{" "}
            <a
              className="underline"
              href="https://github.com/Novenworks/LE-Construction-Group-Demo"
            >
              Novenworks/LE-Construction-Group-Demo
            </a>
          </p>
          <p>
            <strong className="text-cream">Deployed demo:</strong>{" "}
            <a
              className="underline"
              href="https://le-construction-group-demo.vercel.app/"
            >
              https://le-construction-group-demo.vercel.app/
            </a>
            . Outreach path:{" "}
            <code className="text-teal-bright">/outreach</code>
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Agency sanity check</h2>
          <p className="mt-3 text-sm leading-relaxed text-cream/80">
            Rechecked September 8, 2026. The live site is a Wix.com Website
            Builder property (generator meta: “Wix.com Website Builder”,
            siteRevision 98). No agency, designer, or studio credit appears in
            the footer, about copy, or page source. Instagram and Yelp are
            linked; no web-design vendor is named. Treat this as an
            owner-built Wix site, not an agency relationship. Do not claim “no
            agency” as a jab—just don’t invent one, and don’t attack Wix.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">
            Original-site observations (real)
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-cream/80">
            <li>
              The homepage is essentially a short about page plus four service
              labels. Strong owner story and three specific testimonials sit
              below a thin visual system.
            </li>
            <li>
              A real project gallery exists on{" "}
              <code>/gallery</code> (phone photos of kitchens and bathrooms,
              including in-progress work) but it is not used as the homepage’s
              visual argument. The homepage leans on Wix-template photography
              instead.
            </li>
            <li>
              License, street address, and CSLB identity are not presented as
              trust signals on the homepage even though JSON-LD already
              contains the MacArthur address and the board lists license
              1070952 as current.
            </li>
            <li>
              Service pages (kitchen / bathroom) have useful first-party copy
              and capability lists, but they are easy to miss from the
              homepage architecture.
            </li>
            <li>
              Mobile composition is a classic Wix long-scroll with mixed
              template images, a stacked form, and no clear primary conversion
              path besides “CALL NOW.”
            </li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">
            Redesign improvements (tied to the gap)
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-cream/80">
            <li>
              <strong className="text-cream">Visual credibility:</strong>{" "}
              first-party kitchen/bath/jobsite photography drives the hero and
              work sections. Template stock from the Wix homepage is not used
              as “their work.”
            </li>
            <li>
              <strong className="text-cream">Trust:</strong> CSLB #1070952,
              classification, Santa Ana address, and owner name are visible
              without inventing ratings, years-in-business, or insurance
              slogans.
            </li>
            <li>
              <strong className="text-cream">Service discovery:</strong>{" "}
              kitchens, bathrooms, and larger/addition work are grouped as
              buyer decisions, with flooring/paint as secondary—not a dump in
              the hero.
            </li>
            <li>
              <strong className="text-cream">Conversion:</strong> Request an
              Estimate + the live phone number, with a form that discloses it
              is demo-only rather than silently discarding leads.
            </li>
            <li>
              <strong className="text-cream">Mobile:</strong> sticky header,
              44px+ targets, stacked CTAs, and photography that crops on
              purpose instead of squashing a Wix strip.
            </li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Talking points</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-cream/80">
            <li>
              “You already have the proof—the gallery, the testimonials, Eric’s
              voice. The current homepage just doesn’t put that proof to work.”
            </li>
            <li>
              “Helena, Cari, and Ben describe a contractor people trust with
              messy bathrooms and in-law additions. The site should feel that
              established.”
            </li>
            <li>
              “This is a speculative concept, not a pitch that you hired us. If
              the direction is useful, we can talk. If not, you still have the
              same business you had yesterday.”
            </li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Personalization hooks</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-cream/80">
            <li>
              Cari’s in-law addition over the garage—and the budget worry that
              still produced a bathroom her mother-in-law loves.
            </li>
            <li>
              Ben’s “site was always clean at the end of the day,” which maps
              onto the published principle about a clean work site.
            </li>
            <li>
              Helena’s Santa Ana condo remodel and “Pinterest dreams”—local,
              specific, and already on the homepage.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">What not to say</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-cream/80">
            <li>Do not say the current site “sucks,” or insult Wix, Eric, or a designer.</li>
            <li>Do not imply Novenworks was hired or that this is the official site.</li>
            <li>Do not claim ownership of their photography or logo.</li>
            <li>
              Do not invent ROI, lead-volume, ranking, “top-rated,” star counts,
              review totals, years in business, warranties, financing, staff
              size, or insurance. CSLB lists a contractor bond and a workers’
              compensation exemption (certified no employees as of 12/05/2024)—do
              not advertise a crew size or “fully insured.”
            </li>
            <li>
              Do not use Houzz city lists or the (562) 600-7215 Houzz number.
              First-party phone is (562) 674-7723.
            </li>
            <li>
              Do not present Wix template/stock photos as completed L & E jobs.
            </li>
            <li>
              Do not claim an agency is absent as a competitive attack; the
              finding is simply “no agency credit on the live site.”
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Subject lines</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-cream/80">
            <li>Eric — a concept site using your actual kitchen and bath photos</li>
            <li>The gallery on lneconstructiongroup.com is stronger than the homepage</li>
            <li>Speculative redesign for L & E — no pitch that you asked for this</li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Cold email</h2>
          <pre className="mt-4 whitespace-pre-wrap rounded-md border border-cream/15 bg-night-soft p-5 text-sm leading-relaxed text-cream/85">
            {`Hi Eric —

I’m with Novenworks. I was looking at lneconstructiongroup.com and the gap that stood out isn’t that you lack work to show. You have a real gallery (kitchens, marble showers, an active jobsite) and three specific testimonials — Cari’s in-law addition, Ben’s tough bathroom, Helena’s Santa Ana condo. The homepage itself still reads like a short about page, and it leans on generic photos instead of the rooms you’ve actually finished.

I put together a speculative redesign that uses your photography, Eric’s owner story, and the CSLB license as it actually stands. It is a concept, not a project you hired us for, and your marks and photos stay yours.

If it’s useful to look at: https://le-construction-group-demo.vercel.app/
If not, no need to reply.

— Novenworks`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Follow-up</h2>
          <pre className="mt-4 whitespace-pre-wrap rounded-md border border-cream/15 bg-night-soft p-5 text-sm leading-relaxed text-cream/85">
            {`Eric — short follow-up on the concept site I sent. The only point I wanted to make is that your existing gallery already does the hard part. Happy to take it down or leave it up as a reference. Either way, hope the work’s going well.`}
          </pre>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl">Capture package</h2>
          <p className="mt-3 text-sm text-cream/70">
            Files live at <code>/outreach/…</code> and are previewed below.
          </p>
          <div className="mt-6 space-y-8">
            {captures.map((c) => (
              <figure key={c.file} className="space-y-2">
                <figcaption className="text-sm text-cream/80">
                  {c.label}{" "}
                  <a
                    className="text-teal-bright underline"
                    href={`/outreach/${c.file}`}
                  >
                    /outreach/{c.file}
                  </a>
                </figcaption>
                {c.file.endsWith(".mp4") ? (
                  <video
                    className="w-full rounded-md border border-cream/10"
                    controls
                    src={`/outreach/${c.file}`}
                  />
                ) : (
                  <img
                    src={`/outreach/${c.file}`}
                    alt={c.label}
                    className="w-full rounded-md border border-cream/10"
                  />
                )}
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
