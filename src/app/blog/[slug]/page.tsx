import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "../data";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-primary-950 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Blog
          </Link>
          <div className="flex items-center gap-3 text-sm text-primary-400">
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-primary-600" />
            <span>{article.readTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4">
            <span className="rounded-full bg-primary-800 px-3 py-1 text-xs font-medium text-primary-300">
              {article.category}
            </span>
          </div>
        </div>
      </section>

      {article.image && (
        <div className="mx-auto max-w-3xl px-6 -mt-0">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>
      )}

      <article className="py-16">
        <div
          className="prose prose-lg prose-gray mx-auto max-w-3xl px-6
            prose-headings:tracking-tight prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-li:text-gray-600
            prose-strong:text-gray-900
            prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="text-xl font-bold text-gray-900">Besoin d&apos;aide sur ce sujet ?</h3>
          <p className="mt-2 text-gray-500">
            SOLDEV peut vous aider a mettre en oeuvre ces strategies dans votre entreprise.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
          >
            Parlons-en
          </Link>
        </div>
      </section>
    </>
  );
}
