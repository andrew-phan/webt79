<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">

useHead({
    link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' },
        { rel: 'stylesheet', href: '/js/swiper/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/top.css' },
        { rel: 'stylesheet', href: '/css/sport.css' },
        { rel: 'stylesheet', href: '/css/no-hu.css' },
        { rel: 'stylesheet', href: '/css/casino.css' },
    ],
    script: [
        { src: '/js/jquery-3.6.0.js', defer: true },
        { src: '/js/swiper/swiper-bundle.min.js', defer: true },
        { src: '/js/common.js', defer: true },
        { src: '/js/page/top.js', defer: true }
    ]
})
</script>