import React, {Component} from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MovieElement from '../../Components/MovieElement/MovieElement'


class Favs extends Component{
  constructor(){
    super();
    this.state = {
      MoviesFavs: [],
      loading: true,
    };
  }

  componentDidMount(){
    let storage = localStorage.getItem('fav')
    if (storage !== null){
      let IdFavs = JSON.parse(storage);

      const pedido = IdFavs.map(id => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7bbfa155b881d065cf760bebe36c4d28`)
      .then(pedido => pedido.json())
    );

    Promise.all(pedido)
      .then(movies => { this.setState({ 
        MoviesFavs: movies,
        loading: false
        })
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
    } else {
      this.setState({loading: false});
    }
  }

  sacarVista = (id) => {
    let storage = localStorage.getItem('fav');
    if (storage !== null) {
      let favs = JSON.parse(storage);
      let updatedFavs = favs.filter(favId => favId !== id);
      localStorage.setItem('fav', JSON.stringify(updatedFavs));
      this.setState({
        MoviesFavs: this.state.MoviesFavs.filter(movie => movie.id !== id),
      });
    }
  };

  render() {
    return (
        <React.Fragment>
            <Header/>
            <article className="moviesList">
                <h1>Peliculas Favs</h1>
                <section className="movieSection">
                    {this.state.loading ? (
                        <div className="loading">
                            <img src="./spinner.gif" alt="Cargando..." />
                        </div>
                    ) : this.state.MoviesFavs.length === 0 ? (
                        <p>No tienes peliculas en favoritos.</p>
                    ) : (
                        this.state.MoviesFavs.map((movie, idx) => (
                            <li key={movie.id + idx}>
                                <MovieElement data={movie} sacarVista={this.sacarVista}/>
                            </li>
                        ))
                    )}
                </section>
            </article>
            <Footer/>
        </React.Fragment>
        )       
    }
}


export default Favs;