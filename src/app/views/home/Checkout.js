import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import OrderList from 'components/OrderList'
import { useSelector, useDispatch } from 'react-redux'
const Checkout = (props) => {
    const localData = useSelector((state) => state.data)

    return (
        <div className="maw-1280px mx-auto">
            <div className="page-container">
                <Navbar />
                <div className="row my-2 ">
                    <div className="col-md-8">
                        <form className="ff-ping-fang-tc-semibold" id="form-id" action="">
                            <fieldset>
                                <div className="row mx-0 bg-primary text-secondary page-container py-4 px-4">
                                    <legend className="col-6 fz-36px">運送</legend>
                                    <div className="col-6 d-flex justify-content-between align-items-center">
                                        <div className="rounded-circle border border-secondary w-3 h-3 d-flex justify-content-center align-items-center bg-primary">
                                            <div className="rounded-circle border border-secondary w-2 h-2 bg-secondary"></div>
                                        </div>
                                        <div className="rounded-circle border border-secondary w-3 h-3 d-flex justify-content-center align-items-center bg-primary">
                                            <div className="w-2 h-2"></div>
                                        </div>
                                        <div className="rounded-circle border border-secondary w-3 h-3 d-flex justify-content-center align-items-center bg-primary">
                                            <div className="w-2 h-2"></div>
                                        </div>
                                    </div>
                                    <div className="col-6 form-item pr-4px ">
                                        <label htmlFor="lastname" className="d-block pb-1 mt-4 fz-20px">
                                            姓氏
                                        </label>
                                        <input
                                            type="text"
                                            id="lastname"
                                            className=" px-2 bg-secondary h-7  w-100"
                                            name="lastname"
                                            placeholder="王"
                                            required
                                        />
                                    </div>
                                    <div className="col-6 form-item pl-4px">
                                        <label htmlFor="firstname" className="d-block pb-1 mt-4 fz-20px">
                                            名字
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            className="px-2 bg-secondary h-7  w-100"
                                            name="firstname"
                                            placeholder="小明"
                                            required
                                        />
                                    </div>
                                    <div className="col form-item">
                                        <label htmlFor="phone" className="d-block pb-1 mt-2 fz-20px">
                                            電話
                                        </label>
                                        <input
                                            type="text"
                                            id="phone"
                                            className="px-2 bg-secondary h-7 w-100"
                                            name="phone"
                                            placeholder="07-0000000 or 0912-345678"
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address" className="d-block pb-1 mt-2 fz-20px">
                                            地址
                                        </label>
                                    </div>
                                    <div className="col-6 pr-4px">
                                        <select
                                            name="city"
                                            id="city-select"
                                            className=" w-100 h-7 bg-secondary text-color-matcha mb-1"
                                        ></select>
                                    </div>
                                    <div className="col-6 pl-4px">
                                        <select
                                            name="cityarea"
                                            id="city-area"
                                            className=" w-100 h-7 bg-secondary text-color-matcha mb-1"
                                        >
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className="col form-item">
                                        <input
                                            type="text"
                                            id="address"
                                            className="px-2 bg-secondary h-7  w-100"
                                            name="address"
                                            placeholder="幸福路 520 號"
                                            required
                                        />
                                    </div>
                                </div>
                                <input
                                    className="submit text-primary bg-yellow text-center w-100 h-8 fz-24px ff-ping-fang-tc-semibold m-checkbtn"
                                    type="submit"
                                    value="下一步"
                                />
                            </fieldset>
                        </form>
                    </div>
                    <OrderList
                        className="d-none d-md-block"
                        color="text-success"
                        list=" border-secondary border"
                        order=" bg-secondary"
                        localData={localData}
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default React.memo(Checkout)
