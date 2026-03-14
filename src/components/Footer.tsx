import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { href: "/services/developpement-web", label: "Developpement Web" },
    { href: "/services/intelligence-artificielle", label: "Intelligence Artificielle" },
    { href: "/services/data", label: "Data & Analytics" },
  ],
  entreprise: [
    { href: "/a-propos", label: "A propos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions legales" },
    { href: "/politique-cookies", label: "Politique de cookies" },
    { href: "/politique-confidentialite", label: "Politique de confidentialite" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center pr-3">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="SOLDEV"
                width={300}
                height={150}
                className="w-full max-w-[300px] h-auto object-contain"
              />
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Services</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Entreprise</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SOLDEV. Tous droits reserves.
        </div>
      </div>
    </footer>
  );
}
