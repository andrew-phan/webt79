interface LoginPayload {
  name: string;
  password: string;
  key: string;
  captcha: string;
}

interface RegisterPayload {
  lang: string;
  invite_code: string;
  name: string;
  password: string;
  password_confirmation: string;
  phone: string;
  qk_pwd: string;
  realname: string;
  register_site: string;
  key: string;
  captcha: string;
  sms_code: string;
}

interface AuthState {
  isLoggedIn: boolean;
  userToken: string | null;
}
