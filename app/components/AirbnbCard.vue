<script setup>
import { ref } from "vue";

const props = defineProps({
  logo: {
    type: String,
    default: "airbnb",
  },
  title: {
    type: String,
    default: "Find a place to stay in Bromio",
  },
  description: {
    type: String,
    default:
      "The design is intended to highlight the flame itself—the true essence of the Olympic and Paralympic Torch Relays.",
  },
  buttonText: {
    type: String,
    default: "Check Airbnb availability",
  },
  buttonLink: {
    type: String,
    default: "#",
  },
  imageSrc: {
    type: String,
    default: "",
  },
  imageAlt: {
    type: String,
    default: "Location image",
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <section
    class="relative w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-linear-to-br from-red-500 via-red-500 to-orange-500"
  >
    <div class="flex flex-col lg:flex-row min-h-70 sm:min-h-80 lg:min-h-95">
      <!-- Left side - Image -->
      <div class="relative w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto">
        <img
          v-if="imageSrc"
          :src="imageSrc"
          :alt="imageAlt"
          class="w-full h-full object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
        />
        <div
          v-else
          class="w-full h-full bg-linear-to-br from-slate-700 via-slate-800 to-slate-900 rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
        />

        <!-- Diagonal overlay to blend with red section -->
        <div
          class="hidden lg:block absolute top-0 right-0 w-32 h-full overflow-hidden"
        >
          <div
            class="absolute top-0 -right-16 w-64 h-full bg-linear-to-br from-red-500 via-red-500 to-orange-500 transform skew-x-6 origin-top-right"
          ></div>
        </div>
      </div>

      <!-- Right side - Content -->
      <div
        class="relative w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center"
      >
        <!-- Logo Airbnb -->
        <div class="flex items-center gap-2 mb-4 sm:mb-5">
          <img src="/airbnb.svg" alt="Airbnb" class="w-20 h-auto sm:w-24">
        </div>

        <!-- Title -->
        <h2
          class="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4"
        >
          {{ title }}
        </h2>

        <!-- Description -->
        <p
          class="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md"
        >
          {{ description }}
        </p>

        <!-- CTA Button -->
        <div>
          <a
            :href="buttonLink"
            @click="handleClick"
            class="inline-flex items-center gap-3 bg-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-red-500 font-semibold text-sm sm:text-base hover:bg-gray-100 hover:shadow-lg transition-all duration-300 ease-out group cursor-pointer"
          >
            <span>{{ buttonText }}</span>
            <span
              class="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 border-2 border-red-400 rounded-full text-red-500 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3.5 h-3.5 sm:w-4 sm:h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
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

        <!-- Decorative circles (bottom right) -->
        <div
          class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 pointer-events-none"
        >
          <svg
            class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
            viewBox="0 0 160 160"
            fill="none"
          >
            <!-- Outer ellipse -->
            <ellipse
              cx="100"
              cy="100"
              rx="55"
              ry="45"
              stroke="rgba(255,255,255,0.3)"
              stroke-width="1.5"
              transform="rotate(-15 100 100)"
            />
            <!-- Middle ellipse -->
            <ellipse
              cx="100"
              cy="100"
              rx="40"
              ry="32"
              stroke="rgba(255,255,255,0.4)"
              stroke-width="1.5"
              transform="rotate(-15 100 100)"
            />
            <!-- Inner ellipse -->
            <ellipse
              cx="100"
              cy="100"
              rx="25"
              ry="20"
              stroke="rgba(255,255,255,0.5)"
              stroke-width="1.5"
              transform="rotate(-15 100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
