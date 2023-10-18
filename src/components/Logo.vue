<template>
  <div>
    <router-link to="/" class="roiter">
     <div class="logo-header">
                        <img src="/public/images/logosun.svg" alt="">
                        <div class="logo-texts">
                            <h3 class="text1">Tabarruk Ziyorat</h3>
                            <h5 class="text2">Supported by The Ministry of Culture and Tourism</h5>
                        </div>
                     </div>
      </router-link>
  </div>
</template>

<script setup lang="ts"></script>


<style scoped>
.roiter{
  text-decoration: none;
  color: white;
}
 .logo-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 10px;

  }
.text1{
    text-transform: uppercase;
    font-size: 27px;
    margin-top: 5px;
}
.text2{
    font-size: 14px;
    margin-top: -5px;
}
</style>