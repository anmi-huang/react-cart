import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeUserInfo, toggleLoadingHint } from 'actions'
import { useForm } from 'react-hook-form'
import swal from '@sweetalert/with-react'

const Login = (props) => {
    const dispatch = useDispatch()
    const { handleSubmit, register, errors } = useForm()
    const controller = new AbortController()
    const signal = controller.signal

    const onSubmit = ({ email, password }) => {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        dispatch(toggleLoadingHint(true))
        fetch(API_ROUTES.login, {
            body: formData,
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            signal,
        })
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                dispatch(toggleLoadingHint(false))
                if (success) {
                    dispatch(changeUserInfo(data))
                    swal({
                        title: `Hi, ${data.name}`,
                        text: '登入成功！！',
                        icon: 'success',
                    })
                }
            })
    }
    useEffect(() => {
        return () => {
            dispatch(toggleLoadingHint(false))
            controller.abort()
        }
    }, [])

    //使用者登入
    // const loginUser = () => {
    //     dispatch(toggleLoadingHint(true))
    //     fetch('/static-api/loginUser.json')
    //         .then((resp) => resp.json())
    //         .then(({ success, data }) => {
    //             dispatch(toggleLoadingHint(false))
    //             if (success) {
    //                 dispatch(changeUserInfo(data))
    //             }
    //         })
    //         .catch(console.error)
    // }

    return (
        <div className="p-4">
            <Link className="d-flex align-items-center mb-2 text-primary  " to="/home">
                <i className="icon icon-home mr-1 fz-20px " aria-hidden="true"></i>
            </Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-2 mb-0-last">
                        <label className="d-block mb-4px font-weight-bold " htmlFor="email">
                            使用者名稱
                        </label>
                        <input
                            className="ipt px-1 border"
                            type="email"
                            id="email"
                            name="email"
                            ref={register({
                                required: '此欄位為必填',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'email格式：abc@gmail.com',
                                },
                            })}
                        />
                        {errors.email && <div className="text-danger fz-12px">{errors.email.message}</div>}
                    </div>
                    <div className="mb-2 mb-0-last">
                        <label className="d-block mb-4px font-weight-bold" htmlFor="password">
                            密碼
                        </label>
                        <input
                            className="ipt px-1 border"
                            type="password"
                            id="password"
                            name="password"
                            ref={register({
                                required: '此欄位為必填',
                            })}
                        />
                        {errors.password && <div className="text-danger fz-12px">{errors.password.message}</div>}
                    </div>
                </div>
                {/* <div className="mt-3 mb-0-last">
                    <button className="btn btn-secondary w-100 h-6 rounded" onClick={() => loginUser()}>
                        使用者登入
                    </button>
                </div> */}

                <div className="mt-3 mb-0-last">
                    <button className="btn btn-primary w-100 h-6 rounded">管理員登入</button>
                </div>
            </form>
        </div>
    )
}
export default React.memo(Login)
