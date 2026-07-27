import type { Experience, TranslatedContent } from "@/types";

interface ExperienceContent {
  title: string;
  jobs: Experience[];
}

export const experienceContent: TranslatedContent<ExperienceContent> = {
  en: {
    title: "Work Experience",
    jobs: [
      {
        title: "Software Engineer – Open Source Terraform Provider",
        company: "INETUM (Orange Business)",
        location: "Rennes, France",
        period: "June 2026 - Present",
        description:
          "Technical owner of the Cloud Avenue open source Terraform provider, published on the Terraform Registry. Driving the project's evolution to support new platform capabilities: developing Terraform resources and data sources, improving code quality, fixing bugs, and evolving the associated Go SDK. Collaborating with Product and API teams to design Terraform interfaces consistent with platform services. Contributing to architecture, code reviews, testing, documentation, and the lifecycle of an open source project.",
        skills:
          "Go, Terraform, HCL, OpenAPI, AI Agentic Development, Git, GitHub Actions, CI/CD, Open Source",
        achievementGroups: [
          {
            title: "Cloud Avenue Terraform Provider",
            items: [
              "Took over technical ownership of the Cloud Avenue Terraform provider, published on the Terraform Registry for platform customers.",
              "Ongoing development, maintenance, and improvement: Terraform resources and data sources, Go SDK, releases, and documentation.",
              "GitHub triage and support: user issues, feature requests, and guidance for external contributors.",
            ],
          },
          {
            title: "Open Source Terraform Plugins",
            items: [
              "Maintenance and evolution of 4 cross-provider Terraform plugins in the GitHub organization, used by external organizations including Microsoft.",
              "Open source community support: code reviews, issue triage, and contributor guidance.",
            ],
          },
        ],
      },
      {
        title: "Backend Engineer – Data Supply Chain",
        company: "Univers (QoS Energy)",
        location: "La Chapelle-sur-Erdre, France",
        period: "November 2023 - March 2026",
        description:
          "Go and Python backend engineer on a SaaS platform monitoring renewable energy power plants. Design and operation of high-throughput data ingestion pipelines, event-driven architectures, and resilient connectors for heterogeneous sources. On-call duty, incident resolution, and observability.",
        skills:
          "Go, Python, Ruby, RabbitMQ, NATS, PostgreSQL, Kubernetes, Azure, GitOps, Prometheus, Grafana",
        achievementGroups: [
          {
            title: "Architecture & Data Ingestion",
            items: [
              "Development and refactoring of Go and Python microservices for ingesting millions of metrics per minute, in a GitOps-managed Kubernetes environment.",
              "Implementation and extension of event-driven architectures (RabbitMQ, NATS) for ingestion and asynchronous processing.",
              "Design of resilient pipelines handling network issues and source instability: distributed error handling, retry, backfilling and manual reload.",
            ],
          },
          {
            title: "Integration & Connectors",
            items: [
              "Development of connectors for heterogeneous sources: SCADA, REST, FTP, SQL databases.",
              "Active participation in architecture decisions: technology evaluation (NATS, Redis), data modeling and source API rate limiting management.",
              "Rewriting Go services to Python to align with Bazefield stack constraints.",
            ],
          },
          {
            title: "Scalability & Resilience",
            items: [
              "Service instrumentation with Prometheus and Grafana dashboard setup for operational monitoring.",
              "On-call rotation (1 week/6): critical incident resolution and L3 support for client technical operations.",
            ],
          },
        ],
      },
      {
        title: "Software Engineer",
        company: "NumoData (formerly EXFO Solutions)",
        location: "Rennes, France",
        period: "October 2021 - October 2023",
        description:
          "Backend engineer on the ASA platform, a telecom network metrics analysis and visualization system processing millions of metrics per minute. Built Go services, analytical query pipelines, and owned a usage monitoring feature end-to-end.",
        skills:
          "Go, Python, Kafka, Apache Druid, AWS, Prometheus, Grafana, Helm, Kubernetes",
        achievementGroups: [
          {
            title: "Backend Development",
            items: [
              "Development of Go backend services for a network monitoring platform processing millions of metrics per minute.",
              "Design of analytical queries (SQL, Druid): aggregations, multidimensional queries, optimization via indexing and caching.",
            ],
          },
          {
            title: "Smart Usage Monitoring — Technical Ownership",
            items: [
              "End-to-end design and development of a dashboard usage analytics service: most viewed metrics, highest-volume dimensions, detection of underutilized data.",
              "Results exposed via REST API, Prometheus instrumentation and Grafana dashboards, used for cache optimization and storage cost reduction.",
            ],
          },
          {
            title: "Performance & Infrastructure",
            items: [
              "Load testing and correlation analysis of volume/resources (CPU, RAM, latency) for client sizing.",
              "Development of an internal tool for automatic Kubernetes (Helm) configuration generation based on client sizing results.",
            ],
          },
        ],
      },
      {
        title: "Web Developer – Internship",
        company: "Resalocal",
        location: "Talloires-Montmin, France",
        period: "May 2021 - August 2021",
        description:
          "Developed an ingestion pipeline from the Apidae tourism database to the Akeneo PIM, handling bidirectional synchronization and media management for a white-label cartographic SaaS platform.",
        skills:
          "PHP, Laravel, Docker, Kubernetes, Akeneo, Cloudinary, REST API",
        achievementGroups: [
          {
            title: "",
            items: [
              "Development of an ingestion pipeline from the Apidae tourism database to the Akeneo PIM: import of POIs, events and activities.",
              "Bidirectional synchronization: returning enriched data to Apidae after processing.",
              "POI media management via Cloudinary API: image upload and transformation.",
              "Handling ingestion constraints: pagination, rate limiting, and preservation of existing PIM data.",
            ],
          },
        ],
      },
      {
        title: "Freelance Full-Stack Developer",
        company: "Self-Employed",
        location: "Côte d'Ivoire (Remote)",
        period: "January 2019 - December 2020",
        description:
          "Delivered end-to-end web solutions for diverse clients including e-commerce platforms, business management systems, and custom web applications. Designed RESTful APIs, implemented secure authentication systems, and integrated third-party services. Managed full project lifecycle from requirements gathering to deployment and maintenance.",
        skills:
          "Laravel, Spring Boot, Java, PHP, MySQL, REST APIs, Git, Web Development",
      },
      {
        title: "Software Developer Intern",
        company: "OK-SERVICE",
        location: "Bouaké, Côte d'Ivoire",
        period: "June 2019 - December 2019",
        description:
          "Designed and developed a comprehensive inventory and sales management system for a multi-service retail company. Conducted requirements analysis, created database schema, and built a full-stack web application using Laravel and Vue.js. Implemented features for stock tracking, sales reporting, and invoice generation. Successfully deployed the application to Firebase, reducing manual processing time by 60%.",
        skills:
          "Laravel, Vue.js, MySQL, Bootstrap, Firebase, Full-Stack Development",
      },
      {
        title: "Web Developer – Internship",
        company: "ABOUAKE.NET",
        location: "Bouaké, Côte d'Ivoire",
        period: "June 2018 - August 2018",
        description:
          "2nd year school internship: Development of a web application for laundry management with order tracking, client management, and invoicing.",
        skills: "AngularJS, Bootstrap, PHP, MySQL, Software Development",
      },
    ],
  },
  fr: {
    title: "Expériences professionnelles",
    jobs: [
      {
        title: "Ingénieur Logiciel – Provider Terraform Open Source",
        company: "INETUM (Orange Business)",
        location: "Rennes, France",
        period: "Juin 2026 - Présent",
        description:
          "Responsable technique du provider Terraform open source Cloud Avenue, publié sur le Terraform Registry. Pilotage de l'évolution du projet pour accompagner les nouvelles fonctionnalités de la plateforme : développement de ressources et data sources Terraform, amélioration continue du code, correction de bugs et évolution du SDK Go associé. Collaboration avec les équipes Produit et API pour concevoir des interfaces Terraform cohérentes avec les services de la plateforme. Contribution à l'architecture, aux revues de code, aux tests, à la documentation et à la vie d'un projet open source.",
        skills:
          "Go, Terraform, HCL, OpenAPI, Développement IA Agentic, Git, GitHub Actions, CI/CD, Open Source",
        achievementGroups: [
          {
            title: "Provider Terraform Cloud Avenue",
            items: [
              "Reprise du technical ownership du provider Terraform Cloud Avenue, publié sur le Terraform Registry pour les clients de la plateforme.",
              "Développement, maintenance et amélioration continue : ressources et data sources Terraform, SDK Go, releases et documentation.",
              "Triage et support GitHub : issues utilisateurs, demandes de fonctionnalités, accompagnement des contributeurs externes.",
            ],
          },
          {
            title: "Plugins Terraform Open Source",
            items: [
              "Maintenance et évolution de 4 plugins Terraform multi-providers dans l'organisation GitHub, utilisés par des acteurs externes dont Microsoft.",
              "Accompagnement de la communauté open source : revues de code, triage d'issues et guidance des contributeurs.",
            ],
          },
        ],
      },
      {
        title: "Ingénieur Backend – Data Supply Chain",
        company: "Univers (QoS Energy)",
        location: "La Chapelle-sur-Erdre, France",
        period: "Novembre 2023 - Mars 2026",
        description:
          "Ingénieur backend Go et Python sur une plateforme SaaS de supervision de centrales d'énergies renouvelables. Conception et exploitation de pipelines d'ingestion à forte volumétrie, architectures event-driven et connecteurs résilients pour sources hétérogènes. Astreinte opérationnelle, résolution d'incidents et observabilité.",
        skills:
          "Go, Python, Ruby, RabbitMQ, NATS, PostgreSQL, Kubernetes, Azure, GitOps, Prometheus, Grafana",
        achievementGroups: [
          {
            title: "Architecture & Ingestion de Données",
            items: [
              "Développement et refonte de microservices Go et Python pour l'ingestion de millions de métriques par minute, dans un environnement Kubernetes géré en GitOps.",
              "Mise en place et extension des architectures event-driven (RabbitMQ, NATS) pour l'ingestion et le traitement asynchrone.",
              "Conception de pipelines résilients face aux aléas réseau et à l'instabilité des sources : gestion d'erreurs distribuées, retry, backfilling et rechargement manuel.",
            ],
          },
          {
            title: "Intégration & Connecteurs",
            items: [
              "Développement de connecteurs pour sources hétérogènes : SCADA, REST, FTP, bases SQL.",
              "Participation active aux décisions d'architecture : évaluation de technologies (NATS, Redis), modélisation des données et gestion du rate limiting des APIs sources.",
              "Réécriture de services Go en Python pour s'aligner sur les contraintes stack de Bazefield.",
            ],
          },
          {
            title: "Scalabilité & Résilience",
            items: [
              "Instrumentation de services avec Prometheus et mise en place de dashboards Grafana pour le suivi opérationnel.",
              "Astreinte opérationnelle (1 sem./6) : résolution d'incidents critiques et support L3 pour les opérations techniques clients.",
            ],
          },
        ],
      },
      {
        title: "Ingénieur Logiciel",
        company: "NumoData (ex-EXFO Solutions)",
        location: "Rennes, France",
        period: "Octobre 2021 - Octobre 2023",
        description:
          "Ingénieur backend sur la plateforme ASA, système d'analyse et visualisation de métriques réseau télécom traitant des millions de métriques par minute. Développement de services Go, pipelines de requêtes analytiques, et ownership technique d'un service de monitoring d'usage.",
        skills:
          "Go, Python, Kafka, Apache Druid, AWS, Prometheus, Grafana, Helm, Kubernetes",
        achievementGroups: [
          {
            title: "Développement Backend",
            items: [
              "Développement de services backend Go pour une plateforme de supervision réseau traitant des millions de métriques par minute.",
              "Conception de requêtes analytiques (SQL, Druid) : agrégations, requêtes multidimensionnelles, optimisation via indexation et cache.",
            ],
          },
          {
            title: "Smart Monitoring d'Usage — Ownership Technique",
            items: [
              "Conception et développement end-to-end d'un service d'analyse d'usage des dashboards : métriques les plus consultées, dimensions les plus volumineuses, détection des données sous-utilisées.",
              "Exposition des résultats via API REST, instrumentation Prometheus et dashboards Grafana, exploitation pour l'optimisation du cache et la réduction des coûts de stockage.",
            ],
          },
          {
            title: "Performance & Infrastructure",
            items: [
              "Conduite de tests de charge et analyse de corrélation volumétrie/ressources (CPU, RAM, latence) pour le dimensionnement client.",
              "Développement d'un outil interne de génération automatique de configuration Kubernetes (Helm) à partir des résultats de dimensionnement client.",
            ],
          },
        ],
      },
      {
        title: "Développeur Web – Stage",
        company: "Resalocal",
        location: "Talloires-Montmin, France",
        period: "Mai 2021 - Août 2021",
        description:
          "Développement d'un pipeline d'ingestion depuis la base touristique Apidae vers le PIM Akeneo, avec synchronisation bidirectionnelle et gestion des médias pour une plateforme cartographique SaaS marque blanche.",
        skills:
          "PHP, Laravel, Docker, Kubernetes, Akeneo, Cloudinary, API REST",
        achievementGroups: [
          {
            title: "",
            items: [
              "Développement d'un pipeline d'ingestion depuis la base touristique Apidae vers le PIM Akeneo : import de POIs, événements et activités.",
              "Synchronisation bidirectionnelle : restitution des données enrichies vers Apidae après traitement.",
              "Gestion des médias associés aux POIs via l'API Cloudinary : upload et transformation d'images.",
              "Gestion des contraintes d'ingestion : pagination, rate limiting, et préservation des données existantes dans le PIM.",
            ],
          },
        ],
      },
      {
        title: "Développeur Full-Stack Freelance",
        company: "Indépendant",
        location: "Côte d'Ivoire (à distance)",
        period: "Janvier 2019 - Décembre 2020",
        description:
          "Livraison de solutions web complètes pour divers clients incluant des plateformes e-commerce, des systèmes de gestion d'entreprise et des applications web personnalisées. Conception d'APIs RESTful, implémentation de systèmes d'authentification sécurisés, et intégration de services tiers. Gestion du cycle de vie complet du projet, de la collecte des exigences au déploiement et à la maintenance.",
        skills:
          "Laravel, Spring Boot, Java, PHP, MySQL, APIs REST, Git, Développement Web",
      },
      {
        title: "Développeur Logiciel Stagiaire",
        company: "OK-SERVICE",
        location: "Bouaké, Côte d'Ivoire",
        period: "Juin 2019 - Décembre 2019",
        description:
          "Conception et développement d'un système complet de gestion des stocks et des ventes pour une entreprise de vente au détail multiservices. Réalisation de l'analyse des besoins, création du schéma de base de données, et construction d'une application web full-stack avec Laravel et Vue.js. Implémentation de fonctionnalités pour le suivi des stocks, les rapports de ventes et la génération de factures. Déploiement réussi de l'application sur Firebase, réduisant le temps de traitement manuel de 60%.",
        skills:
          "Laravel, Vue.js, MySQL, Bootstrap, Firebase, Développement Full-Stack",
      },
      {
        title: "Développeur Web – Stage",
        company: "ABOUAKE.NET",
        location: "Bouaké, Côte d'Ivoire",
        period: "Juin 2018 - Août 2018",
        description:
          "Stage de 2e année : Développement d'une application web de gestion de pressing avec système de suivi des commandes, gestion clientèle et facturation.",
        skills: "AngularJS, Bootstrap, PHP, MySQL, Développement Web",
      },
    ],
  },
};
