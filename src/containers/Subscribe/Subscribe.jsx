import React from 'react'
import { inbox, sub_1, sub_2, sub_3, sub_4, sub_5, sub_6, sub_7, sub_8 } from '../../constants/images'

import './Subscribe.css'

const Subscribe = () => {
  return (
    <section className='padd-120' id='contact'>
        <div className="container">
            <div className="gradient flex flex-column flex-space">
                <h4>Subscribe For More Info <br/> And update from Hounter</h4>
                <div className="input-cont flex flex-space">
                    <img src={inbox} alt="" srcset="" />
                    <input type="text" placeholder='Your email here'/>
                    <button className="btn-g">Subsribe Now</button>
                </div>
                <div className="imgs-conts">
                    <img src={sub_1} alt="" srcset="" />
                    <img src={sub_2} alt="" srcset="" />
                    <img src={sub_3} alt="" srcset="" />
                    <img src={sub_4} alt="" srcset="" />
                    <img src={sub_5} alt="" srcset="" />
                    <img src={sub_6} alt="" srcset="" />
                    <img src={sub_7} alt="" srcset="" />
                    <img src={sub_8} alt="" srcset="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe