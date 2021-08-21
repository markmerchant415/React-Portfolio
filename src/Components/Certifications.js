import React from 'react'
import php from '../php.jpg'
import dsr from '../dsr.jpg'
import google from '../google.PNG'

const Certifications = () => {
    return (
        <div id="certifications" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Certificates</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                    <img className="certificate-image" src={google} alt="Process Data"/>
                    <div className="overflow"></div>
                </div>
                </div>
                <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box">
                    <img className="certificate-image" src={php} alt="PHP Certificate"/>
                    <div className="overflow"></div>
                </div>
                </div>
                <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box">
                    <img className="certificate-image" src={dsr} alt="Data Science"/>
                    <div className="overflow"></div>
                </div>
                </div>  
            </div>
            
        </div>
    )
}

export default Certifications
