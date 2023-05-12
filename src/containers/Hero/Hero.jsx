import React from 'react';

import { airbnb, hero, location, searchArrow, ticket, traveloka, tripadvisor } from '../../constants/images';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero flex flex-align' id='home'>
      <div className="container flex flex-space">
        <div className="hero-text-cont flex flex-column flex-1">
          <div className="hero-text">
            <h1>find the place to <br/><span>live your dreams</span> <br/> easily here</h1>
            <p className='para_1'>Everything you need about finding your place to live will be here, where it will be easier for you</p>
          </div>
          <div className="hero-location flex flex-align">
            <img src={location} alt="" srcset="" />
            <input type="text" placeholder='Search for the location you want!' />
            <button className='flex flex-align btn-g'>
              <p>Search</p>
              <img src={searchArrow} alt="" srcset="" />
            </button>
          </div>
          <div className="partners flex flex-column">
            <h4>Our Partnership</h4>
            <div className="part-img flex flex-align">
              <img src={traveloka} alt="" srcset="" />
              <img src={ticket} alt="" srcset="" />
              <img src={airbnb} alt="" srcset="" />
              <img src={tripadvisor} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="hero-img flex-1">
          <img src={hero} alt="" srcset="" />
        </div>
        <div className="hero_bg_color"></div>
      </div>
    </section>
  )
}

export default Hero;