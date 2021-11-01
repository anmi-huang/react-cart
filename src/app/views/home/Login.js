import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeUserInfo, toggleLoadingHint } from "actions"

const Login = (props) => {
    const dispatch = useDispatch()
    //管理員登入
    const login = () => {
        dispatch(toggleLoadingHint(true))
        fetch("/static-api/login.json")
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                dispatch(toggleLoadingHint(false))
                if (success) {
                    dispatch(changeUserInfo(data))
                }
            })
            .catch(console.error)
    }
     //使用者登入
    const loginUser = () => {
        dispatch(toggleLoadingHint(true))
        fetch("/static-api/loginUser.json")
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                dispatch(toggleLoadingHint(false))
                if (success) {
                    dispatch(changeUserInfo(data))
                }
            })
            .catch(console.error)
    }

    return (
        <div className="p-4">
            <Link
                className="d-flex align-items-center mb-2 text-primary text-secondary"
                to="/"
            >
               <i className="icon icon-home mr-1 fz-20px " aria-hidden="true"></i>
            
            </Link>
            <div>
                <div className="mb-2 mb-0-last">
                    <label
                        className="d-block mb-4px font-weight-bold"
                        htmlFor="email"
                    >
                        使用者名稱
                    </label>
                    <input
                        className="ipt px-1 border"
                        type="email"
                        id="email"
                    />
                </div>
                <div className="mb-2 mb-0-last">
                    <label
                        className="d-block mb-4px font-weight-bold"
                        htmlFor="password"
                    >
                        密碼
                    </label>
                    <input
                        className="ipt px-1 border"
                        type="password"
                        id="password"
                    />
                </div>
            </div>
            <div className="mt-3 mb-0-last">
                <button
                    className="btn btn-secondary w-100 h-6 rounded"
                    onClick={() => loginUser()}
                >
                    使用者登入
                </button>
            </div>
            
            <div className="mt-3 mb-0-last">
                <button
                    className="btn btn-secondary w-100 h-6 rounded"
                    onClick={() => login()}
                >
                    管理員登入
                </button>
            </div>
           
        
        </div>
    )
}
export default React.memo(Login)
