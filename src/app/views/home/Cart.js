import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import OrderList from 'components/OrderList'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, btnAddItem, btnMinuserItem } from '../../actions'
import confirm, { Button, alert } from 'react-alert-confirm'

const Cart = (props) => {
    const dispatch = useDispatch()
    const localData = useSelector((state) => state.data)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('static-api/dessert.json')
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                setData(data)
            })
            .catch(console.error)
    }, [])
    // console.log('data', data)

    return (
        <div>
            <div className=" row mt-2 ">
                {/* <!-- cart-list  --> */}
                <div className="col-md-8">
                    <div className="ff-ping-fang-tc-semibold d-block bg-secondary text-center text-primary mb-4 py-2 px-auto fz-24px mx-n3 mx-md-0">
                        您的購物車
                    </div>
                    <ul>
                        {localData.map((item, idx) => (
                            <li
                                key={item.id}
                                className="mb-2 mb-0-last row g-0 col-md-12 mb-2 pb-2 mx-0 px-0 border-cart border-secondary text-primary align-items-center  justify-content-between ff-ping-fang-tc-semibold  "
                            >
                                <div className="col-6 col-md-3 pl-0">
                                    <img
                                        src={item.imgUrl}
                                        alt=""
                                        className="cart-img w-100"
                                    />
                                </div>
                                <div className=" row g-0 col-6 col-md-6 ff-ping-fang-tc-light align-items-center">
                                    <div className="col-md-6 ">
                                        <div className="fz-20px">
                                            {item.itemName}
                                        </div>
                                        <div className="ff-Helvetica-neue-regular py-2px">
                                            NT$ {item.price}
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex  ">
                                        <button
                                            className=" w-6 h-6 ff-ping-fang-tc-light border border-right-0 text-center btn-active"
                                            onClick={() => {
                                                dispatch(btnMinuserItem(idx))
                                            }}
                                        >
                                            <i className="icon icon-minus text-primary pointer-events-none"></i>
                                        </button>
                                        <div className="d-flex justify-content-center align-items-center w-6 h-6 ff-ping-fang-tc-light border border-right-0">
                                            {item.amount}
                                        </div>
                                        <button
                                            className="  w-6 h-6 ff-ping-fang-tc-light  border text-center btn-active"
                                            onClick={() => {
                                                dispatch(btnAddItem(idx))
                                            }}
                                        >
                                            <i className="icon icon-add text-primary pointer-events-none"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="col-12 col-md-3 d-flex  px-0">
                                    <div className="price-border col-md-10 fz-20px py-1 border border-secondary border-right-0 border-left-0  text-right text-md-left ">
                                        NT {item.price * item.amount}
                                    </div>
                                    <button
                                        className="col-md-2 d-none d-md-block text-right px-1"
                                        onClick={() => {
                                            confirm()
                                            dispatch(deleteItem(idx))
                                        }}
                                    >
                                        <i className="icon icon-delete fz-24px text-primary"></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <!-- cart-list end --> */}
                <OrderList
                    color="order-text-color"
                    bg="order-color "
                    title="border-color mx-2 "
                    localData={localData}
                >
                    <Link
                        to="/checkout"
                        className="d-block text-center bg-yellow p-2 fz-24px ff-ping-fang-tc-semibold text-primary mx-n3 mx-md-0"
                    >
                        結帳
                    </Link>
                </OrderList>
            </div>
        </div>
    )
}
export default React.memo(Cart)
