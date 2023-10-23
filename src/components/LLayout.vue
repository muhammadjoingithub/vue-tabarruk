<template>
  <div class="containerl">
   <Header/>
    <div>
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.containerl {
  background-color: rgb(15, 15, 15);
}
</style>


