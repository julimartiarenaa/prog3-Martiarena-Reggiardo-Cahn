import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movie from "../../components/Movie/Movie";
import MoviePopulars from "../../components/MoviePopulars/MoviePopulars";
import FormHome from "../../components/FormHome/FormHome";
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