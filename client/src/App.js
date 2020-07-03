import React, { useState, useEffect } from "react";
import Welcome from "./components/pages/Welcome/Welcome";
import Home from "./components/pages/Home/Home";

// import Navigation from "./components/Navigation"
import "./App.css";

import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch,
} from "react-router-dom";
import Library from "./components/pages/Library/Library";

const App = () => {
  return (
    <div>
      <div className="menu">
        <h3 className="logo">Lucy.</h3>
      </div>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/library" component={Library} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
