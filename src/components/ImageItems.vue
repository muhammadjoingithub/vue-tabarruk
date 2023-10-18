<template>
  <!-- <div 
   v-for="(item, idx) in cities" :key="idx"
    class="text-white p-4 max-md:p-2 bg-[#202233] rounded-xl hover:shadow-lg hover:shadow-red-500/50 group duration-200"
  >
    <img :src="item.img" class="w-full bg-red-400 rounded-lg" />
    <h3 class="mt-4 group-hover:text-red-500 transition-all max-md:text-sm">
      {{ item.title }}
    </h3>
    <p class="text-sm max-md:text-xs text-white/60 font-normal my-2">
      {{item.descr }}
    </p>
    
  </div> -->




    <div class="hover-columns"   
    v-for="(item, idx) in cities" :key="idx">
                    <center>
                        <img :src="item.img" alt="">
                    </center>
                    <h3>{{ item.title}}</h3>
                    <p>{{ item.descr}}</p>
<center>
                    <div class="hover-rowbefore self-center"></div>

</center>
                </div>

</template>

<script setup lang="ts">
import {reactive} from 'vue'

interface Props {
    descr: string
    title: string
    img: string
    date: string
}
defineProps<Props>()

const cities = reactive([
  {
     img: '/public/images/turkiye2.png',
     title: 'Türkiye',
     descr: '27 destinations',
     date: 'alarix'
  },
   {
     img: '/public/images/uzbeks.png',
     title: 'Uzbekistan',
     descr: '32 destinations',
     date: 'alarix'
  },
   {
     img: '/public/images/turkmen2.png',
     title: 'Turkmenistan',
     descr: '24 destinations',
     date: 'alarix'
  },
   {
     img: '/public/images/azeri.png',
     title: 'Azerbaijan',
     descr: '17 destinations',
     date: 'alarix'
  },
   {
     img: '/public/images/hungary.png',
     title: 'Hungary',
     descr: '47 destinations',
     date: 'alarix'
  },
   {
     img: '/public/images/kazakhi.png',
     title: 'Kazakhstan',
     descr: '7 destinations',
     date: 'alarix'
  },
   {
     img: '/public/images/kyrgiz.png',
     title: 'Kyrgyzstan',
     descr: '11 destinations',
     date: 'alarix'
  }
 
]);
</script>

<style scoped>


.countries-text h2{
    color: var(--White, #FFF);
    font-feature-settings: 'liga' off, 'calt' off;
    text-shadow: 0px 10px 50px rgba(12, 15, 48, 0.40);
    font-family: "Playfair Display",serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 52px */
}
.slowdown-row{
    border-bottom: 2px solid #E54545;
    width: 100px;
}
.countries-text p{
    color: var(--White, #FFF);
    text-align: center;
    font-family: "Gilroy",sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 26px */
    margin-top: 20px;
}
.countries-hover{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px;
}
.hover-columns{
  width: 22%;
  
  padding:20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  
}
.hover-columns:hover{
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(15px);
    transition: all 0.3s ease-in-out ;
 
  
    
    .hover-rowbefore{
        background-color:blue;
        border-bottom: 2px solid grey;
        align-self: flex-end;
        display: flex;
         width: 100%;
    
    }
}

.hover-rowbefore{
    background-color:blue;
    border-bottom: 2px solid rgb(24, 23, 23);
   margin-top: 15px;
    width: 32%;
    /* border-radius: 50% ; */
    transition: all 0.5s ease-in-out;
}

.hover-columns h3{
    margin-top: 20px;
    color: var(--White, #FFF);
    text-align: center;
    font-family: "Gilroy",sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */
}
.hover-columns p{
    color: rgba(255, 255, 255, 0.60);
    text-align: center;
    font-family: "Gilroy",sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 18.2px */
}</style>