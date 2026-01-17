<script setup></script>

<template>
  <div
    class="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
  >
    <!-- Titre SVG -->
    <img
      src="/home/road.svg"
      alt="Road to Milano Cortina 2026"
      class="h-8 md:h-10 w-auto"
      loading="lazy"
    />

    <!-- Dates + Lien -->
    <div class="flex items-center gap-4">
      <!-- Icône calendrier (inline SVG optimisé) -->
      <svg
        class="w-5 h-5 text-[#014A5C]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>

      <span class="text-[#00313D] font-medium">6 - 22 Feb 2026</span>

      <!-- Lien avec flèche -->
      <NuxtLink to="/schedule" class="road-link">
        See full schedule
        <svg
          class="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.road-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #014a5c;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.road-link:hover {
  color: #22a5ab;
}
</style>
