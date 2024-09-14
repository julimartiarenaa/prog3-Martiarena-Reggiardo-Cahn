import React from "react";
import './css/styles.css'
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";


function App() {
  return (
    <Switch>
      <Route path="/" exact ={true} component={Home}></Route>
      <Route path="" component={NotFound}></Route>
    </Switch>
  );
}

export default App;
