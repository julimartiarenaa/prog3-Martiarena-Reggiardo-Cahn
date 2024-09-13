import React, {Component} from "react";
import MovieElement from "../MovieElement/MovieElement";


class Movie extends Component{
    constructor(){
        super();
        this.state={
            movies: [],
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7bbfa155b881d065cf760bebe36c4d28`)
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

                <article className="moviesList"> 
                    {this.state.movies === 0 ? <h3> Cargando...</h3> :
                     this.state.movies.map((movie, idx) => <li key={movie + idx}><MovieElement data = {movie}/></li>)}
                </article>
                 
            </React.Fragment>
        )
    }
}

export default Movie