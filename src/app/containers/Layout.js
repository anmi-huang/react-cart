import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const Layout = ({ children }) => {
    return (
        <div className="maw-1280px mx-auto">
            <div className="page-container">
                <header>
                    <Navbar />
                </header>
                {children}
            </div>

            <Footer />
        </div>
    )
}
export default React.memo(Layout)
