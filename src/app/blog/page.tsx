"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { articles } from "./data";

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary-950 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-400">Blog</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              Blog & Articles
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-300">
              Nos insights sur l&apos;IA, la data, le développement web et les tendances tech.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white transition-all hover:border-primary-200 hover:shadow-lg"
              >
                <Link href={`/blog/${article.slug}`} className="flex flex-1 flex-col">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-gray-300"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{article.date}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-300" />
                      <span>{article.readTime}</span>
                    </div>
                    <span className="mt-3 text-xs font-medium uppercase tracking-wider text-primary-600">
                      {article.category}
                    </span>
                    <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                      {article.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                        Lire la suite
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
