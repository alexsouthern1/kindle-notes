import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Common/Header";
import CoursesPage from "./components/Courses/CoursesPage"

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path='/courses' component={CoursesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
