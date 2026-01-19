<script setup>
defineProps({
  title: {
    type: String,
    default: 'Sport Trivia',
  },
  description: {
    type: String,
    default: 'Testez vos connaissances olympiques et gagnez des récompenses !',
  },
  buttonText: {
    type: String,
    default: 'Jouer maintenant',
  },
  link: {
    type: String,
    default: '/',
  },
});
</script>

<template>
  <div class="bg-gradient-to-r from-[#014A5C] to-[#22A5AB] rounded-2xl p-6 md:p-8 my-8">
    <div class="flex flex-col sm:flex-row items-center gap-6">
      <div class="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
        <img
          src="/home/sport-trivia.webp"
          alt="Sport Trivia"
          class="w-full h-full object-cover"
          loading="lazy"
          width="96"
          height="96"
        />
      </div>

      <div class="flex-1 text-center sm:text-left">
        <div class="flex items-center justify-center sm:justify-start gap-2 mb-2">
          <h3 class="text-white text-xl md:text-2xl font-bold">{{ title }}</h3>
          <span class="text-2xl">🏅</span>
        </div>
        <p class="text-white/90 text-sm md:text-base mb-4">{{ description }}</p>
        <NuxtLink
          :to="link"
          class="inline-flex items-center gap-2 bg-white text-[#014A5C] px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors"
        >
          {{ buttonText }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
