import { ref } from 'vue'
import useApi from '@/composables/useApi'

interface BannerItem {
  title: string
  url: string
  groups: string
  dimensions: string
  weight: number
  jump_link: string
  is_new_window: number
}

interface BannerResponse {
  status: string
  code: number
  message: string
  data: BannerItem[]
}

export default function useBanners() {
  const banners = ref<BannerItem[]>([])
  const isMobile = ref(false)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const checkDevice = () => {
    if (typeof window !== 'undefined') {
      // Client-side
      isMobile.value = window.innerWidth < 1024
    } else {
      // Server-side
      const headers = useRequestHeaders()
      const userAgent = headers['user-agent']?.toLowerCase() ?? ''
      isMobile.value = userAgent.includes('mobile')
    }
  }

  const fetchBanners = async () => {
    isLoading.value = true
    error.value = null

    const group = isMobile.value ? 'mobile1' : 'new1'
    const endpoint = `banners?group=${group}&lang=vi`
    //console.log('Fetching banners for:', group, 'Endpoint:', endpoint)

    try {
      const response = await useApi(endpoint)
      //console.log('API Response:', response)

      if (response && response.status === 'success' && Array.isArray(response.data)) {
        banners.value = response.data
      } else {
        console.error('Invalid API response:', response)
        throw new Error('Không thể tải danh sách banner: Invalid API response')
      }
    } catch (e) {
      console.error('Error details:', e)
      error.value = e instanceof Error ? e.message : 'Đã xảy ra lỗi khi tải danh sách banner'
      console.error('Lỗi khi tải danh sách banner:', error.value)
    } finally {
      isLoading.value = false
    }
  }

  return {
    banners,
    isMobile,
    isLoading,
    error,
    fetchBanners,
    checkDevice
  }
}
