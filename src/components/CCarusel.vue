<template>
    <div>
    <Title class="statements" title="Statements" descr="All countries that we represent" divClass="mt-12" />
       
       <div class="swiper-slid justify-center p-3 container  mt-[80px] flex flex-wrap gap-2">
         <div class="slide-cols cols-item">
            <center>
            <img src="/public/images/novak.png" alt="">
            <p class="names">Katalin Novák</p>
            <p class="post">President of Hungary</p>
            <p class="attitudes">Let us admit: in the Western world, women today have similar chance for success as men. In terms of education, career, in terms of progress in employment. The real difference is giving or not giving birth.</p>
            </center>
         </div>
         <div class="slide-cols">
            <center>
            <img src="/public/images/mirziyoyev.png" alt="">
            <p class="names">Shavkat Mirziyoyev</p>
            <p class="post">President of  Uzbekistan</p>
            <p class="attitudes">​​To sit in love with the achievements is the greatest cave on the path of progress.</p>
            </center>
         </div>
         <div class="slide-cols cols-item">
            <center>
            <img src="/public/images/erdogan.png" alt="">
            <p class="names">Recep Erdogan</p>
            <p class="post">President of  Türkiye</p>
            <p class="attitudes">A political party cannot have a religion. Only individuals can. Otherwise, you'd be exploiting religion, and religion is so supreme that it cannot be exploited or taken advantage of.</p>
            </center>
         </div>
       </div>

    
    </div>
</template>
<script lang="ts" setup>
import Title from '@/components/Title.vue'

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
    width: 30%;
    border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.20);
background: #252738;
}
.slide-cols img{
    position: relative;
    top: -80px;
}
.slide-cols:hover{
    cursor: pointer;
    transform: scale(1.1);
transition: all 0.5s ease-in-out ;
}
</style>
