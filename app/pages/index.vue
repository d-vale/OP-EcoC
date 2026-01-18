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
import FeatureCard from "~/components/home/FeatureCard.vue";
import SportTrivia from "~/components/home/SportTrivia.vue";
import NextOlympicGames from "~/components/home/NextOlympicGames.vue";
import OlympicWebsites from "~/components/home/OlympicWebsites.vue";
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

    <section class="py-12 px-4 max-w-7xl mx-auto">
      <picture>
        <source srcset="/home/map.png" />
        <img
          src="/home/map.png"
          alt="Milano Cortina 2026 venues map"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </picture>
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

    <!-- Sport Trivia -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <SportTrivia button-link="#" />
    </section>

    <!-- Paralympic Winter Games -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <FeatureCard
        title="The Paralympic Winter Games"
        description="Paralympic athletes from all over the world will compete at the highest level at Milano Cortina 2026, redefining what is possible on snow and ice."
        button-text="Find Out More"
        button-link="#"
        image-src="/home/paralympic-athlete.webp"
        image-alt="Paralympic athlete skiing"
      />
    </section>

    <!-- Watch Winter Playing Fields -->
    <section class="py-12 px-4 max-w-7xl mx-auto">
      <FeatureCard
        title="Watch Winter Playing Fields"
        description="Join the community for free and see how Olympic dreams take shape in the most unexpected places."
        button-text="Join Now"
        button-link="#"
        image-src="/home/winter-playing-fields.webp"
        image-alt="Winter sports collage"
      />
    </section>

    <section class="py-12 px-4 max-w-7xl mx-auto">
      <NextOlympicGames />
    </section>

    <section class="mb-20 py-12 px-4 max-w-7xl mx-auto">
      <OlympicWebsites />
    </section>
  </div>
</template>

<style scoped></style>
