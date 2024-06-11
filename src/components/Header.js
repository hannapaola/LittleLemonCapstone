import React from "react";
import menu from "../images/menu.jpg"
import greekSalad from "../images/greekSalad.jpg"
import paella from "../images/paella.jpg"
import beanSalad from "../images/beanSalad.jpg"
import sardines from "../images/sardines.jpg"
import tiramisu from "../images/tiramisu.jpg"
import { Link } from "react-router-dom";

// Images from https://blog.supermercadosmas.com/20-recetas-de-cocina-mediterranea-para-una-dieta-sana/

const Header = () =>{
    return (
        <div className="mainpage">
            <div className="banner">
                <div>
                    <h1>Little Lemon</h1>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <p>Now you can reserve online!</p>
                    <Link to="/booking">
                        <button>Reserve a Table</button>
                    </Link>
                </div>
                <div>
                    <img src={menu} alt="Menu" width="100%"/>
                </div>
            </div>
            <div className="dishes">
                <h2>Our specialties</h2>
                <ul className="dishes">
                    <li>
                        <h4>Greek salad</h4>
                        <img src={greekSalad} alt="Greek fresh salad" width="100%" />
                        <p>Fresh and juicy salad with ingredients from Mediterranean cuisine such as tomato, cucumber, red onion, feta cheese, olives, oregano and salt.</p>
                    </li>
                    <li>
                        <h4>Mixed paella</h4>
                        <img src={paella} alt="Traditional mixed paella" width="100%" />
                        <p>Totally emblematic dish of the Mediterranean culture that combines the traditional recipe with ingredients such as seafood, vegetables, beans and chicken.</p>
                    </li>
                    <li>
                        <h4>Bean and vegetable salad</h4>
                        <img src={beanSalad} alt="Bean and vegetable salad" width="100%" />
                        <p>Bean salad with onion, tomato and parsley that you can complement with egg and a wide variety of homemade oil-based dressings.</p>
                    </li>
                    <li>
                        <h4>Grilled sardines</h4>
                        <img src={sardines} alt="Grilled sardines" width="100%" />
                        <p>Healthy sardines cooked over charcoal with garlic, lemon, and a handful of fresh parsley. Add a little of our special hot sauce to enhance its flavor.</p>
                    </li>
                    <li>
                        <h4>Tiramisú</h4>
                        <img src={tiramisu} alt="Tiramisú" width="95%" />
                        <p>King of the desserts of Italian cuisine, essence of the Mediterranean, prepared with a base of coffee with sponge cake, egg, sugar, mascarpone cheese, cocoa.</p>
                    </li>
                </ul>
            </div>
        </div>
);
}

export default Header;