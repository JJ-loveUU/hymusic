import React, { memo, Fragment } from 'react'
import { renderRoutes } from 'react-router-config';

// import DiscoveryNav from '@/components/discovery/index.js'
import { DiscoveryHeader } from './styled'
import { discoveryNavs } from '@/common/local-datas.js'
import { NavLink } from 'react-router-dom'


export default memo(function YHDiscover(props) {
    return (
        <div>
            <DiscoveryHeader >
                <div className="discoveryNav wrap-v2">
                    <div className="wrapper2">
                        {
                            discoveryNavs.map((item, index) => {
                                return (
                                    <Fragment key={item.link}>
                                        <NavLink to={item.link} activeClassName="link-active"><span>{item.title}</span></NavLink>
                                    </Fragment>
                                )
                            })
                        }

                    </div>
                </div>
            </DiscoveryHeader>
            {renderRoutes(props.route.routes)}
        </div>
    )
})
