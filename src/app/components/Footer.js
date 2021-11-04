import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
const Footer = ({ children }) => {
    return (
        <footer>
            {children}
            <div className="footer-list bg-primary text-white text-center w-100 py-4 ">
                <div className="px-2">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 d-flex justify-content-center my-auto">
                            <img src="/assets/images/logo-light.svg" alt="" className=" w-6 mr-1"></img>
                            <p className=" ff-Helvetica-neue-light fz-24px fz-md-28px my-auto ">訂閱你我的甜蜜郵件</p>
                        </div>
                        <div className="col-md-6 col-sm-12 py-3 ">
                            <div className="input-group d-flex justify-content-center">
                                <div className="email position-relative">
                                    <input type="text" />
                                </div>
                                <button type="button" className="btn btn-active bg-yellow rounded-0 border-0  ">
                                    <img
                                        src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/arrow_forward-24px.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-primary py-4 bg-secondary">
                <div className="px-2">
                    <div className="row justify-content-between">
                        <div className=" col-md-6 d-flex flex-column">
                            <div className="footer-logo pb-4">
                                <Link to="/">
                                    <img src="/assets/images/logotype-lg-dark.svg" alt="" width="180px" />
                                </Link>
                            </div>
                            <ul className="mb-0 ff-Helvetica-neue">
                                <li>07-1234-5678</li>
                                <li>sweetaste@email.com</li>
                                <li>800 高雄市新興區幸福路 520 號</li>
                            </ul>
                            <div className="d-flex">
                                <Link to="/" className="pl-0 pr-1 pt-2 fz-32px text-primary">
                                    <i className="icon icon-ic-line"></i>
                                </Link>
                                <Link to="/" className="pl-0 pr-1 pt-2 fz-32px text-primary">
                                    <i className="icon icon-ic-facebook"></i>
                                </Link>
                            </div>
                        </div>
                        <div className=" col-md-6 d-flex flex-column">
                            <h4 className="slogan d-none d-md-block  text-primary fz-18px fz-md-22px py-6 ff-ping-fang-tc-semibold">
                                今天是個<span>——</span>
                                <br />
                                吃甜點的好日子。
                            </h4>
                            <p className="text-sm-left text-md-right ff-time">© 2018 Sweetaste* All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default React.memo(Footer)
