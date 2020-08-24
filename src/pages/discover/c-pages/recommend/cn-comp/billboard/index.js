import React, { memo, useEffect } from 'react'



import { BillBoardWrapper } from './style'
import BillBoardHeader from '@/components/theme-header-rcm'
import BillCop from './cn-cp/billcop'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import * as actionTypes from '../../store/actionCreators'

export default memo(function BillBoard() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionTypes.getBillboard(0));
        dispatch(actionTypes.getBillboard(2));
        dispatch(actionTypes.getBillboard(3));
    }, [dispatch])

    const { newBillboard, upBillboard, originBillboard } = useSelector(state => {
        return {
            newBillboard: state.getIn(["recommend", "newBillboard"]),
            upBillboard: state.getIn(["recommend", "upBillboard"]),
            originBillboard: state.getIn(["recommend", "originBillboard"])
        }
    }, shallowEqual)






    return (
        <BillBoardWrapper>
            <BillBoardHeader leftTitle="榜单" />
            <div className="billContent wrap-v3 sprite_billboard">
                <BillCop info={newBillboard} />
                <BillCop info={upBillboard} />
                <BillCop info={originBillboard} />
            </div>
        </BillBoardWrapper>
    )
})
