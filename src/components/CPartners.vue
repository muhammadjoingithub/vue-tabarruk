<template>
        <section class="containeer-fluid section6">
             <Title title="Partners"  descr="This website is created to share information about historical, unique places located in Turkic countries."/>
        <div class="container">
            <center>
                <img class="dropshadow" src="/public/images/dropshadow.png" alt="">
             </center>
        </div>
        <div class="webkit down">
                <div class="slider">
                        <div class="slide-track">
                            <div v-for="(partner,idx) in partners" :key="idx"  class="slideshow">
                               <img :src="partner.partner" alt="">
                            </div>
                        </div>
                    </div>
                </div>
        <div class="webkit top">
                    <div class="slider">
                        <div class="slide-tracker">
                            <div v-for="(partner,idx) in partners" :key="idx" class="slideshow">
                               <img :src="partner.partner" alt="">
                            </div>
                        </div>
                    </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import {reactive} from 'vue'
import Title from '@/components/Title.vue'
interface Props {
  title: string
  descr: string
  titleClass?: string
  divClass?: string
  descrClass?: string
  partner: string

}
defineProps<Props>()



const partners = reactive([
  {
     partner: '/public/images/part1.png'
  },
  {
     partner: '/public/images/part2.png'
     
  },
  { 
     partner: '/public/images/part3.png'
     
  },
  { 
     partner: '/public/images/part4.png'
     
  },
    { 
     partner: '/public/images/part5.png'
     
  },
    { 
     partner: '/public/images/part3.png'
     
  }
]);
</script>
<style scoped>
.section6{
    background-color: rgb(8, 8, 8);
    height: auto;
    padding: 20px;
    margin-top: 20px !important;
}
.webkit{
    /* position: relative; */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    margin-top: -50px;
    
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
}
.slider .slide-tracker{
    -webkit-animation: animat 30s linear infinite;
    animation: animat 30s linear infinite ;
    display: flex;
    width: calc(250px * 14);
}
.slide-tracker{
    gap: 20px;
}
.slider .slideshow{
    height: 100px;
    width: 250px;
}
.slideshow{
    display: flex;
width: 400px;
height: 112px;
padding: 12px 16px 12px 12px;
align-items: center;
justify-content: center;
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
.slideshow img{
    border-radius: 5px;
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
.slideshow:hover{
    /* transform: scale(1.1); */
    transition: all 0.4s;
    border-radius: 12px;
background: rgba(255, 255, 255, 0.12);
box-shadow: 0px 4px 36px 0px rgba(255, 255, 255, 0.12);
backdrop-filter: blur(15px);
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
@-webkit-keyframes animat{
    100%{
        transform: translateX(0) ;
    }
    0%{
        transform: translateX(calc(-250px * 7));
    }
}
@keyframes animat{
     100%{
        transform: translateX(0) ;
    }
    0%{
        transform: translateX(calc(-250px * 7));
    }
}
.dropshadow{
    z-index: 10;
    position: relative;
    top: 10px;
  
}
.top{
    z-index: 1;
    position: relative;
    top: -220px;

}
.down{
    z-index: 1;
    position: relative;
    top: -40px;

}
.new-partner{
    position: relative;
    top: -120px;
}

</style>
