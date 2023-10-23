<template>
<RotateImages/>
<div class="container about">
    <h3>About us</h3>
    <p>Explore the valuable, historical, and heritage places of Turkic countries through our curated selection of articles, photos, and videos. Discover the beauty of ancient ruins, stunning mosques, medieval fortresses, and intricate tilework, and learn about legendary rulers, artists, and architects who left their mark on the region.</p>
 </div>
 <div class="container newsIt flex justify-center max-md:flex-col gap-4 max-lg:flex-wrap">
    <InfoComponent
      v-for="(el, idx) in countryInfo"
      :key="idx"
      :img="el.img"
      :count="el.count"
      :info="el.info"
    />
    </div>
    <Mission/>
    <CCarusel/>
    <CVideo/>
    <Contact/>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import InfoComponent from '@/components/InfoComponent.vue'
import Mission from '@/components/Mission.vue'
import CCarusel from '@/components/CCarusel.vue'
import CVideo from '@/components/CVideo.vue'
import Contact from '@/components/Contact.vue'
import RotateImages from '@/components/RotateImages.vue'



const countryInfo = reactive([
  { img: '/public/images/bir1.png', info: 'Attractions', count: 142 },
  { img: '/public/images/bir1.png', info: 'Destinations', count: 254 },
  { img: '/public/images/bir1.png', info: 'Countries', count: 7 },
  { img: '/public/images/bir1.png', info: 'Religions', count: 3 }
]);
</script>
<style scoped>
.newsIt{
    /* background-color: red; */
    width: 89%;
}
.about{
    padding: 50px;
    background-image: url(/public/images/vecnew.png);
}
.about h3{
color: var(--White, #FFF);
font-feature-settings: 'liga' off, 'calt' off;
text-shadow: 0px 10px 50px rgba(12, 15, 48, 0.40);
font-family: "Playfair Display",sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 130%; 
}
.about p{
    padding-top: 10px;
color: var(--White, #FFF);
font-family: "Gilroy",sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 130%; 
}
</style>
