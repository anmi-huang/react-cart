import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import OrderList from 'components/OrderList'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const Checkout = (props) => {
    const [locationData, setLocation] = useState([])
    const [nameId, setName] = useState()
    const [district, setDistrict] = useState()
    const localData = useSelector((state) => state.data)

    const { handleSubmit, register, errors, watch } = useForm()
    const onSubmit = (data) => console.log(data)

    useEffect(() => {
        fetch('static-api/location.json')
            .then((resp) => resp.json())
            .then(({ success, dataList }) => {
                setLocation(dataList)
                setName(17)
            })
            .catch(console.error)
    }, [])

    return (
        <div className="maw-1280px mx-auto">
            <div className="page-container">
                <Navbar />
                <div className="row my-2 ">
                    <div className="col-md-8">
                        <form className="ff-ping-fang-tc-semibold" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row mx-0 bg-primary text-secondary page-container py-4 px-4">
                                <div className="col-6 fz-36px">運送</div>
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
                                        ref={register({
                                            required: '此欄位為必填',
                                        })}
                                    />
                                    {errors.lastname && (
                                        <div className="text-warning fz-12px">{errors.lastname.message}</div>
                                    )}
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
                                        ref={register({
                                            required: '此欄位為必填',
                                        })}
                                    />
                                    {errors.firstname && (
                                        <div className="text-warning fz-12px">{errors.firstname.message}</div>
                                    )}
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
                                        placeholder="0912-345678"
                                        ref={register({
                                            required: '此欄位為必填',
                                            pattern: {
                                                value: /^09\d{2}\d{6}$/,
                                                message: '格式：0912-345678',
                                            },
                                        })}
                                    />
                                    {errors.phone && <div className="text-warning fz-12px">{errors.phone.message}</div>}
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="d-block pb-1 mt-2 fz-20px">
                                        地址
                                    </label>
                                </div>
                                <div className="col-6 pr-4px">
                                    <select
                                        value={nameId}
                                        className=" w-100 h-7 bg-secondary text-color-matcha mb-1"
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
                                    >
                                        {locationData.map((item, i) => (
                                            <option
                                                key={i}
                                                value={i}
                                                onClick={() => {
                                                    setIndex(key)
                                                }}
                                            >
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-6 pl-4px">
                                    <select
                                        value={district}
                                        className=" w-100 h-7 bg-secondary text-color-matcha mb-1"
                                        onChange={(e) => {
                                            setDistrict(e.target.value)
                                        }}
                                    >
                                        {locationData[nameId]?.districts.map((item, i) => (
                                            <option key={i} value={item.name}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col form-item">
                                    <input
                                        type="text"
                                        id="address"
                                        className="px-2 bg-secondary h-7  w-100"
                                        name="address"
                                        placeholder="幸福路 520 號"
                                        ref={register({
                                            required: '此欄位為必填',
                                        })}
                                    />
                                    {errors.address && (
                                        <div className="text-warning fz-12px">{errors.address.message}</div>
                                    )}
                                </div>
                            </div>
                            <input
                                type="submit"
                                value="下一步"
                                className="text-primary bg-yellow text-center w-100 h-8 fz-24px ff-ping-fang-tc-semibold "
                                onClick={() => {
                                    console.log('onClick')
                                }}
                            />
                        </form>
                    </div>
                    <OrderList
                        hasCartList
                        className="d-none d-md-block"
                        color="text-success"
                        bg=" border-secondary border"
                        title=" bg-secondary"
                        localData={localData}
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default React.memo(Checkout)
