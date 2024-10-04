<template>
  <ul class="nav">
    <li v-for="category in categories" :key="category.title" :title="category.title">
      <a :href="category.href" class="category"><span>{{ category.title }}</span></a>
      <div v-if="category.gameType" class="menu-con">
        <div class="inner single-brand">
          <a v-for="api in category.apis?.slice(0, 4)" :key="api.id" :href="api.href" class="box F-GAME">
            <div class="lo-left">
              <img :src="api.logo_url" class="lo">
            </div>
            <div class="lo-right">
              <p>{{ api.title }}</p>
            </div>
          </a>
          <a v-if="category.apis && category.apis.length > 4" :href="category.href" class="box F-GAME view-more">
            <div class="lo-right">
              <p>Xem thêm</p>
            </div>
          </a>
        </div>
      </div>
    </li>
  </ul>
  <div class="kf-box">
    <a class="kf-item promotions"><img src="/image/Desktop/header/khuyen-mai.png">
      <p>Khuyến mãi</p>
    </a>
    <a class="kf-item"><img src="/image/Desktop/header/ho-tro.png">
      <p>Hỗ Trợ</p>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import useApi from '~/composables/useApi'

interface Category {
  title: string;
  href: string;
  gameType: number;
  apis?: any[];
}

const baseCategories: Category[] = [
  { title: 'Thể Thao', href: '#/Sport', gameType: 5 },
  { title: 'Casino', href: '#/Live', gameType: 1 },
  { title: 'Nổ Hũ', href: '#/Game', gameType: 3 },
  { title: 'Game Bài', href: '#/Board', gameType: 6 },
  { title: 'Bắn Cá', href: '#/Fish', gameType: 2 },
  { title: 'Xổ Số', href: '#/Lottery', gameType: 4 },
]

const { data: categories } = await useAsyncData('categories', async () => {
  const categoriesWithApis = await Promise.all(
    baseCategories.map(async (category) => {
      if (category.gameType) {
        const response = await useApi(`games/apis?lang=vi&gameType=${category.gameType}`)
        if (response.status === 'success') {
          return { ...category, apis: response.data }
        }
      }
      return category
    })
  )
  return categoriesWithApis
})
</script>

<style scoped>
.view-more {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-weight: bold;
}
</style>
