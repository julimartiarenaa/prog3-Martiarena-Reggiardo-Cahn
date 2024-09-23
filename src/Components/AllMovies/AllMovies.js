import React, { Component } from "react";
import MovieElement from "../MovieElement/MovieElement"
import Filter from "../Filter/Filter";
import "./AllMovies.css"

class AllMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            backup: [],
            loading: true,
            cantMovies: 5
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.props.match.params.categoria}?api_key=7bbfa155b881d065cf760bebe36c4d28`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results.slice(0, this.state.cantMovies),
                    backup: data.results,
                    loading: false
                })
                console.log(data);                
            })
            .catch(err => console.log(err));
    }    

    componentDidUpdate() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.props.match.params.categoria}?api_key=7bbfa155b881d065cf760bebe36c4d28`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            this.setState({
                movies: data.results.slice(0, this.state.cantMovies),
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

    cargasMas(){
        if (this.movies.length === this.cantMovies){
            this.setState({})
        }
    }

    render() {
        return (
            <React.Fragment>    
                <article className="moviesList">

                    <Filter filtrarPelicula = {(titulo) => this.filtarPelicula(titulo)}/>

                    <h1 className="title"> Todas las peliculas </h1>

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

export default AllMovies
