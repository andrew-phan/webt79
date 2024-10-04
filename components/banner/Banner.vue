<template>
  <div class="mv">
    <Carousel :items-to-show="1" :wrap-around="true" :autoplay="5000">
      <Slide v-for="(slide, index) in slides" :key="index">
        <a :href="slide.link">
          <img class="pc" :src="slide.pcImage" alt="">
          <img class="sp" :src="slide.spImage" alt="">
        </a>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <BannerMarquee />
  </div>
</template>

<script setup>

const slides = [
  {
    link: '#',
    pcImage: '/image/Desktop/home/banner-home.jpg',
    spImage: '/image/Mobile/home/banner_1.jpg'
  },
  {
    link: '#',
    pcImage: '/image/Desktop/home/banner-home.jpg',
    spImage: '/image/Mobile/home/banner_2.jpg'
  }
]
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