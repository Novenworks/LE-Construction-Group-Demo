export const site = {
  name: "L & E Construction Group",
  legalName: "L&E Construction Group Inc",
  shortName: "L & E",
  tagline: "A contractor who cares about the work—and the experience.",
  description:
    "Family-owned Orange County remodeling. Kitchens, bathrooms, additions, flooring, and finishes—led by Eric Bernal.",
  url: "https://www.lneconstructiongroup.com",
  phone: "(562) 674-7723",
  phoneTel: "tel:5626747723",
  email: "LNEconstructiongroup@gmail.com",
  instagram: "https://www.instagram.com/lneconstructiongroup/",
  yelp: "https://www.yelp.com/biz/l-and-e-construction-group-santa-ana",
  address: {
    street: "2522 W MacArthur Blvd Unit L",
    city: "Santa Ana",
    region: "CA",
    postal: "92704",
    locality: "Orange County, CA",
  },
  hours: "Monday–Sunday, 8:00am–8:00pm",
  license: {
    number: "1070952",
    classification: "B – General Building",
    status: "Current and active",
    board: "California Contractors State License Board",
    checkUrl: "https://www.cslb.ca.gov/1070952",
    issued: "November 16, 2020",
    expires: "November 30, 2026",
    qualifier: "Eric Ray Bernal",
    verifiedAsOf: "September 8, 2026",
  },
  owner: "Eric Bernal",
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const testimonials = [
  {
    quote:
      "We were worried about going over budget for the in-law addition over the garage... but Mom was coming out regardless! L&E Construction envisioned everything we wanted and more. My mother-in-law is comfortable and loves her in-suite bathroom.",
    name: "Cari",
    place: "Long Beach",
    project: "In-law addition",
  },
  {
    quote:
      "Eric was the most professional contractor I've ever worked with. Our bathroom remodel was a tough one and he handled every unexpected hurdle with ease and did amazing work. The site was always clean at the end of the day. Attention to detail and his team's advice were critical to our remodel. Would highly recommend.",
    name: "Ben",
    place: "Los Angeles",
    project: "Bathroom remodel",
  },
  {
    quote:
      "I am beyond ecstatic with the results of my Total Remodel of my Condo. Eric Bernal made my Pinterest dreams come true with his professional input, expertise and extraordinary skills.",
    name: "Helena",
    place: "Santa Ana",
    project: "Total condo remodel",
  },
] as const;

export const principles = [
  {
    n: "01",
    title: "Great customer service experience",
    body: "Eric believes clients should keep the same excitement from the day they hire him until the job is done. Communication and care are part of the work, not extras.",
  },
  {
    n: "02",
    title: "Maintain a clean work site",
    body: "Clients notice it. One bathroom remodel review on the current site called out that the site was always clean at the end of the day—and that the unexpected hurdles still got handled.",
  },
  {
    n: "03",
    title: "Respect your home or business",
    body: "Construction can feel disruptive. The standard here is to treat the property like it belongs to family, because the company is family-owned and family-operated.",
  },
] as const;

export const kitchenCapabilities = [
  "Appliance installation",
  "Custom cabinetry",
  "Kitchen islands",
  "Overhang lighting",
  "Electrical & hoods",
  "Re-plumbing",
  "Countertops of every kind, even cement",
] as const;

export const bathroomCapabilities = [
  "Updated copper plumbing",
  "Walk-in showers",
  "Porcelain tubs",
  "Vanities",
  "Lighting, electrical & ventilation",
  "Custom tile work",
  "Shower niches",
] as const;
