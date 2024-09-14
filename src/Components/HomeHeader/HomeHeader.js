import React, { Component } from "react";
import FormHome from "../FormHome/FormHome";
import './HomeHeader.css'
import MovieBuscador from "../MovieBuscador/MovieBuscador";

class HomeHeader extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            backup: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7bbfa155b881d065cf760bebe36c4d28`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results,
                    backup: data.results
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    filtrarPelicula(dato) {
        let peliculasFiltradas = this.state.backup.filter((pelicula) => pelicula.title.toLowerCase().includes(dato.toLowerCase()));

        this.setState({
            movies: peliculasFiltradas
        })
    }

    render() {
        return (
            <header className="header">

                <ul className="ulHeader">
                    <li>Home</li>
                    <li>Peliculas</li>
                    <li>Actores</li>
                </ul>

                <FormHome filtrarPelicula={(dato) => this.filtrarPelicula(dato)}/>

                <MovieBuscador movies= {this.state.movies}/>

                <ul className="usuario">
                    <li> Nombre usuario <img src="" alt="" /></li>
                </ul>
            </header>
        )
    }
}

export default HomeHeader;


