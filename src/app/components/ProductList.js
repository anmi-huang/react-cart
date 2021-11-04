import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
const ProductList = (props) => {
    return (
        <aside className="col-md-4 ff-ping-fang-tc-semibold border-top-0 ">
            <ul className="fz-24px text-center ">
                <li className="btn py-2 border-secondary bg-primary text-secondary ">甜點類別</li>
                <li className="btn  py-2 border-top-0 border-secondary btn-active">
                    <Link className="fz-24px ff-ping-fang-tc-semibold text-primary" to="/">
                        所有甜點（48）
                    </Link>
                </li>
                <li className="btn py-2 border-top-0 border-secondary btn-active ">
                    <Link className="fz-24px ff-ping-fang-tc-semibold text-primary" to="/">
                        本日精選（10）
                    </Link>
                </li>
                <li className="btn py-2 border-top-0 border-secondary btn-active">
                    <Link className="fz-24px ff-ping-fang-tc-semibold text-primary" to="/">
                        人氣推薦（26）
                    </Link>
                </li>
                <li className="btn py-2 border-top-0 border-secondary btn-active">
                    <Link className="fz-24px ff-ping-fang-tc-semibold text-primary" to="/">
                        新品上市（12）
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
export default React.memo(ProductList)
