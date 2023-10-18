<template>
  <div
    class="p-4 flex flex-col justify-center rounded-xl border h-fit border-white/20 bg-white/[0.04] text-white cursor-pointer "
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <img :src="icon" alt="" class="p-2 rounded-lg bg-red-600 " />
        <h2 class="text-lg">{{ title }}</h2>
      </div>
      <div class="rounded-lg bg-white/10 border border-white/10 cursor-pointer">
        <i
          class="fas fa-chevron-down transition-all p-2"
          :class="{ 'rotate-180 transition-transform': show }"
        ></i>
      </div>
    </div>
    <transition name="slide-fade">
      <p
        class="mt-5 pt-4  font-light border-t border-t-white/20 transition-all"
        :class="{ 'hidden opacity-0 transition-all': !show }"
      >
        {{ descr }}
      </p>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, Transition } from 'vue';

interface Props {
  id: number;
  title: string;
  descr: string;
  icon: string;
  show: boolean;
}
defineProps<Props>();
</script>

<style scoped>
</style>
