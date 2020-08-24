import * as constants from './constants'
import { Map } from 'immutable';

const defaultState = Map({
    currentSong: {}
})

export default function reducer(state = defaultState, action) {

    
    switch (action.type) {
        case constants.GET_SONGDETAIL:
            return state.set("currentSong", action.currentSong);
        default:
            return state;
    }
}

