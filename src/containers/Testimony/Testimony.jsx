import React from 'react'
import { start, test_build_1, user_1 } from '../../constants/images'

import './Testimony.css'

const Testimony = () => {
  return (
    <section className='testimony padd-120'>
        <div className="container">
            <div className="headings">
              <h2 className='h2-h flex flex-align'> <span></span> See Our Review</h2>
              <h3 className="h3-h">What Our User Say About Us</h3>
            </div>

            <div className="testimony-conts">
                <ul className="testimony-list flex flex-align">
                    <li className="testimony-items flex flex-cloumn">
                        <div className="img">
                            <img src={test_build_1} alt="" srcset="" />
                        </div>
                        <div className="client-cont">
                            <h5>Best! I got the house I wanted through Hounter</h5>
                            <p className='para'>Through this website I can get a house with the type and 
                                specifications I want very easily, 
                                without a complicated process to be able to find 
                                information on the house we want.
                            </p>
                            <div className="clients flex flex-space">
                                <div className="agent flex flex-align">
                                    <img src={user_1} alt="" srcset="" />
                                    <div className="agent-details flex flex-column">
                                        <h6>Dianne Russell</h6>
                                        <p>Manchester, Kentucky</p>
                                    </div>
                                </div>
                                <div className="star flex flex-align">
                                    <img src={start} alt="" srcset="" />
                                    <p>4.6</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="testimony-items flex flex-center">
                        <img src={test_build_1} alt="" srcset="" />
                        <div className="client-cont">
                            <h5>Best! I got the house I wanted through Hounter</h5>
                            <p className='para'>Through this website I can get a house with the type and 
                                specifications I want very easily, 
                                without a complicated process to be able to find 
                                information on the house we want.
                            </p>
                            <div className="clients flex flex-space">
                                <div className="agent flex flex-align">
                                    <img src={user_1} alt="" srcset="" />
                                    <div className="agent-details flex flex-column">
                                        <h6>Dianne Russell</h6>
                                        <p>Manchester, Kentucky</p>
                                    </div>
                                </div>
                                <div className="star flex flex-align">
                                    <img src={start} alt="" srcset="" />
                                    <p>4.6</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="testimony-items flex flex-center">
                        <img src={test_build_1} alt="" srcset="" />
                        <div className="client-cont">
                            <h5>Best! I got the house I wanted through Hounter</h5>
                            <p className='para'>Through this website I can get a house with the type and 
                                specifications I want very easily, 
                                without a complicated process to be able to find 
                                information on the house we want.
                            </p>
                            <div className="clients flex flex-space">
                                <div className="agent flex flex-align">
                                    <img src={user_1} alt="" srcset="" />
                                    <div className="agent-details flex flex-column">
                                        <h6>Dianne Russell</h6>
                                        <p>Manchester, Kentucky</p>
                                    </div>
                                </div>
                                <div className="star flex flex-align">
                                    <img src={start} alt="" srcset="" />
                                    <p>4.6</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Testimony