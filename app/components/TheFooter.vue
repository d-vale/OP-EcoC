<script setup>
import { ref } from 'vue'

const props = defineProps({
  // Main logo
  mainLogo: {
    type: String,
    default: 'https://gstatic.olympics.com/s3/mc2026/emblems/mico2026-emblem-oly-white.svg'
  },
  // Partners/Sponsors logos - avec les vraies URLs du site officiel
  partners: {
    type: Array,
    default: () => [
      { 
        name: 'Airbnb', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1747644178/primary/qgrehhwbz80ffsgwiq2j', 
        url: '/partners#airbnb' 
      },
      { 
        name: 'Alibaba', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1746720216/primary/sir245g6rpsxd1sepdrh', 
        url: '/partners#alibaba' 
      },
      { 
        name: 'Allianz', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1746720251/primary/jsjprekgjjsg8ijcpjvk', 
        url: '/partners#allianz' 
      },
      { 
        name: 'Coca-Cola', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1746720299/primary/rf1dzqfi1chozkvryubp', 
        url: '/partners#cocacola-mengniu' 
      },
      { 
        name: 'Corona Cero', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1746720577/primary/muqexfmzedicfdm36mri', 
        url: '/partners#ab-inbev' 
      },
      { 
        name: 'Deloitte', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1746720328/primary/pvtwcygkaotlru2ldc4b', 
        url: '/partners#deloitte' 
      },
      { 
        name: 'Omega', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1746720356/primary/ucjmsrea6lxp9yadodir', 
        url: '/partners#omega' 
      },
      { 
        name: 'P&G', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1746720387/primary/umuiivkhuqrzxafubmhc', 
        url: '/partners#pg' 
      },
      { 
        name: 'Samsung', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/primary/h9k7r15munpklme6nioj', 
        url: '/partners#samsung' 
      },
      { 
        name: 'TCL', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1746720448/primary/a2t2vqmigvhqlrdnzsbn', 
        url: '/partners#tcl' 
      },
      { 
        name: 'Visa', 
        logo: 'https://img.olympics.com/images/image/private/t_mico_partner_v2/v1746720477/primary/qfthngqum2mkfaxy3eee', 
        url: '/partners#visa' 
      }
    ]
  },
  // Navigation columns
  navigation: {
    type: Array,
    default: () => [
      {
        title: 'The Games',
        links: [
          { label: 'Schedule', url: '#' },
          { label: 'Sports', url: '#' },
          { label: 'Territories', url: '#' },
          { label: 'Venues', url: '#' },
          { label: 'Road to 2026', url: '#' },
          { label: 'Olympic Torch Relay', url: '#' }
        ]
      },
      {
        title: 'Join the Games',
        links: [
          { label: 'Fan26', url: '#' },
          { label: 'Italia dei Giochi', url: '#' },
          { label: 'Become a Partner', url: '#' },
          { label: 'Become an Impact Provider', url: '#' },
          { label: 'Become a Licencee', url: '#' }
        ]
      },
      {
        title: 'About us',
        links: [
          { label: 'About Milano Cortina 2026', url: '#' },
          { label: 'Board of Directors', url: '#' },
          { label: "Athletes' Commission CAT26", url: '#' },
          { label: 'The Italian Spirit', url: '#' },
          { label: 'Mascots', url: '#' },
          { label: 'The Look of the Games', url: '#' },
          { label: 'The Medals', url: '#' },
          { label: 'Documents', url: '#' }
        ]
      },
      {
        title: 'Our Projects',
        links: [
          { label: 'Explore Projects', url: '#' },
          { label: 'Label Gen26', url: '#' },
          { label: 'Overview', url: '#' }
        ]
      }
    ]
  },
  // Secondary navigation links
  secondaryLinks: {
    type: Array,
    default: () => [
      { label: 'Olympics.com', url: 'https://olympics.com' },
      { label: 'Olympic Channel', url: '#' },
      { label: 'IOC', url: '#' },
      { label: 'Museum', url: '#' },
      { label: 'Shop', url: '#' },
      { label: 'Contact us', url: '#' }
    ]
  },
  // Legal links
  legalLinks: {
    type: Array,
    default: () => [
      { label: 'Cookie Policy', url: '#' },
      { label: 'Privacy Policy', url: '#' },
      { label: 'Terms Of Service', url: '#' },
      { label: 'Accessibility', url: '#' }
    ]
  },
  // Social media links
  socialLinks: {
    type: Array,
    default: () => [
      { name: 'Spotify', icon: 'spotify', url: '#' },
      { name: 'Facebook', icon: 'facebook', url: '#' },
      { name: 'TikTok', icon: 'tiktok', url: '#' },
      { name: 'YouTube', icon: 'youtube', url: '#' },
      { name: 'X', icon: 'x', url: '#' },
      { name: 'LinkedIn', icon: 'linkedin', url: '#' },
      { name: 'Instagram', icon: 'instagram', url: '#' }
    ]
  },
  // App store links
  appStoreUrl: {
    type: String,
    default: 'https://img.olympics.com/images/image/private/t_original/primary/f4orztqs8nvmrlxsc9sv'
  },
  googlePlayUrl: {
    type: String,
    default: 'https://img.olympics.com/images/image/private/t_original/primary/zjdxd8nczbkn9aeftwfy'
  },
  // Copyright
  copyrightYear: {
    type: Number,
    default: 2025
  }
})
</script>

<template>
  <footer 
    class="w-full text-white font-[Poppins,sans-serif]" 
    style="background-image: linear-gradient(26deg, rgb(1, 100, 124) 74.77%, rgb(33, 223, 226) 136.7%);"
  >
    
    <!-- Partners Section -->
    <section class="w-full py-10 lg:py-12 px-6 sm:px-8 lg:px-12 xl:px-16">
      <h2 class="text-xl sm:text-2xl lg:text-[1.8rem] font-semibold mb-8 lg:mb-10 leading-[2.4rem]">
        Worldwide Olympic and Paralympic Partners
      </h2>
      
      <!-- Partners logos grid - 2 rows layout comme sur le site -->
      <ul class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8 lg:gap-x-16 lg:gap-y-10">
        <li 
          v-for="partner in partners" 
          :key="partner.name"
          class="flex items-center justify-start"
        >
          <a 
            :href="partner.url"
            class="block h-10 sm:h-12 lg:h-14 opacity-90 hover:opacity-100 transition-opacity duration-200"
          >
            <img 
              :src="partner.logo" 
              :alt="partner.name"
              loading="lazy"
              class="h-full w-auto object-contain"
            />
          </a>
        </li>
      </ul>
    </section>

    <!-- Main Footer Content -->
    <section class="px-6 sm:px-8 lg:px-12 xl:px-16 py-10 lg:py-14">
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-8">
        
        <!-- Logo & App Download Column -->
        <div class="lg:col-span-1">
          <!-- Main Logo -->
          <div class="mb-6">
            <img 
              :src="mainLogo" 
              alt="Milano Cortina 2026"
              class="h-28 sm:h-32 lg:h-36 w-auto"
            />
          </div>
          
          <!-- Switch to Paralympic -->
          <a 
            href="#" 
            class="inline-flex items-center gap-2 text-white underline hover:no-underline text-sm mb-6 group"
          >
            Switch to Paralympic Games
            <svg 
              class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <!-- App Download -->
          <div class="mt-6">
            <p class="text-sm text-white/80 mb-3">Download the Official App</p>
            <div class="flex flex-wrap gap-2">
              <a href="#" class="hover:opacity-80 transition-opacity">
                <img
                  :src="googlePlayUrl"
                  alt="Get it on Google Play"
                  class="h-9 sm:h-10 w-auto"
                />
              </a>
              <a href="#" class="hover:opacity-80 transition-opacity">
                <img
                  :src="appStoreUrl"
                  alt="Download on the App Store"
                  class="h-9 sm:h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Navigation Columns -->
        <nav class="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6">
          <div v-for="column in navigation" :key="column.title">
            <h3 class="font-semibold text-base mb-4">{{ column.title }}</h3>
            <ul class="space-y-2.5">
              <li v-for="link in column.links" :key="link.label">
                <a 
                  :href="link.url" 
                  class="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <!-- Secondary Navigation Bar -->
    <div class="mx-6 sm:mx-8 lg:mx-12 xl:mx-16 py-5 px-6 bg-white/10 backdrop-blur-sm rounded-xl">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Secondary Links -->
        <nav class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a 
            v-for="link in secondaryLinks" 
            :key="link.label"
            :href="link.url"
            class="text-sm text-white/90 hover:text-white transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>
        
        <!-- Social Icons -->
        <div class="flex items-center gap-3 sm:gap-4">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url"
            :aria-label="social.name"
            class="text-white/80 hover:text-white transition-colors"
          >
            <!-- Spotify -->
            <svg v-if="social.icon === 'spotify'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <!-- Facebook -->
            <svg v-else-if="social.icon === 'facebook'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <!-- TikTok -->
            <svg v-else-if="social.icon === 'tiktok'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
            <!-- YouTube -->
            <svg v-else-if="social.icon === 'youtube'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <!-- X (Twitter) -->
            <svg v-else-if="social.icon === 'x'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <!-- LinkedIn -->
            <svg v-else-if="social.icon === 'linkedin'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <!-- Instagram -->
            <svg v-else-if="social.icon === 'instagram'" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Bar - Legal & Copyright -->
    <div class="px-6 sm:px-8 lg:px-12 xl:px-16 py-6 mt-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Legal Links -->
        <nav class="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a 
            v-for="link in legalLinks" 
            :key="link.label"
            :href="link.url"
            class="text-sm text-white/70 hover:text-white underline transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>
        
        <!-- Copyright -->
        <p class="text-sm text-white/70">
          Copyright {{ copyrightYear }}. All rights reserved
        </p>
      </div>
    </div>
  </footer>
</template>