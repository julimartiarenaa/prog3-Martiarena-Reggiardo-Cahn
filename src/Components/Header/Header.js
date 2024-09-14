import React from "react";
import './Header.css'

function Header(params) {
    return (
        <header className="header">
            
            <ul className="ulHeader">
                <li>Home</li>
                <li>Peliculas</li>
                <li>Actores</li>
            </ul>

            
            <ul className="usuario">
                <li> Nombre usuario <img src="" alt="" /></li>
            </ul>
        </header>
    )
}

export default Header;