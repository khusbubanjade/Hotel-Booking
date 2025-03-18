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
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front2}`}>
                            <button>Twin Room</button>
                        </div>
                        <div className={`${roomsCSS.card_Back} ${roomsCSS.card_Back2}`}>
                            <div className={roomsCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Twin Room</h3>
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
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front3}`}>
                            <button>Quad Room</button>
                        </div>
                        <div className={`${roomsCSS.card_Back} ${roomsCSS.card_Back3}`}>
                            <div className={roomsCSS.price}>
                                <p>$150/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Quad Suite</h3>
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
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front4}`}>
                            <button>Deulex Room</button>
                        </div>
                        <div className={`${roomsCSS.card_Back} ${roomsCSS.card_Back4}`}>
                            <div className={roomsCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Deulex Suite</h3>
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
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front5}`}>
                            <button>Exclusive Room</button>
                        </div>
                        <div className={`${roomsCSS.card_Back} ${roomsCSS.card_Back5}`}>
                            <div className={roomsCSS.price}>
                                <p>$220/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Exclusive Suite</h3>
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
                <div className={roomsCSS.card_container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.card_front} ${roomsCSS.card_front6}`}>
                            <button>Personal Room</button>
                        </div>
                        <div className={`${roomsCSS.card_Back} ${roomsCSS.card_Back6}`}>
                            <div className={roomsCSS.price}>
                                <p>$190/N</p>
                            </div>
                            <div className={roomsCSS.card_content}>
                                <h3>Personal Suite</h3>
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