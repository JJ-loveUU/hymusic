import * as actionTypes from './constants';
import { Map } from 'immutable';

//使用immutables包装增加性能
const defaultRecommendState = Map({
    topBanners: [],
    hotRecommends: [],
    newRankings: [],
    newBillboard: [],
    upBillboard: [],
    originBillboard: []
})


const recommendReducer = function reducer(state = defaultRecommendState, action) {
    switch (action.type) {
        case actionTypes.GET_TOP_BANNER:
            return state.set("topBanners", action.topBanners);
        case actionTypes.GET_HOTRECOMMENDS:
            return state.set("hotRecommends", action.hotRecommends);
        case actionTypes.GET_NEWRankings:
            return state.set("newRankings", action.newRankings);
        case actionTypes.GET_New_BillBOARD:
            return state.set("newBillboard", action.newBillboard);
        case actionTypes.GET_UP_BillBOARD:
            return state.set("upBillboard", action.upBillboard);
        case actionTypes.GET_ORIGIN_BillBOARD:
            return state.set("originBillboard", action.originBillboard);
        default:
            return state;
    }
}

export default recommendReducer;

