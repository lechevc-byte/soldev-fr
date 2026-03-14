"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

const aiUseCases = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Chatbots & Assistants intelligents",
    subtitle: "Avec les APIs OpenAI, Claude (Anthropic) et Mistral :",
    items: [
      "Agents conversationnels connectes a vos bases de donnees",
      "Support client automatise 24/7 avec escalade intelligente",
      "Assistants internes pour accelerer la productivite des equipes",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Modeles predictifs & Machine Learning",
    subtitle: "Grace a Python, scikit-learn, TensorFlow, PyTorch et Hugging Face :",
    items: [
      "Prevision de la demande, du churn et des tendances marche",
      "Scoring et segmentation clients automatiques",
      "Optimisation des prix et recommandations personnalisees",
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4m10-10h-4m-12 0H2" />
        <path d="m16.2 7.8 2.8-2.8m-14 14 2.8-2.8m0-8.4L4.8 4.8m14 14-2.8-2.8" />
      </svg>
    ),
    title: "Vision par ordinateur",
    subtitle: "Avec OpenCV, YOLO, Detectron2 et les modeles multimodaux :",
    items: [
      "Detection et classification d'objets en temps reel",
      "Analyse d'images medicales, industrielles ou retail",
      "OCR intelligent et extraction de donnees depuis des documents",
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
    title: "Traitement du langage naturel (NLP)",
    subtitle: "Avec les LLMs, spaCy, Hugging Face Transformers :",
    items: [
      "Extraction d'informations et analyse de sentiments",
      "Resume automatique de documents longs",
      "Classification et routage intelligent de tickets/emails",
    ],
  },
];

const benefits = [
  { number: "40-70%", label: "de reduction des taches manuelles" },
  { number: "+95%", label: "de precision sur les predictions" },
  { number: "ROI rapide", label: "visible des les premiers mois" },
  { number: "24/7", label: "disponibilite des systemes IA" },
];

const whyUs = [
  "Expertise pointue en LLMs, ML et data science",
  "Solutions sur mesure, pas de templates generiques",
  "Integration fluide dans vos systemes existants",
  "Accompagnement de la conception au deploiement en production",
  "Veille continue sur les dernieres avancees IA",
];

export default function IntelligenceArtificiellePage() {
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
              Intelligence Artificielle{" "}
              <span className="bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                Sur Mesure
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-300">
              Chez SOLDEV, nous concevons et deployons des solutions d&apos;IA qui resolvent des problemes reels et creent de la valeur mesurable pour votre entreprise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl border border-accent-100 bg-accent-50 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-accent-900">Notre approche</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Nous ne vendons pas de l&apos;IA pour le buzz. Chaque solution est concue pour resoudre un probleme metier precis, avec un ROI mesurable et une integration fluide dans vos systemes existants.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-20">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">Nos solutions</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              L&apos;IA appliquee <span className="text-primary-600">a votre metier</span>
            </h2>
            <p className="mt-4 max-w-3xl text-gray-500">
              Nous maitrisons les principales technologies IA du marche : OpenAI GPT, Claude (Anthropic), Mistral, Llama, LangChain, LlamaIndex, scikit-learn, TensorFlow, PyTorch et bien d&apos;autres.
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
                className="rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-accent-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{useCase.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{useCase.subtitle}</p>
                <ul className="mt-4 space-y-2">
                  {useCase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 shrink-0 text-accent-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
              Benefices <span className="text-accent-600">concrets</span> pour nos clients
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
                <div className="text-2xl font-bold text-accent-600">{b.number}</div>
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
              Pourquoi choisir <span className="text-accent-600">SOLDEV</span> pour l&apos;IA ?
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
                className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all hover:border-accent-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500 text-white">
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
            <h2 className="text-3xl font-bold text-white">Pret a integrer l&apos;IA dans votre business ?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-300">
              Contactez-nous pour un audit gratuit de vos cas d&apos;usage IA et recevez une proposition personnalisee.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-600"
            >
              Demander un audit IA gratuit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
