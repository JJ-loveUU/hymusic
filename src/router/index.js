import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const HYDiscover = lazy(() => import('@/pages/discover'));
const Recommend = lazy(() => import('@/pages/discover/c-pages/recommend'));
const Order = lazy(() => import('@/pages/discover/c-pages/order'));
const SongMenu = lazy(() => import('@/pages/discover/c-pages/songMenu'));
const Radio = lazy(() => import('@/pages/discover/c-pages/radio'));
const Singers = lazy(() => import('@/pages/discover/c-pages/singers'));
const New = lazy(() => import('@/pages/discover/c-pages/new'));
const HYFriend = lazy(() => import('@/pages/friend'));
const HYMine = lazy(() => import('@/pages/mine'));

// import HYDiscover from '@/pages/discover';
// import Recommend from '@/pages/discover/c-pages/recommend';
// import Order from '@/pages/discover/c-pages/order';
// import SongMenu from '@/pages/discover/c-pages/songMenu';
// import Radio from '@/pages/discover/c-pages/radio';
// import Singers from '@/pages/discover/c-pages/singers';
// import New from '@/pages/discover/c-pages/new';
// import HYFriend from '@/pages/friend';
// import HYMine from '@/pages/mine';



const routes = [

    {
        path: "/",
        exact: true,
        render: () => {
            return <Redirect to="/discover"></Redirect>
        }
    },

    {
        path: "/discover",
        component: HYDiscover,
        routes: [

            {
                path: "/discover",
                exact: true,
                render: () => {
                    return <Redirect to="/discover/recommend" ></Redirect>
                }
            },
            {
                path: "/discover/recommend",
                component: Recommend

            },
            {
                path: "/discover/order",
                component: Order

            },
            {
                path: "/discover/songMenu",
                component: SongMenu

            },
            {
                path: "/discover/radio",
                component: Radio

            },
            {
                path: "/discover/singers",
                component: Singers

            },
            {
                path: "/discover/new",
                component: New

            }

        ]
    },
    {
        path: "/mine",
        component: HYMine
    },
    {
        path: "/friend",
        component: HYFriend
    }

];

export default routes;

