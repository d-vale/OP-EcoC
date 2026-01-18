<script setup>
const newsItems = [
  {
    id: 1,
    title:
      '"A life-changing experience": Andrew Parsons counts down 100 days to Milano Cortina 2026 Paralympics',
    image: "/home/news/parsons.webp",
    link: "/",
    featured: true,
  },
  {
    id: 2,
    title:
      'Olympic legacy comes to life in Milan\'s "Three Thousand Year History" exhibit',
    image: "/home/news/exhibit.webp",
    link: "/",
  },
  {
    id: 3,
    title: "What makes the ultimate ice hockey player?",
    image: "/home/news/ice-hockey.webp",
    link: "/",
    tag: "Ice Hockey",
  },
  {
    id: 4,
    title:
      "Everything you need to know about the Milano Cortina 2026 Olympic Flame-Lighting ceremony",
    image: "/home/news/flame-ceremony.webp",
    link: "/",
  },
  {
    id: 5,
    title:
      "Meet Team GB skip Sophie Jackson, once tipped for the top by Eve Muirhead",
    image: "/home/news/curling.webp",
    link: "/",
    tag: "Eve MUIRHEAD",
  },
];

const featuredItem = newsItems.find((item) => item.featured);
const sideItem = newsItems[1];
const bottomItems = newsItems.slice(2);
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- Header -->
    <NuxtLink to="/news" class="flex items-center gap-6 group w-fit">
      <h2 class="heading-primary">Latest news</h2>
      <svg
        class="w-8 h-8 text-[#00313D] transition-transform group-hover:translate-x-1"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M6 16h20M18 8l8 8-8 8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </NuxtLink>

    <!-- News Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Featured Article (Large - spans 2 columns on large screens) -->
      <NuxtLink
        :to="featuredItem.link"
        class="lg:col-span-2 lg:row-span-2 relative rounded-xl overflow-hidden group"
      >
        <NuxtImg
          :src="featuredItem.image"
          :alt="featuredItem.title"
          class="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width="864"
          height="486"
        />
        <!-- Overlay with title -->
        <div
          class="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/60 rounded-lg p-6"
        >
          <h3 class="text-[#00313D] font-semibold text-lg lg:text-xl leading-7">
            {{ featuredItem.title }}
          </h3>
        </div>
      </NuxtLink>

      <!-- Side Article (Top Right) -->
      <NuxtLink :to="sideItem.link" class="flex flex-col group">
        <div class="rounded-xl overflow-hidden">
          <NuxtImg
            :src="sideItem.image"
            :alt="sideItem.title"
            class="w-full h-48 lg:h-44 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width="432"
            height="176"
          />
        </div>
        <div class="pt-4">
          <h3 class="text-[#00313D] font-semibold text-lg lg:text-xl leading-7">
            {{ sideItem.title }}
          </h3>
        </div>
      </NuxtLink>

      <!-- Bottom Row Articles -->
      <NuxtLink
        v-for="item in bottomItems"
        :key="item.id"
        :to="item.link"
        class="flex flex-col group"
      >
        <div class="rounded-xl overflow-hidden">
          <NuxtImg
            :src="item.image"
            :alt="item.title"
            class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            width="432"
            height="192"
          />
        </div>
        <div class="pt-4 flex flex-col gap-4">
          <!-- Tag if present -->
          <div v-if="item.tag" class="flex flex-wrap">
            <span
              class="bg-[#D4E5E7] text-[#001719] text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {{ item.tag }}
            </span>
          </div>
          <h3 class="text-[#00313D] font-semibold text-lg lg:text-xl leading-7">
            {{ item.title }}
          </h3>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Smooth hover effects for images */
.group:hover img {
  transform: scale(1.05);
}
</style>
