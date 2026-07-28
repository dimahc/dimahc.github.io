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
  { id: "about", labelEN: "About", labelFR: "À propos" },
  { id: "projects", labelEN: "Projects", labelFR: "Projets" },
  { id: "blog", labelEN: "Blog", labelFR: "Blog" },
  { id: "contact", labelEN: "Contact", labelFR: "Contact" },
] as const;

export const DEFAULT_LANGUAGE = "fr" as const;
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

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dimahc.dev';
