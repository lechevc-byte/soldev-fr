"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

const aiUseCases = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Assistance au code par IA",
    subtitle: "Nous utilisons des outils comme GitHub Copilot, Claude Code et Cursor pour :",
    items: [
      "Generation automatique de blocs de code et refactoring intelligent",
      "Suggestions contextuelles selon le langage et l'architecture",
      "Correction immediate d'erreurs et d'incoherences",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Optimisation du temps de developpement",
    subtitle: "Grace a Claude, ChatGPT et des outils d'automatisation CI/CD bases sur l'IA :",
    items: [
      "Creation plus rapide de prototypes et MVP",
      "Automatisation des taches repetitives (tests, deployments)",
      "Generation de documentation technique en temps reel",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Tests et debugging acceleres",
    subtitle: "Avec des outils comme SonarQube IA, Snyk et CodeQL :",
    items: [
      "Detection proactive d'anomalies et de vulnerabilites",
      "Scenarios de test assistes par IA",
      "Analyse en direct des performances du code",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Documentation et mises a jour automatiques",
    subtitle: "Avec l'appui de Claude, Notion AI et des outils de documentation automatisee :",
    items: [
      "Documentation claire generee a partir du code",
      "Notes techniques automatisees pour chaque release",
      "Uniformite des livrables au sein de l'equipe",
    ],
  },
];

const benefits = [
  { number: "30-50%", label: "de gain de temps sur le developpement" },
  { number: "Moins d'erreurs", label: "et meilleure maintenabilite" },
  { number: "Livraisons rapides", label: "sans sacrifier la qualite" },
  { number: "Couts reduits", label: "de developpement" },
];

const whyUs = [
  "Developpeurs humains augmentes par l'IA",
  "Delais reduits sans perte de qualite",
  "Approche pragmatique et orientee resultats",
  "Innovation continue adaptee a vos besoins",
];

export default function DeveloppementWebPage() {
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
              Developpement Web{" "}
              <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                Augmente par l&apos;IA
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-300">
              Chez SOLDEV, nous avons fait de l&apos;intelligence artificielle un veritable levier de performance pour le developpement informatique.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-primary-900">Notre mission</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Proposer des solutions plus rapides, fiables et rentables en combinant l&apos;expertise humaine avec les technologies avancees d&apos;IA.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-20">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">Methodologie</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              Comment nous utilisons l&apos;IA <span className="text-primary-600">au quotidien</span>
            </h2>
            <p className="mt-4 max-w-3xl text-gray-500">
              L&apos;IA est integree a chaque etape de notre production, grace a des outils comme GitHub Copilot, Claude Code, Cursor, SonarQube IA, et bien d&apos;autres.
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
            {benefits.map((b, i) => (
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
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Pourquoi travailler avec <span className="text-primary-600">SOLDEV</span> ?
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
            <h2 className="text-3xl font-bold text-white">Pret a lancer votre projet web ?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-300">
              Contactez-nous pour discuter de vos besoins et recevoir une proposition personnalisee.
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
