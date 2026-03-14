export const metadata = { title: "Politique de Confidentialite" };

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-primary-950 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-white">Politique de Confidentialite</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="prose prose-gray mx-auto max-w-3xl px-6">
          <h2>Introduction</h2>
          <p>SOLDEV s&apos;engage a proteger la vie privee des visiteurs de son site web. Cette politique de confidentialite explique comment nous collectons, utilisons et protegeons vos informations personnelles, conformement au Reglement General sur la Protection des Donnees (RGPD).</p>

          <h2>Donnees collectees</h2>
          <p>Nous pouvons collecter les donnees personnelles suivantes :</p>
          <ul>
            <li>Nom et prenom</li>
            <li>Adresse email</li>
            <li>Numero de telephone (si fourni)</li>
            <li>Donnees de navigation (cookies, adresses IP)</li>
          </ul>

          <h2>Finalite du traitement</h2>
          <p>Les donnees collectees sont utilisees pour :</p>
          <ul>
            <li>Repondre a vos demandes de contact et devis</li>
            <li>Ameliorer l&apos;experience de navigation sur le site</li>
            <li>Envoyer des communications commerciales (avec votre consentement)</li>
            <li>Etablir des statistiques de visite</li>
          </ul>

          <h2>Partage des donnees</h2>
          <p>Nous ne vendons, n&apos;echangeons ni ne transferons vos donnees personnelles a des tiers sans votre consentement, sauf si necessaire pour fournir les services demandes ou si la loi l&apos;exige.</p>

          <h2>Securite</h2>
          <p>Nous mettons en oeuvre des mesures de securite techniques et organisationnelles pour proteger vos donnees personnelles contre tout acces non autorise, modification, divulgation ou destruction.</p>

          <h2>Vos droits</h2>
          <p>Conformement au RGPD, vous disposez des droits suivants : acces, rectification, effacement, portabilite, limitation du traitement et opposition. Vous pouvez exercer ces droits en nous contactant a <a href="mailto:contact@soldev.fr">contact@soldev.fr</a>.</p>

          <h2>Modifications</h2>
          <p>Nous nous reservons le droit de modifier cette politique de confidentialite a tout moment. Les modifications seront publiees sur cette page.</p>

          <p className="text-sm text-gray-400">Derniere mise a jour : Mars 2026</p>
        </div>
      </section>
    </>
  );
}
