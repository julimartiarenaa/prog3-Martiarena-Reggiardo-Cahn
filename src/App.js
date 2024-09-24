import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";
import Detail from "./screens/Detail/Detail";
import Results from "./screens/Results/Results";
import Favs from "./screens/Favs/Favs";
import SeeAllTopRated from "./screens/SeeAllTopRated/SeeAllTopRated"
import SeeAllPopular from "./screens/SeeAllPopular/SeeAllPopular"


function App() {
  return (
    <Switch>
      <Route path="/" exact ={true} component={Home}></Route>
      <Route path="/detalle/:id" component={Detail}></Route>
      <Route path= "/search/:pelicula" component={Results}></Route>
      <Route path= "/favoritos" component={Favs}></Route>
      <Route path= "/vertodas/top_rated" component={SeeAllTopRated}></Route>
      <Route path= "/vertodas/popular" component={SeeAllPopular}></Route>
      <Route path="" component={NotFound}></Route>
    </Switch>
  );
}

export default App;
