import { ref } from 'vue'

export default function useGameTypeMenuApis() {
  const gameApis = ref<Record<number, any[]>>({})

  const fetchGameApis = async (gameType: number) => {
    if (!gameApis.value[gameType]) {
      try {
        const response = await useApi(`games/apis?lang=vi&gameType=${gameType}`)
        if (response.status === 'success') {
          gameApis.value[gameType] = response.data
        }
      } catch (error) {
        console.error(`Lỗi khi lấy dữ liệu cho gameType ${gameType}:`, error)
      }
    }
    return gameApis.value[gameType] || []
  }

  return {
    gameApis,
    fetchGameApis
  }
}