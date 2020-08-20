import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home/Home";
import { Header } from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <div>Whatever, dude</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
