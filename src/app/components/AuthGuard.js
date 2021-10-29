import React from "react"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const AuthGuard = ({ children, role }) => {
	const userInfo = useSelector((state) => state.userInfo)

	if (!userInfo) {
		return <Redirect to="/login" />
	}

	if (userInfo?.role === "admin"|| userInfo?.role === role) {
		return children
	}

	return <Redirect to="/" />
}
 
export default React.memo(AuthGuard)
