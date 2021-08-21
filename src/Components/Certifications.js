import React from 'react'
import php from '../php.jpg'
import dsr from '../dsr.jpg'
import google from '../google.PNG'

const Certifications = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Certificates</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <img className="certificate-image" src={google} alt="Process Data"/>
                </div>
                <div className="image-box-wrapper row justify-content-center">
                    <img className="certificate-image" src={php} alt="PHP Certificate"/>
                </div>
                <div className="image-box-wrapper row justify-content-center">
                    <img className="certificate-image" src={dsr} alt="Data Science"/>
                </div>
            </div>
            
        </div>
    )
}

export default Certifications
