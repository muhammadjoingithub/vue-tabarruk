<template>
  <div class="header-hover">
    <div @click="handleClick" class="up-hover cursor-pointer transition-all">
      <img class="redflag" :src="img1" alt="">
      <p class="white">{{ text }}</p>
      <img :class="{ rotated: isDownHoverVisible }" class="chevronup" :src="img2" alt="">
    </div>
    <div v-show="isDownHoverVisible" class="down-hover transition-all">
      <p class="otherwhite">{{ text2 }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

interface QuestionItem {
  img1: string;
  img2: string;
  text: string;
  text2: string;
}
defineProps<QuestionItem>();

const isDownHoverVisible = ref(false);

const handleClick = () => {
  if (isDownHoverVisible.value) {
    isDownHoverVisible.value = false;
  } else {
    isDownHoverVisible.value = true;
  }
};
</script>
<style scoped>
.chevronup{
  display: flex;
width: 40px;
height: 40px;
padding: 8px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0.10);
background: rgba(255, 255, 255, 0.10);
}
.otherwhite{
  color: #FFF;
font-family: "Gilroy",sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 20.8px */
}
.white{
  color: var(--White, #FFF);
font-family: "Gilroy",sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 130%; /* 26px */
}
.redflag{
  display: flex;
width: 40px;
height: 40px;
padding: 8px;
justify-content: center;
align-items: center;
border-radius: 8px;
border: 1px solid rgba(255, 255, 255, 0.24);
background: var(--Main, #E54545);
box-shadow: 0px 4px 20px 0px rgba(229, 69, 69, 0.48);
}
  .rotated {
    transform: rotate(180deg);
  }
.down-hover {
  margin-top: 20px;
  height: 74px;
  padding: 22px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.20);
  transition: all 0.5s ease-in-out;  /* Added transition property */
}

.header-hover {
  margin-top: 40px;
  /* width: 45%; */
  padding: 22px;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: rgba(255, 255, 255, 0.04);
  transition: all 0.5s ease-in-out;  /* Added transition property */
}
.up-hover{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
