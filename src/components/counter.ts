import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const users = defineStore('counter', () => {
  const count = ref(20)
  const searchBar = ref(false)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, searchBar }
})