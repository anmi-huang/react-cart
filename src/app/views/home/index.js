import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'components/Navbar'
import ProductList from 'components/ProductList'
import Footer from 'components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../../actions'
const HomePage = (props) => {
    const dispatch = useDispatch()
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
        <div className="maw-1280px mx-auto">
            <div className="page-container">
                <header>
                    <Navbar />
                </header>
                <img className="w-100 mt-2 " src="/assets/images/navbar-img.png" alt=""></img>
                <div className="row mt-2 ">
                    <ProductList />

                    <div className="col-md-8">
                        <ul className="row" id="product-row">
                            {data.map((item, i) => (
                                <li className="col-md-6 mt-3 " key={item.id}>
                                    <div className="card border border-secondary">
                                        <Link to="/" className="text-decoration-none ">
                                            <div>
                                                <img
                                                    src={item.imgUrl}
                                                    className="img-card d-block position-relative w-100"
                                                />
                                            </div>
                                            <div className="card-span position-absolute fz-16px">
                                                <span className=" text-white fz-16px px-1 py-1">本日精選</span>
                                            </div>
                                            <div className="d-flex text-center text-primary fz-18px fz-md-20px">
                                                <div className="flex-grow-1 ff-ping-fang-tc-light text-cart-font border border-secondary  border-right-0  border-left-0 py-1">
                                                    {item.itemName}
                                                </div>
                                                <div className="flex-grow-1 ff-ping-fang-tc-semibold border-secondary border border-right-0 py-1 ">
                                                    {item.price}
                                                </div>
                                            </div>
                                        </Link>
                                        <button
                                            className="js-product-row add-item-tr fz-22px fz-md-28px btn-add bg-secondary text-center text-primary w-100 py-2"
                                            onClick={() => {
                                                dispatch(addItem(i, item))
                                            }}
                                        >
                                            加入購物車
                                        </button>
                                        <div className="btn-card position-absolute ">
                                            <button>
                                                <i className="far fa-heart fz-22px text-primary"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <ul className="d-flex flex-row justify-content-end ff-ping-fang-tc-semibold my-3">
                    <li className="btn btn-active w-8 h-8 text-primary">
                        <i className="icon icon-arrow-left"></i>
                    </li>
                    <li className="btn btn-active w-8 h-8 text-primary">1</li>
                    <li className="btn btn-active w-8 h-8 text-primary">2</li>
                    <li className="btn btn-active w-8 h-8 text-primary">3</li>
                    <li className="btn btn-active w-8 h-8 text-primary">
                        <i className="icon icon-arrow-right"></i>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}
export default React.memo(HomePage)
