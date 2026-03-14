"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group rounded-2xl border border-gray-100 bg-white p-10 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200/60 hover:border-gray-200"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 text-primary-600 transition-colors group-hover:from-primary-100 group-hover:to-blue-100">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900">{title}</h3>
      <p className="text-base leading-relaxed text-gray-500">{description}</p>
    </motion.div>
  );
}
