import React, {Component} from "react";
import "./Filter.css"

class Filter extends Component {
    constructor(props) {
      super(props);
      this.state = {valor: ''};
    }
  
    evitarSubmit(event) {
      event.preventDefault();
    }
  
    controlarCambios(event) {
      this.setState(
        { valor: event.target.value },
        () => {
            if (this.props.filtrarPelicula) {
                this.props.filtrarPelicula(this.state.valor);
            } else {
                console.error("filtrarPelicula no está definida");
            }
        }
    );
  }
  
    render() {
      return (
       <form onSubmit={(event)=>this.evitarSubmit(event)}>
         <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
         <button type="submit" className="button"> <img src="/lupa-web.webp" alt="Buscar" /> </button>
       </form>
      );
    }
  }

export default Filter