<template>
       <div class="container m-auto p-5 grid grid-cols-2 max-lg:grid-cols-1 gap-6">
       <Question
        v-for="(el, idx) in accord"
        :key="idx"
        :descr="el.descr"
        :icon="el.icon"
        :id="el.id"
        :show="aItem === el.id"
        :title="el.title"
        @click="showType(el.id, el.show)"
      />
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
const aItem = ref<number | null>(null);


import Question from '../components/Question.vue';
const accord = reactive([
  {
    id: 1,
    show: false,
    icon: '/public/images/bolt.png',
    title: 'What is the goal of this project? ',
    descr: 'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan',
  },
  {
    id: 2,
    show: false,
    icon: '/public/images/userheart.png',
    title: 'How many countries in Organization of Turkic states?',
    descr: 'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan',
  },
   {
    id: 3,
    show: false,
    icon: '/public/images/userheart.png',
    title: 'What is the goal of this project? ',
    descr:
      'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan'
  },
  {
    id: 4,
    show: false,
    icon: '/public/images/bolt.png',
    title: 'How many countries in Organization of Turkic states?',
    descr:
      'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan'
  },
  {
    id: 5,
    show: false,
    icon: '/public/images/bolt.png',
    title: 'How many countries in Organization of Turkic states?',
    descr:
      'In Organization of Turkic states 7 countries: Uzbekistan, Kazakhstan, Kirgizstan, Turkey, Azerbaijan, Turkmenistan'
  }
]);

const showType = (id: number, show: boolean): void => {
  if (aItem.value === id) {
    aItem.value = null;
  } else {
    aItem.value = id;
  }
};
</script>
<style scoped>

</style>
