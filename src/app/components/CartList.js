import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const CartList = () => {
    const localData = useSelector((state) => state.data)

    return (
        <div className="border border-secondary mb-8 mt-2 text-success">
            <div className=" bg-secondary text-center  mb-2 py-2 px-auto fz-24px ">
                您的購物車
            </div>

            <ul>
                {localData.map((item, i) => (
                    <li
                        key={i}
                        className=" row g-0 mx-0 px-0 col-md-12  align-items-center ff-ping-fang-tc-semibold  "
                    >
                        <div className="col-md-6 ">
                            <img
                                src={item.imgUrl}
                                className="cart-img w-100 h-10 px-2"
                            />
                        </div>
                        <div className="row g-0 col-md-6 ff-ping-fang-tc-light ">
                            <div>
                                <div className="fz-16px">
                                    {item.itemName} ( {item.amount} )
                                </div>
                                <div className="fz-20px text-left">
                                    NT$ {item.price * item.amount}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default React.memo(CartList)
