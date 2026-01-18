<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
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
  <div class="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-4xl overflow-hidden">
    <NuxtImg
      :src="image"
      :alt="title"
      class="w-full h-full object-cover "
      loading="eager"
      width="1920"
      height="600"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
      <div class="max-w-[1400px] mx-auto">
        <nav class="flex items-center gap-2 text-white/80 text-sm mb-4" aria-label="Fil d'ariane">
          <NuxtLink to="/" class="hover:text-white transition-colors">Accueil</NuxtLink>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <NuxtLink to="/articles" class="hover:text-white transition-colors">Actualités</NuxtLink>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-white">{{ category }}</span>
        </nav>

        <div class="flex items-center gap-3 mb-4">
          <span class="px-3 py-1 bg-[#22A5AB] text-white text-sm font-medium rounded-full">
            {{ category }}
          </span>
          <span class="text-white/80 text-sm">{{ formatDate(date) }}</span>
        </div>

        <h1 class="text-white text-2xl md:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[52px] max-w-[900px]">
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>
