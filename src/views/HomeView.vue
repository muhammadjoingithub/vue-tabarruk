<template>
  <main class="other"> 
    <HeadPage/>
    <div class="container m-auto p-5 grid grid-cols-2 max-lg:grid-cols-1 gap-6 ">
      <Question v-for="(faq, idx) in Religions" :key="idx" :img1="faq.img1" :text="faq.text" :text2="faq.text2" :img2="faq.img2"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Religions } from '@/components/QuestionApi.js';
import HeadPage from '../components/HeadPage.vue'
import Question from '../components/Question.vue'
</script>

<style scoped>
.other {
  background-color: black;
}
</style>
