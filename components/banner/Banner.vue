<template>
  <div class="mv">
    <div v-if="isLoading">Đang tải banner...</div>
    <div v-else-if="error">{{ error }}</div>
    <template v-else>
      <Carousel v-if="data && data.length" :items-to-show="1" :wrap-around="true" :autoplay="3000" :itemsToScroll="1" :pauseAutoplayOnHover="true">
        <Slide v-for="(slide, index) in data" :key="index">
          <a :href="slide.jump_link" :target="slide.is_new_window ? '_blank' : '_self'">
            <img :src="slide.url" :alt="slide.title">
          </a>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </template>
    <ClientOnly>
      <BannerMarquee />
    </ClientOnly>
  </div>
</template>

<script setup>
import { useAsyncData } from '#app'
import useBanners from '@/composables/useBanners'

const { banners, isMobile, isLoading, error, fetchBanners, checkDevice } = useBanners()

const { data } = await useAsyncData('banners', async () => {
  checkDevice()
  await fetchBanners()
  return banners.value
})
</script>

<style scoped>
.carousel__slide {
  padding: 0;
}

.carousel__slide a {
  display: block;
}

.carousel__slide a:hover {
  opacity: 1;
}

.carousel__slide img {
  width: 100%;
  height: auto;
}

.carousel__slide {
  user-select: none;
}

.carousel__slide a:hover {
  opacity: 1;
}

/* Add these new styles */
.carousel__prev,
.carousel__next {
  background: hsla(0, 0%, 94.1%, 0.6);
  border-radius: 50%;
  border: none !important;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
}

.carousel__prev {
  left: -90px;
}

.carousel__next {
  right: -90px;
}

.carousel__prev::after,
.carousel__next::after {
  font-size: 16px;
  font-weight: bold;
}

@media screen and (max-width: 1023px) {
  .carousel__prev,
  .carousel__next {
    display: none;
  }
}
</style>