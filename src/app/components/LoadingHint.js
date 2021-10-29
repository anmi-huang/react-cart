import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from './Spinner'
const LoadingHint = (props) => {
    const isLoading = useSelector((state) => state.isLoading)
    return (
        <div
            className={`loading-overlay fixed-top fill-parent d-flex flex-column flex-wrap justify-content-center align-items-center ${
                isLoading ? '' : 'op-0 pointer-events-none'
            }`}
        >
            <div className="d-flex justify-content-center align-items-center py-2 px-2 bg-black-20 rounded-lg">
                <Spinner color="#ffffff" size="20"></Spinner>
            </div>
        </div>
    )
}

export default React.memo(LoadingHint)
