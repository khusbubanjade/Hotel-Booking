import React from "react";
import headerCSS from './../Header/Header.module.css'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay, Parallax } from "swiper/modules";

function Header(){
    return(
        <div className={headerCSS.header_wrapper}>
            <Swiper 
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                className={headerCSS.swiper}
                autoplay={{
                    delay: 25000,
                }}
                parallax={true}
                speed={1500}
                modules={[Autoplay, Parallax]}
            >
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide1}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Luxury Hotel and Restaurant</small>
                            <h2 data-swiper-parallax="-300">Enjoy Your <span>Dream</span> Time with <br />
                                <span>Luxury</span> Experience 
                            </h2>
                            <p data-swiper-parallax="-400">Call Now <span>9741875364</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide2}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="200">Luxury Hotel and Restaurant</small>
                            <h2 data-swiper-parallax="300">Enjoy Your <span>Dream</span> Time with <br />
                                <span>Luxury</span> Experience 
                            </h2>
                            <p data-swiper-parallax="400">Call Now <span>9741875364</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slide3}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="200">Luxury Hotel and Restaurant</small>
                            <h2 data-swiper-parallax="300">Enjoy Your <span>Dream</span> Time with <br />
                                <span>Luxury</span> Experience 
                            </h2>
                            <p data-swiper-parallax="400">Call Now <span>9741875364</span></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header