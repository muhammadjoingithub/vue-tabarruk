// <template>
//   <div class="swiper-container">
//     <div class="swiper-wrapper">
//       <div v-for="item in items" :key="item.id" class="swiper-slide">
//         <img :src="item.image" alt="Tashkent" />
//         <h2>{{ item.title }}</h2>
//         <p>{{ item.description }}</p>
//       </div>
//     </div>
//     <div class="swiper-pagination"></div>
//   </div>
// </template>

// <script>
// import { ref, onMounted } from 'vue';
// import Swiper, { Pagination } from 'swiper';


// Swiper.use([Pagination]);

// export default {
//   setup() {
//     const items = ref([
//       {
//         id: 1,
//         image: '/public/images/turkmen2.png',
//         title: 'Tashkent',
//         description: '',
//       },
//       {
//         id: 2,
//         image: '/public/images/turkmen2.png',
//         title: 'Tashkent',
//         description: 'Uzbekistan',
//       },
//        {
//         id: 3,
//         image: '/public/images/turkmen2.png',
//         title: 'Tashkent',
//         description: 'Uzbekistan',
//       },
//        {
//         id: 4,
//         image: '/public/images/turkmen2.png',
//         title: 'Tashkent',
//         description: 'Uzbekistan',
//       },
//        {
//         id: 5,
//         image: '/public/images/turkmen2.png',
//         title: 'Tashkent',
//         description: 'Uzbekistan',
//       },
//     ]);

//     let swiper = null;

//     onMounted(() => {
//       swiper = new Swiper('.swiper-container', {
//         slidesPerView: 'auto',
//         spaceBetween: 10,
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//         },
//       });
//     });

//     return {
//       items,
//     };
//   },
// };
// </script>

// <style scoped>
// @import 'swiper/swiper-bundle.min.css';

// .swiper-container {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
// }

// </style>