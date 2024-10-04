import type { ApiResponse, GameCategory, Game } from '@/types/game'

const mockUpcomingGames: Game[] = [
    {
        id: 29,
        title: "AG băng hình",
        subtitle: "",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579161_v6bjb8YNFJ.png",
        web_logo: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579141_NuduAmHssd.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202104/28/api_game_1619620604_sz8DsjaDUM.png",
        logo_url: "https://cms.t79.bet/storage/uploads/logo/202203/17/logo_1647487084_fxXNTlBJn2.png",
        api_name: "AG4",
        class_name: "ag",
        game_type: 1,
        params: "{\"gameCode\":\"0\",\"gameType\":1}",
        is_open: 1,
        weight: 11,
        client_type: 0,
        tags: "hot",
        remark: "",
        lang_json: "{\"zh_cn\":\"AG视讯\",\"zh_hk\":\"AG視訊\",\"en\":\"AG Live\",\"th\":\"AG วีดีโอ\",\"vi\":\"AG băng hình\"}",
        lang: "vi",
        created_at: "2022-03-17 11:01:33",
        updated_at: "2024-01-22 17:43:15",
        icon_url: "https://cms.t79.bet/storage/uploads/icon/202409/13/icon_1726204038_2DNpbnDNhH.png"
    },
    {
        id: 29,
        title: "AG băng hình",
        subtitle: "",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579161_v6bjb8YNFJ.png",
        web_logo: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579141_NuduAmHssd.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202104/28/api_game_1619620604_sz8DsjaDUM.png",
        logo_url: "https://cms.t79.bet/storage/uploads/logo/202203/17/logo_1647487084_fxXNTlBJn2.png",
        api_name: "AG4",
        class_name: "ag",
        game_type: 1,
        params: "{\"gameCode\":\"0\",\"gameType\":1}",
        is_open: 1,
        weight: 11,
        client_type: 0,
        tags: "hot",
        remark: "",
        lang_json: "{\"zh_cn\":\"AG视讯\",\"zh_hk\":\"AG視訊\",\"en\":\"AG Live\",\"th\":\"AG วีดีโอ\",\"vi\":\"AG băng hình\"}",
        lang: "vi",
        created_at: "2022-03-17 11:01:33",
        updated_at: "2024-01-22 17:43:15",
        icon_url: "https://cms.t79.bet/storage/uploads/icon/202409/13/icon_1726204038_2DNpbnDNhH.png"
    },
    {
        id: 29,
        title: "AG băng hình",
        subtitle: "",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579161_v6bjb8YNFJ.png",
        web_logo: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579141_NuduAmHssd.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202104/28/api_game_1619620604_sz8DsjaDUM.png",
        logo_url: "https://cms.t79.bet/storage/uploads/logo/202203/17/logo_1647487084_fxXNTlBJn2.png",
        api_name: "AG4",
        class_name: "ag",
        game_type: 1,
        params: "{\"gameCode\":\"0\",\"gameType\":1}",
        is_open: 1,
        weight: 11,
        client_type: 0,
        tags: "hot",
        remark: "",
        lang_json: "{\"zh_cn\":\"AG视讯\",\"zh_hk\":\"AG視訊\",\"en\":\"AG Live\",\"th\":\"AG วีดีโอ\",\"vi\":\"AG băng hình\"}",
        lang: "vi",
        created_at: "2022-03-17 11:01:33",
        updated_at: "2024-01-22 17:43:15",
        icon_url: "https://cms.t79.bet/storage/uploads/icon/202409/13/icon_1726204038_2DNpbnDNhH.png"
    },
    {
        id: 29,
        title: "AG băng hình",
        subtitle: "",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579161_v6bjb8YNFJ.png",
        web_logo: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579141_NuduAmHssd.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202104/28/api_game_1619620604_sz8DsjaDUM.png",
        logo_url: "https://cms.t79.bet/storage/uploads/logo/202203/17/logo_1647487084_fxXNTlBJn2.png",
        api_name: "AG4",
        class_name: "ag",
        game_type: 1,
        params: "{\"gameCode\":\"0\",\"gameType\":1}",
        is_open: 1,
        weight: 11,
        client_type: 0,
        tags: "hot",
        remark: "",
        lang_json: "{\"zh_cn\":\"AG视讯\",\"zh_hk\":\"AG視訊\",\"en\":\"AG Live\",\"th\":\"AG วีดีโอ\",\"vi\":\"AG băng hình\"}",
        lang: "vi",
        created_at: "2022-03-17 11:01:33",
        updated_at: "2024-01-22 17:43:15",
        icon_url: "https://cms.t79.bet/storage/uploads/icon/202409/13/icon_1726204038_2DNpbnDNhH.png"
    },
    {
        id: 29,
        title: "AG băng hình",
        subtitle: "",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579161_v6bjb8YNFJ.png",
        web_logo: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579141_NuduAmHssd.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202104/28/api_game_1619620604_sz8DsjaDUM.png",
        logo_url: "https://cms.t79.bet/storage/uploads/logo/202203/17/logo_1647487084_fxXNTlBJn2.png",
        api_name: "AG4",
        class_name: "ag",
        game_type: 1,
        params: "{\"gameCode\":\"0\",\"gameType\":1}",
        is_open: 1,
        weight: 11,
        client_type: 0,
        tags: "hot",
        remark: "",
        lang_json: "{\"zh_cn\":\"AG视讯\",\"zh_hk\":\"AG視訊\",\"en\":\"AG Live\",\"th\":\"AG วีดีโอ\",\"vi\":\"AG băng hình\"}",
        lang: "vi",
        created_at: "2022-03-17 11:01:33",
        updated_at: "2024-01-22 17:43:15",
        icon_url: "https://cms.t79.bet/storage/uploads/icon/202409/13/icon_1726204038_2DNpbnDNhH.png"
    },
    {
        id: 29,
        title: "AG băng hình",
        subtitle: "",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579161_v6bjb8YNFJ.png",
        web_logo: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579141_NuduAmHssd.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202104/28/api_game_1619620604_sz8DsjaDUM.png",
        logo_url: "https://cms.t79.bet/storage/uploads/logo/202203/17/logo_1647487084_fxXNTlBJn2.png",
        api_name: "AG4",
        class_name: "ag",
        game_type: 1,
        params: "{\"gameCode\":\"0\",\"gameType\":1}",
        is_open: 1,
        weight: 11,
        client_type: 0,
        tags: "hot",
        remark: "",
        lang_json: "{\"zh_cn\":\"AG视讯\",\"zh_hk\":\"AG視訊\",\"en\":\"AG Live\",\"th\":\"AG วีดีโอ\",\"vi\":\"AG băng hình\"}",
        lang: "vi",
        created_at: "2022-03-17 11:01:33",
        updated_at: "2024-01-22 17:43:15",
        icon_url: "https://cms.t79.bet/storage/uploads/icon/202409/13/icon_1726204038_2DNpbnDNhH.png"
    },

]

const mockFeaturedGames: Game[] = [
    {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    }, {
        title: "Mô tông giáng thế",
        web_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    },
]

const mockApiResponse: ApiResponse = {
    status: "success",
    code: 200,
    message: "",
    data: [
        {
            api_title: "AG亚游",
            api_name: "AG",
            tags: "mothuong",
            list: mockUpcomingGames
        },
        {
            api_title: "AG亚游",
            api_name: "AG",
            tags: "noibat",
            list: mockFeaturedGames
        }
    ]
}

export const getMockGames = (): ApiResponse => {
    return mockApiResponse
}

export const getUpcomingGames = (): Game[] => {
    const upcomingCategory = mockApiResponse.data.find(cat => cat.tags === "mothuong")
    return upcomingCategory ? upcomingCategory.list : []
}

export const getFeaturedGames = (): Game[] => {
    const featuredCategory = mockApiResponse.data.find(cat => cat.tags === "noibat")
    return featuredCategory ? featuredCategory.list : []
}
