import React, { memo, useEffect, Fragment } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'



import { hotRecs } from '@/common/local-datas.js'
import { HotRecommendWrapper } from './style.js'
import { getHotRecommends } from '../../store/actionCreators.js'
import { formtImg } from '@/utils/format'

import HotHeader from '@/components/theme-header-rcm/index.js'
import SongComp from '@/components/songImgDesc'



const HotRecInfo = (props) => {

    return (
        <a href="#/" >
            <p style={{ fontSize: "14px" }}>{props.name}</p>
        </a>
    )
}




export default memo(function HotRecommend() {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotRecommends(8));
    }, [dispatch])

    const { hotRecommends } = useSelector(state => (
        {
            hotRecommends: state.getIn(["recommend", "hotRecommends"])
        }
    ), shallowEqual)



    return (
        <HotRecommendWrapper>
            <HotHeader types={hotRecs} leftTitle="热门推荐" />
            <div className="recContent">
                {
                    // width = 140, height = 140, bgY = 0, minh = "auto", showPaly = false, showPalyHover = false } = props.info;
                    hotRecommends.map((item, index) => {
                        const { name, picUrl, playCount } = item;
                        return <Fragment key={item.id}>
                            <SongComp
                                minh={230}
                                showPaly={true}
                                picUrl={formtImg(picUrl, 140, 140)}
                                playCount={playCount}
                                playCount={playCount}
                                Info={<HotRecInfo name={name} />}
                                size={140}
                                width={140}
                                height={140}
                                bgX={0}
                                bgY={0}
                            />

                        </Fragment>
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
