<template>
  <section >
    <h2 class="text-2xl md:text-3xl font-bold mb-8" style="color: #00313D;">
      Next Olympic Games™
    </h2>

    <div class="flex flex-wrap items-center gap-8 md:gap-12">
      <NuxtImg
        v-for="year in olympicYears"
        :key="year"
        :src="`/home/olympics-logos/${year}.png`"
        :alt="`Olympic Games ${year}`"
        loading="lazy"
        class="h-16 md:h-20 w-auto object-contain"
      />
    </div>
  </section>
</template>

<script setup>
const olympicYears = [2028, 2030, 2032, 2034]
</script>
