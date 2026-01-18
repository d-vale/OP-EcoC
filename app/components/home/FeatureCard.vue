<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonLink: {
    type: String,
    default: '#'
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col lg:flex-row items-stretch bg-white rounded-2xl overflow-hidden">
    <!-- Image Section -->
    <div class="lg:w-1/2 aspect-video lg:aspect-auto">
      <img
        :src="imageSrc"
        :alt="imageAlt"
        loading="lazy"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content Section -->
    <div class="lg:w-1/2 flex flex-col justify-center gap-8 lg:gap-10 p-8 lg:p-14">
      <div class="flex flex-col gap-2">
        <!-- Title -->
        <h2 class="heading-primary">
          {{ title }}
        </h2>

        <!-- Description -->
        <p class="text-body">
          {{ description }}
        </p>
      </div>

      <!-- CTA Button -->
      <div>
        <a
          :href="buttonLink"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-[#037580] to-[#028d7d]
                 rounded-full pl-6 pr-2 py-2 text-white font-medium text-lg lg:text-xl
                 hover:opacity-90 transition-opacity duration-300"
        >
          <span>{{ buttonText }}</span>
          <span class="flex items-center justify-center w-8 h-8 border-2 border-white rounded-full">
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
