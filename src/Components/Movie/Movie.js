import React, { Component } from "react";
import MovieElement from "../MovieElement/MovieElement";
import FormHome from '../FormHome/FormHome'
import "./Movie.css"

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            moviesLimited: [],
            loading: true,
            pelicula: [],
            backup: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7bbfa155b881d065cf760bebe36c4d28`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    moviesLimited: data.results.slice(0, 5),
                    loading: false,
                    pelicula: data.results,
                    backup: data.results
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    filtrarPelicula(peli) {
        if (peli === "") {
            this.setState({ pelicula: [] });
        } else {
            let peliculaFiltrada = this.state.backup.filter((pelicula) => 
                pelicula.title.toLowerCase().includes(peli.toLowerCase())
            );
            this.setState({ pelicula: peliculaFiltrada });
        }
    }

    render() {
        const peliculasAMostrar = this.state.pelicula.length ? this.state.pelicula : this.state.moviesLimited;

        return (
            <React.Fragment>
                
                <article className="moviesList">
                    <FormHome filtrarPelicula = {(dato) => this.filtrarPelicula(dato)}/>
                    <h1> Peliculas Top Rated </h1>
                    <section>
                        {this.state.loading ?
                            <div className="loading">
                                <img src="/spinner.gif" alt="Cargando..." />
                            </div> :
                            peliculasAMostrar.map((movie, idx) => <li key={movie.id + idx}><MovieElement data={movie} /></li>)
                        }
                    </section>


                    <button className="boton"> Ver todas </button>

                </article>

            </React.Fragment>
        )
    }
}

export default Movie