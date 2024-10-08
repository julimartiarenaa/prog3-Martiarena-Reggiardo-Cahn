import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './FormHome.css'

class FormHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: ''
        }
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState(
            { valor: event.target.value }
        )
    }
    
    render() {
        return (
            <form onSubmit={(event) => this.evitarSubmit(event)}>
                <input type="text" className= 'formInput'onChange={(event) => this.controlarCambios(event)} value={this.state.valor}></input>
                <Link to = {`/search/${this.state.valor}`}> 
                    <button type="button" className="button">
                        <img src="/lupa-web.webp" alt="Buscar"/>
                    </button>
                </Link>
            </form>
        )
    }

}

export default FormHome;
