<template>
     <header :class="headerClass">
      <div class="nobody">
        <div class="flex container justify-between items-center">
          <div class="logo max-md:w-4/5">
            <Logo />
          </div>
          <nav class="flex items-center gap-8">
            <Navbar />
            <SwitcherLang />
            <div>
              <SearchPanelType/>
           </div>
            <img class="lg" src="/public/images/menu.png" alt="">
          </nav>
       

        </div>
        
      </div>
    </header>
</template>
<script setup lang="ts">
import Logo from '@/components/Logo.vue';
import SwitcherLang from '@/components/SwitcherLang.vue';
import Navbar from "@/components/NavBar.vue";
import SearchPanelType from '@/components/SearchPanelType.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const headerClass = ref('bg-hero-pattern headpanel bg-center bg-cover max-md:h-auto fixed top-0 left-0 w-full z-[51] !border-b !border-b-transparent transition-all duration-300');

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    headerClass.value = 'fixed top-0 left-0 w-full z-[51] !border-b !border-b-transparent transition-all duration-300 !bg-dark/90 !border-b-white/20 tepa';
  } else {
    headerClass.value = 'bg-hero-pattern headpanel bg-center bg-cover max-md:h-auto fixed top-0 left-0 w-full z-[51] !border-b !border-b-transparent transition-all duration-300 ';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.tepa{
  background: #19191a;
}
.headpanel{
    position: absolute;
    top: 0;
    width: 100%;
}
</style>
