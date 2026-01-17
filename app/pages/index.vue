<script setup>
import Carousel from '~/components/home/Base-carousel.vue';

const carouselSlides = [
  {
    id: 1,
    image: 'home/carousel/opening-ceremony.webp',
    title: 'New tickets on sale: live the magic of the Olympic Opening Ceremony!',
    linkText: 'Buy now',
    linkUrl: '/',
  },
  {
    id: 2,
    image: 'home/carousel/flame-ceremony.webp',
    title: 'Relive Milano Cortina 2026 Flame Lighting Ceremony',
    linkText: 'Relive now',
    linkUrl: '/',
  },
  {
    id: 3,
    image: 'home/carousel/guess-sport.webp',
    title: 'Guess the sport to win a trip to Milano Cortina 2026!',
    linkText: 'Enter now',
    linkUrl: '/',
  },
  {
    id: 4,
    image: 'home/carousel/athletes-experience.webp',
    title: 'Experience the action: Hosted by athletes for Milano Cortina 2026',
    linkText: 'Book now',
    linkUrl: '/',
  },
  {
    id: 5,
    image: 'home/carousel/team-italia.webp',
    title: 'Milano Cortina 2026 - Team Italia Collection',
    linkText: 'Shop now',
    linkUrl: '/',
  },
];
</script>

<template>
  <div class="home-page">
    <!-- Hero Carousel -->
    <section class="carousel-section">
      <Carousel :slides="carouselSlides" :autoplay-interval="5000" />
    </section>
  </div>
</template>

<style scoped>
</style>