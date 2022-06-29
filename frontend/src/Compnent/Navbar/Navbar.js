import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const NavbarComp = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
    <Navbar.Brand href="#home">Ahmad Alkhadra</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#Projects">Projects</Nav.Link>
        <Nav.Link href="#Experiences">Experiences</Nav.Link>
        <Nav.Link href="#Education">Education</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
        <Nav.Link  href="#Skills">
          Skills
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComp