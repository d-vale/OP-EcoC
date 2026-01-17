<script setup lang="ts">
import { Ticket, Home, ShoppingBag } from "lucide-vue-next";

const quickLinks = [
  { label: "Ticketing", icon: Ticket, href: "#" },
  { label: "Hospitality", icon: Home, href: "#" },
  { label: "Shop", icon: ShoppingBag, href: "#" },
];
</script>

<template>
  <div class="w-full bg-cyan-950">
    <div class="px-5 md:px-10 lg:px-20">
      <div class="py-3 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <!-- Games dates -->
        <div class="flex flex-wrap justify-center md:justify-start items-center text-white text-sm md:text-base font-poppins">
          <span>
            <span class="font-semibold">Olympic Winter Games™</span>
            <span class="font-normal"> · Feb 6-22, 2026</span>
          </span>
          <span class="mx-2 font-normal">|</span>
          <span>
            <span class="font-semibold">Paralympic Winter Games™</span>
            <span class="font-normal"> · Mar 6-15, 2026</span>
          </span>
        </div>

        <!-- Quick links -->
        <div class="flex items-center gap-6">
          <a
            v-for="link in quickLinks"
            :key="link.label"
            :href="link.href"
            class="flex items-center gap-2 text-white text-sm md:text-base font-normal font-poppins hover:opacity-80 transition-opacity"
          >
            <component :is="link.icon" :size="25" />
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
