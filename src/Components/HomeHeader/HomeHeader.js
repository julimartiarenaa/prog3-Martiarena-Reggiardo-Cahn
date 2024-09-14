import React from "react";
import FormHome from "../FormHome/FormHome";
import './HomeHeader.css'

function Header(params) {
    return (
        <header className="header">
            
            <ul className="ulHeader">
                <li>Home</li>
                <li>Peliculas</li>
                <li>Actores</li>
            </ul>

            <FormHome/> 
            <ul className="usuario">
                <li> Nombre usuario <img src="" alt="" /></li>
            </ul>
        </header>
    )
}

export default Header;


  