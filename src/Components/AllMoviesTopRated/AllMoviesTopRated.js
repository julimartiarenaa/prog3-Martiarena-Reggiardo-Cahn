import React, { Component } from "react";
import Filter from "../Filter/Filter";
import "./AllMoviesTopRated.css";
import MovieElement from "../MovieElement/MovieElement";

class AllMoviesTopRated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            backup: [],
            loading: true,
            numPage: 2,
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7bbfa155b881d065cf760bebe36c4d28&page=1`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results,
                    backup: data.results,
                    loading: false
                })
            })
            .catch(err => console.log(err));
    }



    filtarPelicula(peli) {
        if (peli === "") {
            this.setState({ movies: this.state.backup });
        } else {
            let peliculaFiltrada = this.state.backup.filter((titulo) =>
                titulo.title.toLowerCase().includes(peli.toLowerCase())
            );

            this.setState({ movies: peliculaFiltrada });
        }
    }

    cargasMas() {
        this.setState({
            numPage: this.state.numPage + 1,
        }
        )
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7bbfa155b881d065cf760bebe36c4d28&page=${this.state.numPage}`)
        .then(response => response.json())    
        .then(data => {
                this.setState({
                    movies: this.state.movies.concat(data.results),
                    backup: this.state.backup.concat(data.results),
                    loading: false,
                    
                })

            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.movies);
        return (
            <React.Fragment>
                <article className="moviesList">

                    <Filter filtrarPelicula={(titulo) => this.filtarPelicula(titulo)} />

                    <h1 className="title"> Todas las peliculas de mejores valoradas </h1>

                    <section className="movieSection">
                        {this.state.loading ? (
                            <div className="loading">
                                <img src="./spinner.gif" alt="Cargando..." />
                            </div>
                        ) : this.state.movies.length === 0 ? (
                            <p>No hay resultados para la búsqueda</p>
                        ) : (
                            this.state.movies.map((movie) => (
                                <li key={movie.id}>
                                    <MovieElement data={movie} />
                                </li>
                            ))
                        )}
                    </section>

                    <button onClick={() => this.cargasMas()}> Cargar más </button>
                </article>
            </React.Fragment>
        )
    }
}

export default AllMoviesTopRated
