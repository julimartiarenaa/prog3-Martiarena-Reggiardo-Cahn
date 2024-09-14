import React, { Component } from "react";

class Element extends Component {
    constructor(props) {
        super()
    }
    render() {

        if (!this.props.data.poster_path) {
            return <div>Cargando...</div>;
        }

        return (
            <div className="element">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} alt="Poster" />
                <h1>{this.props.data.title}</h1>
                <button>Ver descripción</button>
                <button>Ir a detalle</button>
                <button>Agregar a favoritos</button>
            </div>
        );
    }
}

export default Element;