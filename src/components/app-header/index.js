import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input,Button  } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { headerLinks } from '@/common/local-datas'

import { HeaderWrapepr, HeaderLeft, HeaderRight } from './styled'



export default memo(function YHAppHeader() {


    function getSelectItem(item, index) {

        if (index < 3 || index === 5) {
            return <NavLink key={item.title}  to={item.link}>{item.title}<i className="sprite_01"></i></NavLink>
        } else {
            return (
                <a href={item.link} key={item.title} target="_blank" rel="noopener noreferrer" >
                    {item.title}
                    <i className="sprite_01"></i>
                </a>
            )
        }
    }

    


    return (
        <HeaderWrapepr>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01"> </a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return getSelectItem(item, index)
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <div className="search">
                        <Input placeholder="音乐/视频/电台/用户"  prefix={<SearchOutlined />} 
                            onFocus={e=>e.target.placeholder=''} onBlur={e=>e.target.placeholder='音乐/视频/电台/用户'}  />
                    </div>
                    <Button>创作者中心</Button>
                    <a href="javacript:void(0)" className="login">登录</a>
                </HeaderRight>
            </div>
            <div className="red-line">
            </div>
        </HeaderWrapepr>
    )
})
