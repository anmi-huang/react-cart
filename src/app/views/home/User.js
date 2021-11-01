import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
const User = (props) => {
	const userInfo = useSelector((state) => state.userInfo)
	console.log("userInfo",userInfo)
	return (
		<div className="p-4">
			<Link
                className="d-flex align-items-center mb-2 text-primary text-secondary"
                to="/"
            >
               <i className="icon icon-home mr-1 fz-20px " aria-hidden="true"></i>
                
            </Link>
			<div>使用者: {userInfo.name}</div>
			<div>權限: {userInfo.role}</div>
		</div>
	)
}
export default React.memo(User)
