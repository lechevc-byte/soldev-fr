import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SOLDEV - Développement Web, Design & Marketing Digital | France",
    template: "%s | SOLDEV France",
  },
  description:
    "Agence digitale en France. Développement web, design, marketing digital et intelligence artificielle pour booster votre business.",
  keywords: ["développement web", "design", "marketing digital", "France", "agence digitale", "IA", "intelligence artificielle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
