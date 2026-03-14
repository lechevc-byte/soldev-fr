"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "Christophe Le Chevallier",
    role: "Cofondateur",
    photo: "/christophe.jpg",
    linkedin: "https://www.linkedin.com/in/christophe-le-chevallier-a69b8037/",
    description:
      "Associé et cofondateur de SOLDEV, Christophe apporte sa vision stratégique et son expertise pour accompagner la croissance de l'entreprise et de ses clients.",
    skills: ["Stratégie", "Business Development", "Gestion de Projets", "Innovation"],
  },
  {
    name: "Harlow Fres",
    role: "Cofondateur & CTO",
    photo: "/harlow-fres.jpg",
    linkedin: "https://www.linkedin.com/in/harlow-fres/",
    description:
      "Expert en technologie et transformation digitale, Harlow dirige la vision technique de SOLDEV. Avec une vaste expérience internationale en développement web, IA et architectures data, il apporte les meilleures pratiques du marché.",
    skills: ["Développement Web", "Intelligence Artificielle", "Data Engineering", "Next.js", "Architecture Systèmes"],
  },
];

const values = [
  {
    title: "Innovation",
    description: "Nous utilisons les technologies les plus récentes, IA et data, pour offrir des solutions d'avant-garde.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "Chaque projet est traité avec la plus grande attention aux détails et aux plus hauts standards de qualité.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Pragmatisme",
    description: "Nous privilégions les solutions concrètes et mesurables. Pas de buzzwords, que des résultats.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Résultats",
    description: "Focalisés sur des métriques concrètes et le ROI. Le succès de nos clients est notre succès.",
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
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-400">À propos</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              L&apos;expertise technique au service de votre croissance
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-300">
              Nous sommes une entreprise de développement informatique spécialisée en IA et Data, basée en France, passionnée par la création de solutions technologiques qui font la différence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">L&apos;équipe</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
              Les fondateurs
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
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
                  {founder.photo ? (
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                      <Image
                        src={founder.photo}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  )}
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
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
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
              Nous avons l&apos;équipe et les outils pour transformer vos idées en solutions concrètes et performantes.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-700"
            >
              Démarrer un projet
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
