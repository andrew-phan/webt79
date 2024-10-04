import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useFetchLanguage } from '@/composables/useLanguage'

export const useLanguageStore = defineStore('language', () => {
  const { languages, defaultLanguage, isLoading, error, fetchLanguages } = useFetchLanguage()
  const currentLanguage = ref('')

  const setLanguage = (lang: string) => {
    if (lang in languages.value) {
      currentLanguage.value = lang
      if (process.client) {
        localStorage.setItem('selectedLanguage', lang)
      }
    }
  }

  const getCurrentLanguageName = computed(() => {
    return languages.value[currentLanguage.value] || ''
  })

  const initLanguage = async () => {
    await fetchLanguages()
    if (process.client) {
      const savedLanguage = localStorage.getItem('selectedLanguage')
      if (savedLanguage && savedLanguage in languages.value) {
        currentLanguage.value = savedLanguage
      } else {
        currentLanguage.value = defaultLanguage.value
      }
    } else {
      currentLanguage.value = defaultLanguage.value
    }
  }

  return {
    currentLanguage,
    languages,
    isLoading,
    error,
    setLanguage,
    getCurrentLanguageName,
    initLanguage
  }
})