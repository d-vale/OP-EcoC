<script setup>
import BasePlay from "./Base-PlayButton.vue";

defineProps({
  title: {
    type: String,
    default: "A valley whose heart beats for biathlon.",
  },
  text: {
    type: String,
    default:
      "The Antholz Valley encompasses a wide range of history, tradition, and sports. Here, the native language is German, and the local community is proud of its traditions and roots, living in harmony with nature amid the mountains of Alto Adige - Südtirol. The Antholzer See is one of the largest mountain lakes in the region. Situated 1,642m above sea level, the lake sits at the end of the valley, not far from the Austrian-Italian border at the foot of the Staller Saddle. It is surrounded by the imposing peaks of the Rieserferner-Ahrn Nature Park, which boasts the highest number of glaciers among the seven natural parks of Alto Adige - Südtirol. Biathlon is an essential part of the Antholz Valley, so much so that the area is recognised as a world-renowned center of excellence for the sport. In 1971 the area hosted its first international biathlon competition under the direction of Paul Zingerle, a hotelier from Anterselva. Zingerle had cross-country ski trails laid out and set up shooting ranges at Lake Antholzer. The event was a success, and four years later Antholz had the honour of staging the 14th Biathlon World Championships. Antholz is now a traditional host for the IBU Biathlon World Cup every January. In this magnificent and remote corner of the Alps, tens of thousands of fans and spectators come from all over the world to root for their favourite biathletes. The past, present, and future of Antholz make it the perfect place to host the Olympic biathlon competitions of Milano Cortina 2026.",
  },
  videoUrl: {
    type: String,
    default: "#",
  },
});
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
    <div class="flex flex-col">
      <h2 class="heading-primary">
        {{ title }}
      </h2>
    </div>

    <div class="w-full md:w-[50%] flex flex-col gap-6 md:gap-8 lg:gap-12">
      <p class="text-body">{{ text }}</p>
      <BasePlay :url="videoUrl" />
    </div>
  </div>
</template>

<style scoped></style>
