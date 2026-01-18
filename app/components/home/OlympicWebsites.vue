<template>
  <section>
    <h2 class="text-2xl md:text-3xl font-bold mb-8" style="color: #00313D;">
      Olympic Websites
    </h2>

    <div class="flex flex-wrap items-center gap-8 md:gap-12">
      <NuxtImg
        v-for="logo in logos"
        :key="logo.name"
        :src="`/home/olympics-coprorate/${logo.file}`"
        :alt="logo.alt"
        loading="lazy"
        class="h-16 md:h-20 w-auto object-contain"
      />
    </div>
  </section>
</template>

<script setup>
const logos = [
  { name: 'olympics', file: 'olympics-logo.svg', alt: 'International Olympic Committee' },
  { name: 'logo2', file: 'logo2.svg', alt: 'Olympic Museum' },
  { name: 'lgo3', file: 'lgo3.svg', alt: 'Athlete 365' },
  { name: 'logo4', file: 'logo4.svg', alt: 'Olympic Refuge Foundation' }
]
</script>
