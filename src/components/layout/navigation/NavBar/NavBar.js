import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../../../../assets/img/sirwest-brand.svg";
import "./NavBar.scss";
import { NavDropdown } from "react-bootstrap";
import Icon from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { github } from "react-icons-kit/fa/github";
import { envelopeO } from "react-icons-kit/fa/envelopeO";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="navbar-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/skills">Skills</Nav.Link>
              <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href="/portfolio/richmond">
                  Richmoond
                </NavDropdown.Item>
                <NavDropdown.Item href="/portfolio/kemtek">
                  Kemtek
                </NavDropdown.Item>
                <NavDropdown.Item href="/portfolio/prospect">
                  Prospect
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/portfolio/goldeneye">
                  GoldenEye
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Navbar.Text>
                <Link to="/">
                  <Icon className="Icon" size={24} icon={linkedin} />
                </Link>
                <Link to="/">
                  <Icon className="Icon" size={24} icon={github} />
                </Link>
                <Link to="/">
                  <Icon className="Icon" size={24} icon={envelopeO} />
                </Link>
              </Navbar.Text>
              <Nav.Link href="/" className="resume-link">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
