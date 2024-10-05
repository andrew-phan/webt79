<template>
  <div class="brand-three">
    <a v-for="item in aboutItems" :key="item.id" :href="`#/AboutUs/${item.id}`" class="link-item">
      {{ item.title }}
    </a>
  </div>
</template>
<script setup lang="ts">

const { aboutItems } = useAbout();

</script>