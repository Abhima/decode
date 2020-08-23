import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

export const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={require("../assets/Images/logo.png")}
          width="70"
          alt="Teft logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            className="nav-link"
            exact
            to="/circles"
            activeClassName="active"
          >
            Circles
          </NavLink>
          <NavLink className="nav-link" to="/squares" activeClassName="active">
            Squares
          </NavLink>
          <NavLink
            className="nav-link"
            to="/triangles"
            activeClassName="active"
          >
            Triangles
          </NavLink>
        </Nav>
        <Form className="form" inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default withRouter(NavigationBar);
