import React, { useState, useEffect } from 'react'
import Routes from 'Routes'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeUserInfo, toggleLoadingHint } from 'actions'
import LoadingHint from 'components/LoadingHint'

const App = (props) => {
    const [isInit, toggleInit] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(toggleLoadingHint(true))
        fetch('/static-api/is-login.json')
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                dispatch(toggleLoadingHint(false))
                if (success) {
                    dispatch(changeUserInfo(data))
                    toggleInit(true)
                }
            })
            .catch(console.error)
    }, [])

    return (
        <>
            {isInit && <Routes />}
            <LoadingHint />
        </>
    )
}

export default React.memo(App)
