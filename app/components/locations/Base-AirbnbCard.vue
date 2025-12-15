<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'How to get here by public transportation ?'
  },
  subtitle: {
    type: String,
    default: 'Only with Official Hospitality'
  },
  buttonText: {
    type: String,
    default: "Don't miss out"
  },
  buttonLink: {
    type: String,
    default: '#'
  },
  imageSrc: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: 'Hero image'
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <section class="relative w-full h-64 sm:h-80 md:h-96 lg:h-100 rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden">
    <!-- Background image (right side) -->
    <div class="absolute inset-0">
      <img 
        v-if="imageSrc"
        :src="imageSrc" 
        :alt="imageAlt"
        class="w-full h-full object-cover object-center"
      />
      <div 
        v-else 
        class="w-full h-full bg-linear-to-br from-amber-100 via-teal-100 to-amber-200"
      />
    </div>

    <!-- Diagonal teal overlay (left side) -->
    <div class="absolute inset-0 pointer-events-none">
      <svg 
        viewBox="0 0 1200 400" 
        preserveAspectRatio="xMinYMin slice"
        class="w-full h-full"
      >
        <defs>
          <!-- Main teal gradient -->
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stop-color="#0d6068" />
            <stop offset="40%" stop-color="#0f7178" />
            <stop offset="100%" stop-color="#1a8a8a" />
          </linearGradient>
          
          <!-- Subtle light effect -->
          <filter id="glowEffect">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <!-- Main diagonal shape -->
        <polygon 
          points="0,0 700,0 900,400 0,400" 
          fill="url(#tealGrad)"
        />
        
        <!-- Light wave curve -->
        <path 
          d="M 0 340 Q 200 300 400 340 T 600 320" 
          stroke="rgba(255,255,255,0.4)" 
          stroke-width="2" 
          fill="none"
          filter="url(#glowEffect)"
        />
        <path 
          d="M 0 360 Q 150 330 300 355" 
          stroke="rgba(255,255,255,0.25)" 
          stroke-width="1.5" 
          fill="none"
        />
      </svg>
    </div>

    <!-- Content overlay -->
    <div class="relative z-10 h-full flex items-center">
      <div class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="max-w-md lg:max-w-lg">
          <!-- Title -->
          <h2 class="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4">
            {{ title }}
          </h2>
          
          <!-- Subtitle -->
          <p class="text-white/90 text-base sm:text-lg italic mb-6 sm:mb-8">
            {{ subtitle }}
          </p>
          
          <!-- CTA Button -->
          <a 
            :href="buttonLink"
            @click="handleClick"
            class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm 
                   border-2 border-white rounded-full px-6 py-3 
                   text-white font-medium text-sm sm:text-base
                   hover:bg-white hover:text-teal-700 
                   transition-all duration-300 ease-out
                   group cursor-pointer"
          >
            <span>{{ buttonText }}</span>
            <span class="flex items-center justify-center w-8 h-8 
                        bg-white rounded-full text-teal-700
                        group-hover:bg-teal-700 group-hover:text-white
                        transition-all duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                stroke-width="2"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>