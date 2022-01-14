import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router-dom";

function TopBar({ location }) {
  const { pathname } = location;

  return (
    <Navbar bg="navbar navbar-dark">
      <Navbar.Brand href="#home">Currency Converter</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarTogglerDemo03" />
      <Navbar.Collapse id="navbarTogglerDemo03">
        <Nav className="mr-auto mt-2 mt-lg-0">
          <Nav.Link href="/" active={pathname === "/"}>
            Home
          </Nav.Link>          
          <Nav.Link
            href="/rates"
            active={pathname.includes("/rates")}>
            Chart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>

  );
}


export default withRouter(TopBar);