import React from "react";
import roomsCSS from './../Rooms/Rooms.module.css'

function Rooms(){
    return(
        <div className={`${roomsCSS.Rooms_container} section`}>
            <small className="section_Heading">Luxury Suites</small>
            <h2 className="section_Title">Our Best <span>Rooms</span></h2>

            <div className={roomsCSS.cards}>
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front1}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={roomsCSS.card_Back}>
                            <div className={roomsCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Junior Suite</h3>
                                <p>- Daily Cleaning</p>
                                <p>- Home Service</p>
                                <p>- House Keeping</p>
                                <p>- Wifi & Parking</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms