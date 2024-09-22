import React, { Component } from "react";
import MovieElement from "../../Components/MovieElement/MovieElement"
import Filter from "../Filter/Filter";

class AllMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            backup: [],
            loading: true
        }
        console.log(this.props);
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.props.match.params.categoria}?api_key=7bbfa155b881d065cf760bebe36c4d28`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results,
                    backup: data.results,
                    loading: false
                })
                console.log(data);                
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

    render() {
        console.log("Películas filtradas:", this.state.movies); 
        return (
            <React.Fragment>    
                <article className="moviesList">
                    <Filter filtrarPelicula = {(titulo) => this.filtarPelicula(titulo)}/>
                    <h1>Resultados de Búsqueda</h1>
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
                </article>
            </React.Fragment>
        )
    }
}

export default AllMovies
