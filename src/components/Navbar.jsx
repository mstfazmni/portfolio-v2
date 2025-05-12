import React from "react";
import {Link} from 'react-scroll';
import './Navbar.css';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Mostafa Zamani</a>
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