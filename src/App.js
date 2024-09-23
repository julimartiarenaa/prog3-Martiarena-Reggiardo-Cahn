import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";
import Detail from "./screens/Detail/Detail";
import Results from "./screens/Results/Results";
import Favs from "./screens/Favs/Favs";
import SeeAll from "./screens/SeeAll/SeeAll"


function App() {
  return (
    <Switch>
      <Route path="/" exact ={true} component={Home}></Route>
      <Route path="/detalle/:id" component={Detail}></Route>
      <Route path= "/search/:pelicula" component={Results}></Route>
      <Route path= "/favoritos" component={Favs}></Route>
      <Route path= "/vertodas/:categoria" component={SeeAll}></Route>
      <Route path="" component={NotFound}></Route>
    </Switch>
  );
}

export default App;
