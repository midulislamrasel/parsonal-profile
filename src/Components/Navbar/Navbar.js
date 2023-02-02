import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const changBagNav = () => {
        if (window.scrollY) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
  return (
    <div>
        <div className= "navbar_section" >
        <div className="logo_section">
          <Link to="/"><img src="logoPS.png" alt="" /></Link>
        </div>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/Team">Team</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/sing in ">Sing in</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
