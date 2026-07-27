export const PERSONAL_INFO = {
  name: {
    first: "Abdoul Hamid",
    last: "COULIBALY",
    full: "Abdoul Hamid COULIBALY",
  },
  professionalTitle: "Backend Software Engineer",
  phone: "+33 7 49 10 66 71",
  email: {
    primary: "hello@dimahc.dev",
    professional: "pro@dimahc.dev",
  },
  location: {
    city: "Rennes",
    country: "France",
    display: "Rennes, France",
  },
  social: {
    linkedin: "https://linkedin.com/in/abdoul-hamid-coulibaly",
    github: "https://github.com/dimahc",
  },
} as const;

export const NAVIGATION_SECTIONS = [
  { id: "now", labelEN: "Now", labelFR: "Actuel" },
  { id: "experience", labelEN: "Experience", labelFR: "Expérience" },
  { id: "oss", labelEN: "Open source", labelFR: "Open source" },
  { id: "writing", labelEN: "Writing", labelFR: "Écrits" },
  { id: "contact", labelEN: "Contact", labelFR: "Contact" },
] as const;

export const DEFAULT_LANGUAGE = "en" as const;
export const DEFAULT_SECTION = "about" as const;

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
} as const;

export const STAGGER_DELAY = {
  items: 0.05,
  categories: 0.1,
} as const;
