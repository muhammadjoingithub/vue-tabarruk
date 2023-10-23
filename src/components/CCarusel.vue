<template>
    <div>
    <Title class="statements" title="Statements" descr="All countries that we represent" divClass="mt-12" />
<swiper
      :slidesPerView="1.2"
      :centeredSlides="true"
      :grabCursor="true"
      :spaceBetween="40"
      :loop="true"
      :pagination="{
        clickable: true
      }"
      :breakpoints="{
         '576': {
          slidesPerView: 1,
          spaceBetween: 30
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 30
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper py-10 container"
    >
      <swiper-slide v-for="(item, index) in swiperApi" :key="index" v-slot="{ isActive }">
        <div class="slide-cols cols-item" :class="{ 'scale-110': isActive }">
            <center>
            <img :src="item.image" alt="">
            <p class="names">{{ item.president}}</p>
            <p class="post">{{ item.says}}</p>
            <p class="attitudes"> {{ item.post}}</p>
            </center>
         </div>
      </swiper-slide>
    </swiper>

    
    </div>
</template>
<script lang="ts" setup>
import Title from '@/components/Title.vue'
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
const modules = reactive([EffectCoverflow, Pagination, Navigation])
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const swiperApi = reactive([
  {
    image: '/public/images/novak.png',
    president: 'KEytilen Novak',
    says: 'President of Hungary',
    post: '​Let us admit: in the Western world, women today have similar chance for success as men. In terms of education, career, in terms of progress in employment. The real difference is giving or not giving birth.'
  },
  {
    image: '/public/images/mirziyoyev.png',
    president: 'Shavkat Mirziyoyev',
    says: 'President of  Uzbekistan',
    post: 'Let us admit: in the Western world, women today have similar chance for success as men. In terms of education, career, in terms of progress in employment. The real difference is giving or not giving birth.​'
  },
  {
    image: '/public/images/erdogan.png',
    president: 'Rejep Tayyip Erdogan',
    says: 'President of Turkey',
    post: 'Let us admit: in the Western world, women today have similar chance for success as men. In terms of education, career, in terms of progress in employment. The real difference is giving or not giving birth.​'
  },
  {
    image: '/public/images/novak.png',
    president: 'Shavkat Mirziyoyev',
    says: 'President of Hungary',
    post: 'Let us admit: in the Western world, women today have similar chance for success as men. In terms of education, career, in terms of progress in employment. The real difference is giving or not giving birth.'
  },
   {
    image: '/public/images/mirziyoyev.png',
    president: 'Shavkat Mirziyoyev',
    says: 'President of  Uzbekistan',
    post: 'Let us admit: in the Western world, women today have similar chance for success as men. In terms of education, career, in terms of progress in employment. The real difference is giving or not giving birth.​'
  },
  {
    image: '/public/images/erdogan.png',
    president: 'Rejep Tayyip Erdogan',
    says: 'President of Turkey',
    post: 'Let us admit: in the Western world, women today have similar chance for success as men. In terms of education, career, in terms of progress in employment. The real difference is giving or not giving birth.​'
  }
])
</script>
<style scoped>
.names{
    margin-top: -80px;
color: var(--Main, #E54545);
text-align: center;
font-family: "Gilroy",sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 130%; 
}
.post{
    /* margin-top: -20px; */
color: rgba(255, 255, 255, 0.80);
text-align: center;
font-family: "Gilroy",sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 130%;
}
.attitudes{
    margin-top: 20px;
color: var(--White, #FFF);
text-align: center;
font-family: "Gilroy",sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 130%;
}
.slide-cols{
    padding: 10px;
    /* width: 30%; */
    border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.20);
background: #252738;
}
.slide-cols img{
    position: relative;
    top: -80px;
}
/* .slide-cols:hover{
    cursor: pointer;
    transform: scale(1.1);
transition: all 0.5s ease-in-out ;
} */
.mySwiper {
  padding: 50px 0;
}
</style>
