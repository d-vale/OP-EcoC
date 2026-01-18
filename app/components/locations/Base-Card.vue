-<script setup>
import FavoriteButton from "~/components/FavoriteButton.vue";

defineProps({
  svgComponent: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  svgColor: {
    type: String,
    default: '#FFFFFF'
  }
});
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="gradient rounded-t-2xl">
      <component :is="svgComponent" :color="svgColor" />
      <div class="absolute top-2 right-2"></div>
    </div>

    <div class="flex flex-row items-center p-4 bg-white rounded-b-2xl gap-4">
      <div class="rounded-full border border-sky-800">
        <FavoriteButton :label="`${title} - Add to favourites`" />
      </div>

      <h3 class="font-semibold text-body">{{ title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  background: linear-gradient(180deg, #357688 0%, #1c4859 100%);
}
</style>
