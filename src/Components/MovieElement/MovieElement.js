import React, { Component } from "react";
import "./MovieElement.css"

class Element extends Component {
    constructor(props) {
        super(props);
        this.state={
            description: "Ver descripción",
            estado: "oculto"
        }
    }

    showDescription(){
        if (this.state.description === "Ver descripción") {
            this.setState({
            boton: "Ocultar descripción",
            estado: "visible"
        })} else {
            this.setState({
            boton: "Ver descripción",
            estado: "oculto"
        })
        } 
    }


    render() {

        if (!this.props.data.poster_path) {
            return <div>Cargando...</div>;
        }

        return (
            <div className="element">
                <img src={`https://image.tmdb.org/t/p/w300${this.props.data.poster_path}`} alt="Poster" />
                <h1>{this.props.data.title}</h1>
                <button onClick={() => this.showDescription()}>{this.state.description}</button>
                <p> {this.props.data.overview}</p>
                <button>Ir a detalle</button>
                <button>Agregar a favoritos</button>
            </div>
        );
    }
}

export default Element;