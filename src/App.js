import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home/Home";
import { Header } from "./Header/Header";
import { Footer } from "./zFooter/Footer";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <header>
          <Header />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <div>Whatever, dude</div>
          </Route>
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
