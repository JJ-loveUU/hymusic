import React, { memo, Fragment } from 'react'


import { FootWrapper } from './styled'
import { musicLinks, footerRightImgs } from '@/common/local-datas.js'
import Idea from './childComps/idea'

export default memo(function YHAppFooter() {



    function getMusicLinks(item) {
        const { title, type, link } = item;
        if (type === "target") {
            return (
                <Fragment key={title}>
                    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a><span>|</span>
                </Fragment>
            )
        } else {
            return (
                <Fragment key={title}>
                    <Idea key={title}></Idea> <span>|</span>
                </Fragment>
            )
        }
    }



    return (
        <FootWrapper>
            <div className="wrap-v2 content">
                <div className="footerLeft">
                    <div className="music-links">
                        {
                            musicLinks.map((item, index) => {
                                return getMusicLinks(item, index);
                            })
                        }

                    </div>
                    <div className="statement">网易公司版权所有©1997-2020 &emsp;杭州乐读科技有限公司运营：
                        <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" target="_blank" rel="noopener noreferrer" >浙网文[2018]3506-263号</a>
                    </div>
                    <div className="statement">违法和不良信息举报电话：0571-89853516&emsp;举报邮箱：
                        <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer" >ncm5990@163.com</a>
                    </div>
                    <div className="statement">粤B2-20090191-18&emsp;
                        <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" target="_blank" rel="noopener noreferrer" >工业和信息化部备案管理系统网站</a>&emsp;
                        <div className="police"><img className="police"alt="" src={require('@/assets/img/police.png')} /></div>
                        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target="_blank" rel="noopener noreferrer" >浙公网安备 33010902002564号</a>
                    </div>

                </div>
                <div className="footerRight">
                    {
                        footerRightImgs.map((item, index) => {
                            return (
                                <div key={index}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer"> </a>
                                    <span></span>
                                    <div >11</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </FootWrapper>
    )
})
