import { ref, computed, onServerPrefetch } from 'vue'
import { useLanguageStore } from '@/stores/languageStore'

interface Notice {
  title: string
  content: string
  url: string | null
}

interface ApiResponse {
  status: string
  code: number
  message: string
  data: Notice[]
  alert: any[]
}

export const useNotices = () => {
  const notices = ref<Notice[]>([])
  const config = useRuntimeConfig()
  const languageStore = useLanguageStore()

  const currentLang = computed(() => languageStore.currentLanguage)

  const { data: noticesData, refresh } = useAsyncData<ApiResponse>(
    'notices',
    () => $fetch(`${config.public.apiBase}/system/notices`, {
      params: { lang: currentLang.value }
    })
  )

  const fetchNotices = async () => {
    try {
      await refresh()
      if (noticesData.value?.status === 'success' && Array.isArray(noticesData.value.data)) {
        notices.value = noticesData.value.data
        console.log('Notices fetched:', notices.value)
      } else {
        console.error('Unexpected API response:', noticesData.value)
      }
    } catch (error) {
      console.error('Lỗi khi fetch thông báo:', error)
    }
  }

  fetchNotices()

  return {
    notices,
    fetchNotices
  }
}