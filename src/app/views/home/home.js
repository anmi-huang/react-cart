import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeUserInfo, toggleLoadingHint } from 'actions'

const HomePage = (props) => {
    const userInfo = useSelector((state) => state.userInfo)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(toggleLoadingHint(true))
        fetch('/static-api/logout.json')
            .then((resp) => resp.json())
            .then(({ success }) => {
                dispatch(toggleLoadingHint(false))
                if (success) {
                    dispatch(changeUserInfo(null))
                }
            })
            .catch(console.error)
    }
    return (
        <div className="p-4">
            <div className="my-2 mx-1 d-flex align-items-center justify-content-between">
                {/* <h1 className="fz-18px">首頁</h1> */}
                {userInfo?.is_login && (
                    <button onClick={logout}>
                        <i className="icon icon-logout fz-22px " aria-hidden="true"></i>
                    </button>
                )}
            </div>

            <ul>
                {!userInfo?.is_login && (
                    <li className="mb-1 mb-0-last">
                        <Link className="btn justify-content-start h-6 rounded" to="/login">
                            登入
                        </Link>
                    </li>
                )}
                {userInfo?.role === 'admin' && (
                    <li className="mb-1 mb-0-last">
                        <Link className="btn justify-content-start h-6 rounded" to="/admin">
                            管理者介面頁
                        </Link>
                    </li>
                )}
                {userInfo?.is_login && (
                    <li className="mb-1 mb-0-last">
                        <Link className="btn justify-content-start h-6 rounded" to="/user">
                            使用者介面頁
                        </Link>
                    </li>
                )}
                {userInfo?.is_login && (
                    <li className="mb-1 mb-0-last">
                        <Link className="btn justify-content-start h-6 rounded" to="/weather">
                            天氣資訊
                        </Link>
                    </li>
                )}
                <li className="mb-1 mb-0-last">
                    <Link className="btn justify-content-start h-6 rounded" to="/">
                        返回首頁
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default React.memo(HomePage)
