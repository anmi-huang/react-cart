import React from 'react'
import { Link } from 'react-router-dom'
import CartList from './CartList'

const OrderList = ({
    bg,
    color,
    title,
    children,
    localData,
    className,
    hasCartList
}) => {
    let cartValue = 0
    let cartSum = 0
    let fee = 300
    let itemValue = 0

    localData.forEach(function (item) {
        itemValue = item.price * item.amount
        cartValue += itemValue
        cartSum = cartValue + fee
    })

    return (
        <aside
            className={`col-md-4 ff-ping-fang-tc-semibold  text-center fz-24px ${className}`}
        >
            <div className={`${bg}`}>
                <div
                    className={`text-center  py-2 px-auto fz-24px ${title} ${color}`}
                >
                    訂單摘要
                </div>

                <div
                    className={`d-flex justify-content-between ff-ping-fang-tc-light fz-16px pt-2 pb-1 px-md-2 ${color}`}
                >
                    <div>小計</div>
                    <div className="text-right">NT$ {cartValue}</div>
                </div>
                <div
                    className={`d-flex justify-content-between ff-ping-fang-tc-light fz-16px px-md-2 ${color}`}
                >
                    <div>運費</div>
                    <div className="text-right">NT$ {fee}</div>
                </div>

                <div
                    className={`d-flex justify-content-between fz-20px pb-2 px-md-2 ${color}`}
                >
                    <div className="pt-2">總計</div>
                    <div className="pt-2 text-right">NT$ {cartSum}</div>
                </div>
            </div>
            {children}
            {hasCartList && <CartList />}
        </aside>
    )
}
export default React.memo(OrderList)
