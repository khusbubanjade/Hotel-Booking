import React, { useRef } from "react";
import navCSS from './../Nav/Nav.module.css';

function Nav() {
    const menu = useRef();
    const navbar = useRef();

    const menuHandler = () => {
        menu.current.classlist.toggle(navCSS.showNav)
    }
    window.addEventListener('scroll', function(){
        if(window.scrollY > 100){
            navbar.current.classlist.add(navCSS.navbarScroll);
        }
        else{
            navbar.current.classlist.remove(navCSS.navbarScroll)
        }
    })

    return(
        <div className={navCSS.nav_wrapper} ref={navbar}>
            <div className={navCSS.logo}>
                <a href="#"><span>ROYAL</span>X</a>
            </div>

            <ul ref={menu}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Blogs</a></li>
            </ul>

            <div className={navCSS.nav_btns}>
                <button>Book Now</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    )
}

export default Nav