<script setup>
import BaseCard from "~/components/locations/Base-Card.vue";

// Import tous les SVG du dossier
const svgModules = import.meta.glob("~/svg/*.vue", { eager: true });

// Mapping des noms de fichiers vers les titres
const titleMapping = {
  bobsleigh: "Bobsleigh",
  curling: "Curling",
};

// Créer un tableau de cartes avec composant et titre
const cards = Object.entries(svgModules).map(([path, module]) => {
  const fileName = path.split("/").pop().replace(".vue", "");
  const defaultTitle = fileName.charAt(0).toUpperCase() + fileName.slice(1);

  return {
    component: module.default,
    title: titleMapping[fileName] || defaultTitle,
    fileName,
  };
});
</script>

<template>
  <div class="flex flex-col gap-8">
    <NuxtLink to="/" class="flex items-center gap-6 group w-fit">
      <h2 class="heading-primary">Sports</h2>
      <svg
        class="w-8 h-8 text-[#00313D] transition-transform group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </NuxtLink>

    <div class="cards-grid">
      <BaseCard
        v-for="card in cards"
        :key="card.fileName"
        :svg-component="card.component"
        :title="card.title"
      />
    </div>
  </div>
</template>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
