"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  gradient: string;
  image?: string;
  url?: string;
  tags?: string[];
  delay?: number;
}

export default function ProjectCard({
  title,
  category,
  description,
  gradient,
  image,
  url,
  tags,
  delay = 0,
}: ProjectCardProps) {
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <Wrapper
        {...wrapperProps}
        className="group block cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg"
      >
        <div
          className={`relative h-56 overflow-hidden ${gradient}`}
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                className="opacity-40"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-6">
          <span className="text-xs font-medium uppercase tracking-wider text-primary-600">
            {category}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {url && (
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
              Voir le projet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          )}
        </div>
      </Wrapper>
    </motion.div>
  );
}
