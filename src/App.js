import React from "react";
import styles from "./App.module.scss";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home/Home";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className={styles.appLayoutContainer}>
        <header>
          <Header />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <div>If you see this page Routing is working</div>
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
