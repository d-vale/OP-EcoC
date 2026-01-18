<script setup>
import AirbnbCard from "~/components/AirbnbCard.vue";
import BaseAirbnbCard from "~/components/locations/Base-AirbnbCard.vue";
import HeroImage from "~/components/locations/Base-HeroImage.vue";
import BaseImage from "~/components/locations/Base-Image.vue";
import BaseText from "~/components/locations/Base-Text.vue";
import SportsGrid from "~/components/home/SportsGrid.vue";

const imageSrc = "/locations/Anterselva.webp";
const heroImage = "/locations/Anterselva.webp";
</script>

<template>
  <div class="flex gap-15 pb-15 flex-col">
    <HeroImage :src="heroImage" title="Anterselva / Antholz" />
    <BaseText />
    <BaseImage :src="imageSrc" />
    <BaseAirbnbCard :imageSrc="imageSrc" />

    <div class="px-4">
      <SportsGrid />
    </div>

    <AirbnbCard :imageSrc="imageSrc" />
  </div>
</template>

<style scoped>
</style>
