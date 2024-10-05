<template>
<ul v-if="!userStore.logged" class="right">
    <li data-popup="login" class="js-popup-link">Đăng Nhập</li>
    <li>Đăng Ký</li>
</ul>
</template>
<script setup lang="ts">
import { useAuthStore } from '@/stores/userStore';
const userStore = useAuthStore();

</script>