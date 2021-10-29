import React from 'react'

const Spinner = ({ size, color, className }) => {
    size = size || 8
    color = color || '#767676'
    return (
        <div className={`d-inline-flex align-items-center ${className}`}>
            <div
                className="loading-animate rounded-pill flex-shrink-0"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    marginRight: `${size / 2}px`,
                    animationDelay: '-0.32s',
                    backgroundColor: color,
                }}
            ></div>
            <div
                className="loading-animate rounded-pill flex-shrink-0"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    marginRight: `${size / 2}px`,
                    animationDelay: '-0.16s',
                    backgroundColor: color,
                }}
            ></div>
            <div
                className="loading-animate rounded-pill flex-shrink-0"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color,
                }}
            ></div>
        </div>
    )
}

export default React.memo(Spinner)
