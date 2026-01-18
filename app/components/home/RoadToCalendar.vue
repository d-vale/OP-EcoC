<script setup>
import { ref, computed } from "vue";

const allEvents = [
  {
    id: 1,
    title: "Bobsleigh & Skeleton | World Cup | Innsbruck",
    date: "24 - 30 Nov",
    image: "/home/road-to-calendar/calendar-1.webp",
  },
  {
    id: 2,
    title: "Alpine Skiing | Audi World Cup | Copper Mountain",
    date: "27 - 30 Nov",
    image: "/home/road-to-calendar/calendar-2.webp",
  },
  {
    id: 3,
    title: "Snowboard | World Cup Big Air | Secret Garden",
    date: "27 - 29 Nov",
    image: "/home/road-to-calendar/calendar-3.webp",
  },
  {
    id: 4,
    title: "Cross-Country Skiing | World Cup | Lillehammer",
    date: "29 Nov - 1 Dec",
    image: "/home/road-to-calendar/calendar-4.webp",
  },
  {
    id: 5,
    title: "Ski Jumping | World Cup | Ruka",
    date: "29 Nov - 1 Dec",
    image: "/home/road-to-calendar/calendar-5.webp",
  },
    {
    id: 6,
    title: "Ski alpin | Coupe du monde Audi | Wengen",
    date: "16 - 18 Janv",
    image: "/home/road-to-calendar/calendar-6.webp",
  },
];

const currentPage = ref(1);
const itemsPerPage = 3;
const totalPages = computed(() => Math.ceil(allEvents.length / itemsPerPage));

const visibleEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return allEvents.slice(start, start + itemsPerPage);
});

const canGoPrev = computed(() => currentPage.value > 1);
const canGoNext = computed(() => currentPage.value < totalPages.value);

function prevPage() {
  if (canGoPrev.value) {
    currentPage.value--;
  }
}

function nextPage() {
  if (canGoNext.value) {
    currentPage.value++;
  }
}
</script>

<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row items-center gap-4 mb-8">
      <img
        src="/home/road.svg"
        alt="Road to Milano Cortina 2026"
        class="h-8 w-auto"
        loading="lazy"
      />
      <h2 class="heading-primary">Road to Milano-Cortina 2026</h2>
      <img
        src="/home/arrow.svg"
        alt="Arrow"
        class="h-6 w-auto"
        loading="lazy"
      />
    </div>

    <!-- Cards Container -->
    <div class="cards-container">
      <article v-for="event in visibleEvents" :key="event.id" class="card">
        <!-- Image -->
        <NuxtLink to="/" class="block">
          <div class="card-image-wrapper">
            <img
              :src="event.image"
              :alt="event.title"
              class="card-image"
              loading="lazy"
            />
          </div>
        </NuxtLink>

        <!-- Content -->
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">{{ event.title }}</h3>
            <NuxtLink
              to="/"
              class="card-arrow"
              aria-label="Voir l'événement"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>
          </div>
          <div class="card-date">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333Z"
                stroke="currentColor"
                stroke-width="1.33"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.667 1.333v2.667M5.333 1.333v2.667M2 6.667h12"
                stroke="currentColor"
                stroke-width="1.33"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{{ event.date }}</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Navigation -->
    <div class="navigation-wrapper">
      <div class="navigation">
        <!-- Previous Button -->
        <button
          class="nav-btn"
          :class="{ 'nav-btn--disabled': !canGoPrev }"
          :disabled="!canGoPrev"
          @click="prevPage"
          aria-label="Page précédente"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Page Indicator -->
        <span class="page-indicator">{{ currentPage }}/{{ totalPages }}</span>

        <!-- Next Button -->
        <button
          class="nav-btn nav-btn--active"
          :class="{ 'nav-btn--disabled': !canGoNext }"
          :disabled="!canGoNext"
          @click="nextPage"
          aria-label="Page suivante"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 16px 16px 0 0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.card-title {
  color: #00313d;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  border: 2px solid #01647c;
  border-radius: 50%;
  color: #01647c;
  transition: background-color 0.2s, color 0.2s;
  flex-shrink: 0;
}

.card-arrow:hover {
  background-color: #01647c;
  color: white;
}

.card-date {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #01647c;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
}

/* Navigation */
.navigation-wrapper {
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border-radius: 24px;
  min-height: 48px;
}

.nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  background-color: #99b1c1;
  color: white;
}

.nav-btn--active {
  background-color: #01647c;
}

.nav-btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-btn:hover:not(.nav-btn--disabled) {
  background-color: #01647c;
}

.page-indicator {
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  color: #01647c;
}
</style>
