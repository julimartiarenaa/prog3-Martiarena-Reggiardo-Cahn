import React from "react";
import './css/styles.css'
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="" component={NotFound}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
