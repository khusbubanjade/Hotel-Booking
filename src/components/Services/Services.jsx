import React from "react";
import servicesCSS from './../Services/Services.module.css'

function Services(){
    return(
        <div className={`${servicesCSS.Service_wrapper} section`}>
            <small className="section__Heading">Facilities</small>
            <h2 className="section__Title">Our Best<span>Services</span></h2>
        </div>
    )
}

export default Services