<script setup>
const infoTiles = [
  {
    id: 1,
    title: "Spectator info",
    link: "/spectator-info",
    icon: "spectator",
  },
  {
    id: 2,
    title: "Get tickets",
    link: "/tickets",
    icon: "tickets",
  },
  {
    id: 3,
    title: "Book your stay",
    link: "/accommodation",
    icon: "accommodation",
  },
  {
    id: 4,
    title: "Fan26",
    link: "/fan26",
    icon: "fan",
  },
  {
    id: 5,
    title: "Hospitality",
    link: "/hospitality",
    icon: "hospitality",
  },
  {
    id: 6,
    title: "Download app",
    link: "/app",
    icon: "app",
  },
  {
    id: 7,
    title: "Olympic shop",
    link: "/shop",
    icon: "shop",
  },
  {
    id: 8,
    title: "Latest news",
    link: "/news",
    icon: "news",
  },
  {
    id: 9,
    title: "Public transport",
    link: "/transport",
    icon: "transport",
  },
  {
    id: 10,
    title: "FAQ",
    link: "/faq",
    icon: "faq",
  },
];
</script>

<template>
  <h2 class="heading-primary mb-8">Everything you need to know</h2>

  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <NuxtLink
      v-for="tile in infoTiles"
      :key="tile.id"
      :to="tile.link"
      class="info-tile"
    >
      <!-- Spectator info icon -->
      <svg
        v-if="tile.icon === 'spectator'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      </svg>

      <!-- Tickets icon -->
      <svg
        v-else-if="tile.icon === 'tickets'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M2 9V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3" />
        <path d="M2 15v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
        <path d="M2 9a3 3 0 0 0 3 3 3 3 0 0 0 0-6" />
        <path d="M22 9a3 3 0 0 1-3 3 3 3 0 0 1 0-6" />
        <path d="M2 15a3 3 0 0 1 3-3 3 3 0 0 1 0 6" />
        <path d="M22 15a3 3 0 0 0-3-3 3 3 0 0 0 0 6" />
      </svg>

      <!-- Accommodation icon -->
      <svg
        v-else-if="tile.icon === 'accommodation'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M10 9h4" />
        <path d="M10 12h4" />
      </svg>

      <!-- Fan icon -->
      <svg
        v-else-if="tile.icon === 'fan'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M12 12 L12 3 Q18 3 18 9 Q18 12 12 12" />
        <path d="M12 12 L3 12 Q3 6 9 6 Q12 6 12 12" />
        <path d="M12 12 L12 21 Q6 21 6 15 Q6 12 12 12" />
        <path d="M12 12 L21 12 Q21 18 15 18 Q12 18 12 12" />
        <circle cx="12" cy="12" r="2" />
      </svg>

      <!-- Hospitality icon -->
      <svg
        v-else-if="tile.icon === 'hospitality'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
        />
      </svg>

      <!-- App icon -->
      <svg
        v-else-if="tile.icon === 'app'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>

      <!-- Shop icon -->
      <svg
        v-else-if="tile.icon === 'shop'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>

      <!-- News icon -->
      <svg
        v-else-if="tile.icon === 'news'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        />
        <path d="M6 8h4v4H6z" />
        <path d="M14 8h4" />
        <path d="M14 12h4" />
        <path d="M6 16h12" />
      </svg>

      <!-- Transport icon -->
      <svg
        v-else-if="tile.icon === 'transport'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path d="M8 6v6" />
        <path d="M16 6v6" />
        <path d="M2 12h20" />
        <rect x="4" y="3" width="16" height="16" rx="2" />
        <circle cx="7" cy="16" r="1" />
        <circle cx="17" cy="16" r="1" />
        <path d="M4 19l-2 2" />
        <path d="M20 19l2 2" />
      </svg>

      <!-- FAQ icon -->
      <svg
        v-else-if="tile.icon === 'faq'"
        class="info-tile-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 9a3 3 0 0 1 5.12 2.12c0 1.38-1.62 2.13-2.12 2.88" />
        <path d="M12 17h.01" />
      </svg>

      <span class="info-tile-text">{{ tile.title }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.info-tile {
  background: linear-gradient(45deg, #014a5c, #22a5ab);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 100px;
}

.info-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(1, 74, 92, 0.3);
}

.info-tile-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.info-tile-text {
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.3;
}
</style>
