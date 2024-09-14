import React from "react";
import MovieElement from "../MovieElement/MovieElement";

function MovieBuscador(movies) {
    const movie = movies.movies
    
    return (
        <article className="moviesList">
            {movie.length === 0 ? 
                <div className="loading">
                    <img src="/spinner.gif" alt="Cargando..." />
                </div>
             : 
                movie.map((movie, idx) => (
                    <li key={movie.id + idx}>
                        <MovieElement data={movie} />
                    </li>
                ))
            }
        </article>
    );
}


export default MovieBuscador
