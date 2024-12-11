import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

export default function Header() {
  return (
    <>
      <div className="header">
        <Navbar
          className="navbar-custom"
          bg="transparent"
          expand="lg"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Brand href="/" className="navbar-brand">
              Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="nav-link">
                  About
                </Nav.Link>
                <Nav.Link href="/project" className="nav-link">
                  Projects
                </Nav.Link>
                <Nav.Link href="/contact" className="nav-link">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
