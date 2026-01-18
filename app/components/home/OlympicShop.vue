<script setup>
const shopItems = [
  {
    id: 1,
    title: "Mascot Collection",
    image: "/home/shop/mascot-collection.webp",
    link: "/",
  },
  {
    id: 2,
    title: "Apparel",
    image: "/home/shop/apparel.webp",
    link: "/",
  },
  {
    id: 3,
    title: "Accessories",
    image: "/home/shop/accessories.webp",
    link: "/",
  },
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- Header with link -->
    <NuxtLink to="/" class="flex items-center gap-6 group w-fit">
      <h2 class="heading-primary">Olympic Shop</h2>
      <svg
        class="w-8 h-8 text-[#00313D] transition-transform group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </NuxtLink>

    <!-- Shop cards grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="item in shopItems"
        :key="item.id"
        class="shop-card"
      >
        <!-- Image -->
        <div class="shop-card-image">
          <NuxtImg
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover"
            loading="lazy"
            format="webp"
          />
        </div>

        <!-- Content -->
        <div class="shop-card-content">
          <h3 class="shop-card-title">{{ item.title }}</h3>

          <NuxtLink :to="item.link" class="shop-card-button">
            <span>Buy now</span>
            <span class="shop-card-button-icon">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.shop-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.shop-card-image {
  aspect-ratio: 4/3;
  overflow: hidden;
}

.shop-card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 16px;
}

.shop-card-title {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: #00313d;
}

.shop-card-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(90deg, #037580 0%, #028d7d 100%);
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  padding: 8px 8px 8px 24px;
  border-radius: 32px;
  text-decoration: none;
  width: fit-content;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.shop-card-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(3, 117, 128, 0.3);
}

.shop-card-button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
  padding: 2px;
}
</style>
