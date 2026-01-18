<script setup>
const article = {
  title: "Coupe du monde de biathlon 2024-2025 : la France brille à Anterselva",
  date: "2024-12-15",
  category: "Biathlon",
  hero: "/blog/contents/mock-article/img/hero.png",
  readingTime: 8,
  showPromoCard: true,
  author: {
    name: "Pierre Dupont",
    role: "Rédacteur Sport",
    avatar: "/blog/contents/mock-article/img/hero.png",
  },
};

const sidebarArticles = [
  {
    id: "articles",
    title: "Les athlètes français à suivre pour Milano Cortina 2026",
    image: "/blog/contents/mock-article/img/img1.png",
    category: "Équipe de France",
    date: "2024-12-10",
  },
  {
    id: "articles",
    title: "Guide des sites olympiques de Milano Cortina",
    image: "/blog/contents/mock-article/img/img2.png",
    category: "Sites",
    date: "2024-12-08",
  },
  {
    id: "articles",
    title: "Le biathlon aux Jeux Olympiques : histoire et évolution",
    image: "/blog/contents/mock-article/img/img3.png",
    category: "Histoire",
    date: "2024-12-05",
  },
  {
    id: "articles",
    title: "Préparation physique : les secrets des biathlètes",
    image: "/blog/contents/mock-article/img/carousel-img1.png",
    category: "Entraînement",
    date: "2024-12-03",
  },
];

const relatedArticles = [
  {
    id: "articles",
    title: "Les athlètes français à suivre pour Milano Cortina 2026",
    image: "/blog/contents/mock-article/img/img1.png",
    category: "Équipe de France",
    date: "2024-12-10",
    excerpt: "Découvrez les talents tricolores qui feront vibrer les Jeux.",
  },
  {
    id: "articles",
    title: "Guide des sites olympiques de Milano Cortina",
    image: "/blog/contents/mock-article/img/img2.png",
    category: "Sites",
    date: "2024-12-08",
    excerpt: "Explorez les différents sites qui accueilleront les épreuves.",
  },
  {
    id: "articles",
    title: "Le biathlon aux Jeux Olympiques : histoire et évolution",
    image: "/blog/contents/mock-article/img/img3.png",
    category: "Histoire",
    date: "2024-12-05",
    excerpt: "Retour sur l'histoire de cette discipline emblématique.",
  },
];

useHead({
  title: article.title,
});
</script>

<template>
  <div class="min-h-screen bg-[#f3f3f3]">
    <ArticlesArticleHero
      :image="article.hero"
      :title="article.title"
      :category="article.category"
      :date="article.date"
    />

    <div class="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <main class="flex-1 lg:max-w-[calc(100%-350px)]">
          <ArticlesArticleAuthor
            :author="article.author"
            :date="article.date"
            :reading-time="article.readingTime"
          />

          <div class="mt-8 article-content">
            <p>La saison 2024-2025 de la Coupe du monde de biathlon bat son plein, et l'équipe de France confirme son excellent niveau sur le circuit international. Retour sur les performances marquantes de nos athlètes lors de l'étape d'Anterselva.</p>

            <h2>Une équipe française en grande forme</h2>

            <p>L'étape italienne d'Anterselva a été l'occasion pour les biathlètes tricolores de démontrer leur talent et leur préparation physique exceptionnelle. Sur les pistes enneigées du Tyrol du Sud, les Français ont brillé dans plusieurs épreuves.</p>

            <blockquote>Le biathlon français vit une période dorée. Notre équipe n'a jamais été aussi compétitive sur la scène mondiale.</blockquote>

            <p>Les résultats obtenus lors de cette étape sont particulièrement encourageants à l'approche des Jeux Olympiques de Milano Cortina 2026. L'équipe technique a travaillé dur pour optimiser les performances, tant sur les skis que sur le pas de tir.</p>

            <h2>Les performances individuelles</h2>

            <p>Plusieurs athlètes se sont distingués lors de cette compétition :</p>

            <ul>
              <li><strong>Quentin Fillon Maillet</strong> a terminé sur le podium de la poursuite, confirmant son retour au plus haut niveau</li>
              <li><strong>Julia Simon</strong> a dominé le sprint féminin avec une maîtrise impressionnante au tir</li>
              <li><strong>Émilien Jacquelin</strong> a signé une remontée spectaculaire lors de la mass-start</li>
              <li><strong>Lou Jeanmonnot</strong> continue sa progression et s'installe durablement dans le top 10 mondial</li>
            </ul>

            <h3>Le tir, clé du succès</h3>

            <p>La réussite au tir reste déterminante en biathlon. Les coachs français ont mis l'accent sur cet aspect lors des derniers stages de préparation, et les résultats sont au rendez-vous.</p>

            <p>Les athlètes affichent désormais des pourcentages de réussite supérieurs à 85% en moyenne, un chiffre remarquable qui témoigne de leur concentration et de leur maîtrise technique.</p>

            <h3>La forme physique au rendez-vous</h3>

            <p>Au-delà du tir, la condition physique des biathlètes français est exceptionnelle. Les temps de ski sont parmi les meilleurs du circuit, ce qui permet de compenser d'éventuelles erreurs au pas de tir.</p>

            <h2>Perspectives pour Milano Cortina 2026</h2>

            <p>Ces performances constituent un signal fort à moins de deux ans des Jeux Olympiques d'hiver de Milano Cortina. L'équipe de France se positionne clairement parmi les favoris pour les médailles.</p>

            <div class="flex flex-wrap gap-4 my-6">
              <ArticlesButtonLink title="Calendrier du biathlon à Milano Cortina 2026" link="/calendrier" />
              <ArticlesButtonLink title="Voir la vidéo" link="/video" />
            </div>

            <p>Les sites de compétition italiens sont bien connus des athlètes français, qui ont eu l'occasion de s'y entraîner à plusieurs reprises. Cette familiarité avec le terrain pourrait constituer un avantage décisif.</p>

            <blockquote>Milano Cortina représente une opportunité unique pour le biathlon français. Nous sommes déterminés à y écrire une page d'histoire.</blockquote>

            <h2>Programme des prochaines étapes</h2>

            <p>La Coupe du monde se poursuit avec des étapes cruciales :</p>

            <ol>
              <li><strong>Oberhof (Allemagne)</strong> - Janvier 2025</li>
              <li><strong>Ruhpolding (Allemagne)</strong> - Janvier 2025</li>
              <li><strong>Antholz-Anterselva (Italie)</strong> - Février 2025</li>
              <li><strong>Kontiolahti (Finlande)</strong> - Mars 2025</li>
            </ol>

            <p>Chaque étape sera l'occasion pour les athlètes français de confirmer leur forme et d'affiner leur préparation en vue de l'échéance olympique.</p>

            <h2>Conclusion</h2>

            <p>La saison 2024-2025 s'annonce passionnante pour le biathlon français. Avec une équipe solide et motivée, les espoirs de médailles olympiques sont plus que jamais permis. Rendez-vous en février 2026 à Milano Cortina pour vivre ensemble ces moments d'émotion.</p>
          </div>

          <ArticlesArticlePromoCard v-if="article.showPromoCard" />
        </main>

        <aside class="lg:w-[300px] flex-shrink-0">
          <ArticlesArticleSidebar :articles="sidebarArticles" />
        </aside>
      </div>
    </div>

    <ArticlesArticleRelated :articles="relatedArticles" />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.article-content :deep(h2) {
  @apply text-[#00313D] font-[Poppins] text-xl md:text-2xl lg:text-[28px] font-bold leading-tight mt-10 mb-4;
}

.article-content :deep(h3) {
  @apply text-[#00313D] font-[Poppins] text-lg md:text-xl lg:text-[22px] font-semibold leading-tight mt-8 mb-3;
}

.article-content :deep(p) {
  @apply text-[#001719] font-[Poppins] text-base md:text-lg leading-relaxed mb-6;
}

.article-content :deep(ul) {
  @apply list-disc pl-6 mb-6 space-y-2;
}

.article-content :deep(ol) {
  @apply list-decimal pl-6 mb-6 space-y-2;
}

.article-content :deep(li) {
  @apply text-[#001719] font-[Poppins] text-base md:text-lg leading-relaxed;
}

.article-content :deep(blockquote) {
  @apply border-l-4 border-[#22A5AB] bg-[#22A5AB]/10 pl-6 py-4 pr-4 my-8 italic text-[#014A5C] text-lg md:text-xl;
}

.article-content :deep(strong) {
  @apply font-semibold;
}
</style>
