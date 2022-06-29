import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Compnent/Navbar/Navbar';
import Container from "react-bootstrap/Container"
import Projects from './Compnent/Projects/Projects';
import Experiences from './Compnent/Experiences/Experiences';

function App() {
  return (
    <>
    <NavbarComp/>
    <Container fluid>
      <Projects/>
      <Experiences/>


    </Container>
    </>
  );
}

export default App;
