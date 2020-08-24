//第三方
import React, { memo, Fragment, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'

//功能性的东西
import routes from '@/router'

//组件
import AppFooter from 'components/app-footer'
import AppHeader from 'components/app-header'
import AppPlayer from '@/components/app-player'
import { HashRouter } from 'react-router-dom'


export default memo(function App() {
  return (
    <Fragment>
      <HashRouter>
        <AppHeader></AppHeader>
        <Suspense fallback={<div>1111</div>}>
          {renderRoutes(routes)}

        </Suspense>
        <AppFooter></AppFooter>
      </HashRouter>
      <AppPlayer />
    </Fragment>
  )
})
