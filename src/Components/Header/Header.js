import React from "react";
import './Header.css'
import { Link } from "react-router-dom/cjs/react-router-dom";

function Header(params) {
    return (
        <header className="header">
            
            <ul className="ulHeader">
                <Link to="/">Home</Link>
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