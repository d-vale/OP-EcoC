<script setup lang="ts">
import { ref, watch } from 'vue'

const isLanguageDropdownOpen = ref(false)
const isSearchOpen = ref(false)
const isMobileMenuOpen = ref(false)
const currentLanguage = ref('Français')

const languages = [
  { code: 'en', name: 'English', path: '/en/milano-cortina-2026' },
  { code: 'it', name: 'Italiano', path: '/it/milano-cortina-2026' },
  { code: 'fr', name: 'Français', path: '/fr/milano-cortina-2026' },
  { code: 'de', name: 'Deutsch', path: '/de/milano-cortina-2026' },
  { code: 'pt', name: 'Português', path: '/pt/milano-cortina-2026' },
  { code: 'es', name: 'Español', path: '/es/milano-cortina-2026' },
  { code: 'ja', name: '日本語', path: '/ja/milano-cortina-2026' },
  { code: 'ar', name: 'العربية', path: '/ar/milano-cortina-2026' },
  { code: 'zh', name: '中文', path: '/zh/milano-cortina-2026' },
  { code: 'hi', name: 'हिन्दी', path: '/hi/milano-cortina-2026' },
  { code: 'ko', name: '한국어', path: '/ko/milano-cortina-2026' },
  { code: 'ru', name: 'Русский', path: '/ru/milano-cortina-2026' }
]

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <div class="sticky top-0 z-10 py-10 navbar-wrapper">
    <div class="bg-white/90 backdrop-blur-md rounded-[48px] md:rounded-4xl lg:rounded-[48px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-w-full mx-auto">
      <nav aria-labelledby="header-nav" class="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8 h-[72px]">
        <h2 class="sr-only" id="header-nav">Navigation principale</h2>

        <ul class="flex items-center gap-6 lg:gap-12 list-none m-0 p-0">
          <li>
            <NuxtLink to="/" class="flex items-center no-underline">
              <img
                src="https://gstatic.olympics.com/s3/mc2026/emblems/mico2026-emblem-oly.png"
                alt="Jeux Olympiques d'Hiver Milano Cortina 2026"
                class="h-10 md:h-11 lg:h-14 w-auto"
              >
            </NuxtLink>
          </li>

          <li class="hidden lg:block">
            <ul class="flex gap-8 list-none m-0 p-0 items-center">
              <li class="list-none">
                <NuxtLink
                  to="/"
                  class="text-[13px] font-bold text-gray-900 no-underline transition-colors duration-200 whitespace-nowrap tracking-[0.3px] hover:text-[#0085c7]"
                  alt="Le Voyage de la Flamme"
                >
                  Accueil
                </NuxtLink>
              </li>
              <li class="list-none">
                <NuxtLink
                  to="/locations"
                  class="text-[13px] font-bold text-gray-900 no-underline transition-colors duration-200 whitespace-nowrap tracking-[0.3px] hover:text-[#0085c7]"
                  alt="Calendrier des compétitions"
                >
                  Lieux
                </NuxtLink>
              </li>
              <li class="list-none">
                <NuxtLink
                  to="/articles"
                  class="text-[13px] font-bold text-gray-900 no-underline transition-colors duration-200 whitespace-nowrap tracking-[0.3px] hover:text-[#0085c7]"
                  alt="Jouer & Gagner"
                >
                  Articles
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>

        <ul class="flex items-center gap-2 md:gap-3 lg:gap-4 list-none m-0 p-0">
          <li id="loginProfile" class="hidden lg:block">
            <a
              href="/sign-in"
              type="button"
              class="inline-flex items-center justify-center px-6 py-2.5 bg-[#0085c7] text-white border-none rounded-3xl no-underline text-[13px] font-bold cursor-pointer transition-all duration-200 tracking-[0.3px] hover:bg-[#006ba6] hover:-translate-y-px hover:shadow-[0_4px_8px_rgba(0,133,199,0.3)]"
            >
              <span class="text-[13px] font-bold tracking-[0.3px]">S'inscrire</span>
            </a>
          </li>

          <li class="relative list-none hidden lg:block" id="languageSelection">
            <div class="relative">
              <div
                role="combobox"
                tabindex="0"
                :aria-label="`Langue actuelle: ${currentLanguage} - Cliquez pour changer de langue`"
                :aria-expanded="isLanguageDropdownOpen"
                aria-haspopup="listbox"
                aria-controls="dropdown-list"
                class="flex items-center gap-2 px-4 border border-gray-300 rounded-3xl bg-white cursor-pointer transition-all duration-200 min-w-[130px] h-10 hover:border-[#0085c7] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                @click="toggleLanguageDropdown"
                @keydown.enter="toggleLanguageDropdown"
                @keydown.space.prevent="toggleLanguageDropdown"
              >
                <div class="flex-1">
                  <span class="text-[13px] font-bold text-gray-900 tracking-[0.3px]">{{ currentLanguage }}</span>
                </div>
                <div aria-hidden="true" class="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none">
                    <path d="M8.00013 8.41669L10.6001 5.81669C10.7224 5.69447 10.8779 5.63336 11.0668 5.63336C11.2557 5.63336 11.4112 5.69447 11.5335 5.81669C11.6557 5.93892 11.7168 6.09447 11.7168 6.28336C11.7168 6.47225 11.6557 6.6278 11.5335 6.75003L8.4668 9.81669C8.33346 9.95003 8.17791 10.0167 8.00013 10.0167C7.82235 10.0167 7.6668 9.95003 7.53346 9.81669L4.4668 6.75003C4.34457 6.6278 4.28346 6.47225 4.28346 6.28336C4.28346 6.09447 4.34457 5.93891 4.4668 5.81669C4.58902 5.69447 4.74457 5.63336 4.93346 5.63336C5.12235 5.63336 5.27791 5.69447 5.40013 5.81669L8.00013 8.41669Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              <div
                v-show="isLanguageDropdownOpen"
                id="dropdown-list"
                role="listbox"
                aria-label="Options de langue"
                tabindex="-1"
                class="absolute top-[calc(100%+8px)] right-0 bg-white border border-gray-300 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] min-w-[180px] max-h-[400px] overflow-y-auto z-[1000] py-2"
              >
                <a
                  v-for="lang in languages"
                  :key="lang.code"
                  :href="lang.path"
                  :id="`dropdown-list-link-${lang.code}`"
                  :lang="lang.code"
                  role="option"
                  :aria-selected="currentLanguage === lang.name"
                  class="block px-5 py-3 text-gray-900 no-underline text-[13px] font-medium transition-all duration-200 tracking-[0.2px] hover:bg-gray-50 hover:text-[#0085c7] aria-[selected=true]:bg-[#e8f4f8] aria-[selected=true]:text-[#0085c7] aria-[selected=true]:font-bold"
                >
                  <span class="text-[13px]">{{ lang.name }}</span>
                </a>
              </div>
            </div>
          </li>

          <li id="loginProfile" class="lg:hidden">
            <a
              href="/sign-in"
              class="inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 p-0 border border-gray-300 rounded-full bg-white cursor-pointer transition-all duration-200 hover:border-[#0085c7] hover:bg-gray-50 hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            >
              <span class="flex items-center justify-center text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <title>S'inscrire</title>
                  <path d="M8 8C7.26667 8 6.63889 7.73889 6.11667 7.21667C5.59444 6.69444 5.33333 6.06667 5.33333 5.33333C5.33333 4.6 5.59444 3.97222 6.11667 3.45C6.63889 2.92778 7.26667 2.66667 8 2.66667C8.73333 2.66667 9.36111 2.92778 9.88333 3.45C10.4056 3.97222 10.6667 4.6 10.6667 5.33333C10.6667 6.06667 10.4056 6.69444 9.88333 7.21667C9.36111 7.73889 8.73333 8 8 8ZM2.66667 13.3333V11.4667C2.66667 11.0889 2.76389 10.7444 2.95833 10.4333C3.15278 10.1222 3.41111 9.88889 3.73333 9.73333C4.44444 9.4 5.16667 9.15 5.9 8.98333C6.63333 8.81667 7.31111 8.73333 8 8.73333C8.68889 8.73333 9.36111 8.81667 10.1 8.98333C10.8333 9.15 11.5556 9.4 12.2667 9.73333C12.5889 9.88889 12.8472 10.1222 13.0417 10.4333C13.2361 10.7444 13.3333 11.0889 13.3333 11.4667V13.3333H2.66667ZM4 12H12V11.4667C12 11.3778 11.9722 11.2944 11.9167 11.2167C11.8611 11.1389 11.7889 11.0778 11.7 11.0333C11.0889 10.7444 10.4667 10.5278 9.83333 10.3833C9.2 10.2389 8.58889 10.1667 8 10.1667C7.41111 10.1667 6.8 10.2389 6.16667 10.3833C5.53333 10.5278 4.91111 10.7444 4.3 11.0333C4.21111 11.0778 4.13889 11.1389 4.08333 11.2167C4.02778 11.2944 4 11.3778 4 11.4667V12ZM8 6.66667C8.36667 6.66667 8.68056 6.53611 8.94167 6.275C9.20278 6.01389 9.33333 5.7 9.33333 5.33333C9.33333 4.96667 9.20278 4.65278 8.94167 4.39167C8.68056 4.13056 8.36667 4 8 4C7.63333 4 7.31944 4.13056 7.05833 4.39167C6.79722 4.65278 6.66667 4.96667 6.66667 5.33333C6.66667 5.7 6.79722 6.01389 7.05833 6.275C7.31944 6.53611 7.63333 6.66667 8 6.66667Z" fill="currentColor"/>
                </svg>
              </span>
            </a>
          </li>

          <li id="search">
            <button
              :aria-expanded="isSearchOpen"
              aria-controls="algolia-search-container"
              type="button"
              class="inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 p-0 border border-gray-300 rounded-full bg-white cursor-pointer transition-all duration-200 hover:border-[#0085c7] hover:bg-gray-50 hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
              @click="toggleSearch"
            >
              <span class="flex items-center justify-center text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <title>Rechercher</title>
                  <path d="M6.33333 10.6667C5.12222 10.6667 4.09722 10.2472 3.25833 9.40833C2.41944 8.56944 2 7.54444 2 6.33333C2 5.12222 2.41944 4.09722 3.25833 3.25833C4.09722 2.41944 5.12222 2 6.33333 2C7.54444 2 8.56944 2.41944 9.40833 3.25833C10.2472 4.09722 10.6667 5.12222 10.6667 6.33333C10.6667 6.82222 10.5889 7.28333 10.4333 7.71667C10.2778 8.15 10.0667 8.53333 9.8 8.86667L13.5333 12.6C13.6556 12.7222 13.7167 12.8778 13.7167 13.0667C13.7167 13.2556 13.6556 13.4111 13.5333 13.5333C13.4111 13.6556 13.2556 13.7167 13.0667 13.7167C12.8778 13.7167 12.7222 13.6556 12.6 13.5333L8.86667 9.8C8.53333 10.0667 8.15 10.2778 7.71667 10.4333C7.28333 10.5889 6.82222 10.6667 6.33333 10.6667ZM6.33333 9.33333C7.16667 9.33333 7.875 9.04167 8.45833 8.45833C9.04167 7.875 9.33333 7.16667 9.33333 6.33333C9.33333 5.5 9.04167 4.79167 8.45833 4.20833C7.875 3.625 7.16667 3.33333 6.33333 3.33333C5.5 3.33333 4.79167 3.625 4.20833 4.20833C3.625 4.79167 3.33333 5.5 3.33333 6.33333C3.33333 7.16667 3.625 7.875 4.20833 8.45833C4.79167 9.04167 5.5 9.33333 6.33333 9.33333Z" fill="currentColor"/>
                </svg>
              </span>
            </button>
          </li>

          <li class="lg:hidden">
            <button
              id="hamburger-button"
              :aria-expanded="isMobileMenuOpen"
              aria-controls="mobile-menu-modal"
              type="button"
              class="inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 p-0 border border-gray-300 rounded-full bg-white cursor-pointer transition-all duration-200 hover:border-[#0085c7] hover:bg-gray-50 hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
              @click="toggleMobileMenu"
            >
              <span class="flex items-center justify-center text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <title>Ouvrir le menu principal</title>
                  <path d="M2.66667 12C2.47778 12 2.31944 11.9361 2.19167 11.8083C2.06389 11.6806 2 11.5222 2 11.3333C2 11.1444 2.06389 10.9861 2.19167 10.8583C2.31944 10.7306 2.47778 10.6667 2.66667 10.6667H13.3333C13.5222 10.6667 13.6806 10.7306 13.8083 10.8583C13.9361 10.9861 14 11.1444 14 11.3333C14 11.5222 13.9361 11.6806 13.8083 11.8083C13.6806 11.9361 13.5222 12 13.3333 12H2.66667ZM2.66667 8.66667C2.47778 8.66667 2.31944 8.60278 2.19167 8.475C2.06389 8.34722 2 8.18889 2 8C2 7.81111 2.06389 7.65278 2.19167 7.525C2.31944 7.39722 2.47778 7.33333 2.66667 7.33333H13.3333C13.5222 7.33333 13.6806 7.39722 13.8083 7.525C13.9361 7.65278 14 7.81111 14 8C14 8.18889 13.9361 8.34722 13.8083 8.475C13.6806 8.60278 13.5222 8.66667 13.3333 8.66667H2.66667ZM2.66667 5.33333C2.47778 5.33333 2.31944 5.26944 2.19167 5.14167C2.06389 5.01389 2 4.85556 2 4.66667C2 4.47778 2.06389 4.31944 2.19167 4.19167C2.31944 4.06389 2.47778 4 2.66667 4H13.3333C13.5222 4 13.6806 4.06389 13.8083 4.19167C13.9361 4.31944 14 4.47778 14 4.66667C14 4.85556 13.9361 5.01389 13.8083 5.14167C13.6806 5.26944 13.5222 5.33333 13.3333 5.33333H2.66667Z" fill="currentColor"/>
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
<div
          v-if="isMobileMenuOpen"
          id="mobile-menu-modal"
          class="fixed inset-0 z-[9999] bg-white flex flex-col"
        >
          <div class="absolute top-6 right-6">
            <button
              type="button"
              class="inline-flex items-center justify-center w-10 h-10 p-0 border border-gray-300 rounded-full bg-white cursor-pointer transition-all duration-200 hover:border-[#0085c7] hover:bg-gray-50 hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
              @click="toggleMobileMenu"
              aria-label="Fermer le menu"
            >
              <span class="flex items-center justify-center text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none">
                  <path d="M8 8.93333L4.93333 12C4.81111 12.1222 4.65556 12.1833 4.46667 12.1833C4.27778 12.1833 4.12222 12.1222 4 12C3.87778 11.8778 3.81667 11.7222 3.81667 11.5333C3.81667 11.3444 3.87778 11.1889 4 11.0667L7.06667 8L4 4.93333C3.87778 4.81111 3.81667 4.65556 3.81667 4.46667C3.81667 4.27778 3.87778 4.12222 4 4C4.12222 3.87778 4.27778 3.81667 4.46667 3.81667C4.65556 3.81667 4.81111 3.87778 4.93333 4L8 7.06667L11.0667 4C11.1889 3.87778 11.3444 3.81667 11.5333 3.81667C11.7222 3.81667 11.8778 3.87778 12 4C12.1222 4.12222 12.1833 4.27778 12.1833 4.46667C12.1833 4.65556 12.1222 4.81111 12 4.93333L8.93333 8L12 11.0667C12.1222 11.1889 12.1833 11.3444 12.1833 11.5333C12.1833 11.7222 12.1222 11.8778 12 12C11.8778 12.1222 11.7222 12.1833 11.5333 12.1833C11.3444 12.1833 11.1889 12.1222 11.0667 12L8 8.93333Z" fill="currentColor"/>
                </svg>
              </span>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto px-6 py-8 pt-24">
            <nav class="flex flex-col gap-8">
              <ul class="flex flex-col gap-6 list-none m-0 p-0">
                <li>
                  <NuxtLink
                    to="/"
                    class="text-2xl font-bold text-gray-900 no-underline transition-colors duration-200 hover:text-[#0085c7]"
                    @click="toggleMobileMenu"
                  >
                    Accueil
                  </NuxtLink> 
                </li>
                <li>
                  <NuxtLink
                    to="/locations"
                    class="text-2xl font-bold text-gray-900 no-underline transition-colors duration-200 hover:text-[#0085c7]"
                    @click="toggleMobileMenu"
                  >
                    Lieux
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/articles"
                    class="text-2xl font-bold text-gray-900 no-underline transition-colors duration-200 hover:text-[#0085c7]"
                    @click="toggleMobileMenu"
                  >
                    Articles
                  </NuxtLink>
                </li>
              </ul>

              <div class="border-t border-gray-200 pt-6">
                <div class="relative">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full px-6 py-4 border border-gray-300 rounded-3xl bg-white text-gray-900 text-lg font-bold transition-all duration-200 hover:bg-gray-50 hover:border-[#0085c7]"
                    @click="isLanguageDropdownOpen = !isLanguageDropdownOpen"
                  >
                    <span>{{ currentLanguage }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" :class="{ 'rotate-180': isLanguageDropdownOpen }" class="transition-transform duration-200">
                      <path d="M8.00013 8.41669L10.6001 5.81669C10.7224 5.69447 10.8779 5.63336 11.0668 5.63336C11.2557 5.63336 11.4112 5.69447 11.5335 5.81669C11.6557 5.93892 11.7168 6.09447 11.7168 6.28336C11.7168 6.47225 11.6557 6.6278 11.5335 6.75003L8.4668 9.81669C8.33346 9.95003 8.17791 10.0167 8.00013 10.0167C7.82235 10.0167 7.6668 9.95003 7.53346 9.81669L4.4668 6.75003C4.34457 6.6278 4.28346 6.47225 4.28346 6.28336C4.28346 6.09447 4.34457 5.93891 4.4668 5.81669C4.58902 5.69447 4.74457 5.63336 4.93346 5.63336C5.12235 5.63336 5.27791 5.69447 5.40013 5.81669L8.00013 8.41669Z" fill="currentColor"/>
                    </svg>
                  </button>

                  <Transition
                    enter-active-class="transition-all duration-200 ease-out"
                    leave-active-class="transition-all duration-150 ease-in"
                    enter-from-class="opacity-0 -translate-y-2"
                    leave-to-class="opacity-0 -translate-y-2"
                  >
                    <div
                      v-if="isLanguageDropdownOpen"
                      class="mt-2 border border-gray-300 rounded-2xl bg-white shadow-lg overflow-hidden"
                    >
                      <a
                        v-for="lang in languages"
                        :key="lang.code"
                        :href="lang.path"
                        :lang="lang.code"
                        class="block px-6 py-3 text-gray-900 no-underline text-base font-medium transition-all duration-200 hover:bg-gray-50 hover:text-[#0085c7]"
                        :class="{ 'bg-[#e8f4f8] text-[#0085c7] font-bold': currentLanguage === lang.name }"
                      >
                        {{ lang.name }}
                      </a>
                    </div>
                  </Transition>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.navbar-wrapper {
  margin-left: -80px;
  margin-right: -80px;
  padding-left: 80px;
  padding-right: 80px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
