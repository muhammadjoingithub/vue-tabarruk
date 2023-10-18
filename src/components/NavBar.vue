<template>
  <ul class="flex gap-4 text-white max-lg:hidden relative">
    <li class="hover:opacity-40 font-bold transition-all">
      <router-link to="/about">About us</router-link>
    </li>
    <li class="transition-all" @click="showCountries" @focusout="state = false">
      <a href="#" class="hover:opacity-40 font-bold">Countries</a>
      <ul
        :class="[state ? 'block' : 'hidden']"
        class="absolute top-[100%] left-0 right-auto grid grid-cols-2 gap-2 bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl p-2"
      >
        <li
          v-for="(el, idx) in Dropdowncountry"
          :key="idx"
          class="p-2 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 group cursor-pointer"
        >
          <img :src="el.flag" alt="" class="" />
          <div class="text-white">
            <h3 class="text-base group-hover:text-red-500 transition-all">{{ el.country }}</h3>
            <p class="text-sm opacity-60">{{ el.destination }} destinations</p>
          </div>
        </li>
      </ul>
    </li>
    <li
      class="transition-all"
      @click="showReligion = !showReligion"
      @focusout="showReligion = false"
    >
      <a href="#" class="hover:opacity-40 font-bold">Religions</a>
      <ul
        :class="[showReligion ? 'block' : 'hidden']"
        class="absolute top-[100%] left-auto right-auto gap-2 bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl p-2"
      >
        <li
          v-for="(el, idx) in religions"
          :key="idx"
          class="p-2 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 group cursor-pointer"
        >
          <img :src="el.img" alt="" class="" />
          <div class="text-white">
            <h3 class="text-base group-hover:text-red-500 transition-all">{{ el.religion }}</h3>
            <p class="text-sm opacity-60">{{ el.destination }} destinations</p>
          </div>
        </li>
      </ul>
    </li>
    <li class="hover:opacity-40 font-bold transition-all">
      <a href="#">Heritage map</a>
    </li>
    <li class="hover:opacity-40 font-bold transition-all">
      <router-link to="/help">Help</router-link>
    </li>
  </ul>
  
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const state = ref(false)
const showReligion = ref(false)

import { Dropdowncountry } from '@/components/Dropdowncountry.js'
const religions = reactive([
  { 
    img: './public/images/islamic.png', 
  religion: 'Islam',
   destination: '32' },
  { 
    img: './public/images/christian.png', 
  religion: 'Christianity', 
  destination: '24' },
  { 
    img: './public/images/buddist.png', 
  religion: 'Buddism', 
  destination: '19' }
])
const navLinks = reactive([
  { id: 1, 
  content: 'About us' },
  { id: 2, 
  content: 'Countries' },
  { id: 3, 
  content: 'Religions' },
  { id: 4, 
  content: 'Heritage map' },
  { id: 5, 
  content: 'Help' }
])
const showCountries = () => {
  state.value = !state.value
  console.log('hover')
}
</script>

<style scoped></style>