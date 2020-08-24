import React, { memo } from 'react'




import { SongImgDescWrapper } from './style'

export default memo(function SongImgDesc(props) {


    //width可以理解为照片img的宽度
    const { width = 140, height = 140, bgY = 0, bgX = 0, minh = "auto", showPaly = false, showPalyHover = false, size = 100,
        name = "", picUrl = "#/", playCount = 0, Info = null
    } = props;

    return (
        <SongImgDescWrapper width={width} height={height} bgY={bgY} minh={minh} bgX={bgX} size={size}>
            <div className="topImgDiv">
                <img src={picUrl} alt=" " />
                <a href="#/" className="cover sprite_covor">
                </a>
                {
                    showPaly ? (
                        <div className="paly">
                            <span className="songImg sprite_icon"></span>
                            <span className="totalPlay">{playCount}</span>
                            <a className="palyNow sprite_icon" href="#/"></a>
                        </div>
                    ) : ""
                }
                <a className="palyNowHover sprite_icon" href="#/"></a>
            </div>
            {Info}
        </SongImgDescWrapper>
    )
})
