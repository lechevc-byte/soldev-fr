import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "Mentions Légales" };

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-primary-950 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-white">Mentions Légales</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="prose prose-gray mx-auto max-w-3xl px-6">
          <h2>Identification</h2>
          <p>Le présent site web est édité par la société CLC CONSULTING.</p>
          <ul>
            <li><strong>Dénomination sociale :</strong> CLC CONSULTING</li>
            <li><strong>SIREN :</strong> 878 349 877</li>
            <li><strong>Siège social :</strong> 18 Rue Strauss, 29000 Quimper, France</li>
            <li><strong>Email :</strong> contact@soldev.fr</li>
          </ul>

          <h2>Hébergement</h2>
          <p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>

          <h2>Propriété Intellectuelle</h2>
          <p>Tous les contenus de ce site (textes, images, graphiques, logos, icônes, etc.) sont la propriété exclusive de CLC CONSULTING ou de ses partenaires et sont protégés par les lois de propriété intellectuelle applicables.</p>
          <p>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite, quel que soit le moyen ou le procédé utilisé, sans autorisation préalable et écrite de CLC CONSULTING.</p>

          <h2>Responsabilité</h2>
          <p>CLC CONSULTING s&apos;efforce de fournir des informations précises et à jour sur son site. Cependant, elle ne peut garantir l&apos;exactitude, l&apos;exhaustivité ou l&apos;actualité des informations mises à disposition.</p>

          <h2>Contact</h2>
          <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à <a href="mailto:contact@soldev.fr">contact@soldev.fr</a>.</p>
        </div>
      </section>
    </>
  );
}
