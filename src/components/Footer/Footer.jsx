import React from "react";
import footerCSS from './../Footer/Footer.module.css'

function Footer(){
    return(
        <footer className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}>
                    <h2>RoyalX</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iusto.</p>
                </div>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Quick Link</h3>
                <p>About</p>
                <p>Contact Us</p>
                <p>Rooms</p>
                <p>Gym</p>
                <p>Restaurant</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>City Branches</h3>
                <p>Nepal</p>
                <p>Mexico</p>
                <p>Germany</p>
                <p>Australia</p>
                <p>California</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Contact</h3>
                <p>Address : <span>360 street- Mumbai, India</span></p>
                <p>Email : <span>example@gmail.com</span></p>
                <p>Phone : <span>9741875366</span></p>
            </div>
        </footer>
    )
}

export default Footer