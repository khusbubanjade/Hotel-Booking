import React from "react";
import aboutCSS from './../About/About.module.css'

import aboutImg from './../../assets/about-one.png'

function About() {
    return(
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className={aboutCSS.about_img}>
                <img src={aboutImg} alt="about-img" />
            </div>
            <div className={aboutCSS.about_content}>
                <small className="section__Heading">The Royal Hotel</small>
                <h2 className="section__Title">Where Elegance Meets <span>Excellence</span></h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quo tempore expedita? Fugiat sed ut excepturi inventore vitae, odio numquam maxime officiis. Facilis quos molestiae iste, cumque eveniet nam. Delectus.</p>
                <div className={aboutCSS.Cards}>
                    <p>260+ <span>Award Wins</span></p>
                    <p>250k+ <span>Visitors</span></p>
                    <p>150k+ <span>Events</span></p>
                </div>
            </div>
        </div>
    )
}

export default About