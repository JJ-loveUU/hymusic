import React, { memo, useEffect, useState, useRef, useCallback } from 'react'
import { Carousel } from 'antd';


import { TopBannerWrapper } from './style'
import { getTopBannerAction } from '../../store/actionCreators'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';



export default memo(function TopBanner() {


    const [currentIndex, setCurrentIndex] = useState(0);






    //redux 
    const despatch = useDispatch();
    useEffect(() => {
        despatch(getTopBannerAction());
    }, [despatch]);

    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual);





    //其他hooks
    const carouselRef = useRef();

    const beforeChange1 = useCallback((from, to) => {
        setTimeout(() => {
            setCurrentIndex(to);
        }, 0);
    }, [])

    function leftMove() {
        carouselRef.current.prev();
    }
    function rightMove() {
        carouselRef.current.next();
    }





    const currentImg = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");


    return (
        <>
            <TopBannerWrapper bgImg={currentImg}>
                <div className="topContent wrap-v2" >
                    <div className="leftArrow" onClick={leftMove}>
                        <img src={require("@/assets/img/leftArrow.svg")} alt=" " />
                    </div>
                    <div className="rightArrow" onClick={rightMove}>
                        <img src={require("@/assets/img/rightArrow.svg")} alt=" " />
                    </div>
                    <div className="topLeft">
                        {/* 轮播图 */}
                        {/* <Carousel effect="fade" autoplay beforeChange={beforeChange1} ref={carouselRef} speed={0}>
                            {
                                topBanners.map((item) => {
                                    return (
                                        <div key={item.imageUrl} className="imgDiv">
                                            <img src={item.imageUrl} alt={topBanners.typeTitle} />
                                        </div>
                                    )
                                })
                            }
                            <div>
                                <img src="" alt="" />
                            </div>
                        </Carousel> */}
                    </div>
                    <div className="topRight">
                        <a href="#/" className="downloadPc"></a>
                    </div>
                </div>
            </TopBannerWrapper>
        </>
    )
})
