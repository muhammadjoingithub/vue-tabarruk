<template>
  <div>
    <header class="bg-hero-pattern headpanel bg-center bg-cover h-screen max-md:h-auto">
      <div class=" nobody">
        <div class="flex container justify-between items-center">
          <div class="logo max-md:w-4/5">
            <Logo />
          </div>
          <nav class="flex items-center gap-8">
            <Navbar />
            <SwitcherLang />
            <PanelSearch @click="showSearchBar" />
            <div>
              <i class="fas fa-bars text-white open hidden max-lg:block text-2xl"></i>
            </div>
          </nav>
        </div>
        <div v-show="store.searchBar">
          <Search />
        </div>
        <div class="text-center h-[75vh] flex flex-col items-center justify-center text-white">
          <p><i class="fa-solid fa-location-dot mx-1"></i>Samarkand, Uzbekistan</p>
          <h1 class="text-8xl max-md:text-5xl capitalize font-playfair mb-4 max-md:mb-2">
            registan square
          </h1>
          <p class="descr w-4/6 max-md:w-4/5 max-md:text-base my-3">
            Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate
            madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th
            century.
          </p>
          <Button type="button" btnClass="" variant="red">Explore <img src="/public/images/rightarrow.png" alt=""></Button>
        </div>
      </div>
    </header>
  </div>
  <NewsComp :news="news" />
    <div class="container flex justify-between max-md:flex-col gap-4 max-lg:flex-wrap">
    <InfoComponent
      v-for="(el, idx) in countryInfo"
      :key="idx"
      :img="el.img"
      :count="el.count"
      :info="el.info"
    />
  </div>
</template>

<script setup lang="ts">
import SwitcherLang from '@/components/SwitcherLang.vue'
import Navbar from "@/components/NavBar.vue"
import PanelSearch from '@/components/PanelSearch.vue'
import Button from '@/components/Button.vue'
import CInput from '@/components/Input.vue'
import Search from '@/components/Search.vue'
import Logo from '@/components/Logo.vue'
import NewsComp from '@/components/NewsComp.vue'

import InfoComponent from '@/components/InfoComponent.vue'



import { ref, reactive, onMounted } from 'vue'

import { useCounterStore } from '@/stores/counter'
const input = ref('')
const store = useCounterStore()

const showSearchBar = () => {
  store.searchBar = !store.searchBar
}



const countryInfo = reactive([
  { img: '/public/images/bir1.png', info: 'Attractions', count: 142 },
  { img: '/public/images/bir2.png', info: 'Destinations', count: 254 },
  { img: '/public/images/bir3.png', info: 'Countries', count: 7 },
  { img: '/public/images/bir4.png', info: 'Religions', count: 3 }
])
</script>

<style lang="scss" scoped>
.headpanel{
  height: 100vh;
  background-image: url(/public/images/headerpng.png);
}
.nobody{
  height: 100vh;

  background: linear-gradient(180deg, #07091C -4.12%, rgba(7, 9, 28, 0.60) 49.39%, rgba(7, 9, 28, 0.20) 85.78%, #07091C 100%);

}
</style>