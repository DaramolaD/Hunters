import React from 'react'
import { bath, bed, contact, garage, ready, stairs, user_1 } from '../../constants/images';

import './RealSell.css'

const RealSell = () => {
  return (
    <section className='realSell padd-120' id='about'>
        <div className="container flex flex-space gap_5">
            <div className="house_details-cont flex-1">
                <div className="headings">
                    <h2 className='h2-h flex flex-align'> <span></span>Ready To Sell</h2>
                    <h3 className="h3-h">Let's Tour And See Our House!</h3>
                    <p className='para_1'>Houses recommended by our partners that have been curated to become the home of your dreams!</p>
                </div>

                <div className="house_detial">
                    <h5 className='blue-cl'>House Detail</h5>
                    <div className="detail_list grid grid-2fr">
                        <div className="details_items flex flex-align">
                            <img src={bed} alt="" srcset="" />
                            <p>4 Bedrooms</p>
                        </div>
                        <div className="details_items flex flex-align">
                            <img src={bath} alt="" srcset="" />
                            <p>4 Bedrooms</p>
                        </div>
                        <div className="details_items flex flex-align">
                            <img src={garage} alt="" srcset="" />
                            <p>4 Bedrooms</p>
                        </div>
                        <div className="details_items flex flex-align">
                            <img src={stairs} alt="" srcset="" />
                            <p>4 Bedrooms</p>
                        </div>
                    </div>
                </div>

                <div className="agent-cont flex flex-space">
                    
                    <div className="agent flex flex-align">
                        <img src={user_1} alt="" srcset="" />
                        <div className="agent-details flex flex-column">
                            <h6>Dianne Russell</h6>
                            <p>Manager Director</p>
                        </div>
                    </div>

                    <div className="contact-cont flex flex-align">
                        <img src={contact} alt="" srcset="" />
                        <p>Contact Now</p>
                    </div>

                </div>

            </div>
            <div className="house-img flex-1">
                <img src={ready} alt="" srcset="" />
            </div>
            <div className="bg_color"></div>
        </div>
    </section>
  )
}

export default RealSell;