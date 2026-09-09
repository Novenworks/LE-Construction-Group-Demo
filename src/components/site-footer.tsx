import { Link } from "@tanstack/react-router";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-night text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src="/images/logo.png"
            alt=""
            className="h-12 w-auto"
            width={896}
            height={264}
          />
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-cream/70">
            Family-owned remodeling in Santa Ana and Orange County, led by Eric
            Bernal. Kitchens, bathrooms, additions, flooring, and finishes—with
            the relationship and the finished work held to the same standard.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-cream/50">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/kitchen" className="hover:text-cream">
                Kitchen remodeling
              </Link>
            </li>
            <li>
              <Link to="/bathroom" className="hover:text-cream">
                Bathroom remodeling
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-cream/50">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <a href={site.phoneTel} className="hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
            </li>
            <li>{site.hours}</li>
            <li>
              CSLB #{site.license.number} · {site.license.classification}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs leading-relaxed text-cream/45 sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. California licensed
            contractor, CSLB #{site.license.number}. License status verified on
            the{" "}
            <a
              href={site.license.checkUrl}
              className="underline decoration-cream/30 hover:text-cream/70"
            >
              Contractors State License Board
            </a>
            : {site.license.status.toLowerCase()} as of{" "}
            {site.license.verifiedAsOf}.
          </p>
          <p>
            Speculative website concept. {site.name} is not a Novenworks client.
            Business marks and photography remain property of their owners.
            This is not the official {site.name} website.
          </p>
        </div>
      </div>
    </footer>
  );
}
