import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { Carousel } from "react-bootstrap";
import "./Projects.css";

import {firstProjectImgs ,secProjectImgs}from "../assets/index"

import ss3 from "../assets/ss3.png"
const Projects = () => {
console.log(firstProjectImgs[1]);
console.log(ss3);
  return (
    <div className="test-height">
      <div  className="projectsComponent" id="Projects">
        <Card data-aos="zoom-out" style={{ width: "25rem" }}>
        <Carousel fade>
      
     { firstProjectImgs.map((element)=>{
     return (
      <Carousel.Item>
       <img
         className="d-block w-100"
     
         src= {element}
         alt="First slide"
       />
       </Carousel.Item>)
     })
     }
       
      
    </Carousel>
          <Card.Body>
            <Card.Title>Facebook Clone</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Website similar to Facebook, users can share their thoughts and
              likes, Also they can chat with each other.
            </Card.Subtitle>
            <Card.Text>
              Build with : JS, CSS, React JS, Node JS, Express JS,Redux, MySQL,
              Socket.IO
            </Card.Text>
            <a href="https://github.com/WARRIORS-300/MERAKI_Academy_Project_5">
              <BsGithub className="icon"/>{" "}
            </a>
          </Card.Body>
        </Card>

        <Card data-aos="zoom-out" style={{ width: "25rem" }}>
        <Carousel fade>
      
      { secProjectImgs.map((element)=>{
      return (
       <Carousel.Item>
        <img
          className="d-block w-100"
      
          src= {element}
          alt="First slide"
        />
        </Carousel.Item>)
      })
      }
        
       
     </Carousel>
          <Card.Body>
            <Card.Title>Khadra Fitness</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              A full-stack web application can help people to manage their workouts in the gym and share their thoughts with this website community.
            </Card.Subtitle>
            <Card.Text>
              Build with : JS, CSS, React JS, Node JS, Express JS, MongoDB
            </Card.Text>
            
            <a href="https://github.com/WARRIORS-300/MERAKI_Academy_Project_5">
              <BsGithub className="icon"/>{" "}
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
