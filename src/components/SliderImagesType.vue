<template>
  <div class="wrapper-img">
    <div class="images flex gap-2">
      <div
        v-for="(el, idx) in sliders" :key="idx" class="new-slider " :class="[el.class, el.Active ? ' active' : '']" @mouseover="() => activeItem(el.id)">
        <h3>{{ el.text }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const sliders = reactive([
  {
    text: 'Samarkand, Uzbekistan',
    class: "bg-[url('/public/images/imgnew.jpg')] ",
    Active: false,
    id: 1
  },
  {
     text: 'Baku, Azerbayjan',
   class: "bg-[url('/public/images/imgnew.jpg')]", 
   Active: false, 
   id: 2 },
  { 
    text: 'Erevan, Armenia', 
  class: "bg-[url('/public/images/imgnew.jpg')]", 
  Active: true, 
  id: 3 },
  { 
    text: 'Sochi, Russia',
   class: "bg-[url('/public/images/imgnew.jpg')]", 
   Active: false, 
   id: 4 }
])
const activeItem = (id: number) => {
  sliders.forEach((item) => {
    item.Active = false
    if (item.id === id) {
      item.Active = true
    }
  })
}
</script>

<style scoped>

.new-slider.active {
  flex: 5;
}

.new-slider.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
.wrapper-img {
  overflow: hidden;
  width: 50%;
}
.images {
  display: flex;
}
.new-slider {
  background-size: auto 110%;
  background-position: center;
   background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  width: 100%;
  height: 100vh;
  background-image: url(/public/images/imgnew.jpg);
  height: 50vh;
  flex: 1;
  position: relative;
  transition: flex 0.3s ease-in;
  cursor: pointer;
  background-color: red ;
}
.new-slider h3 {
  font-size: 24px;
  position: absolute;
  color: white;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

</style>