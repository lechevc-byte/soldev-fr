import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "Mentions Legales" };

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-primary-950 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-white">Mentions Legales</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="prose prose-gray mx-auto max-w-3xl px-6">
          <h2>Identification</h2>
          <p>Le present site web est edite par la societe CLC CONSULTING.</p>
          <ul>
            <li><strong>Denomination sociale :</strong> CLC CONSULTING</li>
            <li><strong>SIREN :</strong> 878 349 877</li>
            <li><strong>Siege social :</strong> 18 Rue Strauss, 29000 Quimper, France</li>
            <li><strong>Email :</strong> contact@soldev.fr</li>
          </ul>

          <h2>Hebergement</h2>
          <p>Le site est heberge par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Etats-Unis.</p>

          <h2>Propriete Intellectuelle</h2>
          <p>Tous les contenus de ce site (textes, images, graphiques, logos, icones, etc.) sont la propriete exclusive de CLC CONSULTING ou de ses partenaires et sont proteges par les lois de propriete intellectuelle applicables.</p>
          <p>Toute reproduction, representation, modification, publication ou adaptation de tout ou partie des elements du site est interdite, quel que soit le moyen ou le procede utilise, sans autorisation prealable et ecrite de CLC CONSULTING.</p>

          <h2>Responsabilite</h2>
          <p>CLC CONSULTING s&apos;efforce de fournir des informations precises et a jour sur son site. Cependant, elle ne peut garantir l&apos;exactitude, l&apos;exhaustivite ou l&apos;actualite des informations mises a disposition.</p>

          <h2>Contact</h2>
          <p>Pour toute question relative aux presentes mentions legales, vous pouvez nous contacter a <a href="mailto:contact@soldev.fr">contact@soldev.fr</a>.</p>
        </div>
      </section>
    </>
  );
}
