import React, { memo, Fragment } from 'react'


import { RcmHeader } from './style'

export default memo(function ThemeHeader(props) {


    const { types = [], leftTitle = "" } = props;


    function getLinks(item, index, arr) {
        if (index < arr.length - 1) {
            return (
                <Fragment key={item.title}>
                    <a className="hotRecLink" href={item.link}>{item.title}</a><span>|</span>
                </Fragment>
            )
        } else {

            return (
                <Fragment key={item.title}>
                    <a className="hotRecLink" key={item.title} href={item.link}>{item.title}</a>
                </Fragment>
            )
        }
    }


    return (
        <RcmHeader>
            <a className="hotRec">{leftTitle}</a>
            <div className="hotRecLinkList">
                {
                    types.map((item, index, arr) => {
                        return getLinks(item, index, arr)
                    })
                }
            </div>
            <span className="moreLog"></span>
            <a href="#/" className="more">更多 </a>
        </RcmHeader>
    )
})
