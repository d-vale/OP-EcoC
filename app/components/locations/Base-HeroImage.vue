<script setup>
// Vous pouvez ajouter des données dynamiques ici plus tard
const heroImage =
  "https://img.olympics.com/images/image/private/t_16-9_1920/f_auto/primary/o113dathv4krz4velfkd";
const heroTitle = "Anterselva / Antholz";
</script>

<template>
  <div class="hero-wrapper">
    <div
      class="hero-container rounded-xl md:rounded-2xl lg:rounded-4xl relative w-full h-125 md:h-150 lg:h-175 overflow-hidden"
    >
      <!-- Hero Image -->
      <picture class="hero-image">
        <source
          media="(min-width: 1024px) and (max-width: 1439px)"
          :srcset="`${heroImage}, ${heroImage} 2x`"
        />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          :srcset="`${heroImage}, ${heroImage} 2x`"
        />
        <source
          media="(max-width: 575px)"
          :srcset="`${heroImage}, ${heroImage} 2x`"
        />
        <img
          :src="heroImage"
          :alt="heroTitle"
          class="w-full h-full object-cover"
        />
      </picture>

      <!-- Overlay gradient -->
      <div
        class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"
      ></div>

      <!-- Hero Title -->
      <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
        <h1
          class="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          {{ heroTitle }}
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
