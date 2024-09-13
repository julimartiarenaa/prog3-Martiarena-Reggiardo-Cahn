import React from "react";
import "../../Components/Movie/Movie"
import "./Home.css"
import Movie from "../../Components/Movie/Movie";

function Home(){
    return(
        <React.Fragment> 
            
            <Movie/> 
            <Movie/>
        </React.Fragment>
        
    )

}

export default Home