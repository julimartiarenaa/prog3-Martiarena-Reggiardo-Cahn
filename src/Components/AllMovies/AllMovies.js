import React, { Component } from "react";
import MovieElement from "../../Components/MovieElement/MovieElement"


class AllMovies extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7bbfa155b881d065cf760bebe36c4d28`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results,
                    loading: false
                })
                console.log(data.results);

            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>    
                <article className="moviesList">
                    <h1>Resultados de Búsqueda</h1>
                    <section className="movieSection">
                        {this.state.loading ? (
                            <div className="loading">
                                <img src="./spinner.gif" alt="Cargando..." />
                            </div>
                        ) : this.state.movies.length === 0 ? (
                            <p>No hay resultados para la búsqueda</p>
                        ) : (
                            this.state.movies.map((movie, idx) => (
                                <li key={movie.id + idx}>
                                    <MovieElement data={movie} />
                                </li>
                            ))
                        )}
                    </section>
                </article>
            </React.Fragment>
        )
    }
}

export default AllMovies
