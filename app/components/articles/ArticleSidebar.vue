<script setup>
defineProps({
  articles: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <aside class="sticky top-6">
    <h2 class="text-[#00313D] font-[Poppins] text-xl font-bold mb-6">À lire aussi</h2>

    <div class="flex flex-col gap-4">
      <NuxtLink
        v-for="article in articles"
        :key="article.id"
        :to="`/articles/${article.id}`"
        class="group flex gap-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <NuxtImg
            :src="article.image"
            :alt="article.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width="80"
            height="80"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col justify-center flex-1 min-w-0">
          <span
            v-if="article.category"
            class="text-xs text-[#22A5AB] font-medium mb-1"
          >
            {{ article.category }}
          </span>
          <h3 class="text-[#00313D] font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#014A5C] transition-colors">
            {{ article.title }}
          </h3>
        </div>
      </NuxtLink>
    </div>
  </aside>
</template>
