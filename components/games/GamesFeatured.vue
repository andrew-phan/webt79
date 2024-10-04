<template>
  <div class="feature-game-wp">
    <div class="section-title">Trò chơi nổi bật</div>
    <div class="section-content">
      <div class="third-party-wp">
        <div class="swiper-game-list">
          <Carousel :items-to-show="5" :wrap-around="true">
            <Slide v-for="game in featuredGames" :key="game.id">
              <div class="swiper-slide">
                <div class="game">
                  <div class="ani-container">
                    <canvas width="260" height="260" :style="getCanvasStyle(game)"></canvas>
                  </div>
                  <div class="el-image">
                    <img :src="game.web_pic" class="el-image__inner" :alt="game.title">
                  </div>
                  <div class="btn-enterGame">
                    <button type="button" class="el-button el-button--default">
                      <span>Vào trò chơi</span>
                    </button>
                  </div>
                  <div class="gameName">{{ game.title }}</div>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Game } from '~/types/game'

// TODO: fix css in this component and carousel

const { featuredGames } = useGames()

const getCanvasStyle = (game: Game) => {
  return {
    backgroundColor: 'transparent',
    transform: 'matrix(0.653846, 0, 0, 0.653846, -45, -45)'
  }
}
</script>

<style scoped>
:deep(.carousel__slide) {
  padding: 5px;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: hsla(0,0%,94.1%,.6);
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

:deep(.carousel__prev) {
  left: -25px;
}

:deep(.carousel__next) {
  right: -25px;
}
</style>