<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
});
</script>

<template >
  <NuxtLink
    :to="link"
    class="button-link mb-4 inline-flex items-center gap-3 rounded-full font-medium transition-all group no-underline"
    :class="[
      variant === 'primary'
        ? 'button-link--primary text-white pl-6 pr-2 py-2'
        : 'button-link--secondary bg-white text-[#014A5C] pl-5 pr-1.5 py-1.5 hover:bg-gray-50'
    ]"
  >
    <span class="text-sm md:text-base font-medium">{{ title }}</span>
    <span
      class="flex items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5"
      :class="[
        variant === 'primary'
          ? 'w-9 h-9 bg-white/20 border border-white/40'
          : 'w-8 h-8 border-2 border-[#014A5C]'
      ]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
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
</template>

<style scoped>
.button-link {
  text-decoration: none !important;
}

.button-link--primary {
  background: linear-gradient(135deg, #014A5C 0%, #22A5AB 100%);
}

.button-link--primary:hover {
  background: linear-gradient(135deg, #013847 0%, #1B8A8F 100%);
}

.button-link--secondary {
  border: 1.5px solid #014A5C;
}
</style>
