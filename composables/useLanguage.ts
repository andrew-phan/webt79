import { ref } from 'vue'
import useApi from '@/composables/useApi'

interface LanguageResponse {
  status: string
  code: number
  message: string
  data: {
    default: string
    list: Record<string, string>
  }
}

export function useFetchLanguage() {
  const languages = ref<Record<string, string>>({})
  const defaultLanguage = ref('')
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchLanguages = async () => {
    isLoading.value = true
    error.value = null

    try {
      const data: LanguageResponse = await useApi('language')

      if (data.status === 'success') {
        languages.value = data.data.list
        defaultLanguage.value = data.data.default
      } else {
        throw new Error('Không thể tải danh sách ngôn ngữ')
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Đã xảy ra lỗi khi tải danh sách ngôn ngữ'
      console.error('Lỗi khi tải danh sách ngôn ngữ:', e)
    } finally {
      isLoading.value = false
    }
  }

  return {
    languages,
    defaultLanguage,
    isLoading,
    error,
    fetchLanguages
  }
}