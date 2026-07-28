export type Language = "en" | "fr";

export interface TranslatedContent<T> {
  en: T;
  fr: T;
}

export interface AchievementGroup {
  /** Section header. Empty string = no header rendered. */
  title: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  /** Short prose summary — shown on portfolio cards. */
  description: string;
  skills: string[];
  /** Grouped bullet points — shown in detail view. */
  achievementGroups?: AchievementGroup[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string;
}

export interface Technology {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  name: string;
  level?: number;
}

export interface TechCategory {
  [category: string]: Technology[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  location: string;
  locationText: string;
  cta: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export type FormStatus = "idle" | "sending" | "success" | "error";

export interface NavigationItem {
  id: string;
  labelEN: string;
  labelFR: string;
}

export interface SectionTitles {
  about: TranslatedContent<string>;
  experience: TranslatedContent<string>;
  projects: TranslatedContent<string>;
  contact: TranslatedContent<string>;
}
