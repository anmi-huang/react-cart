import React from 'react'
import { Link } from 'react-router-dom'
import CartList from './CartList'

const OrderList = ({ list, color, order, children, localData, className }) => {
    console.log('localData', localData)
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
        <aside className={`col-md-4 ff-ping-fang-tc-semibold  text-center fz-24px mb-2 ${className}`}>
            <div className={`${list}`}>
                <div className={`text-center  py-2 px-auto fz-24px  ${order} ${color}`}>訂單摘要</div>

                <div
                    className={`d-flex justify-content-between ff-ping-fang-tc-light fz-16px pt-2 pb-1 px-md-2 ${color}`}
                >
                    <div>小計</div>
                    <div className="text-right">NT$ {cartValue}</div>
                </div>
                <div className={`d-flex justify-content-between ff-ping-fang-tc-light fz-16px px-md-2 ${color}`}>
                    <div>運費</div>
                    <div className="text-right">NT$ {fee}</div>
                </div>

                <div className={`d-flex justify-content-between fz-20px pb-2 px-md-2 ${color}`}>
                    <div className="pt-2">總計</div>
                    <div className="pt-2 text-right">NT$ {cartSum}</div>
                </div>
            </div>
            {children}
            {className && <CartList />}
        </aside>
    )
}
export default React.memo(OrderList)
