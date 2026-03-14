export const metadata = { title: "Politique de Cookies" };

export default function PolitiqueCookiesPage() {
  return (
    <>
      <section className="bg-primary-950 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl font-bold text-white">Politique de Cookies</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="prose prose-gray mx-auto max-w-3xl px-6">
          <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p>Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web. Ils sont largement utilisés pour faire fonctionner les sites plus efficacement et fournir des informations aux propriétaires du site.</p>

          <h2>Cookies que nous utilisons</h2>
          <h3>Cookies strictement nécessaires</h3>
          <p>Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés. Ils sont généralement définis en réponse à des actions de votre part, comme la définition de vos préférences de confidentialité ou le remplissage de formulaires.</p>

          <h3>Cookies de performance</h3>
          <p>Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d&apos;améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires.</p>

          <h3>Cookies de fonctionnalité</h3>
          <p>Ces cookies permettent au site de fournir des fonctionnalités et une personnalisation améliorées. Ils peuvent être définis par nous ou par des fournisseurs tiers dont nous avons ajouté les services à nos pages.</p>

          <h2>Comment gérer les cookies</h2>
          <p>Vous pouvez configurer votre navigateur pour refuser tous les cookies ou certains cookies, ou pour être alerté lorsque des sites définissent ou accèdent à des cookies. Si vous désactivez ou refusez les cookies, notez que certaines parties du site peuvent devenir inaccessibles ou ne pas fonctionner correctement.</p>

          <h2>Contact</h2>
          <p>Pour toute question concernant notre politique de cookies, contactez-nous à <a href="mailto:contact@soldev.fr">contact@soldev.fr</a>.</p>
          <p className="text-sm text-gray-400 mt-4">CLC CONSULTING - SIREN 878 349 877 - 18 Rue Strauss, 29000 Quimper, France</p>
        </div>
      </section>
    </>
  );
}
