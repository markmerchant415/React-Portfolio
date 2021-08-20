import React from 'react'
import mark from "../mark.jpg";

const Aboutme = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" align="middle" src={mark} alt="Mark"/>
                    </div>
                </div>
                <div className="col-lg-6 col xm-12"></div>
                <h1 className="about-heading">About Me</h1>
                <p>
                    Hello, I am Mark Merchant,
                </p>
                <p> 
                    A 4th year student studying "Computer Science Engineering with Specialization in Internet of Things".
                    I have an interest in Programming, Networking, System Administration and Data Analytics. Most of the skills I possess revolve around Computers and Technology, but I also have a passion in travelling, collecting currencies and eating a lot of Pizza!!! 
                </p>
                <p>
                    My Technical Skills involve: Programming(C, Java, Python, R) and Databases like MongoDB and MySQL. I also have experience in System Administration using Ubuntu Server and Windows Server. I also like to configure mainframe systems such as servers and workstations. I have experience in Website Hosting and Data Analysis. I have also worked on Softwares like Wireshark, VirtualBox, VMware and Packet Tracer.
                </p>
                <p>
                    I love working on large datasets and to extract different patterns and answer some of the most challenging questions. 
                </p>
            </div>
            
        </div>
    )
}

export default Aboutme
