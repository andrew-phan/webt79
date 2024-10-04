<template>
    <main class="main">
        <Banner />
        <MenuMobile />
        <div class="wrap-home">
            <div class="home">
                <GamesUpcoming />
                <GamesFeatured />
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import useGames from '@/composables/useGames'
import { useLanguageStore } from '@/stores/languageStore'
import { useNotices } from '@/composables/useNotices'

const { notices, fetchNotices } = useNotices()
const languageStore = useLanguageStore()

await languageStore.initLanguage()
await fetchNotices()
</script>
