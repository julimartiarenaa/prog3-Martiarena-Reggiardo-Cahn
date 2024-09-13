import React, {Component} from "react";

class Element extends Component {
    constructor(props){
        super()
    }
    render(){
        return(
            <div className="element">
                {this.props.data}
            </div>
        )
    }
    
}

export default Element;