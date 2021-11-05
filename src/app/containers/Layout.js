import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const Layout = (props) => {
    return (
        <div className="maw-1280px mx-auto">
            <div className="page-container">
                <header>
                    <Navbar />
                </header>
            </div>
            <Footer />
        </div>
    )
}
export default React.memo(Layout)
