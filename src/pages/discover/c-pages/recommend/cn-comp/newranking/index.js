import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Carousel } from 'antd';

import { formtImg } from '@/utils/format'

import { NewRankingWrapper } from './style'
import { getNewRankings } from '../../store/actionCreators'
import RankHeader from '@/components/theme-header-rcm'
import SongImgDesc from '@/components/songImgDesc'



const RankingInfo = memo((props) => {
    return (
        <div>
            <p className="text-nowrap"><a href="#/">{props.itemm.name}</a></p>
            <a href="#/" >{props.itemm.artist.name}</a>
        </div>
    )
})

export default memo(function NewRanking() {



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewRankings(10));
    }, [dispatch])

    const { newRankings } = useSelector(state => ({
        newRankings: state.getIn(["recommend", "newRankings"])
    }), shallowEqual)


    //其他hooks
    const carouselRef = useRef();

    // const { width = 140, height = 140, bgY = 0, minh = "auto", showPaly = false, showPalyHover = false } = props;
    //name = "", picUrl = "#/", playCount = 0
    return (

        <NewRankingWrapper>
            <RankHeader leftTitle="新碟上架" />
            <button onClick={e => carouselRef.current.prev()}>1</button>
                <button onClick={e => carouselRef.current.next()}>2</button>
                <div className="carouselWrapper wrap-v3">

                    <Carousel autoplay={false} dots={false} ref={carouselRef}>


                        {
                            [0, 1].map((item, index) => {
                                return (
                                    <div key={item} className="carouselList">
                                        {
                                            newRankings.slice(index * 5, (index + 1) * 5).map((itemm, indey) => {
                                                return (
                                                    <SongImgDesc
                                                        key={itemm.id}
                                                        size={120}
                                                        width={100}
                                                        height={100}
                                                        showPalyHover={true}
                                                        picUrl={formtImg(itemm.picUrl, 100, 100)}
                                                        bgX={0}
                                                        bgY={-570}
                                                        Info={<RankingInfo itemm={itemm} />}

                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }




                    </Carousel>
                </div>
        </NewRankingWrapper>
    )
})
