<template>

    <div id="login" class="js-popup popup form-login sp" v-if="isPopupVisible">
        <div class="bg-overplay js-close" @click="closePopup"></div>
        <div class="content">
            <div class="close js-close" @click="closePopup">
                <i class="fas fa-times"></i>
            </div>
            <div class="content__body">
                <div class="scroll">
                    <div class="el-dialog__body">
                        <div class="login-content">
                            <p class="img">
                                <img src="/image/Desktop/header/logo.png" alt="logo" class="logo">
                            </p>
                            <div class="right-content">
                                <div class="login-content__header">
                                    <p>Đăng nhập</p>
                                </div>
                                <form @submit.prevent="handleLogin">
                                    <div class="form-item">
                                        <div class="el-input">
                                            <input v-model="name" type="text" placeholder="Tên người dùng"
                                                maxlength="16" required class="el-input__inner">
                                        </div>
                                        <div class="msg" v-if="loginError === '用户名 不能为空。,密码 不能为空。'">
                                            *Tài khoản không tồn tại</div>
                                    </div>
                                    <div class="form-item">
                                        <div class="el-input">
                                            <input v-model="password" type="password" autocomplete="off"
                                                placeholder="mật khẩu" maxlength="20" required class="el-input__inner">
                                        </div>
                                        <div class="msg" v-if="loginError === '密码 不能为空。'">
                                            *Sai mật khẩu</div>
                                    </div>
                                    <label class="check01">Ghi nhớ
                                        <input type="checkbox" v-model="rememberMe">
                                        <span class="checkmark"></span>
                                    </label>
                                    <a class="login-submit" @click.prevent="handleLogin">Đăng nhập</a>
                                    <div class="loginVersion3">
                                        <p class="text-forget">Quên mật khẩu ?</p>
                                        <p class="text-register">Đăng ký</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/userStore';

const name = ref('');
const password = ref('');
const rememberMe = ref(true);
const loginError = ref<string | null>(null);
const userStore = useAuthStore();
const isPopupVisible = ref(true); // Biến trạng thái cho popup

const closePopup = () => {
    isPopupVisible.value = false; // Đóng popup
};

const handleLogin = async () => {
    try {
        const result = await userStore.login({
            name: name.value,
            password: password.value
        });

        if (result.success) {
            loginError.value = null;
            closePopup(); // Đóng popup login sau khi đăng nhập thành công
        } else {
            loginError.value = result.message;
        }
    } catch (error) {
        loginError.value = 'Đã xảy ra lỗi không mong muốn.';
    }
};

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

<style scoped></style>