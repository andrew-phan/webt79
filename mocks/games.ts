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
        title: "AI Sports",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647776745_1982LwmfyB.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202205/09/api_game_1652103267_Ke0mwBuwvV.png",
    }, {
        title: "Thunderbolt",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/21/api_game_1647792148_Fm3DWl1gzh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/21/api_game_1647792158_pKMT7R3009.png",
    }, {
        title: "Xiaojin Sports",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202204/01/api_game_1648784599_GHAniEM4nK.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202204/01/api_game_1648784586_gztNwdry08.png",
    }, {
        title: "AG Sports",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647594077_sExY2g7c9R.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/29/api_game_1648555344_i81rjGDfRK.png",
    },
    {
        title: "AG băng hình",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/18/api_game_1647579161_v6bjb8YNFJ.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202104/28/api_game_1619620604_sz8DsjaDUM.png",
    },
    {
        title: "DG băng hình",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647711624_dTKTx49SLB.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202106/04/api_game_1622777851_CwKUz960c9.png",
    },
    {
        title: "XG Video",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647741838_UreDFhJOBE.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647741882_fHOxMqSkn0.png",
    },
    {
        title: "BG Sòng Bạc",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/20/api_game_1647742614_Q1ILH8FiWb.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202106/04/api_game_1622777637_uZORKhAWTl.png",
    },
    {
        title: "Yibo",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652113_6ODOSUS6Vh.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/19/api_game_1647652281_PtvcH9DaUc.png",
    },
    {
        title: "EVO băng hình2",
        web_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/29/api_game_1648557341_fVhdwedZLj.png",
        mobile_pic: "https://cms.t79.bet/storage/uploads/api_game/202203/29/api_game_1648557391_NIBs8Dit4x.png",
    }
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
