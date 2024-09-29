import React, { Component } from "react";
import "./DetailMini.css";
import EsFav from "../EsFav/EsFav";

class DetailMini extends Component{
    constructor(props){
    super(props)
    this.state = {
        pelicula : [],
        backup : [],
        loading : true,
        id : this.props.id
    }
    };

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=7bbfa155b881d065cf760bebe36c4d28`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading : false,
                    pelicula: data,
                    backup: data
                    
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    render(){
        const { pelicula, loading } = this.state;

    return (
      <section className="detail">
        {loading ? (
          <div className="loading">
            <img src="/Spinner.gif" alt="Cargando..." />
          </div>
        ) : (
          <article className="detailArt">
            <img src={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`} alt="Poster" />
            <h1>{pelicula.title}</h1>
            <p>Rating: {pelicula.vote_average}</p>
            <p>{pelicula.release_date}</p>
            <p>Duracion: {pelicula.runtime} Minutos</p>
            <p className="genero">
              Géneros: {pelicula.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="descripcion">{pelicula.overview}</p>
            {pelicula.id && <EsFav data={{ id: pelicula.id }} />}
          </article>
        )}
      </section>
    );
  }
}


export default DetailMini;