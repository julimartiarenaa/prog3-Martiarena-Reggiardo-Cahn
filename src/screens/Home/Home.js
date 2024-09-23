import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Movie from "../../Components/Movie/Movie";
import MoviePopulars from "../../Components/MoviePopulars/MoviePopulars";
import FormHome from "../../Components/FormHome/FormHome";
import "./Home.css"

function Home() {
    return (
        <React.Fragment>
            <Header/> 
            <FormHome/>
            <Movie />
            <MoviePopulars/>
            <Footer/> 
        </React.Fragment>

    )

}

export default Home