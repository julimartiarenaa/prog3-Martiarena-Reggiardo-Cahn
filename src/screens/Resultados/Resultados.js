import React, { Component } from "react";

class Resultados extends Component (props){
    constructor(){
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${props.match.params.pelicula}?api_key=7bbfa155b881d065cf760bebe36c4d28`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movies: data.results
                })
            })
            .catch(err => console.error(err));
    }

    render(){
        const peliculas = this.state.movies
        console.log(peliculas);
        

    }
}

export default Resultados