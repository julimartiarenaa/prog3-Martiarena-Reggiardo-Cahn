import React, {Component} from "react";
import MovieElement from "../MovieElement/MovieElement";

let APIKey = "7bbfa155b881d065cf760bebe36c4d28"

class Movie extends Component{
    constructor(){
        super();
        this.state={
            movies: [],

        }

    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/?api_key=${APIKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    movies: data.results
                })
            })
            .catch(err => console.error(err));
    }
    render(){
        return(
            <React.Fragment> 
                {this.state.movies === 0 ? <h3> Cargando...</h3> : <MovieElement Movies = {this.state.movies}/> }
            </React.Fragment>
        )
    }
}

export default Movie