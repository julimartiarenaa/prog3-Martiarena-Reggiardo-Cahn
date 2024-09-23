import React, { Component } from "react";
import MovieElement from "../MovieElement/MovieElement";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Movie.css"

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            moviesLimited: [],
            loading: true,
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=7bbfa155b881d065cf760bebe36c4d28`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    moviesLimited: data.results.slice(0, 5),
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
                    <h1> Mejores valoradas </h1>
                    <section>
                        {this.state.loading ?
                            <div className="loading">
                                <img src="/spinner.gif" alt="Cargando..." />
                            </div> :
                            this.state.moviesLimited.map((movie, idx) => <li key={movie.id + idx}><MovieElement data={movie} /></li>)
                        }
                    </section>

                    <Link to={`vertodas/top_rated`} className="linkMovie">
                        <button type="button" className="buttonMovie"> Ver todas </button>
                    </Link>


                </article>
            </React.Fragment>
        )
    }
}

export default Movie