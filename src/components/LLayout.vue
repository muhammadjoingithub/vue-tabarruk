<template>
  <div class="containerl">
    <header class="bg-hero-pattern headpanel bg-center bg-cover max-md:h-auto">
      <div class="nobody">
        <div class="flex container justify-between items-center">
          <div class="logo max-md:w-4/5">
            <Logo />
          </div>
          <nav class="flex items-center gap-8">
            <Navbar />
            <SwitcherLang />
            <PanelSearch @click="showBar" :state="state"/>
            <div>
              <i class="fas fa-bars text-white open hidden max-lg:block text-2xl"></i>
            </div>
          </nav>
        </div>
        <div>
          <Search v-show="again.searchBar" />
        </div>
      </div>
    </header>
    <div>
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const state = ref(false)
const showBar = () => {
  again.value.searchBar = !again.value.searchBar;
};


import Logo from '@/components/Logo.vue';
import SwitcherLang from '@/components/SwitcherLang.vue';
import Navbar from "@/components/NavBar.vue";
import PanelSearch from '@/components/PanelSearch.vue';
import Search from '@/components/Search.vue';
import Footer from '@/components/Footer.vue';

const again = ref({
  searchBar: false
});

</script>

<style scoped>
.containerl {
  background-color: rgb(15, 15, 15);
}
.nobody {
  /* width: 100%; */
  /* position: fixed; */
  background: linear-gradient(180deg, #07091C -4.12%, rgba(7, 9, 28, 0.60) 49.39%, rgba(7, 9, 28, 0.20) 85.78%, #07091C 100%);
}
</style>


