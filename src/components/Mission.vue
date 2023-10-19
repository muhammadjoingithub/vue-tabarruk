<template>
    <div class="container-fluid local-center ">
          <div class="container mission">
            <h2>Our Mission</h2>
            <p>Explore the valuable, historical, and heritage places of Turkic countries through our curated selection of articles, photos, and videos. Discover the beauty of ancient ruins, stunning mosques, medieval fortresses, and intricate tilework, and learn about legendary rulers, artists, and architects who left their mark on the region.</p>
            <h4>Our supporters</h4>
            <div class="first-div flex gap-4 justify-start">
                <img src="/public/images/arena.png" alt="">
                 <p>Ministry of Tourism and Cultural Heritage of the Republic of Uzbekistan</p>
            </div>
             <div class="second-div flex gap-4 justify-start">
                <img src="/public/images/altay.png" alt="">
                 <p>Organization of Turkic states</p>
            </div>
          </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style scoped>
.mission {
    padding: 50px;
    width: 50%;
    position: absolute;
    left: 0;
    /* background-color: red; */
}
.mission h2{
color: var(--White, #FFF);
font-feature-settings: 'liga' off, 'calt' off;
text-shadow: 0px 10px 50px rgba(12, 15, 48, 0.40);
font-family: "Playfair Display",sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 130%; 
}
.mission p{
padding-top: 10px;
color: var(--White, #FFF);
font-family: "Gilroy",sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 130%; 
}
.mission h4{
color: var(--White, #FFF);
font-feature-settings: 'liga' off, 'calt' off;
font-family: "Gilroy",sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 130%; 
padding-top: 20px;
}
.first-div p{
color: #FFF;
font-feature-settings: 'liga' off, 'calt' off;
text-shadow: 0px 7.247998237609863px 36.239994049072266px rgba(12, 15, 48, 0.40);
font-family: "Playfair Display",sans-serif;
font-size: 13.046px;
font-style: normal;
font-weight: 700;
line-height: 130%; 
}
.first-div,.second-div{
border-radius: 8px;
border: 0.725px solid rgba(255, 255, 255, 0.20);
background: rgba(255, 255, 255, 0.04);
padding: 10px;
margin-top: 10px;
width: 80%;
}
/* .second-div{

} */
.second-div p{
color: #FFF;
font-feature-settings: 'liga' off, 'calt' off;
text-shadow: 0px 7.247998237609863px 36.239994049072266px rgba(12, 15, 48, 0.40);
font-family: "Playfair Display",sans-serif;
font-size: 14.496px;
font-style: normal;
font-weight: 700;
line-height: 130%;
}

.local-center{
    background-image: url(/public/images/chap.png);
    background-repeat: no-repeat;
    background-position: right;
    object-fit: cover;
    height: 529px;
    margin-top: 70px;
}
</style>