<script setup>
import AirbnbCard from "~/components/AirbnbCard.vue";
import BaseAirbnbCard from "~/components/locations/Base-AirbnbCard.vue";
import BaseCard from "~/components/locations/Base-Card.vue";
import HeroImage from "~/components/locations/Base-HeroImage.vue";
import BaseImage from "~/components/locations/Base-Image.vue";
import BaseText from "~/components/locations/Base-Text.vue";

const imageSrc = "/locations/Anterselva.webp";
const heroImage = "/locations/Anterselva.webp";

// Import tous les SVG du dossier
const svgModules = import.meta.glob("~/svg/*.vue", { eager: true });

// Mapping des noms de fichiers vers les titres
const titleMapping = {
  bobsleigh: "Bobsleigh",
  curling: "Curling",

  // Ajoutez vos autres mappings ici
};

// Créer un tableau de cartes avec composant et titre
const cards = Object.entries(svgModules).map(([path, module]) => {
  // Extraire le nom du fichier sans extension
  const fileName = path.split("/").pop().replace(".vue", "");

  // Capitaliser le nom du fichier comme titre par défaut
  const defaultTitle = fileName.charAt(0).toUpperCase() + fileName.slice(1);

  return {
    component: module.default,
    title: titleMapping[fileName] || defaultTitle,
    fileName,
  };
});
</script>

<template>
  <div class="flex gap-15 pb-15 flex-col">
    <HeroImage :src="heroImage" title="Anterselva / Antholz" />
    <BaseText />
    <BaseImage :src="imageSrc" />
    <BaseAirbnbCard :imageSrc="imageSrc" />

    <div class="cards-slider">
      <BaseCard
        v-for="card in cards"
        :key="card.fileName"
        :svg-component="card.component"
        :title="card.title"
      />
    </div>

    <AirbnbCard :imageSrc="imageSrc" />
  </div>
</template>

<style scoped>
.cards-slider {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cards-slider {
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0 1rem;
    margin: 0 -1rem;
  }

  .cards-slider::-webkit-scrollbar {
    display: none;
  }

  .cards-slider > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
    width: calc(100vw - 3rem);
    max-width: 350px;
  }
}
</style>
