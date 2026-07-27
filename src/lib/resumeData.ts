import { educationContent } from "@/content/education";
import { experienceContent } from "@/content/experience";
import { projectsContent } from "@/content/projects";
import { getTechsByResumeCategory } from "@/content/technologies";
import { PERSONAL_INFO } from "@/lib/constants";
import { t as translate } from "@/lib/i18n";
import type { Education, Experience } from "@/types";

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  about: string;
  experience: Experience[];
  projects: any[];
  technologies: {
    languages: string[];
    cloudDevOps: string[];
    dataMessaging: string[];
    observability: string[];
  };
  education: Education[];
}

export interface ResumeLabels {
  about: string;
  experience: string;
  projects: string;
  technologies: string;
  education: string;
  languages: string;
  cloudDevOps: string;
  dataMessaging: string;
  observability: string;
  skills: string;
}

export function getResumeData(language: "en" | "fr" = "en"): ResumeData {
  const t = (key: string, params?: Record<string, string | number>) =>
    translate(language, key, params);

  const techCategories = getTechsByResumeCategory();

  return {
    name: PERSONAL_INFO.name.full,
    title: t("hero.title"),
    contact: {
      email: PERSONAL_INFO.email.professional,
      phone: PERSONAL_INFO.phone,
      location: PERSONAL_INFO.location.display,
      github: PERSONAL_INFO.social.github.replace("https://", ""),
      linkedin: PERSONAL_INFO.social.linkedin.replace("https://", ""),
    },
    about: t("about.summary"),
    experience: experienceContent[language].jobs,
    projects: projectsContent[language].projects.slice(0, 4),
    technologies: {
      languages: techCategories["Languages"],
      cloudDevOps: techCategories["Cloud & DevOps"],
      dataMessaging: techCategories["Data & Messaging"],
      observability: techCategories["Observability"],
    },
    education: educationContent[language].entries,
  };
}

export function getResumeLabels(language: "en" | "fr" = "en"): ResumeLabels {
  const t = (key: string, params?: Record<string, string | number>) =>
    translate(language, key, params);

  return {
    about: t("export.sections.about"),
    experience: t("export.sections.experience"),
    projects: t("export.sections.projects"),
    technologies: t("export.sections.technologies"),
    education: t("export.sections.education"),
    languages: t("export.sections.languages"),
    cloudDevOps: t("export.sections.cloudDevOps"),
    dataMessaging: t("export.sections.dataMessaging"),
    observability: t("export.sections.observability"),
    skills: t("experience.skillsLabel"),
  };
}
