import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>MARK MERCHANT</h1>
                <Typed
                className="typed-text"
                strings={["Web Design","Programming","System Administration","Cloud Computing","Data Analysis","Ads Services"] }
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header
