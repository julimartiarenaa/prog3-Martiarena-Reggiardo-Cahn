import React, { Component } from "react";

class DetailMini extends Component{
    constructor(props){
    super(props)
    };


    render(){
        return(
            <article>
                <img src={`https://image.tmdb.org/t/p/w300${this.props.data.poster_path}`} alt="Poster" />
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.vote_average}</p>
                <p>{this.props.data.release_date}</p>
                <p>{this.props.data.runtime}</p>
                <p>{this.props.data.genre_ids}</p>
                <p>{this.props.data.overview}</p>

            </article>
        )
    }
}


export default DetailMini;