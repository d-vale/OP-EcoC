<script setup>
defineProps({
  buttonLink: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <div class="flex flex-col lg:flex-row items-stretch bg-[#01647c] rounded-3xl overflow-hidden">
    <!-- Image Section -->
    <div class="lg:w-1/2 aspect-video lg:aspect-auto relative">
      <img
        src="/home/sport-trivia.webp"
        alt="Sport Trivia - Skier with Olympic rings"
        loading="lazy"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content Section -->
    <div class="lg:w-1/2 flex flex-col justify-center items-end gap-8 lg:gap-10 p-8 lg:p-12 lg:pr-14">
      <!-- Presented by Allianz -->
      <div class="w-full flex justify-start lg:justify-end">
        <div class="flex items-center gap-4">
          <span class="text-white text-sm font-[Poppins]">Presented by</span>
          <img
            src="/home/allianz-logo.svg"
            alt="Allianz - The Official Insurer"
            loading="lazy"
            class="h-8 w-auto"
          />
        </div>
      </div>

      <!-- Title -->
      <div class="w-full">
        <h2 class="text-white font-[Poppins] text-2xl sm:text-3xl md:text-[34px] font-bold leading-tight md:leading-[42px]">
          Test your knowledge with sports trivia!
        </h2>
      </div>

      <!-- CTA Button -->
      <div>
        <a
          :href="buttonLink"
          class="inline-flex items-center justify-between gap-4 bg-white
                 rounded-full pl-6 pr-2 py-2 text-[#01647c] font-medium text-lg lg:text-xl
                 hover:opacity-90 transition-opacity duration-300 font-[Poppins]"
        >
          <span>Play now</span>
          <span class="flex items-center justify-center w-8 h-8 border-2 border-[#01647c] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
