import { ref, computed } from 'vue'
import type { Game } from '~/types/game'
import { getMockGames, getUpcomingGames, getFeaturedGames } from '~/mocks/games'

export default function useGames() {
  const { data, pending, error, refresh } = useLazyAsyncData(
    'games',
    async () => {
      try {
        // Using mock data
        const mockData = getMockGames()

        if (mockData.status === 'success') {
          return {
            upcoming: getUpcomingGames(),
            featured: getFeaturedGames()
          }
        } else {
          throw new Error('Không thể tải dữ liệu trò chơi')
        }

        // Uncomment the following block when ready to use real API
        /*
        const config = useRuntimeConfig()
        const { data } = await $fetch<ApiResponse>(`${config.public.apiBase}/games/hotmain`)

        if (data && data.status === 'success') {
          const gameCategories = data.data

          const upcomingCategory = gameCategories.find(cat => cat.tags === 'mothuong')
          const featuredCategory = gameCategories.find(cat => cat.tags === 'noibat')

          return {
            upcoming: upcomingCategory ? upcomingCategory.list : [],
            featured: featuredCategory ? featuredCategory.list : []
          }
        } else {
          throw new Error('Không thể tải dữ liệu trò chơi')
        }
        */
      } catch (err) {
        console.error('Đã xảy ra lỗi khi tải dữ liệu trò chơi', err)
        throw err
      }
    },
    {
      server: true,
      immediate: true
    }
  )

  const upcomingGames = computed(() => data.value?.upcoming || [])
  const featuredGames = computed(() => data.value?.featured || [])

  return {
    upcomingGames,
    featuredGames,
    pending,
    error,
    refresh
  }
}