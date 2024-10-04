<template>
  <div v-if="notices.length > 0" class="mv">
    <div class="marquee">
      <div class="context inner">
        <img src="/image/Desktop/home/icon01.png" width="18px" height="18px" alt="" class="marquee-icon">
        <marquee>
          <span v-for="(notice, index) in notices" :key="index">
            {{ notice.content }}
            <span v-if="index < notices.length - 1" class="separator"> | </span>
          </span>
        </marquee>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNotices } from '~/composables/useNotices'

const { notices } = useNotices()
</script>
