import React, { useState, useEffect } from "react";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import DailyReview from "./pages/DailyReview/DailyReview";
import BookReview from "./pages/BookReview/BookReview";
import Favourites from "./pages/Favourites/Favourites";

// import Navigation from "./components/Navigation"
import "./App.css";

import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch,
} from "react-router-dom";
import Library from "./pages/Library/Library";
import { Nav } from "react-bootstrap";

const App = () => {
  const routes = [
    { path: "/", name: "Welcome", Component: Welcome },
    { path: "/library", name: "Library", Component: Library },
    { path: "/dailyreview:", name: "Daily Review", Component: DailyReview },
    { path: "/bookreview:", name: "Book Review", Component: BookReview },
    { path: "/favourites:", name: "Favourites", Component: Favourites },
  ];
  return (
    <Router>
      <div>
        <div className="menu">
          <div className="menu-container">
            <h3 className="logo">Lucy.</h3>

            <div className="header-navigation">
              {routes.map((route) => (
                <Nav.Link
                  key={route.path}
                  as={NavLink}
                  to={route.path}
                  activeClassName="active"
                  className="nav-element"
                  exact
                >
                  {route.name}
                </Nav.Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          {routes.map((
            { path, Component }
          ) => (
            <Route key={path} exact path={path} component={Component} />                          
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;
