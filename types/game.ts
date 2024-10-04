export interface Game {
  id?: number;
  title?: string;
  subtitle?: string;
  web_pic?: string;
  web_logo?: string;
  mobile_pic?: string;
  logo_url?: string;
  api_name?: string;
  class_name?: string;
  game_type?: number;
  params?: string;
  is_open?: number;
  weight?: number;
  client_type?: number;
  tags?: string;
  remark?: string;
  lang_json?: string;
  lang?: string;
  created_at?: string;
  updated_at?: string;
  icon_url?: string;
}

export interface GameCategory {
  api_title: string;
  api_name: string;
  tags: string;
  list: Game[];
}

export interface ApiResponse {
  status: string;
  code: number;
  message: string;
  data: GameCategory[];
}
