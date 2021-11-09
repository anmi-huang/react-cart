import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const Navbar = (props) => {
    const localData = useSelector((state) => state.data)
    const userInfo = useSelector((state) => state.userInfo)
    return (
        <nav className="navbar d-flex justify-content-between h-12 pt-2  bg-white">
            <button className="d-block d-md-none">
                <i className=" icon icon-line text-primary fz-24px ml-1"></i>
            </button>
            <Link className="navbar-brand d-flex" to="/">
                <img
                    className="d-none d-md-block"
                    src="/assets/images/logo-all-dark (2).svg"
                    width="170px"
                    alt=""
                />
                <img
                    className="d-block d-md-none"
                    src="/assets/images/logotype-lg-dark.svg"
                    width="114px"
                    alt=""
                />
            </Link>
            <ul className="d-flex fz-md-16px">
                <li className="my-auto mr-6 d-none d-md-block">
                    <Link
                        className="text-decoration-none text-primary font-weight-bold fz-16px"
                        to="/"
                    >
                        首頁
                    </Link>
                </li>
                <li className="my-auto mr-6 d-none d-md-block">
                    <Link
                        className="text-decoration-none text-primary font-weight-bold fz-16px"
                        to="/"
                    >
                        甜點
                    </Link>
                </li>
                {!userInfo?.is_login && (
                    <li className="my-auto mr-6 d-none d-md-block">
                        <Link
                            className="text-decoration-none text-primary font-weight-bold fz-16px"
                            to="/home"
                        >
                            登入
                        </Link>
                    </li>
                )}
                {userInfo?.role === 'admin' && (
                    <li className="my-auto mr-6 d-none d-md-block">
                        <Link
                            className="text-decoration-none text-primary font-weight-bold fz-16px"
                            to="/home"
                        >
                            會員
                        </Link>
                    </li>
                )}
                <li className="my-auto">
                    <Link
                        className="text-decoration-none text-primary "
                        to="/cart"
                    >
                        <i className=" icon icon-cart text-primary fz-26px mr-1 position-relative">
                            <span className="cart-number-size rounded-circle w-5 h-5 position-absolute text-center text-primary bg-secondary fz-24">
                                {localData.length}
                            </span>
                        </i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default React.memo(Navbar)
