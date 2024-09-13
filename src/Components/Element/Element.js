import React, {Component} from "react";
import Data from "../MovieElement/MovieElement"

class Element extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <article className="element">
                {Data.dato}
            </article>
        )
    }
    
}

export default Element;