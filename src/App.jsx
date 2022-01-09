import React from "react";
import Main from "./pages/Main";
import Info from "./pages/Info";
import NavBar from "./components/NavBar";
import NotFoundPage from "./components/NotFoundPage";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <Router>
    <Route exact path="/">
      <Redirect to={process.env.PUBLIC_URL} />
    </Route> 
    <Route>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </Route>
  </Router>
);

export default App;