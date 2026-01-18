<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const currentSlide = ref(0);

const slidesCount = computed(() => props.images.length);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slidesCount.value;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slidesCount.value) % slidesCount.value;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-lg my-8">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative min-w-full w-full flex-shrink-0"
      >
        <div class="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <NuxtImg
            :src="image"
            :alt="`Image ${index + 1}`"
            class="w-full h-full object-cover"
            loading="lazy"
            width="1200"
            height="500"
          />
        </div>
      </div>
    </div>

    <button
      v-if="slidesCount > 1"
      class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
      aria-label="Image précédente"
      @click="prevSlide"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="#00313D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button
      v-if="slidesCount > 1"
      class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
      aria-label="Image suivante"
      @click="nextSlide"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="#00313D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <div
      v-if="slidesCount > 1"
      class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 items-center"
    >
      <button
        v-for="(image, index) in images"
        :key="index"
        class="h-2 rounded-full transition-all duration-300"
        :class="[
          index === currentSlide ? 'w-8 bg-[#22A5AB]' : 'w-2 bg-white/80 hover:bg-white'
        ]"
        :aria-label="`Aller à l'image ${index + 1}`"
        :aria-current="index === currentSlide ? 'true' : 'false'"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>
