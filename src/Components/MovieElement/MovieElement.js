import React, { Component } from "react";
import "./MovieElement.css"
import { Link } from "react-router-dom/cjs/react-router-dom";



class Element extends Component {
    constructor(props) {
        super(props);
        this.state={
            description: "Ver descripción",
            estado: "oculto",
            textoFav: 'Agregar a Favoritos',
            esFav: false

        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('fav')
        if (storage !== null){
            let storageParseado = JSON.parse(storage)
            let estaEnFav = storageParseado.includes(this.props.data.id)
            if (estaEnFav){
                this.setState({
                    textoFav: 'Sacar de Favoritos',
                    esFav: true
                })
            }
        }
    }

    agregarFav(id) {
        let storage = localStorage.getItem('fav')
        if (storage !== null) {
            let favParseado = JSON.parse(storage)
            favParseado.push(id)
            let favStringificado = JSON.stringify(favParseado)
            localStorage.setItem('fav', favStringificado)
        }
        else {
            let arrayFav = [id]
            let arrayFavStringificado = JSON.stringify(arrayFav)
            localStorage.setItem('fav', arrayFavStringificado)
        }
        this.setState({
            textoFav: 'Sacar de Favoritos',
            esFav: true
        })
    }

    sacarVistaFav = () => {
        this.props.sacarVista(this.props.data.id);
      };
    

    sacarFav(id) {
        let storage = localStorage.getItem('fav')
        let favParseado = JSON.parse(storage)
        let nuevoArrayFav = favParseado.filter((elem) => elem !== id)
        let nuevoArrayString = JSON.stringify(nuevoArrayFav)
        localStorage.setItem('fav', nuevoArrayString)
        this.setState({
            textoFav: 'Agregar a Favoritos',
            esFav: false
        });
        if (this.props.sacarVista) {
            this.props.sacarVista(id);
        }
    }

    showDescription(){
        if (this.state.description === "Ver descripción") {
            this.setState({
            description: "Ocultar descripción",
            estado: "visible"
        })} else {
            this.setState({
            description: "Ver descripción",
            estado: "oculto"
        })
        } 
    }


    render() { 
        return (
            <div className="element">
                    
                <img src={`https://image.tmdb.org/t/p/w300${this.props.data.poster_path}`} alt="Poster" />
                <h1>{this.props.data.title}</h1>

                <button onClick={() => this.showDescription()}> {this.state.description} </button>
                {this.state.estado === "visible" && (
                    <p>{this.props.data.overview}</p>
                    
                )}

                <Link to={`/detalle/${this.props.data.id}`}>
                    <button type="button" className="buttonMovie"> Ir a detalle </button>
                </Link>

                <button onClick={this.state.esFav ? () => this.sacarFav(this.props.data.id): () => this.agregarFav(this.props.data.id)}>{this.state.textoFav}</button>
    
            </div>
        );
    }
}

export default Element;