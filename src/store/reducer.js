import { combineReducers } from 'redux-immutable';
import recommendReducer from '@/pages/discover/c-pages/recommend/store/reducer.js'
import  playerReducer  from '@/components/app-player/store'

//使用immutables包装增加性能
const reducer = combineReducers({
    recommend: recommendReducer,
    playerInfo: playerReducer
})

export default reducer