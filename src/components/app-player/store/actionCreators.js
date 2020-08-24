import * as constants from './constants';
import * as  playService from '@/services/player.js'


function changeSongDetail(res) {
    return {
        type: constants.GET_SONGDETAIL,
        currentSong: res.songs[0]
    }
}


export const getSongDetail = (ids) => {
    return dispatch => {
        playService.getSongDetail(ids).then(res => {
            dispatch(changeSongDetail(res))
        })
    }
}