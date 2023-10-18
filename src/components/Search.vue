<template>
  <div tabindex="0" @focusout="hideSearchBar" class="fixed w-[40%] right-20  none-searh transition-all">
    <div>
      <CInput
        type="text"
        placeholder="Enter a city name"
        v-model="search"
        @on-focus="show = true"
        @key-up="getUser"
        @input="getResults"
      />
    </div>
    <div v-if="show && search.length > 2"  class="results">
      <ul class="rounded-lg border-1 border-white/20 bg-white/10 backdrop-blur-xl pl-4 mt-3" 
      v-if="showResults"
      >
        <li
       v-for="(city, index) in filteredCities" :key="index"
          class="p-4 pl-0 border-b border-b-white/[0.08] last:border-none cursor-pointer hover:opacity-75"
        >
          <p class="text-white">{{ city }}</p>
        </li>
      </ul>
       <p v-else>{{ message }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import CInput from '@/components/Input.vue'
import { ref, computed } from 'vue';
const search = ref('');
const cities = ref([]);
const showResults = ref(false);
const message = ref('');

const filteredCities = computed(() => {
  return cities.value.filter((city) => {
    return city.toLowerCase().startsWith(search.value.toLowerCase());
  });
});

const getResults = () => {
  if (search.value.length === 0) {
    showResults.value = false;
    message.value = 'Sonuç bulunamadı';
    return;
  }

  if (search.value.length > 3) {
    showResults.value = false;
    return;
  }

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      cities.value = data.map((item) => item.title);
      showResults.value = true;
    });
};
</script>