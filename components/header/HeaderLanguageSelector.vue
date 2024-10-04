<template>
  <div v-if="languageData" class="js-toggle dropdown-lang">
    <div class="js-toggle-link tg-link">
      <p class="icon" :class="currentLanguage === 'vi' ? 'icon--vi' : 'icon--en'"></p>
      <p class="text">
        <span>{{ getCurrentLanguageName }}</span>
        <span class="arrow"></span>
      </p>
    </div>
    <div class="js-toggle-content tg-content">
      <p v-for="(name, code) in languageData.languages" :key="code" @click="changeLanguage(code)">
        {{ name }}
      </p>
    </div>
  </div>
  <div v-else>Đang tải...</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAsyncData } from '#app'
import { useFetchLanguage } from '~/composables/useLanguage'

const { languages, defaultLanguage, fetchLanguages } = useFetchLanguage()

const { data: languageData, error } = await useAsyncData('languages', async () => {
  await fetchLanguages()
  return {
    languages: languages.value,
    defaultLanguage: defaultLanguage.value
  }
})

const currentLanguage = ref(languageData.value?.defaultLanguage || 'vi')

const getCurrentLanguageName = computed(() => {
  return languageData.value?.languages?.[currentLanguage.value] || ''
})

const changeLanguage = (lang: string) => {
  currentLanguage.value = lang
}
</script>
