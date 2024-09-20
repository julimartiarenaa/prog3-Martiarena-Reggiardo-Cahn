import React, {Component} from "react";

class EsFav extends Component{
    constructor(props){
        super(props);
        this.state = {
            textoFav: 'Agregar a Favoritos',
            esFav: false
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('fav')
        if (storage !== null){
            let storageParseado = JSON.parse(storage)
            let estaEnFav = storageParseado.includes(this.props.data.id)
            if (estaEnFav){
                this.setState({
                    textoFav: 'sacar de favoritos',
                    esFav: true
                })
            }
        }
    }

    agregarFav(id) {
        let storage = localStorage.getItem('fav')
        if (storage !== null) {
            let favParseado = JSON.parse(storage)
            favParseado.push(id)
            let favStringificado = JSON.stringify(favParseado)
            localStorage.setItem('fav', favStringificado)
        }
        else {
            let arrayFav = [id]
            let arrayFavStringificado = JSON.stringify(arrayFav)
            localStorage.setItem('fav', arrayFavStringificado)
        }
        this.setState({
            textoFav: 'sacar de favoritos',
            esFav: true
        })
    }

    sacarFav(id) {
        let storage = localStorage.getItem('fav')
        let favParseado = JSON.parse(storage)
        let nuevoArrayFav = favParseado.filter((elem) => elem !== id)
        let nuevoArrayString = JSON.stringify(nuevoArrayFav)
        localStorage.setItem('fav', nuevoArrayString)
        this.setState({
            textoFav: 'agregar a favoritos',
            esFav: false
        })
    }


    render(){
        return (
            <div>
                <button onClick={this.state.esFav ? () => this.sacarFav(this.props.data.id): () => this.agregarFav(this.props.data.id)}>{this.state.textoFav}</button>
            </div>
        );
    }

}


export default EsFav;