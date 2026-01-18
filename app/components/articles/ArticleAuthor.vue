<script setup>
defineProps({
  author: {
    type: Object,
    required: true,
    validator: (value) => value.name && value.role,
  },
  date: {
    type: String,
    required: true,
  },
  readingTime: {
    type: Number,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
</script>

<template>
  <div class="flex items-center gap-4 py-6 border-b border-gray-200">
    <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
      <NuxtImg
        v-if="author.avatar"
        :src="author.avatar"
        :alt="author.name"
        class="w-full h-full object-cover"
        width="48"
        height="48"
        loading="lazy"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-gray-500 font-semibold text-lg">
        {{ author.name.charAt(0) }}
      </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
      <div class="flex flex-col">
        <span class="font-semibold text-[#00313D]">{{ author.name }}</span>
        <span class="text-sm text-gray-600">{{ author.role }}</span>
      </div>

      <div class="hidden sm:block w-px h-8 bg-gray-300" />

      <div class="flex items-center gap-4 text-sm text-gray-600">
        <span>{{ formatDate(date) }}</span>
        <span class="flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          {{ readingTime }} min de lecture
        </span>
      </div>
    </div>
  </div>
</template>
