import React from 'react'

const SlideView = ({ isShow, className, children }) => {
    return (
        <div
            className={`${isShow ? '' : 'trs-x-100'} 
             fixed-top  w-100 h-100 text-center trs-all  ${className}`}
        >
            {children}
        </div>
    )
}

export default React.memo(SlideView)
