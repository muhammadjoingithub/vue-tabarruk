<template>
    <div class="container flex justify-between p-5 flex-wrap gap-5">
        <div class="cols ">
            <h1>Contacts</h1>
            <div class="flex gap-2 pt-3">
                <img src="/public/images/locator1.png" alt="">
                <p class="one">Location</p>
            </div>
            <p class="two">107 B Amir Temur avenue, Tashkent, Uzbeksitan</p>
            <div class="flex gap-2 pt-3">
                <img src="/public/images/locator2.png" alt="">
                <p class="one">Email address</p>
            </div>
            <p class="two">tabarruk.ziyorat@info.uz</p>
           <div class="flex gap-2 pt-3">
                <img src="/public/images/locator3.png" alt="">
                <p class="one">Phone number</p>
            </div>
            <p class="two">+998 71 200 7007</p>
        </div>
        <div class="cols mt-3 h-[250px] w-[600px] max-lg:w-[400px] max-md:w-full">
          <GoogleMaps/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import GoogleMaps from '@/components/SingleComponents/GoogleMaps.vue'

</script>
<style scoped>

.cols h1{
  color: var(--White, #FFF);
font-feature-settings: 'liga' off, 'calt' off;
text-shadow: 0px 10px 50px rgba(12, 15, 48, 0.40);
font-family: "Playfair Display",sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 130%; 
}
.one{
color: rgba(255, 255, 255, 0.60);
font-family: "Gilroy",sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 130%; 
}
.two{
color: var(--White, #FFF);
font-family: "Gilroy",sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 130%; 
padding-top: 10px;
}
</style>