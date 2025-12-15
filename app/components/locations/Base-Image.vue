<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="rounded-xl md:rounded-2xl lg:rounded-4xl relative w-full overflow-hidden"
  >
    <picture>
      <source
        media="(min-width: 1024px) and (max-width: 1439px)"
        :srcset="`${src}, ${src} 2x`"
      />
      <source
        media="(min-width: 768px) and (max-width: 1023px)"
        :srcset="`${src}, ${src} 2x`"
      />
      <source media="(max-width: 575px)" :srcset="`${src}, ${src} 2x`" />
      <img :src="src" class="w-full h-full object-cover" />
    </picture>
  </div>
</template>

<style scoped></style>
