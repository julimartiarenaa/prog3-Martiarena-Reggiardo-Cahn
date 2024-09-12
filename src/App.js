import React from "react";
import './css/styles.css'
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Header from "./Components/Header/Header";
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="" component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
