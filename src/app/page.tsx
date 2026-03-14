"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

import { FloatingShapesHero, FloatingShapesLight } from "@/components/FloatingShapes";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Developpement Web & Apps",
    description: "Applications web et mobiles performantes, sur mesure. De la landing page a la plateforme SaaS complexe, avec un focus performance et scalabilite.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
        <path d="M7 14h10" />
        <path d="M9 18h6" />
      </svg>
    ),
    title: "Intelligence Artificielle",
    description: "Solutions IA sur mesure : chatbots, automatisation, vision par ordinateur, NLP et modeles predictifs pour transformer vos processus metier.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Data & Analytics",
    description: "Pipelines de donnees, data warehouses, dashboards et analyses predictives. Transformez vos donnees brutes en decisions strategiques.",
  },
];


export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-20">
        <FloatingShapesHero />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-50 to-accent-50 px-5 py-2.5 text-sm font-medium text-primary-700">
              <span className="h-2 w-2 rounded-full bg-accent-400" />
              Developpement &times; IA &times; Data
            </div>

            <h1 className="text-5xl font-light tracking-tight text-gray-900 lg:text-7xl">
              Experts en{" "}
              <span className="font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                IA & Data
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-500">
              Nous concevons des solutions intelligentes qui exploitent la puissance de
              l&apos;intelligence artificielle et de la data pour accelerer votre croissance.
              En France et a l&apos;international.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-600/30"
              >
                Demarrer un projet
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/services/developpement-web"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-8 py-4 text-sm font-semibold text-gray-600 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
              >
                Nos expertises
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-24 grid max-w-3xl grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {[
              { number: "50+", label: "Projets livres" },
              { number: "98%", label: "Clients satisfaits" },
              { number: "5M+", label: "Donnees traitees/jour" },
              { number: "24h", label: "Temps de reponse" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-28 lg:py-36">
        <FloatingShapesLight />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-50 to-blue-50 px-4 py-2 text-sm font-semibold text-primary-600">
              Nos expertises
            </div>
            <h2 className="text-4xl font-light tracking-tight text-gray-900 lg:text-5xl">
              Solutions{" "}
              <span className="font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                intelligentes
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 leading-relaxed">
              Du developpement sur mesure a l&apos;integration IA, nous couvrons l&apos;ensemble
              de vos besoins technologiques avec une expertise de pointe.
            </p>
          </AnimatedSection>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.15} />
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              Decouvrir toutes nos expertises
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* IA Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-50 to-amber-50 px-4 py-2 text-sm font-semibold text-accent-600">
                Intelligence Artificielle & Data
              </div>
              <h2 className="text-4xl font-light tracking-tight text-gray-900 lg:text-5xl">
                L&apos;IA au service de{" "}
                <span className="font-bold bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
                  votre business
                </span>
              </h2>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Nous ne parlons pas d&apos;IA par tendance. Nous concevons et deployons
                des solutions concretes qui transforment vos processus et creent
                de la valeur mesurable.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Modeles predictifs et machine learning sur mesure",
                  "Automatisation intelligente des processus metier",
                  "Pipelines data robustes et scalables",
                  "Integration d'APIs IA (OpenAI, Claude, Mistral)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100">
                      <svg className="h-3 w-3 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="animate-float absolute -top-6 -right-6 h-20 w-20 rounded-2xl bg-accent-100/60 blur-sm" />
                <div className="animate-float-reverse animation-delay-2000 absolute -bottom-4 -left-4 h-14 w-14 rounded-full bg-primary-100/60 blur-sm" />

                <div className="relative rounded-2xl bg-white p-10 shadow-xl shadow-gray-200/50 border border-gray-100">
                  <div className="space-y-8">
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-500">
                          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">3x</div>
                        <div className="text-sm text-gray-400">plus rapide avec l&apos;IA</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500">
                          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">+150%</div>
                        <div className="text-sm text-gray-400">precision des predictions</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-500">
                          <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">-40%</div>
                        <div className="text-sm text-gray-400">couts operationnels</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-light tracking-tight text-gray-900 lg:text-5xl">
              Une approche{" "}
              <span className="font-bold">humaine</span>, amplifiee par la technologie
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 leading-relaxed">
              L&apos;IA ne remplace pas l&apos;expertise humaine, elle la demultiplie. Notre equipe est au coeur de chaque projet, utilisant l&apos;IA et la data comme des outils puissants au service de vos ambitions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-float absolute top-[20%] left-[5%] h-32 w-32 rounded-full bg-primary-50 opacity-60" />
          <div className="animate-float-reverse animation-delay-3000 absolute bottom-[15%] right-[8%] h-24 w-24 rounded-full bg-accent-50 opacity-60" />
          <div className="animate-float-slow animation-delay-1000 absolute top-[60%] left-[15%] h-6 w-6 rounded-full bg-primary-200/40" />
          <div className="animate-pulse-soft animation-delay-2000 absolute top-[30%] right-[20%] h-4 w-4 rounded-full bg-accent-200/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-light tracking-tight text-gray-900 lg:text-5xl">
              Pret a accelerer votre{" "}
              <span className="font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                transformation
              </span>
              ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-500">
              Parlons de vos objectifs et decouvrons ensemble comment
              l&apos;IA et la data peuvent transformer votre activite. Premier echange gratuit.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-600/30"
              >
                Contactez-nous
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
