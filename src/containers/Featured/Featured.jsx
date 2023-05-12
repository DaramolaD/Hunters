import React from 'react'
import { apartment, arrow_2, building_1, building_2, building_3, building_4, deal, house, house_2, popular, searchArrow, user_1, user_2, user_3, user_4, villa } from '../../constants/images';

import './Featured.css';

const Featured = () => {
  return (
    <section className='featured padd-120' id='featured'>
      <div className="container flex flex-column">
          <div className="headings-cont flex flex-space">
            <div className="headings">
              <h2 className='h2-h flex flex-align'> <span></span> Our Recommendation</h2>
              <h3 className="h3-h">Featured House</h3>
            </div>

            <div className="house-type">
              <ul className="house-list flex flex-space">
                <li className="house-items flex flex-align active">
                  <img src={house} alt="" srcset="" />
                  <a href="#">House</a>
                </li>
                <li className="house-items flex flex-align">
                  <img src={villa} alt="" srcset="" />
                  <a href="#">Villa</a>
                </li>
                <li className="house-items flex flex-align">
                  <img src={apartment} alt="" srcset="" />
                  <a href="#">Apartment</a>
                </li>
              </ul>
            </div>

            <div className="buttons flex flex-align">
              <img src={arrow_2} alt="" className="btn-g arrow-2" />
              <img src={searchArrow} alt="" className="btn-g" />
            </div>

          </div>
          
          <div className="building-conts">
            <ul className="building-listings flex flex-wrap">
              <li className="building-items">
                <div className="img-conts">
                  <img src={building_3} alt="" srcset="" />
                  <div className="flow-cont pop-conts flex flex-align">
                    <img src={popular} alt="" srcset="" />
                    <p className='pop'>Popular</p>
                  </div>
                </div>
                <div className="building-text-conts">
                  <h5>Roselands House</h5>
                  <p className='amount'>$ 35.000.000</p>
                </div>
                <div className="agent flex">
                  <img src={user_1} alt="" srcset="" />
                  <div className="agent-details flex flex-column">
                    <h6>Dianne Russell</h6>
                    <p>Manchester, Kentucky</p>
                  </div>
                </div>
              </li>
              <li className="building-items">
                <div className="img-conts">
                  <img src={building_1} alt="" srcset="" />
                  <div className="flow-cont pop-conts flex flex-align">
                    <img src={house_2} alt="" srcset="" />
                    <p className='pop'>New house</p>
                  </div>
                </div>
                <div className="building-text-conts">
                  <h5>Woodlandside</h5>
                  <p className='amount'>$ 20.000.000</p>
                </div>
                <div className="agent flex">
                  <img src={user_2} alt="" srcset="" />
                  <div className="agent-details flex flex-column">
                    <h6>Robert Fox</h6>
                    <p>South Dakota</p>
                  </div>
                </div>
              </li>
              <li className="building-items">
                <div className="img-conts">
                  <img src={building_2} alt="" srcset="" />
                  <div className="flow-cont pop-conts flex flex-align">
                    <img src={deal} alt="" srcset="" />
                    <p className='pop'>Best Deals</p>
                  </div>
                </div>
                <div className="building-text-conts">
                  <h5>The Old Lighthouse</h5>
                  <p className='amount'>$ 44.000.000</p>
                </div>
                <div className="agent flex">
                  <img src={user_3} alt="" srcset="" />
                  <div className="agent-details flex flex-column">
                    <h6>Ronald Richards</h6>
                    <p>Santa Ana, Illinois</p>
                  </div>
                </div>
              </li>
              <li className="building-items">
                <div className="img-conts">
                  <img src={building_4} alt="" srcset="" />
                  <div className="flow-cont pop-conts flex flex-align">
                    <img src={popular} alt="" srcset="" />
                    <p className='pop'>Popular</p>
                  </div>
                </div>
                <div className="building-text-conts">
                  <h5>Roselands House</h5>
                  <p className='amount'>$ 35.000.000</p>
                </div>
                <div className="agent flex">
                  <img src={user_4} alt="" srcset="" />
                  <div className="agent-details flex flex-column">
                    <h6>Dianne Russell</h6>
                    <p>Manchester, Kentucky</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </section>
  )
}

export default Featured;