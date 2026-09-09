import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { site } from "@/lib/site";

export function EstimateForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-line bg-surface p-6">
        <p className="font-display text-2xl text-ink">This form stays here.</p>
        <p className="mt-3 text-ink-soft">
          This is a speculative redesign, so the form does not send a message to{" "}
          {site.name}. To reach Eric, call{" "}
          <a className="text-teal-deep underline" href={site.phoneTel}>
            {site.phone}
          </a>{" "}
          or email{" "}
          <a
            className="text-teal-deep underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="rounded-md border border-line bg-bg-warm px-4 py-3 text-sm text-ink-soft">
        Demo form only — it will not email {site.name}. Use the phone number or
        email to start a real conversation.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div>
        <Label htmlFor="project">What are you thinking about?</Label>
        <Textarea
          id="project"
          name="project"
          placeholder="Kitchen, bathroom, addition, or something larger…"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Request an Estimate
      </Button>
    </form>
  );
}
