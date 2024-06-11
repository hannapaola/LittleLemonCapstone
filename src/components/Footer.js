import React from "react";
import greenSquare from "../images/greenSquare.png"

const Footer = () =>{
    return (
        <footer>
            <div className="footerinfo">
                <div className="footerlogo">
                    <img className="logo" src={greenSquare} alt="Little Lemon Logo" width="60px"/>
                </div>
                <div className="footerlinks">
                    <div className="footersection">
                        <h3>Links</h3>
                        <ul className="navlinks">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Menu</a></li>
                            <li><a href="/">Reservations</a></li>
                            <li><a href="/">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="footersection">
                        <h3>Social Media</h3>
                        <ul className="navlinks">
                            <li><a href="https://www.facebook.com/">Facebook</a></li>
                            <li><a href="https://www.instagram.com/">Instagram</a></li>
                            <li><a href="https://x.com/">X</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Little Lemon Copyright 2024 ©</p>
            </div>
        </footer>
    );
}

export default Footer;