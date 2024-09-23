import React from "react";
import './Header.css'
import { Link } from "react-router-dom/cjs/react-router-dom";

function Header(params) {
    return (
        <header className="header">
            
            <ul className="ulHeader">
                <Link to="/" className="link"> Home </Link>
                <Link to="/favoritos" className="link"> Favoritos </Link>
                <Link to = '/vertodas/top_rated' className="link"> Top Rated </Link>
                <Link to = '/vertodas/popular' className="link"> Populares </Link>
            </ul>

            
            <ul className="usuario">
                <li> Usuario <img src="" alt="" /></li>
            </ul>
        </header>
    )
}

export default Header;