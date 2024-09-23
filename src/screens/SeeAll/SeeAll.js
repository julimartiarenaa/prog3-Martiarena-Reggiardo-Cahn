import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AllMovies from "../../components/AllMovies/AllMovies";


function SeeAll(props){
    return(
        <React.Fragment> 
            <Header/>
            <AllMovies props = {props}/>
            <Footer/>
        </React.Fragment>
    )
}

export default SeeAll