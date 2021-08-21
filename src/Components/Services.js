import React from 'react'
import {faPython, faAws ,faCloudflare, faMicrosoft } from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCalendarPlus, faDatabase, faDesktop } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div id="services" className="Services">
            <h1 className="py-5"> My Specialities </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="icon" icon={faPython} size="2x"/></div>
                                <h3>Programming </h3>
                                <p>
                                    I have fluency in working with programming languages like C, Python, Java, R. I also have experience in creating WebPages and SPA's and its working with databases.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"> <FontAwesomeIcon className="icon" icon={faDatabase} size="2x"/></div>
                                <h3>Data Analysis </h3>
                                <p>
                                    I love doing data analysis using Python and R. I also have experience in Data Cleaning and I work with tools such as Tableau, Google Data Studio and libraries like ggplot, seaborn, matplotlib.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"> <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>System Admin </h3>
                                <p>
                                    I have worked on System Administration OS like Windows Server and Ubuntu Server and also on tools like IAM, Load Balancing, Granting Permissions etc.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"> <FontAwesomeIcon className="icon" icon={faCloudflare} size="2x"/></div>
                                <h3>Cloud Computing </h3>
                                <p>
                                    One of my favourite domains is cloud computing and scaling, managing and deploying websites and applications from on premise systems to cloud. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
