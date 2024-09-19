import React, { Component } from "react";
import "./DetailMini.css";

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
        return(
            <section className="detail">
            {this.state.loading ?
                <div className="loading">
                    <img src="/Spinner.gif" alt="Cargando..." />
                </div> :
                <article className="detailArt">
                    <img src={`https://image.tmdb.org/t/p/w300${this.state.pelicula.poster_path}`} alt="Poster" />
                    <h1>{this.state.pelicula.title}</h1>
                    <p>{this.state.pelicula.vote_average}</p>
                    <p>{this.state.pelicula.release_date}</p>
                    <p>{this.state.pelicula.runtime}</p>
                    <p className="genero">Géneros: {this.state.pelicula.genres.map(genre => genre.name).join(', ')}</p>
                    <p className="descripcion">{this.state.pelicula.overview}</p>

                </article>
            }
            </section>
               
            
        )
    }
}


export default DetailMini;