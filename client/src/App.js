import React from "react";
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
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  const routes = [
    { path: "/dashboard:", name: "Dashboard", Component: Dashboard },
    { path: "/", name: "Welcome", Component: Welcome },
    { path: "/library", name: "Library", Component: Library },
    { path: "/dailyreview:", name: "Daily Review", Component: DailyReview },
    { path: "/bookreview:", name: "Book Review", Component: BookReview },
    { path: "/favourites:", name: "Favourites", Component: Favourites },
    // { path: "/pagenotfound:", name: "", Component: PageNotFound }
  ];
  return (
    <Router>
      <div className="app-body">
        <div className="menu">
          <div className="menu-container">
            <h3>
              <a className="logo" href="/dashboard:">
                Lucy.
              </a>
            </h3>

            <div className="header-navigation">
              {routes.map((route) => (
                <Switch>
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
                </Switch>
              ))}
            </div>
          </div>
        </div>
        <div className="app-container-body">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
        </div>
      </div>
    </Router>
  );
};

export default App;
