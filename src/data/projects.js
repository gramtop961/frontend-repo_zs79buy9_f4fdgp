export const projectTags = [
  "Extension",
  "Renovation",
  "New build",
  "Period home",
  "Energy upgrade",
]

const unsplash = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const projects = [
  {
    slug: "ranelagh-family-extension",
    title: "Ranelagh family extension",
    location: "Dublin 6",
    tags: ["Extension", "Period home"],
    summary: "Light‑filled rear extension and reconfigured ground floor for a family of five.",
    hero: unsplash('photo-1505691723518-36a5ac3b2d52'),
    gallery: [
      unsplash('photo-1507089947368-19c1da9775ae'),
      unsplash('photo-1494526585095-c41746248156'),
      unsplash('photo-1493666438817-866a91353ca9')
    ],
    facts: {
      type: "Extension & refurbishment",
      brief: "Open kitchen‑living space with better connection to garden",
      outcomes: ["More natural light", "Better flow", "Improved storage"]
    },
    story: {
      brief: "A period terrace with a dark, compartmentalised ground floor.",
      design: "We proposed a modest rear extension with a generous rooflight and a reworked layout to draw light deep into the plan.",
      result: "A calm family space opening to the garden, with durable finishes and tidy storage."
    }
  },
  {
    slug: "skerries-coastal-house",
    title: "Skerries coastal house",
    location: "Skerries",
    tags: ["New build"],
    summary: "A compact new home designed around views and sheltered outdoor spaces.",
    hero: unsplash('photo-1501183638710-841dd1904471'),
    gallery: [
      unsplash('photo-1519710164239-da123dc03ef4'),
      unsplash('photo-1441974231531-c6227db76b6e'),
      unsplash('photo-1502005229762-cf1b2da7c87a')
    ],
    facts: {
      type: "New build",
      brief: "Three‑bed home with strong indoor‑outdoor connection",
      outcomes: ["A‑rated envelope", "Framed sea views", "Flexible family spaces"]
    },
    story: {
      brief: "A sloped site near the coast with exposure to winds.",
      design: "We shaped the plan to create sheltered courtyards and tuned openings for light and privacy.",
      result: "Warm, bright interiors with natural materials and easy circulation."
    }
  },
  {
    slug: "dalkey-renovation",
    title: "Dalkey renovation",
    location: "Dalkey",
    tags: ["Renovation"],
    summary: "A whole‑house upgrade with better insulation and a refreshed layout.",
    hero: unsplash('photo-1484154218962-a197022b5858'),
    gallery: [
      unsplash('photo-1505691938895-1758d7feb511'),
      unsplash('photo-1523217582562-09d0def993a6'),
      unsplash('photo-1505692794403-34d4982f88aa')
    ],
    facts: {
      type: "Renovation",
      brief: "Improve thermal comfort and update tired rooms",
      outcomes: ["Energy upgrade", "Brighter rooms", "Family‑friendly storage"]
    },
    story: {
      brief: "Outdated finishes and poor insulation were letting the home down.",
      design: "We prioritised fabric first upgrades and clarified the circulation.",
      result: "Comfortable, efficient rooms that feel calm and coherent."
    }
  }
]
