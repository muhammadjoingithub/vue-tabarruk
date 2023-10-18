<template>
     <section class="containerr-fluid section4">
          <div class="container religions-section">
            <Title title="Religions" descr="This website is created to share information about historical, unique places located in Turkic countries." divClass="mt-12" />
             <div class="reilions-items">
                <div class="religion-box"
                
                v-for="(item, idx) in religies" :key="idx">
                    <img class="box-img" :src="item.img1" alt="">
                    <h2>{{ item.title1}}</h2>
                    <p>{{ item.title2}}</p>
                    <p class="flex title3">{{ item.title3}}<img :src="item.img2" alt=""></p>
                </div>
              
             </div>
 
          </div>
    </section>

</template>
<script setup lang="ts">
import Title from '@/components/Title.vue'

import {reactive} from 'vue'

interface Props {
     img1: string
     religion: string
     title1: string
     title2: string
     title3: string

     img2: string
}
defineProps<Props>()

const religies = reactive([
  {
     img1: '/public/images/islamic.png',
     img2: '/public/images/rightarrow2.png',
     title1: 'ISLAM',
     title3: 'See more',

     title2: 'This website is created to share information about historical, unique places located in Turkic countries. ',
  },
    {
     img1: '/public/images/christianit.png',
     img2: '/public/images/rightarrow2.png',
     title1: 'CHRISTIANITY',
     title3: 'See more',
     
     title2: 'This website is created to share information about historical, unique places located in Turkic countries. ',
  },
    {
     img1: '/public/images/buddist.png',
     img2: '/public/images/rightarrow2.png',
     title1: 'BUDDISM',
     title3: 'See more',

     title2: 'This website is created to share information about historical, unique places located in Turkic countries. ',
  },
  
]);
</script>
<style>
.section4{
    /* background-color: rgb(8, 8, 8); */
     height: auto;
     background-image: url(/public/images/styl.png);
background-repeat: no-repeat;
background-position: right;
}
.reilions-items{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px;
}
.religion-box{
    width: 30%;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.20); 
}
.religion-box:hover{
    border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.04);
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(15px);
transition: all 0.2s ease-in-out;
cursor: pointer;
/* transform: scale(1.1); */
.title3{
    color: #E54545;

}
.religion-box a:hover{
    color: #E54545;
    text-decoration: none;
}
    .box-img{
    background: var(--Main, #E54545);
    transition: all 0.2s ease-in-out;
    }
  
}
.box-img{
    padding: 4px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.20); 
}

.religion-box h2{
    color: var(--White, #FFF);
    font-family: "Gilroy",sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 31.2px */
    margin-top: 20px;

}
.religion-box p{
    color: rgba(255, 255, 255, 0.60);
    font-family: "Gilroy",sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 20.8px */
    margin-top: 25px;
}
.religion-box a{
    color: #E54545;
    font-family: "Gilroy",sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
    text-decoration: none;
}
</style>
