<script setup>
// Target date: February 6, 2026 at 00:00:00 (start of Olympic Winter Games)
const targetDate = new Date("2026-02-06T00:00:00").getTime();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
  } else {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  }
};

const formatNumber = (num) => {
  return num.toString().padStart(2, "0");
};

let timer = null;

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<template>
  <div
    class="hidden lg:block countdown-bar bg-white rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,49,61,0.25)] px-8 lg:px-[120px] py-5"
  >
    <div class="flex items-center gap-10">
      <!-- Event Info -->
      <div class="flex items-center gap-2 pr-5 whitespace-nowrap">
        <span class="font-bold text-lg text-black"
          >Olympic Winter Games Milano Cortina 2026</span
        >
        <span class="text-black px-2">-</span>
        <span class="text-[14.6px] text-black">6-22 February, 2026</span>
      </div>

      <!-- Countdown Timer -->
      <div class="flex items-center pl-5">
        <!-- Days -->
        <div class="flex flex-col items-center min-w-[42px] px-0.5">
          <span class="text-[32px] text-black leading-tight">{{
            formatNumber(days)
          }}</span>
          <span class="text-[13px] text-black">Days</span>
        </div>

        <span class="text-[26px] text-black px-0.5">:</span>

        <!-- Hours -->
        <div class="flex flex-col items-center min-w-[42px] px-0.5">
          <span class="text-[32px] text-black leading-tight">{{
            formatNumber(hours)
          }}</span>
          <span class="text-[13px] text-black">Hrs</span>
        </div>

        <span class="text-[26px] text-black px-0.5">:</span>

        <!-- Minutes -->
        <div class="flex flex-col items-center min-w-[42px] px-0.5">
          <span class="text-[32px] text-black leading-tight">{{
            formatNumber(minutes)
          }}</span>
          <span class="text-[14px] text-black">Min</span>
        </div>

        <span class="text-[26px] text-black px-0.5">:</span>

        <!-- Seconds -->
        <div class="flex flex-col items-center min-w-[42px] px-0.5">
          <span class="text-[32px] text-black leading-tight">{{
            formatNumber(seconds)
          }}</span>
          <span class="text-[13.5px] text-black">Sec</span>
        </div>
      </div>

      <!-- Omega Logo -->
      <img
        src="/omega.svg"
        alt="Omega - Official Timekeeper"
        class="h-10 w-auto flex-shrink-0"
      />
    </div>
  </div>
</template>
