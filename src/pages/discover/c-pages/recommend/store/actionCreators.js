import * as recommendService from '@/services/recommend.js'

import * as constants from './constants'


export const changeTopBanners = (res) => {

    return {
        type: constants.GET_TOP_BANNER,
        topBanners: res.banners
    }
}

export const changeHotRecommends = (res) => {

    return {
        type: constants.GET_HOTRECOMMENDS,
        hotRecommends: res.result
    }
}

export const changeNewRankings = (res) => {
    return {
        type: constants.GET_NEWRankings,
        newRankings: res.albums
    }
}

export const changeOriginalBillBoard = (res) => {

    return {
        type: constants.GET_ORIGIN_BillBOARD,
        originBillboard: res.playlist
    }
}
export const changeUpBillBoard = (res) => {

    return {
        type: constants.GET_UP_BillBOARD,
        upBillboard: res.playlist
    }
}
export const changeNewBillBoard = (res) => {

    return {
        type: constants.GET_New_BillBOARD,
        newBillboard: res.playlist
    }
}


export const getTopBannerAction = () => {
    return dispatch => {
        recommendService.getTopBanners().then(res => {
            dispatch(changeTopBanners(res))
        })
    }
}

export const getHotRecommends = (limit) => {
    return dispatch => {
        recommendService.getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommends(res));
        })
    }
}

export const getNewRankings = (limit) => {
    return dispatch => {
        recommendService.getNewRanking(limit).then(res => {
            dispatch(changeNewRankings(res));
        })
    }
}


export const getBillboard = (idx) => {
    return dispatch => {
        recommendService.getBillBoard(idx).then(res => {
            if (idx === 2) {
                dispatch(changeOriginalBillBoard(res));
            } else if (idx === 0) {
                dispatch(changeNewBillBoard(res));
            } else if (idx === 3) {
                dispatch(changeUpBillBoard(res));
            }
        })
    }
}