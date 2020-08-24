import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Slider, Switch } from 'antd';


import * as actions from './store/actionCreators'
import { formtImg, getPlaySong, formatMinuteSecond } from '@/utils/format.js'

import { PlayerWrapepr } from './style'
import SongImgDesc from '@/components/songImgDesc'

export default memo(function AppPlayer() {



    const [isPlay, setIsPlay] = useState(false)
    const [currentProgress, setCurrentProgress] = useState(0);
    const [isChanging, setIsChanging] = useState(false)
    const [current, setcurrent] = useState("00:00")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getSongDetail(668479));

    }, [dispatch])

    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(["playerInfo", "currentSong"])
    }), shallowEqual)



    const audioRef = useRef();
    const sliderRef = useRef();

    const picUrl = currentSong.al && currentSong.al.picUrl;
    const duration = currentSong.dt && currentSong.dt / 1000;

    const changeSlider = useCallback((value) => {
        setIsChanging(true);
        setCurrentProgress(value);
    }, [])


    const afterChange = useCallback((value) => {
        setIsChanging(false);
        audioRef.current.currentTime = value / 100 * duration;
        if (value === 100) {
            setCurrentProgress(0);
            audioRef.current.currentTime = 0
        }
    }, [duration])

    function timeupdate(e) {
        if (!isChanging) {
            const curretTime = e.target.currentTime;
            setCurrentProgress(curretTime / duration * 100);
            setcurrent(formatMinuteSecond(curretTime * 1000));
        }
        if (e.target.currentTime === duration) {
            setIsPlay(false);
            setCurrentProgress(0);
        }
    }

    const play = useCallback(() => {
        if (isPlay) {
            audioRef.current.pause();
            setIsPlay(!isPlay);
        } else {
            audioRef.current.play();
            setIsPlay(!isPlay);
        }
    }, [isPlay])

    return (
        <PlayerWrapepr isPlay={isPlay}>
            <div className="playerInner wrap-v2">
                <div className="left">
                    <a className="prev sprite_player">
                    </a>
                    <a className="playOrPause sprite_player" onClick={play}>
                    </a>
                    <a className="next sprite_player">
                    </a>
                </div>
                <div className="center">
                    <div className="songImg">
                        <SongImgDesc
                            width={34}
                            height={34}
                            bgY={-80}
                            bgX={0}
                            size={34}
                            showPalyHover={false}
                            picUrl={formtImg(picUrl, 34, 34)}
                        />
                    </div>
                    <div className="progress">
                        <Slider defaultValue={0} onAfterChange={afterChange} value={currentProgress} ref={sliderRef} onChange={changeSlider}
                        />
                    </div>
                </div>
                <div className="right" >

                </div>
                <div style={{ "color": "#fff" }}>{current}/{formatMinuteSecond(parseFloat(duration) * 1000)}</div>
                <audio src={getPlaySong("668479")} ref={audioRef} onTimeUpdate={timeupdate} >

                </audio>

            </div>
        </PlayerWrapepr>
    )
})
