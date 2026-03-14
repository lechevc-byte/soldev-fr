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
          <p>Les cookies sont de petits fichiers texte stockes sur votre appareil lorsque vous visitez un site web. Ils sont largement utilises pour faire fonctionner les sites plus efficacement et fournir des informations aux proprietaires du site.</p>

          <h2>Cookies que nous utilisons</h2>
          <h3>Cookies strictement necessaires</h3>
          <p>Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas etre desactives. Ils sont generalement definis en reponse a des actions de votre part, comme la definition de vos preferences de confidentialite ou le remplissage de formulaires.</p>

          <h3>Cookies de performance</h3>
          <p>Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d&apos;ameliorer les performances de notre site. Ils nous aident a savoir quelles pages sont les plus et les moins populaires.</p>

          <h3>Cookies de fonctionnalite</h3>
          <p>Ces cookies permettent au site de fournir des fonctionnalites et une personnalisation ameliorees. Ils peuvent etre definis par nous ou par des fournisseurs tiers dont nous avons ajoute les services a nos pages.</p>

          <h2>Comment gerer les cookies</h2>
          <p>Vous pouvez configurer votre navigateur pour refuser tous les cookies ou certains cookies, ou pour etre alerte lorsque des sites definissent ou accedent a des cookies. Si vous desactivez ou refusez les cookies, notez que certaines parties du site peuvent devenir inaccessibles ou ne pas fonctionner correctement.</p>

          <h2>Contact</h2>
          <p>Pour toute question concernant notre politique de cookies, contactez-nous a <a href="mailto:contact@soldev.fr">contact@soldev.fr</a>.</p>
        </div>
      </section>
    </>
  );
}
