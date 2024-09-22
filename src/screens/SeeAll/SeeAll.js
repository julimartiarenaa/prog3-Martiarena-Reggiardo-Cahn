import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AllMovies from "../../Components/AllMovies/AllMovies";


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