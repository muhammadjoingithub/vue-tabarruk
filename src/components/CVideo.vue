<template>
  <div class="video">
    <div class="hoverType">
      <h1>Promo Video about Tabarruk ziyorat</h1>
<div>
  <center>
      <button @click="openModal">
      <img @click="showModal" class="rela cursor-pointer" src="/public/images/iconplay.png" alt="" >
    </button>
  </center>
  
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content video-box relative  w-[57%]" >
           <div class="ex-img flex justify-between">
             <h3>Turkiy mamlakatlarning qimmatli, tarixiy va merosi joylarini o'rganing</h3>
                <button @click="closeModal">         
                 <img @click="stop" class="transition-all"  src="/public/images/Main/xmark-large.png" alt="">
               </button>
           </div>
        <iframe v-if="url"  width="100%" height="436" :src="url" title="THE CELESTIAL TURKS Announcement Trailer | Khan's Den Season 3 Preview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>
<script setup lang="ts">  
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  playState: Boolean,
});
 
 const isModalOpen = ref(false);
 function  closeModal(){
  isModalOpen.value = false;
  document.body.style.overflowY = 'scroll'
};
 
 function openModal(){
  isModalOpen.value = true;
  document.body.style.overflowY = 'hidden'

};
const link = ref("https://www.youtube.com/watch?v=aGgXbwq08Qg");

const url = computed(() => {
  if(link.value.includes("watch")){
    const list = link.value?.split("watch?v=")
    return list?.[0] + "embed/" + list?.[1]
  }else{
    return link.value
  }
})
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
}

button {
  margin-top: 10px;
}
.rela:hover{
    transform: scale(1.1);
}
.rela:active{
    transform: scale(1.2);
}
.ex-img{
    align-items: center;
 
}
.video-box{
    background: rgba(7, 9, 28, 0.50);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
.ex-img h3{
    color: var(--White, #FFF);
font-feature-settings: 'liga' off, 'calt' off;
text-shadow: 0px 10px 50px rgba(12, 15, 48, 0.40);
font-family: "Playfair Display",sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 130%;
padding: 10px;
}
.ex-img img{
    object-fit: cover;
    padding-right: 10px;
    cursor: pointer;
}
.video{
    background-image: url(/public/images/headerpng.png);
    height: 100vh;

}
.hoverType{
    background: rgba(7, 9, 28, 0.50);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
height: 100vh;
}
.hoverType h1{
   color: var(--White, #FFF);
font-feature-settings: 'liga' off, 'calt' off;
text-shadow: 0px 10px 50px rgba(12, 15, 48, 0.40);
font-family: "Playfair Display",sans-serif;
font-size: 40px;
margin-top: 80px;
height: 300px;
font-style: normal;
font-weight: 600;
line-height: 130%; 
text-align: center;
background: linear-gradient(180deg, #07091C 0%, rgba(7, 9, 28, 0.00) 100%);
}
</style>