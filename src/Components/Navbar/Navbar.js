import React, {useEffect, useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  
  const changBagNav = () => {
    if (window.scrollY >=80) {
      setNavbar (true);
    } else {
      setNavbar (false);
    }
    console.log(navbar)
  };
 
  useEffect(() => {
    window.addEventListener('scroll', changBagNav)
    return () => {
      window.removeEventListener('scroll', changBagNav)
    }
  })
  return (
    <>
      <div>
        <div className={`navbar ${navbar?'navbar_active':''}`}>
          <Link to='/' >Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/team'>Team</Link>
          <Link to='/services'>Services</Link>
        </div>  
      </div>
    </>
  );
};

export default Navbar;
