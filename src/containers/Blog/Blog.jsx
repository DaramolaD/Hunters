import React from 'react'

import './Blog.css'
import { blog_img_1, blog_img_2, blog_img_3, blog_main, clock, user_1 } from '../../constants/images'

const Blog = () => {
  return (
    <section className='blog padd-120'>
        <div className="container flex flex-column flex-center">
            <div className="headings flex flex-column flex-center">
              <h2 className='h2-h flex flex-align'> <span></span> See tips and trick from our partnership</h2>
              <h3 className="h3-h">Find out more about <br/> Selling and buying homes</h3>
              <button className='btn btn-g'>More Article!</button>
            </div>
            <div className="blog-sections padd-80 grid gap_5">
                <ul className="blog-listing flex flex-column">
                    <li className="blog-listing-items flex">
                        <img src={blog_img_1} alt="" className="blog_img" />
                        <div className="blog-details">
                            <div className="blog_author flex flex-align">
                                <img src={user_1} alt="" srcset="" />
                                <p className='para'>Dianne Russell</p>
                            </div>
                            <p className='blog-para'>The things we need to check when <br /> We want to buy a house</p>
                            <div className="time flex flex-align">
                                <img src={clock} alt="" srcset="" />
                                <p className='para'>4 min read | 25 Apr 2021</p>
                            </div>
                        </div>
                    </li>
                    <li className="blog-listing-items flex">
                        <img src={blog_img_2} alt="" className="blog_img" />
                        <div className="blog-details">
                            <div className="blog_author flex flex-align">
                                <img src={user_1} alt="" srcset="" />
                                <p className='para'>Courtney Henry</p>
                            </div>
                            <p className='blog-para'>7 Ways to distinguish the quality of <br/> The house we want to buy</p>
                            <div className="time flex flex-align">
                                <img src={clock} alt="" srcset="" />
                                <p className='para'>6 min read | 24 Apr 2021</p>
                            </div>
                        </div>
                    </li>
                    <li className="blog-listing-items flex">
                        <img src={blog_img_3} alt="" className="blog_img" />
                        <div className="blog-details">
                            <div className="blog_author flex flex-align">
                                <img src={user_1} alt="" srcset="" />
                                <p className='para'>Darlene Robertson</p>
                            </div>
                            <p className='blog-para'>The best way to know the quality of <br /> The house we want to buy</p>
                            <div className="time flex flex-align">
                                <img src={clock} alt="" srcset="" />
                                <p className='para'>2 min read | 24 Apr 2021</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="blog-main">
                    <img src={blog_main} alt="" srcset="" />
                    <div className="blog-details">
                        <div className="blog_author flex flex-align">
                            <img src={user_1} alt="" srcset="" />
                            <p className='para'>Darlene Robertson</p>
                        </div>
                        <p className='t-para'>The best way to know the quality of <br /> The house we want to buy</p>
                        <p className='para2'>Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
                        <div className="time flex flex-align">
                            <img src={clock} alt="" srcset="" />
                            <p className='para'>2 min read | 24 Apr 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog