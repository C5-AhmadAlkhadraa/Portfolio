import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import {BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
const NavbarComp = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
    <Navbar.Brand href="#home">Ahmad Alkhadra</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-right">
        <Nav.Link href="#Projects">Projects</Nav.Link>
        <Nav.Link href="#Experiences">Experiences</Nav.Link>
        <Nav.Link href="#Education">Education</Nav.Link>
        <Nav.Link  href="#Skills">
          Skills
        </Nav.Link>
        
     
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Contact"
          menuVariant="dark"
        >
          <NavDropdown.Item ><BsFillTelephoneFill/> +962781648798</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" > <MdEmail/>  ahmad.a.alkhadra@gmail.com</NavDropdown.Item>
          <NavDropdown.Item href="https://github.com/AhmadAlkhadraa"><BsGithub/>  GitHub</NavDropdown.Item>
          
          <NavDropdown.Item href="https://www.linkedin.com/in/ahmadalkhadraa/"><AiFillLinkedin/>  LinkedIn</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComp