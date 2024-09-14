import React, { Component } from "react";
import MovieElement from "../MovieElement/MovieElement";
import "./MoviePopulars.css"


class MoviePopulars extends Component {
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
                const limitedMovies = data.results.slice(0, 5);
                this.setState({
                    movies: limitedMovies,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <React.Fragment>

                <article className="moviesList">
                    {this.state.loading ?
                        <div className="loading">
                            <img src="/spinner.gif" alt="Cargando..." />
                        </div> :
                        this.state.movies.map((movie, idx) => <li key={movie.id + idx}><MovieElement data={movie} /></li>)}
                </article>

            </React.Fragment>
        )
    }
}

export default MoviePopulars