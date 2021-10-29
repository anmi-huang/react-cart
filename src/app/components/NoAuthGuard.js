import React from "react"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const NoAuthGuard = ({ children }) => {
	const userInfo = useSelector((state) => state.userInfo)
	return userInfo ? <Redirect to="/" /> : children
}

export default React.memo(NoAuthGuard)
