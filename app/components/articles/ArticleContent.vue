<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="article-content">
    <ContentRenderer :value="content" />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.article-content :deep(h2) {
  @apply text-[#00313D] font-[Poppins] text-xl md:text-2xl lg:text-[28px] font-bold leading-tight mt-10 mb-4;
}

.article-content :deep(h3) {
  @apply text-[#00313D] font-[Poppins] text-lg md:text-xl lg:text-[22px] font-semibold leading-tight mt-8 mb-3;
}

.article-content :deep(p) {
  @apply text-[#001719] font-[Poppins] text-base md:text-lg leading-relaxed mb-6;
}

.article-content :deep(ul) {
  @apply list-disc pl-6 mb-6 space-y-2;
}

.article-content :deep(ol) {
  @apply list-decimal pl-6 mb-6 space-y-2;
}

.article-content :deep(li) {
  @apply text-[#001719] font-[Poppins] text-base md:text-lg leading-relaxed;
}

.article-content :deep(blockquote) {
  @apply border-l-4 border-[#22A5AB] bg-[#22A5AB]/10 pl-6 py-4 pr-4 my-8 italic text-[#014A5C] text-lg md:text-xl;
}

.article-content :deep(img) {
  @apply w-full rounded-lg my-8;
}

.article-content :deep(a:not(.button-link)) {
  @apply text-[#014A5C] underline hover:text-[#22A5AB] transition-colors;
}

.article-content :deep(.button-link) {
  text-decoration: none !important;
}

.article-content :deep(strong) {
  @apply font-semibold;
}

.article-content :deep(em) {
  @apply italic;
}
</style>
