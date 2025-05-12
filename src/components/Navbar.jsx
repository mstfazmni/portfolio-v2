import React from "react";
import {Link} from 'react-scroll';
import './Navbar.css';


function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
      <div className="container">
        <img src='/assets/images/mz.png' className="img-fluid" style={{ width: '80px' }} alt="Logo" />
        <div>
          <ul className="navbar-nav ml-auto d-flex flex-row gap-3">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500} className="nav-link" offset={-60}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="skills" smooth={true} duration={500} className="nav-link" offset={-60}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} className="nav-link" offset={-60}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} className="nav-link" offset={-60}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    );
}

export default Navbar;