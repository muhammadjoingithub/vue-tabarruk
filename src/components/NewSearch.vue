<template>
  <div>
    <input type="search" placeholder="Search something" class="text-gray-500 p-3" v-model="search" @input="getResults">
    <div class="results">
      <ul v-if="showResults" class="w-[200px]">
        <li v-for="(city, index) in filteredCities" :key="index"><p>{{ city }}</p></li>
      </ul>
      <p v-else>{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    message.value = 'Natija Topilmadi';
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

<style scoped>
.results {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
}

.results ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li p {
  background-color: yellow;
  padding: 8px;
}

p {
  background-color: yellow;
  padding: 8px;
}
</style>
