<script setup>
defineProps({
  articles: {
    type: Array,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
</script>

<template>
  <section class="py-12 md:py-16">
    <div class="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
      <h2 class="text-[#00313D] font-[Poppins] text-2xl md:text-3xl font-bold mb-8">
        Articles similaires
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="article in articles"
          :key="article.id"
          :to="`/articles/${article.id}`"
          class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="relative h-48 md:h-56 overflow-hidden">
            <picture>
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width="400"
                height="224"
                loading="lazy"
              />
            </picture>
            <span
              v-if="article.category"
              class="absolute top-4 left-4 px-3 py-1 bg-[#22A5AB] text-white text-xs font-medium rounded-full"
            >
              {{ article.category }}
            </span>
          </div>
          <div class="p-5">
            <span v-if="article.date" class="text-gray-500 text-sm">
              {{ formatDate(article.date) }}
            </span>
            <h3 class="text-[#00313D] font-semibold text-lg leading-tight mt-2 line-clamp-2 group-hover:text-[#014A5C] transition-colors">
              {{ article.title }}
            </h3>
            <p v-if="article.excerpt" class="text-gray-600 text-sm mt-2 line-clamp-2">
              {{ article.excerpt }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
