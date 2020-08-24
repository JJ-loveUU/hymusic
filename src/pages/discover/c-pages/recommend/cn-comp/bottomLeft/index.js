import React, { memo } from 'react'


import { LeftButtonWrapper } from './style'
import HotRecomment from '../../cn-comp/hotRecommend'
import NewRanking from '../../cn-comp/newranking'
import BillBoard from '../../cn-comp/billboard'



export default memo(function ButtomLeft() {
    return (
        <LeftButtonWrapper >
            <HotRecomment />
            <NewRanking />
            <BillBoard />
        </LeftButtonWrapper>
    )
})
