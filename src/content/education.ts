import type { TranslatedContent } from "@/types";

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
}

interface EducationContent {
  entries: EducationEntry[];
}

export const educationContent: TranslatedContent<EducationContent> = {
  en: {
    entries: [
      {
        degree:
          "Master's in Computer Science – DABI (Decision-Making, Learning & Big Data)",
        school: "University of Rennes 1",
        location: "Rennes, France",
        period: "2021 – 2023",
        description:
          "Data warehousing, data mining, Cloud & Big Data, artificial intelligence, application integration",
      },
      {
        degree: "Bachelor's in Computer Science – IT Management",
        school: "University of Rennes 1",
        location: "Rennes, France",
        period: "2020 – 2021",
        description:
          "IT/management dual competency, databases, web development, object modeling, data analysis",
      },
      {
        degree: "Higher Technician Diploma in Computer Science",
        school: "INP-HB",
        location: "Yamoussoukro, Côte d'Ivoire",
        period: "2016 – 2019",
        description:
          "Algorithms, networking, web development, system administration, project management",
      },
      {
        degree: "General & Professional English Training",
        school: "Wall Street English",
        location: "Nantes, France",
        period: "2024",
        description:
          "Oral and written communication, IT technical vocabulary, professional presentations, meetings in English",
      },
    ],
  },
  fr: {
    entries: [
      {
        degree: "Master MIAGE – DABI (Décisionnel, Apprentissage et Big Data)",
        school: "Université de Rennes 1",
        location: "Rennes, France",
        period: "2021 – 2023",
        description:
          "Entrepôts de données, fouille de données, Cloud & Big Data, intelligence artificielle, intégration d'applications",
      },
      {
        degree: "Licence Informatique – MIAGE",
        school: "Université de Rennes 1",
        location: "Rennes, France",
        period: "2020 – 2021",
        description:
          "Double compétence informatique/gestion, bases de données, programmation web, modélisation objet, analyse de données",
      },
      {
        degree: "Diplôme de Technicien Supérieur en Informatique",
        school: "INP-HB",
        location: "Yamoussoukro, Côte d'Ivoire",
        period: "2016 – 2019",
        description:
          "Algorithmique, réseaux, développement web, administration systèmes, gestion de projets",
      },
      {
        degree: "Formation Anglais Général et Professionnel",
        school: "Wall Street English",
        location: "Nantes, France",
        period: "2024",
        description:
          "Communication orale et écrite, vocabulaire technique IT, présentations professionnelles, réunions en anglais",
      },
    ],
  },
};
