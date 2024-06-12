import React from "react";
import colorLittleLemon from "../images/colorLittleLemon.png"

/* Responsive navigation bar based on: https://www.youtube.com/watch?v=U8smiWQ8Seg */

const Nav = () =>{
    const showSideBar = (e) => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };
    const hideSideBar = (e) => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    };

    return (
        <nav>
            <ul className="sidebar">
                <li onClick={hideSideBar}><a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#495E57"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="/"><img className="logo" src={colorLittleLemon} alt="Little Lemon Logo" width="200px"/></a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Contact us</a></li>
            </ul>
            <ul>
                <li><a href="/"><img className="logo" src={colorLittleLemon} alt="Little Lemon Logo" width="200px"/></a></li>
                <li className="hideOnMobile"><a href="/">Home</a></li>
                <li className="hideOnMobile"><a href="/">About us</a></li>
                <li className="hideOnMobile"><a href="/">Menu</a></li>
                <li className="hideOnMobile"><a href="/">Reservations</a></li>
                <li className="hideOnMobile"><a href="/">Contact us</a></li>
                <li className="menuButton" onClick={showSideBar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#495E57"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
        </nav>
    );
}

export default Nav;