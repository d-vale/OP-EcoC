<script setup>
const images = {
  image1: { src: "/home/road-to-calendar/calendar-1.png" },
  image2: { src: "/home/road-to-calendar/calendar-2.png" },
  image3: { src: "/home/road-to-calendar/calendar-3.png" },
  image4: { src: "/home/road-to-calendar/calendar-4.png" },
  image5: { src: "/home/road-to-calendar/calendar-5.png" },
};
</script>

<template>
  <div class="flex flex-row items-center gap-4">
    <!-- Titre SVG -->
    <img
      src="/home/road.svg"
      alt="Road to Milano Cortina 2026"
      class="h-full w-auto"
      loading="lazy"
    />

    <h2 class="heading-primary">Road to Milano-Cortina 2026</h2>

    <img
      src="/home/arrow.svg"
      alt="Arrow"
      class="h-full w-auto"
      loading="lazy"
    />
  </div>

  <div class="flex flex-row gap-4 .cards-slider">
    <div
      class="pb-8 lg:flex-row lg:items-center lg:justify-between "
      v-for="({ src }, index) in Object.values(images)"
      :key="index"
    >
      <NuxtLink to="/road-to-milano-cortina-2026" class="btn-primary mt-4">
        <div class="">
          <picture>
            <source
              media="(min-width: 1024px) and (max-width: 1439px)"
              :srcset="`${src}, ${src} 2x`"
            />
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              :srcset="`${src}, ${src} 2x`"
            />
            <source media="(max-width: 575px)" :srcset="`${src}, ${src} 2x`" />
            <img :src="src" class="w-full h-full object-cover" />
          </picture>
        </div>
      </NuxtLink>

      <div class="bg-white p-6">
        <h3 class="title">Discover the journey to Milano-Cortina 2026</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  color: #00313d;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 150% */
}

.cards-slider {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cards-slider {
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0 1rem;
    margin: 0 -1rem;
  }

  .cards-slider::-webkit-scrollbar {
    display: none;
  }

  .cards-slider > * {
    flex: 0 0 auto;
    scroll-snap-align: start;
    width: calc(100vw - 3rem);
    max-width: 350px;
  }
}
</style>
