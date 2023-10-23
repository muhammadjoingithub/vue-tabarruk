<template>
     <header class="bg-hero-pattern headpanel bg-center bg-cover max-md:h-auto">
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
</script>
<style scoped>
.headpanel{
    position: absolute;
    top: 0;
    width: 100%;
}
</style>
