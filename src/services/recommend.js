import instance from '@/services/require.js'



export function getTopBanners() {
    return instance({
        url: "/banner"
    })
}

export function getHotRecommends(limit) {
    return instance({
        url: "/personalized",
        params: {
            limit
        }
    })
}


export function getNewRanking(limit) {
    return instance({
        url: "/top/album",
        params: {
            limit
        }
    })
}

export function getBillBoard(idx) {
    return instance({
        url: "/top/list",
        params: {
            idx
        }
    })
}