import "./App.css";
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Compnent/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Projects from "./Compnent/Projects/Projects";
import Experiences from "./Compnent/Experiences/Experiences";
import Education from "./Compnent/Education/Education";
import Skills from "./Compnent/Skills/Skills";
import Home from "./Compnent/Home/Home";

function App() {
  return (
    <>
      <NavbarComp />
      <Container fluid>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>

      </Container>
    </>
  );
}

export default App;
