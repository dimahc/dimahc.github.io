import type { Project, TranslatedContent } from "@/types";

interface ProjectsContent {
  title: string;
  projects: Project[];
}

export const projectsContent: TranslatedContent<ProjectsContent> = {
  en: {
    title: "Professional and Academic Projects",
    projects: [
      {
        name: "Automation of Data Integration Processes for ISTIC Information System",
        period: "May 2023 - Present",
        description:
          "Collaborated with the University of Rennes 1 to automate data integration processes related to registrations, internships, and work-study programs. The goal was to optimize existing workflows to ensure results identical to or better than the manual system.",
        achievements: [
          "In-depth analysis of existing systems (Apogée and Pstage)",
          "API exploration: Analysis of OpenReports (upstream) and Eudonet ISTIC (downstream) services",
          "Architecture design: Tool selection, focusing on ETL solutions (Pentaho)",
          "Development and testing: Design of a robust, configurable, and maintainable automated integration chain",
        ],
        skills:
          "Git, Data Warehousing, Pentaho, ETL (Extract, Transform, Load), Multidimensional Modeling",
      },
      {
        name: "Application of Classification Algorithms on Images",
        period: "February 2023",
        description:
          "Developed a deep learning model applied to image classification as part of a research project.",
        achievements: [
          "Image data preprocessing",
          "Implementation of classification models based on deep learning algorithms",
        ],
        skills: "Deep Learning, Data Preprocessing, Image Exploration",
      },
      {
        name: "Design and Development of a Multidimensional Model with Mondrian and Pentaho",
        period: "September 2022 - December 2022",
        description:
          "Project using OpenFood Facts data to analyze the nutritional composition and Nutriscore of thousands of food products.",
        achievements: [
          "Creation of UML diagram for data modeling",
          "Development of Mondrian schema in XML",
          "Database generation using SQL scripts",
          "Data integration and fact table population with Pentaho Kettle",
          "Statistical analysis using MDX",
          "Detailed report writing explaining design choices",
        ],
        skills:
          "Pentaho, Databases, Multidimensional Modeling, MDX, Statistical Analysis, UML",
      },
      {
        name: "Image Indexing and Visualization",
        period: "November 2022 - December 2022",
        description:
          "Project aimed at applying image processing algorithms to analyze, describe, and associate a set of images.",
        achievements: [
          "Calculation of grayscale histograms",
          "Detection and description of visual features (Harris corner detection, SIFT)",
          "Implementation of feature matching algorithms",
          "Exploration of limitations related to the curse of dimensionality",
        ],
        skills:
          "Image Processing, Indexing, Artificial Intelligence, SIFT, Visual Matching",
      },
      {
        name: "Data Mining: Discovery of Geolocated Points of Interest from Photo Metadata",
        period: "September 2022 - October 2022",
        description:
          "Exploration of metadata from tourist photos taken in the city of Rennes to identify points of interest with high photographic activity.",
        achievements: [
          "Data preparation: Cleaning, visualization, and descriptive statistics",
          "Geographic analysis: Clustering (K-Means, Hierarchical Clustering) on latitude and longitude data",
          "Text data mining: Association rules, Frequent Pattern Growth on textual attributes (tags, descriptions)",
        ],
        skills:
          "KNIME, Data Mining, Clustering, Association Rules, Artificial Intelligence",
      },
      {
        name: "Inforelay: Development of a Web Information System",
        period: "December 2020 - January 2021",
        description:
          "Development of a web application combining React (Frontend) and Laravel (Backend) as part of an academic project.",
        achievements: [
          "Design of Backend APIs in Laravel",
          "Development of a user interface with React",
          "OpenAPI documentation",
          "Deployment of the demo on Firebase",
        ],
        skills: "React, Laravel, Git, Web Development, OpenAPI",
      },
      {
        name: "Development of an Online Sales Site (School Project)",
        period: "October 2020 - January 2021",
        description:
          'Creation of an online sales site using the MERN stack (MongoDB, Express.js, React.js/Redux, Node.js) to put into practice the skills acquired in the Udemy course "Master MERN Stack by Building Complete Blog Project".',
        achievements: [
          "Creation of a RESTful backend in Node.js and Express.js",
          "Design of a user interface with React.js",
          "Data management with MongoDB and Redux",
        ],
        skills: "MERN Stack, MongoDB, Web Development, JavaScript",
      },
      {
        name: "Development of a Billing System",
        period: "February 2020 - March 2020",
        description:
          "Development of a billing application for a company specializing in consulting and immigration to Canada.",
        achievements: [
          "Management of electronic payments via Stripe API",
          "Automatic generation and printing of invoices",
        ],
        skills: "Laravel, Stripe API, Databases, MySQL",
      },
      {
        name: "Development of a Showcase Site for a Travel Agency",
        period: "September 2019 - October 2019",
        description:
          "Creation of a showcase website for an American travel agency, with an optimized design in English.",
        achievements: [
          "Use of Bootstrap 4 and Material Design for the user interface",
          "Backend development with Laravel 6",
          "Integration of dynamic features with jQuery and AJAX",
        ],
        skills: "Laravel, Bootstrap, AJAX, jQuery",
      },
    ],
  },
  fr: {
    title: "Projets Professionnels et Académiques",
    projects: [
      {
        name: "Automatisation des processus d'intégration de données du système d'information de l'ISTIC",
        period: "Mai 2023 - Aujourd'hui",
        description:
          "Projet réalisé en collaboration avec l'Université de Rennes 1 pour automatiser les processus d'intégration de données liés aux inscriptions, stages, et alternances. L'objectif était d'optimiser les workflows existants pour garantir des résultats identiques ou supérieurs à ceux du système manuel.",
        achievements: [
          "Analyse approfondie des systèmes existants (Apogée et Pstage)",
          "Exploration des API : Analyse des services OpenReports (amont) et Eudonet ISTIC (aval)",
          "Conception de l'architecture : Choix des outils, avec un focus sur les solutions ETL (Pentaho)",
          "Développement et tests : Conception d'une chaîne automatisée d'intégration robuste, paramétrable, et maintenable",
        ],
        skills:
          "Git, Entrepôt de données, Pentaho, ETL (Extract, Transform, Load), Modélisation multidimensionnelle",
      },
      {
        name: "Application des algorithmes de classification sur des images",
        period: "Février 2023",
        description:
          "Dans le cadre d'un projet de recherche, développement d'un modèle de deep learning appliqué à la classification d'images.",
        achievements: [
          "Prétraitement des données d'image",
          "Implémentation de modèles de classification basés sur des algorithmes de deep learning",
        ],
        skills: "Deep Learning, Prétraitement de données, Exploration d'images",
      },
      {
        name: "Conception et développement d'un modèle multidimensionnel avec Mondrian et Pentaho",
        period: "Septembre 2022 - Décembre 2022",
        description:
          "Projet réalisé avec les données d'OpenFood Facts pour analyser la composition nutritionnelle et le Nutriscore de milliers de produits alimentaires.",
        achievements: [
          "Création du diagramme UML pour modéliser les données",
          "Développement du schéma Mondrian en XML",
          "Génération de la base de données à l'aide de scripts SQL",
          "Intégration des données et remplissage des tables de faits avec Pentaho Kettle",
          "Réalisation d'analyses statistiques avec MDX",
          "Rédaction d'un rapport détaillé expliquant les choix de conception",
        ],
        skills:
          "Pentaho, Bases de données, Modélisation multidimensionnelle, MDX, Analyse statistique, UML",
      },
      {
        name: "Indexation et visualisation d'images",
        period: "Novembre 2022 - Décembre 2022",
        description:
          "Projet visant à appliquer des algorithmes de traitement d'images pour analyser, décrire, et associer un ensemble d'images.",
        achievements: [
          "Calcul d'histogrammes de niveaux de gris",
          "Détection et description de caractéristiques visuelles (Harris corner detection, SIFT)",
          "Mise en œuvre d'algorithmes de matching de caractéristiques",
          "Exploration des limitations liées à la malédiction de la dimensionnalité",
        ],
        skills:
          "Traitement d'images, Indexation, Intelligence Artificielle, SIFT, Matching visuel",
      },
      {
        name: "Data Mining : Découverte de points d'intérêts géolocalisés à partir de métadonnées de photos",
        period: "Septembre 2022 - Octobre 2022",
        description:
          "Exploration des métadonnées de photos touristiques prises dans la ville de Rennes pour identifier des points d'intérêt à forte activité photographique.",
        achievements: [
          "Préparation des données : Nettoyage, visualisation et statistiques descriptives",
          "Analyse géographique : Clustering (K-Means, Clustering hiérarchique) sur les données de latitude et longitude",
          "Fouille de données textuelles : Association rules, Frequent Pattern Growth sur les attributs textuels (tags, descriptions)",
        ],
        skills:
          "KNIME, Fouille de données, Clustering, Association rules, Intelligence Artificielle",
      },
      {
        name: "Inforelay : Développement d'un système d'information web",
        period: "Décembre 2020 - Janvier 2021",
        description:
          "Développement d'une application web combinant React (Frontend) et Laravel (Backend) dans le cadre d'un projet académique.",
        achievements: [
          "Conception des API Backend en Laravel",
          "Développement d'une interface utilisateur avec React",
          "Documentation OpenAPI",
          "Déploiement de la démo sur Firebase",
        ],
        skills: "React, Laravel, Git, Développement web, OpenAPI",
      },
      {
        name: "Développement d'un site de vente en ligne (Projet École)",
        period: "Octobre 2020 - Janvier 2021",
        description:
          'Réalisation d\'un site de vente en ligne en utilisant le stack MERN (MongoDB, Express.js, React.js/Redux, Node.js) pour mettre en pratique les compétences acquises au cours Udemy "Master MERN Stack by Building Complete Blog Project".',
        achievements: [
          "Création d'un backend RESTful en Node.js et Express.js",
          "Conception d'une interface utilisateur avec React.js",
          "Gestion des données avec MongoDB et Redux",
        ],
        skills: "MERN Stack, MongoDB, Développement web, JavaScript",
      },
      {
        name: "Développement d'un système de facturation",
        period: "Février 2020 - Mars 2020",
        description:
          "Développement d'une application de facturation pour une entreprise spécialisée en conseil et immigration au Canada.",
        achievements: [
          "Gestion des paiements électroniques via Stripe API",
          "Génération automatique et impression de factures",
        ],
        skills: "Laravel, Stripe API, Bases de données, MySQL",
      },
      {
        name: "Développement d'un site vitrine pour une agence de voyage",
        period: "Septembre 2019 - Octobre 2019",
        description:
          "Création d'un site web vitrine pour une agence de voyage américaine, avec un design optimisé en anglais.",
        achievements: [
          "Utilisation de Bootstrap 4 et Material Design pour l'interface utilisateur",
          "Développement backend avec Laravel 6",
          "Intégration de fonctionnalités dynamiques avec jQuery et AJAX",
        ],
        skills: "Laravel, Bootstrap, AJAX, jQuery",
      },
    ],
  },
};
