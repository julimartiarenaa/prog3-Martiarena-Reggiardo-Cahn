import React from "react";
import Movies from "../Element/Element"

function MovieElement(){
    return(
        Movies.map((movie) => <Element Data = {movie}/>)
    )
}

export default MovieElement