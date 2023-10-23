<template>
  <div class="search-panel max-md:hidden w-[80%] relative">
  <Search v-if="!declare" v-auto-animate />
      <i class="text-white cursor-pointer relative right-0" :class="[declare ? 'fas fa-search' : 'fas fa-close']" @click="declare = !declare"></i>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Search from '@/components/Search.vue';
const declare = ref(true)
</script>