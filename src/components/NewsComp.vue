<template>
  <div class="container">
    <Title title="How many countries?" descr="All countries that we represent" divClass="mt-12" />
    <div class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
      <ImageItems v-for="(item, idx) in news" :key="idx" :item="item" />
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">

import Title from '@/components/Title.vue'
import ImageItems from '@/components/ImageItems.vue'
import { onMounted } from 'vue'

defineProps({
  news: Array
})
 
</script>

<style scoped></style>