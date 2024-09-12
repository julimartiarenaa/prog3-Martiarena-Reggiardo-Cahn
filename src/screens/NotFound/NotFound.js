import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './NotFound.css'

function NotFound(props) {
    return(
        <div className="notFound">
            <h1> Esta página no está disponible </h1>
            <p> Es posible que el enlace que seleccionaste no funcione o que se haya eliminado la paigna</p>
            <Link to= '/'> Volver a la página principal</Link>
        </div>
    )
}

export default NotFound;