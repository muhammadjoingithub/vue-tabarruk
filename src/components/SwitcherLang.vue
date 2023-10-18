<template>
<!-- 
  <select v-model="stat.selectedLanguage" @change="changeLanguage">
    <option v-for="option in stat.languageOptions" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
    <div class="language">
    {{ translations[stat.selectedLanguage].sentence }}
  </div> -->

 <li class="transition-all decs" @click="showCountries" @focusout="state = false">
      <a href="#" class="hover:opacity-40 font-bold  dec"><img src="/public/images/eng.png" alt=""></a>
      <ul
        :class="[state ? 'block' : 'hidden']"
        class="absolute top-[12%] right-2 right-auto grid grid-cols-3 gap-2 bg-white/20 border border-white/30 backdrop-blur-xl rounded-xl p-2"
      >
        <li
          v-for="(el, idx) in Language"
          :key="idx"
          class="p-2 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 group cursor-pointer langswitch"
        >
          <img :src="el.flag" alt="" class="" />
          <div class="text-white">
            <h3 class="text-base group-hover:text-red-500 transition-all">{{ el.country }}</h3>

          </div>
        </li>
      </ul>
    </li>
</template>
<script setup lang="ts">
import { ref,reactive,watch } from 'vue';
const state = ref(false)
import { Language } from '@/components/Language.js'
const showCountries = () => {
  state.value = !state.value
  console.log('hover')
}
const stat = reactive({
  selectedLanguage: 'en', 
  languageOptions: [
    { label: '/public/images/rusia.png', value: 'en' },
    { label: '/public/images/kazakh.png', value: 'es' },
    { label: '/public/images/turmen2.png', value: 'fr' },
    { label: '/public/images/english.png', value: 'de' },
    { label: '/public/images/kirgyz.png', value: 'it' },
    { label: '/public/images/azeri.png', value: 'ru' },
  ],
});

const translations = {
  en: {

    sentence: "Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th century.",
  },
  es: {

    sentence: "Impresionante muestra de la arquitectura islámica en Samarcanda, Uzbekistán, con tres madrazas ornamentadas con azulejos azules e inscripciones caligráficas, que datan del siglo XV.",
  },
  fr: {
    sentence: "Impressionnant exemple de l'architecture islamique à Samarcande, en Ouzbékistan, avec trois madrasas ornées de carreaux bleus et d'inscriptions calligraphiées, datant du XVe siècle.",
  },
  de: {
    sentence: "Beeindruckende Präsentation der islamischen Architektur in Samarkand, Usbekistan, mit drei prächtigen Medresen, verziert mit blauen Kacheln und kalligrafischen Inschriften aus dem 15. Jahrhundert.",
  },
  it: {

    sentence: "Stupefacente esposizione dell'architettura islamica a Samarcanda, Uzbekistan, con tre madrase ornate di piastrelle blu e iscrizioni calligrafiche, risalenti al XV secolo.",
  },
  ru: {

    sentence: "Потрясающая демонстрация исламской архитектуры в Самарканде, Узбекистане, с тремя изысканными медресе, украшенными синими плитками и каллиграфическими надписями, датирующимися 15 веком.",
  },
};

const changeLanguage = () => {
  const translatedContent = translations[stat.selectedLanguage];
};

watch(() => stat.selectedLanguage, changeLanguage);
</script>
<style scoped>
.language{
  position: absolute;
  top: 150px;
  right: 0;
  color: white;
  width: 200px;
}
.dec{
  text-decoration: none;
}
.decs{
  list-style: none;
}
</style>