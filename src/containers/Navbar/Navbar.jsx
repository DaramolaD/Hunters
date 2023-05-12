import React, { useState } from 'react'
import { close, logo, menu } from '../../constants/images';

import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuToggleFunction = () => {
    return(setToggleMenu(true))
  }
  const closeToggleFunction = () => {
    return(setToggleMenu(false))
  }

  return (
    <header className="header flex flex-align">
      <nav className="nav flex flex-space container">
        <div className="logo flex">
          <a href="#">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        <ul className='nav-list flex flex-space'>
          <li className='nav-item'>
            <a href="#home">Home</a>
          </li>
          <li className='nav-item'>
            <a href="#about">About Us</a>
          </li>
          <li className='nav-item'>
            <a href="#contact">Contact Us</a>
          </li>
          <li className='nav-item'>
            <a href="#featured">Property</a>
          </li>
          <li className='nav-item nav-btn'>
            <a href="#contact">Sign Up!</a>
          </li>
        </ul>
        <div className="nav-menu-cont">
          <img src={menu} alt="" className="menu-icon" onClick={menuToggleFunction}/>
          
          {toggleMenu && (
            <div className="menu-cont_overlay">
              <img src={close} alt="" className="menu-icon2" onClick={closeToggleFunction}/>
              <ul className='nav-list-small flex flex-space'>
                <li className='nav-item'>
                  <a href="#home" onClick={closeToggleFunction}>Home</a>
                </li>
                <li className='nav-item'>
                  <a href="#about" onClick={closeToggleFunction}>About Us</a>
                </li>
                <li className='nav-item'>
                  <a href="#contact" onClick={closeToggleFunction}>Contact Us</a>
                </li>
                <li className='nav-item'>
                  <a href="#featured" onClick={closeToggleFunction}>Property</a>
                </li>
                <li className='nav-item nav-btn'>
                  <a href="#contact" onClick={closeToggleFunction}>Sign Up!</a>
                </li>
              </ul>
            </div>
          )}
          
        </div>
      </nav>
    </header>
  )
}

export default Navbar;