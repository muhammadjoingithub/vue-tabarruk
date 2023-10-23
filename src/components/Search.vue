<template>
  <div tabindex="0"  @focusout="hideSearchBar"  class="absolute top-[-50%] right-10 w-[550px] max-lg:w-[300px] z-10 backdrop-blur-xl"  :class="searchClass">
    <div>
      <Input type="text"  placeholder="Enter a city name"  v-model="search"  @on-focus="show = true" @input="searchUser" class="z-10 h-[50px]"/>
    </div>
    <div>
      <ul class="rounded-lg border-1 border-white/20 bg-white/10 backdrop-blur-xl pl-4 mt-3">
        <li v-for="(user, idx) in userArr" :key="idx"  class="p-3 pl-0 h-[60px] border-b border-b-white/[0.08] last:border-none cursor-pointer hover:opacity-75">
          <p class="text-white">{{ userArr.length ? user.name : "dont't search" }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Input from '@/components/Input.vue';
import { users } from '@/components/counter'
interface Props {
  searchClass: string
}
defineProps<Props>()

const store = users()
const search = ref('')
const show = ref(false)
let userArr = reactive([])
let newUserArr = reactive([])

const hideSearchBar = () => {
  show.value = false
}
const getUser = async () => {
  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((json) => (userArr = json))
}
const searchUser = () => {
  const filteredUser = userArr.filter((item) =>
    item.name.toLowerCase().includes(search.value.trim().toLowerCase())
  )
  if (filteredUser.length) {
    newArr(filteredUser)
  } else {
    return userArr
  }
}

const newArr = (arr) => {
  userArr = arr
}
onMounted(() => {
  getUser()
})
</script>