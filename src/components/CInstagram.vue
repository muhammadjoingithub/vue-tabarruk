<template>
      <section class="container-fluid section7">
        <div class="container">
             <Title title="Instagram" descr="Stay up-to-date on the latest news and developments in the Turkic world." divClass="mt-12" />
        </div>

        <div class="big-webkit">
            <div class="slider">
                <div class="slide-track">
                  <div class="slideshow-more "
                    v-for="(el,idx) in instagram" :key="idx"
                    >
                    <center>
                     
                      <div class="head-post">
                          <div class="image">
                             <img :src="el.img" alt="">
                          </div>
                          <div class="text">
                              <img src="/public/images/external.png" alt="">
                              <h2>View post</h2>
                          </div>
                      </div>
                    </center>
                    <h5 class="title-item1">{{ el.likes}}</h5>
                     <p class="title-item2">{{ el.descr}}</p>
                     <p class="title-item3">{{ el.time}}</p>
                    </div>
                </div>

         <div class="scaner ">
           <center>
             <h2>Scan for more</h2>
            <h4>@ziyorati_tabarruk</h4>
            <img src="/public/images/insta2.png" alt="">
           </center>
         </div>


   <div class="scaner2 flex w-[100%] align-center justify-between mt-10">
    
           <div class="scan2 ">
              <h2>Subscribe for more interesting posts </h2>
            
            <div class="scan3 flex gap-2 align-middle mt-3 ">
                <img src="/public/images/insta4.png" alt="">
                <p>@tabarruk_ziyorat</p>
            </div>
           </div>
            <img src="/public/images/insta3.png" alt="">
          
   </div>

            </div>
        </div>
  </section>
</template>
<script setup lang="ts">
import {reactive} from 'vue'
import Title from '@/components/Title.vue'

interface Props {
    descr: string
    likes: string
    img: string
    time: string
}
defineProps<Props>()
const instagram = reactive([

   {
     img: '/public/images/stambul.png',
     likes: '205 147 likes',
     time: '2 days ago',
    descr: 'History about how this building was build ',

  },
   {
     img: '/public/images/stambul.png',
     likes: '205 147 likes',
     time: '2 days ago',
    descr: 'History about how this building was build ',

  },
   {
     img: '/public/images/stambul.png',
     likes: '205 147 likes',
     time: '2 days ago',
    descr: 'History about how this building was build ',

  },
   {
     img: '/public/images/stambul.png',
     likes: '205 147 likes',
     time: '2 days ago',
    descr: 'History about how this building was build ',

  },
   {
     img: '/public/images/stambul.png',
     likes: '205 147 likes',
     time: '2 days ago',
    descr: 'History about how this building was build ',

  },
   {
     img: '/public/images/stambul.png',
     likes: '205 147 likes',
     time: '2 days ago',
    descr: 'History about how this building was build ',

  },
   {
     img: '/public/images/stambul.png',
     likes: '205 147 likes',
     time: '2 days ago',
    descr: 'History about how this building was build ',

  },

]);

</script>
<style scoped>
.scan2 h2{
    color: var(--White, #FFF);
font-family: "Gilroy",sans-serif;

font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 25.2px */
}
.scan3 p{
    color: rgba(255, 255, 255, 0.60);
text-align: center;
font-family: "Gilroy",sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 28px */
}
.scaner2{
    padding: 10px;
    border-radius: 8px;
border: 0.865px solid rgba(255, 255, 255, 0.10);
background: rgba(255, 255, 255, 0.04);
}
.scaner{
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
width: 265px;
height: 340px;
flex-shrink: 0;
border-radius: 24px;
border: 1.186px solid rgba(255, 255, 255, 0.08);
background: rgba(7, 9, 28, 0.80);
backdrop-filter: blur(9.491525650024414px);
}
.scaner h2{
    margin-top: 10px;
color: var(--White, #FFF);
text-align: center;
font-family: "Gilroy",sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 33.6px */
}
.scaner h4{
    margin-top: 10px;

color: rgba(255, 255, 255, 0.60);
text-align: center;
font-family: "Gilroy",sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 28px */
}
.scaner img{
    padding: 10px;

}
.image{
   width: 97%;
   height: 184px;

}
.head-post{
    position: relative;
    cursor: pointer;
    width: 98%;
   height: 184px;
    overflow: hidden;
}
.image img{
   object-fit: cover;
   width: 97%;
   height: 184px;
   transition: 0.5s ease;
    border-radius: 5px;
   object-fit: cover;
}
.text{
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
background: rgba(7, 9, 28, 0.80);
    width: 100%;
   height: 184px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    opacity: .8;
    visibility: hidden;
   transition: 0.5s ease;



}
.text h2{
    margin-bottom: 1.2rem;
}
.head-post:hover .text{
    visibility: visible;
}
.head-post:hover img{
    transform: scale(1.1);
    border-radius:15%;


}

.title-item3{
    color: var(--White, #FFF);
font-family: "Gilroy",sans-serif;
margin-top: 4px;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 130%; 
}
.title-item2{
    color: var(--White, #FFF);
font-family: "Gilroy",sans-serif;
margin-top: 4px;

font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 130%; 
}
.title-item1{
    color: var(--White, #FFF);
font-family: "Gilroy",sans-serif;
font-size: 12px;
margin-top: 8px;

font-style: normal;
font-weight: 500;
line-height: 130%; 
}
.big-webkit{
    position: relative;
  
    display: flex;
    align-items: center;
    justify-content: center;
   
    
}
.slider{
    margin: auto;
   height: 500px;
    overflow: hidden;
    position: relative;
    width: 100%;

}
.slider .slide-track{
    -webkit-animation: scroll 30s linear infinite;
    animation: scroll 30s linear infinite ;
    display: flex;
    width: calc(250px * 14);
}
.slide-track{
    gap: 20px;
}
/* .slider .slideshow-more{
 
    /* width: 184px; */
 
.slideshow-more{
    width: 200px;
padding: 6px ;
margin-top: 30px;
align-items: center;
gap: 20px;
flex-shrink: 0;
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.10);
background: rgba(255, 255, 255, 0.10);
backdrop-filter: blur(15px);
cursor: pointer !important;
object-fit: cover !important;
transition: all 0.4s;
}
/* .slideshow-more img{
    border-radius: 5px;
   object-fit: cover;
height: 184px;
width: 99%;

} */
.capital1{
    color: rgba(255, 255, 255, 0.60);
font-family: "Gilroy",sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 20.8px */
margin-top: 15px;
}
.capital2{
color: white;
font-family: "Gilroy",sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 20.8px */
}
.new-carusel{
    width: 100%;
}
.slideshow-more:hover{
  
    transition: all 0.4s;
}
@-webkit-keyframes scroll{
    0%{
        transform: translateX(0) ;
    }
    100%{
        transform: translateX(calc(-250px * 7));
    }
}
@keyframes scroll{
     0%{
        transform: translateX(0) ;
    }
    100%{
        transform: translateX(calc(-250px * 7));
    }
}
</style>