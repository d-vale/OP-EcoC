<script setup>
import Carousel from "~/components/home/Base-carousel.vue";
import TheCountdown from "~/components/home/TheCountdown.vue";
import LinksGrid from "~/components/home/LinksGrid.vue";
import RoadToCalendar from "~/components/home/RoadToCalendar.vue";
import BaseAirbnbCard from "~/components/locations/Base-AirbnbCard.vue";
import OlympicShop from "~/components/home/OlympicShop.vue";
import SportsGrid from "~/components/home/SportsGrid.vue";
import LatestNews from "~/components/home/LatestNews.vue";
import ImmerseGames from "~/components/home/ImmerseGames.vue";

const carouselSlides = [
  {
    id: 1,
    image: "home/carousel/opening-ceremony.webp",
    title:
      "New tickets on sale: live the magic of the Olympic Opening Ceremony!",
    linkText: "Buy now",
    linkUrl: "/",
  },
  {
    id: 2,
    image: "home/carousel/flame-ceremony.webp",
    title: "Relive Milano Cortina 2026 Flame Lighting Ceremony",
    linkText: "Relive now",
    linkUrl: "/",
  },
  {
    id: 3,
    image: "home/carousel/guess-sport.webp",
    title: "Guess the sport to win a trip to Milano Cortina 2026!",
    linkText: "Enter now",
    linkUrl: "/",
  },
  {
    id: 4,
    image: "home/carousel/athletes-experience.webp",
    title: "Experience the action: Hosted by athletes for Milano Cortina 2026",
    linkText: "Book now",
    linkUrl: "/",
  },
  {
    id: 5,
    image: "home/carousel/team-italia.webp",
    title: "Milano Cortina 2026 - Team Italia Collection",
    linkText: "Shop now",
    linkUrl: "/",
  },
];
</script>

<template>
  <div class="home-page">
    <!-- Hero Carousel -->
    <section class="carousel-section relative mb-40">
      <Carousel :slides="carouselSlides" :autoplay-interval="5000" />
      <!-- Countdown positioned at bottom of carousel -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-full max-w-fit px-4"
      >
        <TheCountdown />
      </div>
    </section>

    <!-- Everything you need to know -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <LinksGrid />
    </section>

    <!-- Road to Milano Cortina 2026 -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <RoadToCalendar />
    </section>

    <section class="py-12 px-4 max-w-7xl mx-auto">
      <BaseAirbnbCard imageSrc="/home/card-1.png" />
    </section>

    <!-- Olympic Shop -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <OlympicShop />
    </section>

    <!-- Sports Cards -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <SportsGrid />
    </section>

    <!-- Latest News -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <LatestNews />
    </section>
    <!-- Immerse yourself in the Games -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <ImmerseGames />
    </section>
  </div>
</template>

<style scoped></style>
