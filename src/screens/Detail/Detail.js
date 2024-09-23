import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DetailMini from "../../components/DetailMini/DetailMini";

function Detail(props) {
    return(
        <React.Fragment>
            <Header/>
            <DetailMini  id={props.match.params.id}/>
            <Footer/>
        </React.Fragment>
    )
    
}

export default Detail;

