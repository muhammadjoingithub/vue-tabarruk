<template>
<div class="h-[550px] w-[100%] back-solid">
    
</div>
<!-- <div class="rotating bg-red-900 flex justify-center">
 
     <div class="rendr flex bg-red-600  gap-5 " v-for="(index,idx) in RotateImages" :key="idx">

         <img :src="index.img" alt="" class="render">
    </div>  
   
</div> -->
</template>
<script lang="ts" setup>
// import { reactive } from 'vue'
// const RotateImages = reactive([
//     // { image: '/public/images/one1.png',  },
//   { img: 'https://sportishka.com/uploads/posts/2022-04/1650528998_67-sportishka-com-p-yerevan-stolitsa-armenii-dostoprimechateln-70.jpg', },
//   { img: 'http://pic.rutubelist.ru/video/a7/41/a741247fbfaefbf19bf003ca2dd0a271.jpg', },
//   { img: 'http://pic.rutubelist.ru/video/a7/41/a741247fbfaefbf19bf003ca2dd0a271.jpg', },
//   { img: 'https://sportishka.com/uploads/posts/2022-04/1650528998_67-sportishka-com-p-yerevan-stolitsa-armenii-dostoprimechateln-70.jpg', },
//   { img: 'https://sportishka.com/uploads/posts/2022-04/1650528959_37-sportishka-com-p-yerevan-stolitsa-armenii-dostoprimechateln-38.jpg', },
//   { img: 'https://almode.ru/uploads/posts/2023-06/1686370116_almode-ru-p-ploshchad-respubliki-g-yerevan-6.jpg', },
  

  

//   { img: '/public/images/two2.png',  },
//   { img: '/public/images/two2.png', },
//   { img: '/public/images/two2.png',  },
//   { img: '/public/images/two2.png', },
//   { img: '/public/images/tree3.png',  },
  
// ]);

</script>
<style scoped>
.back-solid{
    background-image: url(/public/images/chapterimg.png);

}
.rendr{
width: 400px;
height: 450px;
transform-origin: top left;
transform: skew(-0.06turn, 0deg);

}
.render{
object-fit: cover;
   transform: none;
}
</style>