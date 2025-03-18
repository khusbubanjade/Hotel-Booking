import React from "react";
import amenitiesCSS from './../Amenities/Amenities.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

function Amenities(){
    return(
        <div className={`${amenitiesCSS.amenities_wrapper} section`}>
            <small className="section__Heading">Luxury Amenities</small>
            <h2 className="section__Title">Our Best <span>Amenities</span></h2>

            <Swiper>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities__item}>
                        <img src="img1" alt="amenities-img" />

                        <div className={amenitiesCSS.content}>
                            <h2>Swimming Pool</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni odio atque mollitia in aperiam rem illo ut doloribus. Quisquam repellendus sint praesentium facilis quis ipsum natus ad, pariatur ea!</p>
                            <button>Book Now !</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities__item}>
                        <img src="img2" alt="amenities-img" />

                        <div className={amenitiesCSS.content}>
                            <h2>Gym and Sports</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni odio atque mollitia in aperiam rem illo ut doloribus. Quisquam repellendus sint praesentium facilis quis ipsum natus ad, pariatur ea!</p>
                            <button>Book Now !</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities__item}>
                        <img src="img3" alt="amenities-img" />

                        <div className={amenitiesCSS.content}>
                            <h2>Restro and Cafe</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni odio atque mollitia in aperiam rem illo ut doloribus. Quisquam repellendus sint praesentium facilis quis ipsum natus ad, pariatur ea!</p>
                            <button>Book Now !</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Amenities