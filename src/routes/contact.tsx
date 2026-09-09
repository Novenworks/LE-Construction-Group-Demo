import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { EstimateForm } from "@/components/estimate-form";
import { Eyebrow, Section } from "@/components/section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [{ title: "Contact | L & E Construction Group" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-3 text-4xl sm:text-5xl">
              Request an estimate
            </h1>
            <p className="mt-5 text-ink-soft">
              Call, email, or use the form. The form on this concept site is a
              demonstration only—it does not send mail to L & E. The phone
              number and email below are the current first-party contacts.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <Phone className="mt-1 size-5 text-teal" />
                <div>
                  <p className="text-sm text-muted">Call</p>
                  <a href={site.phoneTel} className="text-lg font-medium">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-5 text-teal" />
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a href={`mailto:${site.email}`} className="text-lg font-medium">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 size-5 text-teal" />
                <div>
                  <p className="text-sm text-muted">Visit</p>
                  <p className="text-lg font-medium">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postal}
                  </p>
                  <p className="mt-1 text-sm text-muted">{site.hours}</p>
                </div>
              </li>
            </ul>
          </div>
          <EstimateForm />
        </div>
      </Section>
    </SiteShell>
  );
}
