import React from 'react'
import logo from "../Capture.PNG";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about" offset={-10} className="nav-link" href="#">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" offset={-10} className="nav-link" href="#">Specialities</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="contacts" offset={-10} className="nav-link" href="#">Contact Me</Link>
      </li>
      
    </ul>
    
  </div>
  </div>
</nav>
    )
}

export default Navbar
