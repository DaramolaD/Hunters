import React from 'react'
import { fb, ig, logo, twitter } from '../../constants/images'

import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer padd-120'>
        <div className="container grid">
            <div className="brand flex flex-column gap-2">
                <img src={logo} alt="" className="logo" />
                <p className='brand-p'>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                <div className="socials flex flex-align gap-2">
                    <img src={fb} alt="" className="fb" />
                    <img src={twitter} alt="" srcset="" />
                    <img src={ig} alt="" srcset="" />
                </div>
            </div>
            <div className="footer-list flex flex-column gap-2">
                <h6>Property</h6>
                <ul className='footer-list flex flex-column gap-1'>
                    <li className="footer-items">
                        <a href="#">Home</a>
                    </li>
                    <li className="footer-items">
                        <a href="#">Apartments</a>
                    </li>
                    <li className="footer-items">
                        <a href="#">Villa</a>
                    </li>
                </ul>
            </div>
            <div className="footer-list flex flex-column gap-2">
                <h6>Articles</h6>
                <ul className='footer-list flex flex-column gap-1'>
                    <li className="footer-items">
                        <a href="#">New Articles</a>
                    </li>
                    <li className="footer-items">
                        <a href="#">Popular Articles</a>
                    </li>
                    <li className="footer-items">
                        <a href="#">Most Read</a>
                    </li>
                    <li className="footer-items">
                        <a href="#">Tips & Tricks</a>
                    </li>
                </ul>
            </div>
            <div className="footer-list flex flex-column gap-2">
                <h6>Contact</h6>
                <ul className='footer-list flex flex-column gap-1'>
                    <li className="footer-items">
                        <a href="#">2464 Royal Ln. Mesa, New Jersey 45463</a>
                    </li>
                    <li className="footer-items">
                        <a href="#">(671) 555-0110</a>
                    </li>
                    <li className="footer-items">
                        <a href="#">info@hounter.com</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer