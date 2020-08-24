import React, { memo } from 'react'



import { formtImg } from '@/utils/format.js'

import { BillCopWrapper } from './style'
import SongComp from '@/components/songImgDesc'


export default memo(function Billcop(props) {

    const { name, coverImgUrl, tracks = [], id } = props.info;
    return (
        <BillCopWrapper>
            <div className="BillCopTop">
                <div className="rankingImg">
                    <SongComp
                        key={id}
                        width={80}
                        height={80}
                        size={80}
                        picUrl={formtImg(coverImgUrl, 100, 100)}
                        bgY={-57}
                        bgX={-145}
                    />
                    {/* <img src={formtImg(coverImgUrl, 100, 100)} alt="" /> */}
                </div>
                <div className="topRight">
                    <div>
                        <a className="title" href="#/">{name}</a>
                    </div>
                    <div>
                        <a href="#/" className="play sprite_02" ></a>
                        <a href="#/" className="collect sprite_02"></a>
                    </div>
                </div>
            </div>
            <div className="BillCopBottom">
                <ol>

                    {
                        tracks.slice(0, 10).map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <span className="serial">{index + 1}</span>
                                    <a href="#/" className="text-nowrap">{item.name}</a>
                                    <div className="ope">
                                        <a className="ope1  sprite_02" href="#/"></a>
                                        <a className="ope2  sprite_02" href="#/"></a>
                                        <a className="ope3  sprite_02" href="#/"></a>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ol>

            </div>
            <a className="more" href="#/">查看更多&gt;</a>
        </BillCopWrapper>
    )
})
