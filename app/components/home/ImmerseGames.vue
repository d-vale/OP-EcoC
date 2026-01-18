<script setup>
import { ref, computed } from "vue";

const cards = [
  {
    id: 1,
    title: "Guess the sport to win a trip to Milano Cortina 2026!",
    description:
      "Step into the world of the Games! Match the terminology to the correct sport for your chance to win.",
    image: "/home/immerse-games/guess-sport.webp",
    linkText: "Enter now",
    linkUrl: "/",
  },
  {
    id: 2,
    title: "Virtual Meet & Greet",
    description: "With alpine skier Paula Moltzan",
    image: "/home/immerse-games/virtual-meet.webp",
    linkText: "Relive now",
    linkUrl: "/",
  },
  {
    id: 3,
    title: "Test your knowledge with sports trivia!",
    description:
      "Test your sport expertise with our Sport Trivia, presented by our Worldwide Official Insurer Allianz! See how you rank and if you could win a prize!",
    image: "/home/immerse-games/sport-trivia.webp",
    linkText: "Play now",
    linkUrl: "/",
  },
  {
    id: 4,
    title: "Fan26, Milano Cortina 2026 digital community",
    description:
      "Updates on new ticket releases, exclusive info about the Games and unique opportunities.",
    image: "/home/immerse-games/fan26.webp",
    linkText: "Join Fan26",
    linkUrl: "/",
  },
];

const currentPage = ref(1);
const itemsPerPage = 3;
const totalPages = computed(() => Math.ceil(cards.length / itemsPerPage));

const visibleCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return cards.slice(start, start + itemsPerPage);
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
    <h2 class="heading-primary mb-8">Immerse yourself in the Games</h2>

    <!-- Cards Container -->
    <div class="cards-grid">
      <article v-for="card in visibleCards" :key="card.id" class="immerse-card">
        <!-- Image -->
        <div class="immerse-card__image-wrapper">
          <img
            :src="card.image"
            :alt="card.title"
            class="immerse-card__image"
            loading="lazy"
          />
        </div>

        <!-- Content -->
        <div class="immerse-card__content">
          <div class="immerse-card__text">
            <h3 class="immerse-card__title">{{ card.title }}</h3>
            <p class="immerse-card__description">{{ card.description }}</p>
          </div>

          <!-- CTA Button -->
          <NuxtLink :to="card.linkUrl" class="immerse-card__cta">
            <span>{{ card.linkText }}</span>
            <span class="immerse-card__cta-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </NuxtLink>
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
          aria-label="Previous slide"
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
          aria-label="Next slide"
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
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.immerse-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.immerse-card__image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.immerse-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.immerse-card__content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 16px;
}

.immerse-card__text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.immerse-card__title {
  color: #00313d;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
}

.immerse-card__description {
  color: #00313d;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.immerse-card__cta {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: linear-gradient(to left, #028d7d, #037580 21.76%);
  color: white;
  padding: 8px 8px 8px 24px;
  border-radius: 32px;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-decoration: none;
  width: fit-content;
  min-height: 48px;
  transition: opacity 0.2s;
}

.immerse-card__cta:hover {
  opacity: 0.9;
}

.immerse-card__cta-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
  padding: 2px;
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
