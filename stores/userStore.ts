// stores/authStore.ts
import { defineStore } from "pinia";
import useApi from "@/composables/useApi";

export type User = {
  ulid: string;
  name: string;
  email: string;
  avatar: string;
  must_verify_email: boolean;
  has_password: boolean;
  roles: string[];
  providers: string[];
};

export const useAuthStore = defineStore("authStore", () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();

  // Trạng thái người dùng và token
  const user = ref<User | null>(null);
  const token = useCookie("member_login_token", {
    path: "/",
    sameSite: "strict",
    secure:
      typeof config.public.apiBaseUrl === "string" &&
      config.public.apiBaseUrl.startsWith("https://"),
    maxAge: 60 * 60 * 24 * 365,
  });

  const logged = computed(() => !!token.value);
  const isLoading = ref(false); // Thêm biến trạng thái loading

  // Hàm đăng nhập
  const login = async (credentials: { name: string; password: string }) => {
    isLoading.value = true; // Bắt đầu loading
    try {
      const response = await useApi("auth/login", {
        method: "POST",
        body: credentials,
      });
      
      if (response.status === "error") {
        return {
          success: false,
          message: response.message || "Đăng nhập thất bại",
        };
      }
      
      if (response.data && response.data.access_token) {
        token.value = response.data.access_token;
        await fetchUser();
        return { success: true };
      }
      
      return {
        success: false,
        message: "Đăng nhập thất bại",
      };
    } catch (error: any) {
      console.error("Login failed:", error);
      return {
        success: false,
        message: error.data?.message || "Đã xảy ra lỗi không mong muốn.",
      };
    } finally {
      isLoading.value = false; // Kết thúc loading
    }
  };

  // Lấy thông tin người dùng
  const fetchUser = async () => {
    isLoading.value = true; // Bắt đầu loading
    try {
      const data = await useApi("user", {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      if (data.user) {
        user.value = data.user;
      }
    } catch (error) {
      console.error("Fetching user data failed:", error);
    } finally {
      isLoading.value = false; // Kết thúc loading
    }
  };

  // Đăng xuất
  const logout = async () => {
    try {
      const response = await useApi("auth/logout", {
        method: "POST",
      });

      if (response.status === 200) {
        token.value = "";
        user.value = null;
        nuxtApp.runWithContext(() => {
          return navigateTo("/");
        });
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { user, logged, login, fetchUser, logout, token, isLoading }; // Trả về biến loading
});
