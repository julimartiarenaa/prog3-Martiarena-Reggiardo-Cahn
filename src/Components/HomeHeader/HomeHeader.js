import React from "react";
import Formulario from "../FormHome/FormHome";
import './HomeHeader.css'

function Header(params) {
    return (
        <header className="header">
            
            <ul className="ulHeader">
                <li>Home</li>
                <li>Peliculas</li>
                <li>Actores</li>
            </ul>

            <Formulario/> 
            <ul className="usuario">
                <li> Nombre usuario <img src="" alt="" /></li>
            </ul>
        </header>
    )
}

export default Header;


  