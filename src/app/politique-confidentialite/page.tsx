export const metadata = { title: "Politique de Confidentialité" };

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-primary-950 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-white">Politique de Confidentialité</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="prose prose-gray mx-auto max-w-3xl px-6">
          <h2>Introduction</h2>
          <p>CLC CONSULTING (SOLDEV) s&apos;engage à protéger la vie privée des visiteurs de son site web. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles, conformément au Règlement Général sur la Protection des Données (RGPD).</p>

          <h2>Données collectées</h2>
          <p>Nous pouvons collecter les données personnelles suivantes :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (si fourni)</li>
            <li>Données de navigation (cookies, adresses IP)</li>
          </ul>

          <h2>Finalité du traitement</h2>
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>Répondre à vos demandes de contact et devis</li>
            <li>Améliorer l&apos;expérience de navigation sur le site</li>
            <li>Envoyer des communications commerciales (avec votre consentement)</li>
            <li>Établir des statistiques de visite</li>
          </ul>

          <h2>Partage des données</h2>
          <p>Nous ne vendons, n&apos;échangeons ni ne transférons vos données personnelles à des tiers sans votre consentement, sauf si nécessaire pour fournir les services demandés ou si la loi l&apos;exige.</p>

          <h2>Sécurité</h2>
          <p>Nous mettons en &oelig;uvre des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.</p>

          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement, portabilité, limitation du traitement et opposition. Vous pouvez exercer ces droits en nous contactant à <a href="mailto:contact@soldev.fr">contact@soldev.fr</a>.</p>

          <h2>Modifications</h2>
          <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.</p>

          <p className="text-sm text-gray-400">Dernière mise à jour : Mars 2026</p>
        </div>
      </section>
    </>
  );
}
