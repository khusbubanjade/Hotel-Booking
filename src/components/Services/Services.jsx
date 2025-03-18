import React from "react";
import servicesCSS from './../Services/Services.module.css'

function Services(){
    return(
        <div className={`${servicesCSS.Service_wrapper} section`}>
            <small className="section__Heading">Facilities</small>
            <h2 className="section__Title">Our Best <span>Services</span></h2>

            <div className={servicesCSS.Services_cards}>
                <div className={servicesCSS.Services_card}>
                    <i className="ri-hotel-line"></i>
                    <h3>Basic Facilities</h3>
                    <p>- Reception / Front Desk</p>
                    <p>- Room Services</p>
                    <p>- House Keeping</p>
                    <p>- Wifi & Parking</p>
                </div>
                <div className={servicesCSS.Services_card}>
                    <i className="ri-hotel-bed-line"></i>
                    <h3>Room Aminities</h3>
                    <p>- Comfortable Badding</p>
                    <p>- Bed Room and Pool</p>
                    <p>- TV and AC</p>
                    <p>- Bar</p>
                </div>
                <div className={servicesCSS.Services_card}>
                    <i className="ri-goblet-line"></i>
                    <h3>Dining Options</h3>
                    <p>- Restaurant Cafe</p>
                    <p>- Bar and Lounge</p>
                    <p>- Cafe and Canteen</p>
                    <p>- Room Services</p>
                </div>
                <div className={servicesCSS.Services_card}>
                    <i className="ri-restaurant-line"></i>
                    <h3>Spevial Features</h3>
                    <p>- Custom Rooms</p>
                    <p>- Cricket Ground</p>
                    <p>- Gym</p>
                </div>
            </div>
         </div>
    )
}

export default Services