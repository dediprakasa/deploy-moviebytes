import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchForm from "../form/searchForm";

const NavbarComponent = (props) => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand className="text-white" as={Link} to="/">
      Movie Bytes
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" className="text-white">
          Home
        </Nav.Link>
      </Nav>
      <SearchForm />
    </Navbar.Collapse>
  </Navbar>
);
export default NavbarComponent;
