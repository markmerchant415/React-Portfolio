import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon, 
} from 'react-share'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Ahmedabad, Bengaluru</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:+917698004214">Call Me</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:markmerchant415@gmail.com">Mail Me</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a><br/>
                                <a className="footer-nav">About Me</a><br/>
                                <a className="footer-nav">Services</a><br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://www.facebook.com/mark.merchant.7201"}
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <LinkedinShareButton
                            url={"www.linkedin.com/in/mark-merchant-2a256916a"}
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
