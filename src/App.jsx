import React from "react";
import Main from "./pages/Main";
import Info from "./pages/Info";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const App = () => (
  <div className="root-page">
    <Router basename="pu-2">
        <NavBar/>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route>
              <Redirect to="/"/>
            </Route>
          </Switch>
        </div>
    </Router>
  </div>

);

export default App;