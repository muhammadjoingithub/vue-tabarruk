<template>
    <div class="container-fluid new-carusel">
        <div class="wrapper">
            <div class="slider">
                <div class="slide-track">
                    <div class="slide"    v-for="(town, idx) in townsliders" :key="idx">
                        <img :src="town.imagetown" alt="">
                        <div class="capitals">
                            <p class="capital1">{{ town.town1}}</p>
                            <p class="capital2">{{ town.town2}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps,reactive } from 'vue';

interface Props {
  imagetown: string;
  town1: string;
  town2: string;
}
defineProps<Props>();

const townsliders = reactive([
  {
    imagetown: '/public/images/new1.png',
    town1: 'Baku',
    town2: 'Azerbaijan',
  },
  {
    imagetown: '/public/images/new1.png',
    town1: 'Baku',
    town2: 'Azerbaijan',
  },
  {
    imagetown: '/public/images/new1.png',
    town1: 'Baku',
    town2: 'Azerbaijan',
  },
  {
    imagetown: '/public/images/new1.png',
    town1: 'Baku',
    town2: 'Azerbaijan',
  },
  {
    imagetown: '/public/images/new1.png',
    town1: 'Baku',
    town2: 'Azerbaijan',
  },
  {
    imagetown: '/public/images/new1.png',
    town1: 'Baku',
    town2: 'Azerbaijan',
  },
  {
    imagetown: '/public/images/new1.png',
    town1: 'Baku',
    town2: 'Azerbaijan',
  }

 
]);
</script>
<style scoped>
.wrapper{
    position: relative;
    top: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    
}
.slider{
    margin: auto;
    height: 110px;
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
    /* background-color: red; */
}
.slider .slide{
    height: 100px;
    width: 250px;
}
.slide{
    display: flex;
width: 400px;
height: 112px;
padding: 12px 16px 12px 12px;
align-items: center;
gap: 16px;
flex-shrink: 0;
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.10);
background: rgba(255, 255, 255, 0.10);
backdrop-filter: blur(15px);
cursor: pointer !important;
object-fit: cover !important;
transition: all 0.4s;
}
.slide img{
    border-radius: 5px;
    height: 90%;
    object-fit: cover;
    width: 38%;
}
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
.slide:hover{
    transform: scale(0.9);
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