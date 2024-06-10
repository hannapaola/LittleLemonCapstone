import React from "react";
import menu from "../images/menu.jpg"
import greekSalad from "../images/greekSalad.jpg"
import paella from "../images/paella.jpg"
import beanSalad from "../images/beanSalad.jpg"
import sardines from "../images/sardines.jpg"
import tiramisu from "../images/tiramisu.jpg"

// Images from https://blog.supermercadosmas.com/20-recetas-de-cocina-mediterranea-para-una-dieta-sana/

const MainPage = () =>{
    return (
        <body>
            <div className="mainsection">
                <h1>Little Lemon</h1>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <img src={menu} alt="Menu" width="95%"/>
                <button>Reserve a Table</button>
            </div>
            <div className="dishessection">
                <h2>Our specialties</h2>
                <ul className="dishes">
                <li>
                    <h4>Greek salad</h4>
                        <img src={greekSalad} alt="Greek fresh salad" width="300px" />
                        <p>Fresh and juicy salad with ingredients from Mediterranean cuisine such as tomato, cucumber, red onion, feta cheese, olives, oregano and salt.</p>
                    </li>
                    <li>
                        <h4>Mixed paella</h4>
                        <img src={paella} alt="Traditional mixed paella" width="300px" />
                        <p>Totally emblematic dish of the Mediterranean culture that combines the traditional recipe with ingredients such as seafood, vegetables, beans and chicken.</p>
                    </li>
                    <li>
                        <h4>Bean and vegetable salad</h4>
                        <img src={beanSalad} alt="Bean and vegetable salad" width="300px" />
                        <p>Bean salad with onion, tomato and parsley that you can complement with egg and a wide variety of homemade oil-based dressings.</p>
                    </li>
                    <li>
                        <h4>Grilled sardines</h4>
                        <img src={sardines} alt="Grilled sardines" width="300px" />
                        <p>Healthy sardines cooked over charcoal with garlic, lemon, and a handful of fresh parsley. Add a little of our special hot sauce to enhance its flavor.</p>
                    </li>
                    <li>
                        <h4>Tiramisú</h4>
                        <img src={tiramisu} alt="Tiramisú" width="300px" />
                        <p>King of the desserts of Italian cuisine, essence of the Mediterranean, prepared with a base of coffee with sponge cake, egg, sugar, mascarpone cheese, cocoa.</p>
                    </li>
                </ul>
            </div>
            <div className="contactussection">
                <h2>Contact us!</h2>
                <p>123 Town Street, Chicago</p>
                <p>+00 123 456 789</p>
                <a className="mailto" href="mailto: little@lemon.com">little@lemon.com</a>
            </div>
        </body>
);
}

export default MainPage;