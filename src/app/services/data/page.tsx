"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

const aiUseCases = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Data Engineering & Pipelines",
    subtitle: "Avec Apache Airflow, dbt, Spark, Kafka et les services cloud :",
    items: [
      "Conception de pipelines ETL/ELT robustes et scalables",
      "Ingestion de donnees en temps reel et batch processing",
      "Data quality checks et monitoring automatise",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Data Warehousing & Lakehouse",
    subtitle: "Grace a BigQuery, Snowflake, Redshift et Databricks :",
    items: [
      "Architecture data warehouse optimisee pour vos cas d'usage",
      "Modelisation dimensionnelle et star schema",
      "Migration et consolidation de sources de donnees multiples",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Dashboards & Business Intelligence",
    subtitle: "Avec Metabase, Looker Studio, Power BI et Tableau :",
    items: [
      "Tableaux de bord interactifs et self-service pour vos equipes",
      "KPIs en temps reel et alertes automatiques",
      "Reporting automatise avec envoi programme",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Analytics predictif & Data Science",
    subtitle: "Avec Python, R, scikit-learn et les notebooks Jupyter :",
    items: [
      "Modeles predictifs pour anticiper tendances et risques",
      "Segmentation avancee et scoring clients",
      "A/B testing et experimentation data-driven",
    ],
  },
];

const benefitsTop = [
  { number: "10x", label: "plus rapide pour obtenir des insights" },
  { number: "Donnees fiables", label: "et centralisees" },
  { number: "Decisions", label: "basees sur les donnees, pas l'intuition" },
  { number: "Scalable", label: "du startup au grand compte" },
];

const benefitsBottom = [
  { title: "Gouvernance", description: "Donnees tracables, documentees et conformes RGPD" },
  { title: "Temps reel", description: "Monitoring et alertes en continu sur vos KPIs" },
  { title: "Self-service", description: "Vos equipes autonomes pour explorer les donnees" },
];

const whyUs = [
  "Data engineers et data scientists experimentes",
  "Stack moderne et cloud-native (GCP, AWS, Azure)",
  "Approche iterative : POC rapide puis mise a l'echelle",
  "Integration fluide avec vos outils existants",
  "Accompagnement de bout en bout, du besoin a la production",
];

export default function DataPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-950 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <Link href="/services" className="mb-4 inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
              </svg>
              Services
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Data & Analytics{" "}
              <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                a Grande Echelle
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-300">
              Chez SOLDEV, nous transformons vos donnees brutes en avantage concurrentiel grace a des pipelines robustes, des analyses avancees et des dashboards actionnables.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-primary-900">Notre approche</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                La combinaison de nos experts humains et des outils de data engineering modernes nous permet de construire des infrastructures de donnees fiables, scalables et orientees business.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-20">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">Methodologie</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              Comment nous exploitons <span className="text-primary-600">vos donnees</span>
            </h2>
            <p className="mt-4 max-w-3xl text-gray-500">
              Nous utilisons les meilleures technologies du marche : Apache Airflow, dbt, Spark, Kafka, BigQuery, Snowflake, Metabase, Looker Studio, Python, et bien d&apos;autres.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {aiUseCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-primary-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{useCase.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{useCase.subtitle}</p>
                <ul className="mt-4 space-y-2">
                  {useCase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Benefices <span className="text-primary-600">concrets</span> pour nos clients
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitsTop.map((b, i) => (
              <motion.div
                key={b.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center"
              >
                <div className="text-2xl font-bold text-primary-600">{b.number}</div>
                <p className="mt-2 text-sm text-gray-500">{b.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {benefitsBottom.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl border border-gray-100 bg-white p-6"
              >
                <h4 className="font-semibold text-gray-900">{b.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Pourquoi choisir <span className="text-primary-600">SOLDEV</span> pour la data ?
            </h2>
          </AnimatedSection>
          <div className="mt-10 space-y-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all hover:border-primary-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-950 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white">Pret a exploiter le potentiel de vos donnees ?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-300">
              Contactez-nous pour un audit data gratuit et decouvrez comment transformer vos donnees en avantage concurrentiel.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-600"
            >
              Demander un audit data gratuit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
