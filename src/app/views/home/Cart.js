import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import OrderList from 'components/OrderList'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, btnAddItem, btnMinuserItem } from '../../actions'

const Cart = (props) => {
    const dispatch = useDispatch()
    const localData = useSelector((state) => state.data)
    return (
        <div className="maw-1280px mx-auto">
            <div className="page-container">
                <Navbar />
                <div className="ff-ping-fang-tc-semibold  d-block d-md-none bg-secondary text-center text-primary py-2 px-auto fz-24px mt-4">
                    您的購物車
                </div>
                <div className=" row mt-2 ">
                    {/* <!-- cart-list  --> */}
                    <div className="col-md-8">
                        <div className="ff-ping-fang-tc-semibold d-none d-md-block bg-secondary text-center text-primary mb-4 py-2 px-auto fz-24px">
                            您的購物車
                        </div>
                        <ul>
                            {localData.map((item, i) => (
                                <li
                                    key={i}
                                    className="mb-2 mb-0-last row g-0 col-md-12 mb-2 pb-2 mx-0 px-0 border-cart border-secondary text-primary align-items-center  justify-content-between ff-ping-fang-tc-semibold  "
                                >
                                    <div className="col-6 col-md-3 pl-0">
                                        <img src={item.imgUrl} alt="" className="cart-img w-100" />
                                    </div>
                                    <div className=" row g-0 col-6 col-md-6 ff-ping-fang-tc-light align-items-center">
                                        <div className="col-md-6 ">
                                            <div className="fz-20px">{item.itemName}</div>
                                            <div className="ff-Helvetica-neue-regular py-2px">NT$ {item.price}</div>
                                        </div>

                                        <div className="col-md-6 d-flex  ">
                                            <button
                                                className=" w-6 h-6 ff-ping-fang-tc-light border border-right-0 text-center btn-active"
                                                onClick={() => {
                                                    dispatch(btnMinuserItem(i))
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
                                                    dispatch(btnAddItem(i, item))
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
                                                dispatch(deleteItem(i))
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
                    <OrderList color="order-blk" list="order-list " order="border-order" localData={localData}>
                        <Link
                            to="/checkout"
                            className="d-none d-md-block  bg-yellow  text-center p-2 fz-24px ff-ping-fang-tc-semibold text-primary text-decoration-none "
                        >
                            結帳
                        </Link>
                    </OrderList>
                </div>
            </div>
            <Footer>
                <Link
                    to="/checkout"
                    className="d-block d-md-none  bg-yellow  text-center py-2 fz-24px ff-ping-fang-tc-semibold text-primary text-decoration-none "
                >
                    結帳
                </Link>
            </Footer>
        </div>
    )
}
export default React.memo(Cart)
