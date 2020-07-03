import React from "react";
import Welcome_Header from "../../Welcome_Header/Welcome_Header";
import Contact from "../Contact/Contact";
import "./Welcome.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import {
  // Switch,
  Route,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

const Welcome = () => {
  const routes = [
    // { path: "/", name: "Welcome", Component: Welcome},
    { path: "/contact", name: "Contact", Component: Contact},
  ]
  return (
    <div className="page-container page">
      <Navbar className="navBar">
      <Nav className="navBox">
        {routes.map((route) => (
          <Nav.Link
            key={route.path}
            as={NavLink}
            to={route.path}
            // onClick={() => handleSetPage(route)}
            activeClassName="active"
            className="nav-element"
            exact
          >
            {route.name}
          </Nav.Link>
        ))}
      </Nav>
      </Navbar>
      <Welcome_Header />
      <div className="main-body">
        <h1 className="title">Welcome!</h1>
        <p>
          Elit duis veniam tempor aute id fugiat est cillum id esse officia. Do
          veniam laboris proident irure Lorem mollit incididunt consequat esse
          deserunt culpa. Mollit aliquip adipisicing in tempor aliqua nisi non
          non.
        </p>
        <p>
          Elit duis veniam tempor aute id fugiat est cillum id esse officia. Do
          veniam laboris proident irure Lorem mollit incididunt consequat esse
          deserunt culpa. Mollit aliquip adipisicing in tempor aliqua nisi non
          non. Elit duis veniam tempor aute id fugiat est cillum id esse officia. Do
          veniam laboris proident irure Lorem mollit incididunt consequat esse
          deserunt culpa. Mollit aliquip adipisicing in tempor aliqua nisi non
          non.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
