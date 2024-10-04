<template>
    <div>
        <!-- <div v-if="userStore.isLoading" class="overlay-loading">Loading...</div> -->
        <!-- Kiểm tra nếu đã có user đăng nhập -->
        <div v-if="userStore.logged">
            <!-- Hiển thị khi người dùng đã đăng nhập -->
            <div class="dropdown is-login" @click="toggleDropdown">
                <div class="tg-link">
                    <p class="icon icon--vi">
                        <img src="/image/home/BANCA.png" alt="">
                    </p>
                    <p class="text">
                        <span>My Name</span>
                        <span class="arrow"></span>
                    </p>
                </div>
                <!-- <div v-if="isDropdownOpen" class="tg-content"> -->
                <transition name="fade-slide">
                    <div v-if="isDropdownOpen" class="user-menu" :class="{ show: isDropdownOpen }">
                        <ul>
                            <li class="line">
                                <div class="wrap">
                                    <div class="top_ye">
                                        <img src="/image/Desktop/header/icon01.png" width="20px" height="20px" alt="ye">
                                        Số
                                        dư ví <i class="fas fa-sync-alt" style="margin-left: 4px;"></i>
                                    </div>
                                    <div class="money">0.00</div>
                                </div>
                            </li>
                            <li class="">
                                <a href="#">
                                    <img src="/image/Desktop/header/icon02.png" width="20px" height="20px" alt="ck"> Nạp
                                    Tiền
                                </a>
                            </li>
                            <li class="line">
                                <a href="">
                                    <img src="/image/Desktop/header/icon03.png" width="20px" height="20px" alt="ck"> Rút
                                    tiền
                                </a>
                            </li>

                            <li class="">
                                <a href="#">
                                    <img src="/image/Desktop/header/icon04.png" width="20px" height="20px" alt="ck">
                                    Thông
                                    tin
                                    cá nhân
                                </a>
                            </li>
                            <li>
                                <div class="wrap">
                                    <img src="/image/Desktop/header/icon05.png" width="20px" height="20px" alt="ck">
                                    Đăng
                                    xuất
                                </div>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>

        </div>

        <form v-else class="topbar-ri pc">
            <input v-model="name" class="user" placeholder="Tên người dùng" maxlength="16" required>
            <div class="reg-box">
                <input v-model="password" class="password" placeholder="mật khẩu" type="password" maxlength="20"
                    required><a class="forget-a" style="display: none;">Quên
                    mật khẩu？</a>
            </div>
            <div @click.prevent="handleLogin" class="login">Đăng nhập</div><a href="javascript:;" class="register">Đăng
                ký
                ngay</a>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useAuthStore } from '@/stores/userStore';

const userStore = useAuthStore();
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;

};

// Đóng dropdown khi nhấp ra ngoài
const handleClickOutside = (event: MouseEvent) => {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(event.target as Node)) {
        isDropdownOpen.value = false;
        console.log('Dropdown closed'); // Kiểm tra khi đóng
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

const name = ref('');
const password = ref('');
const handleLogin = async () => {
    try {
        await userStore.login({
            name: name.value,
            password: password.value
        });
        console.log('Login successful!');
    } catch (error) {
        alert('Login failed!');
    }
};
console.log(userStore.logged)
// Hàm xử lý đăng xuất
const handleLogout = async () => {
    try {
        await userStore.logout();
        console.log('Logged out!');
    } catch (error) {
        console.error('Logout failed!', error);
    }
};


</script>
