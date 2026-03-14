"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

const devServices = [
  { title: "Applications Web Sur Mesure", description: "Sites et applications performants, elegants et optimises pour tous les appareils." },
  { title: "Applications SaaS", description: "Plateformes SaaS completes avec authentification, facturation et API." },
  { title: "APIs & Microservices", description: "Architectures backend scalables, APIs REST/GraphQL et microservices." },
  { title: "Performance & SEO", description: "Optimisation technique pour un referencement et des performances optimaux." },
];

const iaServices = [
  { title: "Chatbots & Assistants IA", description: "Agents conversationnels intelligents integres a vos systemes existants." },
  { title: "Modeles Predictifs", description: "Machine learning et deep learning pour anticiper tendances et comportements." },
  { title: "Vision par Ordinateur", description: "Analyse d'images, detection d'objets et classification automatique." },
  { title: "Traitement du Langage", description: "NLP, extraction d'informations, resume automatique et analyse de sentiments." },
];

const dataServices = [
  { title: "Data Engineering", description: "Pipelines de donnees robustes, ETL/ELT et orchestration avec Airflow, dbt." },
  { title: "Data Warehousing", description: "Conception et gestion de data warehouses (BigQuery, Snowflake, Redshift)." },
  { title: "Dashboards & BI", description: "Tableaux de bord interactifs et reporting automatise avec des insights actionnables." },
  { title: "Analytics Predictif", description: "Modeles statistiques et ML pour des decisions basees sur les donnees." },
];

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
      <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
      <path d="M7 14h10" />
      <path d="M9 18h6" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

interface ServiceSectionProps {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  services: { title: string; description: string }[];
  icon: React.ReactNode;
  bgClass?: string;
  detailHref: string;
}

function ServiceSection({ id, badge, title, highlight, description, services, icon, bgClass = "", detailHref }: ServiceSectionProps) {
  return (
    <section id={id} className={`py-24 ${bgClass}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">{badge}</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            {title} <span className="text-primary-600">{highlight}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-500">{description}</p>
        </AnimatedSection>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} icon={icon} title={s.title} description={s.description} delay={i * 0.1} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href={detailHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            En savoir plus
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-950 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-400">Nos expertises</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Developpement, IA & Data
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-300">
              De la conception a la mise en production, nous proposons des solutions technologiques completes pour les entreprises ambitieuses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServiceSection
        id="dev"
        badge="Developpement"
        title="Des applications qui"
        highlight="performent"
        description="Nous concevons des solutions web modernes et scalables, des sites vitrines aux plateformes SaaS complexes. L'IA optimise l'experience utilisateur et la performance."
        services={devServices}
        icon={<CodeIcon />}
        detailHref="/services/developpement-web"
      />

      <ServiceSection
        id="ia"
        badge="Intelligence Artificielle"
        title="L'IA qui"
        highlight="transforme"
        description="Nous concevons des solutions d'intelligence artificielle sur mesure pour automatiser, predire et optimiser vos processus metier."
        services={iaServices}
        icon={<BrainIcon />}
        bgClass="bg-gray-50"
        detailHref="/services/intelligence-artificielle"
      />

      <ServiceSection
        id="data"
        badge="Data"
        title="Des donnees qui"
        highlight="parlent"
        description="Nous construisons des infrastructures data solides et des analyses avancees pour transformer vos donnees brutes en avantage concurrentiel."
        services={dataServices}
        icon={<ChartIcon />}
        detailHref="/services/data"
      />

      {/* CTA */}
      <section className="bg-primary-950 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white">Besoin d&apos;une solution sur mesure ?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-300">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins et recevoir une proposition adaptee.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-600"
            >
              Demander un devis gratuit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
