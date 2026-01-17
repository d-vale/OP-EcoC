<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="hero-wrapper">
    <div
      class="hero-container rounded-xl md:rounded-2xl lg:rounded-4xl relative w-full h-125 md:h-150 lg:h-175 overflow-hidden"
    >
      <!-- Hero Image -->
      <img
        :src="src"
        :alt="title"
        class="w-full h-full object-cover"
        loading="eager"
        sizes="100vw"
      />

      <!-- Overlay gradient -->
      <div
        class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"
      ></div>

      <!-- Hero Title -->
      <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
        <h1
          class="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          {{ title }}
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
