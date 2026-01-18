<script setup>
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  autoplayInterval: {
    type: Number,
    default: 0,
  },
});

const currentSlide = ref(0);
const isAutoplayPaused = ref(false);
let autoplayTimer = null;

const slidesCount = computed(() => props.slides.length);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slidesCount.value;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slidesCount.value) % slidesCount.value;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startAutoplay = () => {
  if (props.autoplayInterval && props.autoplayInterval > 0) {
    autoplayTimer = setInterval(() => {
      if (!isAutoplayPaused.value) {
        nextSlide();
      }
    }, props.autoplayInterval);
  }
};

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
};

const pauseAutoplay = () => {
  isAutoplayPaused.value = true;
};

const resumeAutoplay = () => {
  isAutoplayPaused.value = false;
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <div
    class="carousel-container relative w-full overflow-hidden rounded-4xl" 
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
  >
    <!-- Slides -->
    <div
      class="carousel-track flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="slide in slides"
        :key="slide.id"
        class="carousel-slide relative min-w-full w-full flex-shrink-0"
      >
        <!-- Image -->
        <div class="relative h-[400px] md:h-[500px] lg:h-[670px] w-full">
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <!-- Content -->
        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
          <div class="flex flex-col gap-3">
            <h2 class="text-white text-xl md:text-2xl lg:text-[30px] font-semibold leading-tight lg:leading-[40px] max-w-[700px]">
              {{ slide.title }}
            </h2>
            <NuxtLink
              :to="slide.linkUrl"
              class="text-white text-base font-medium underline hover:no-underline transition-all w-fit"
            >
              {{ slide.linkText }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      v-if="slidesCount > 1"
      class="carousel-arrow carousel-arrow-prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
      aria-label="Slide précédent"
      @click="prevSlide"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button
      v-if="slidesCount > 1"
      class="carousel-arrow carousel-arrow-next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
      aria-label="Slide suivant"
      @click="nextSlide"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Pagination Indicators -->
    <div
      v-if="slidesCount > 1"
      class="absolute bottom-6 md:bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 flex gap-4 items-center"
    >
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="h-2 rounded-full transition-all duration-300"
        :class="[
          index === currentSlide ? 'w-20 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
        ]"
        :aria-label="`Aller au slide ${index + 1}`"
        :aria-current="index === currentSlide ? 'true' : 'false'"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
