<template>
  <button
    :type="type"
    class="py-3 px-7 flex gap-2 bg-red-600 rounded-lg active:scale-90 transition duration-200 hover:bg-red-700"
    :class="[clasList, btnClass]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'

interface Props {
  type?: string
  variant: string
  btnClass?: string
}
const props = defineProps<Props>()
const clasList = ref('')

if (props.variant == 'red') {
  clasList.value = 'green'
} else if (props.variant == 'dark') {
  clasList.value = 'red'
} else {
  clasList.value = 'black'
}
onMounted(() => {
  console.log(props.variant)
})
</script>

<style lang="scss" scoped></style>