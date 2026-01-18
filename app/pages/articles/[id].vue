<script setup>
const route = useRoute();

const { data: article } = await useAsyncData(`article-${route.params.id}`, () =>
  queryCollection('articles').path(`/articles/${route.params.id}`).first()
);

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article non trouvé',
  });
}

const sidebarArticles = computed(() => {
  if (!article.value?.relatedArticles) return [];
  return article.value.relatedArticles.slice(0, 4);
});

const relatedArticles = computed(() => {
  if (!article.value?.relatedArticles) return [];
  return article.value.relatedArticles.slice(0, 3);
});

useHead({
  title: article.value?.title,
});
</script>

<template>
  <div v-if="article" class="min-h-screen bg-[#f3f3f3]">
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

          <div class="mt-8">
            <ArticlesArticleContent :content="article" />
          </div>

          <ArticlesArticlePromoCard v-if="article.showPromoCard" />
        </main>

        <aside v-if="sidebarArticles.length > 0" class="lg:w-[300px] flex-shrink-0">
          <ArticlesArticleSidebar :articles="sidebarArticles" />
        </aside>
      </div>
    </div>

    <ArticlesArticleRelated
      v-if="relatedArticles.length > 0"
      :articles="relatedArticles"
    />
  </div>
</template>
