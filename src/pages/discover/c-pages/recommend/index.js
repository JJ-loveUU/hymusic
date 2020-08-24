import React, { memo, useEffect } from 'react';
import { connect, useSelector, useDispatch, shallowEqual } from 'react-redux';



import * as actionTypes from './store/actionCreators'
import { ButtonWrapper } from './style'

import TopBanner from './cn-comp/topbanner'
import HotRecommend from './cn-comp/hotRecommend'
import BottomLeft from './cn-comp/bottomLeft'





const Recommend = memo(function Recommend(props) {



    const { topBanners } = useSelector(state => (
        {
            // topBanners: state.get("recommend").get("topBanners"),和下面一种写法一个意思
            topBanners: state.getIn(["recommend", "topBanners"])
        }
    ), shallowEqual);//浅层比较

    const dispatch = useDispatch()

    //发送请求
    useEffect(() => {
        dispatch(actionTypes.getTopBannerAction());
    }, [dispatch])




    return (
        <div>
            <TopBanner></TopBanner>
            <ButtonWrapper>
                <div className="bottomContent wrap-v2">
                    <BottomLeft></BottomLeft>
                </div>
            </ButtonWrapper>
            

            {/* {topBanners.length} */}
        </div>
    )
})

export default Recommend;

// const Recommend = memo(function Recommend(props) {


//     const { topBanners, getBanners } = props;

//     useEffect(() => {
//         getBanners();
//     }, [getBanners])



//     return (
//         <div>
//             {topBanners.length}
//         </div>
//     )
// })


// const mapStateToProps = state => ({
//     topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(actionTypes.getTopBannerAction())
//     }
// })


// export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
