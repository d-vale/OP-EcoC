<script setup>
import { Play } from "lucide-vue-next";
defineProps({
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: "Watch the video",
  },
});
</script>

<template>
  <a :href="url">
    <div
      class="bg-sky-800 px-8 py-4 flex flex-row gap-2.5 size-fit items-center rounded-full"
    >
      <div>
        <p class="text-white font-medium">{{ text }}</p>
      </div>
      <Play color="white" size="22" />
    </div>
  </a>
</template>

<style scoped></style>
