import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>MARK MERCHANT</h1>
                <Typed
                className="typed-text"
                strings={["Web Design","Programming","System Administration","Cloud Computing","Data Analysis","Ads Services"] }
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                
            </div>
            
        </div>
    )
}

export default Header
