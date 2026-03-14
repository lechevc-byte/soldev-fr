"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

const founders = [
  {
    name: "Christophe Le Chevallier",
    role: "Fondateur & CTO",
    description:
      "Expert en technologie et transformation digitale, Christophe dirige la vision technique de SOLDEV. Avec une vaste experience internationale en developpement web, IA et architectures data, il apporte les meilleures pratiques du marche.",
    skills: ["Developpement Web", "Intelligence Artificielle", "Data Engineering", "Next.js", "Architecture Systemes"],
  },
];

const values = [
  {
    title: "Innovation",
    description: "Nous utilisons les technologies les plus recentes, IA et data, pour offrir des solutions d'avant-garde.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "Chaque projet est traite avec la plus grande attention aux details et aux plus hauts standards de qualite.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Pragmatisme",
    description: "Nous privilegions les solutions concretes et mesurables. Pas de buzzwords, que des resultats.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Resultats",
    description: "Focalises sur des metriques concretes et le ROI. Le succes de nos clients est notre succes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="bg-primary-950 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-400">A propos</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              L&apos;expertise technique au service de votre croissance
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-300">
              Nous sommes une entreprise de developpement informatique specialisee en IA et Data, basee en France, passionnee par la creation de solutions technologiques qui font la difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">L&apos;equipe</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
              Le fondateur
            </h2>
          </AnimatedSection>

          <div className="mt-16 mx-auto max-w-2xl">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 lg:p-10"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                    <p className="text-sm font-medium text-primary-600">{founder.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-gray-500">{founder.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">Nos valeurs</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
              Ce qui nous guide
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Travaillons ensemble ?</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Nous avons l&apos;equipe et les outils pour transformer vos idees en solutions concreteset performantes.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-700"
            >
              Demarrer un projet
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
