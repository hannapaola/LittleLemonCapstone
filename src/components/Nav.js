import React from "react";
import colorLittleLemon from "../images/colorLittleLemon.png"

const Nav = () =>{
    return (
        <nav>
            <ul className="navlinks">
                <li><a href="/"><img className="logo" src={colorLittleLemon} alt="Little Lemon Logo" width="250px"/></a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Contact us</a></li>
            </ul>
        </nav>
    );
}

export default Nav;