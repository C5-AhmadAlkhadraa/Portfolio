import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import NavDropdown from "react-bootstrap/NavDropdown"
import {BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import { useNavigate} from "react-router-dom";
import "./Navbar.css"

const NavbarComp = () => {
  const navigator = useNavigate()
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
    <Navbar.Brand onClick={()=>{
      navigator("/")
    }}>Ahmad Alkhadra</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        </Nav>
        <Nav style={{marginRight:"9rem",gap:"1.5rem"}}>
        <Nav.Link onClick={()=>{
      navigator("/projects")
    }}>Projects</Nav.Link>
        <Nav.Link onClick={()=>{
      navigator("/experiences")
    }}>Experiences</Nav.Link>
        <Nav.Link onClick={()=>{
      navigator("/education")
    }}>Education</Nav.Link>
        <Nav.Link  onClick={()=>{
      navigator("/skills")
    }}>
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