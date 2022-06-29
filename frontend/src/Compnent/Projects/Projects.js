import React from 'react'
import { BsGithub } from "react-icons/bs";
import Card from "react-bootstrap/Card"

const Projects = () => {
  return (
    <div className='projectsComponent' id = "Projects">
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Facebook Clone</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Website similar to Facebook, users can share their thoughts and likes, Also they can chat with each other. 
</Card.Subtitle>
    <Card.Text>
    Build with :
JS, CSS, React JS, Node JS, Express JS,Redux, MySQL, Socket.IO
    </Card.Text>
    <a href="https://github.com/WARRIORS-300/MERAKI_Academy_Project_5">
              <BsGithub /> </a>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Khadra Fitness</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">A website can help people to manage their workouts in the gym.
</Card.Subtitle>
    <Card.Text>
    Build with :
    JS, CSS, React JS, Node JS, Express JS, MongoDB
    </Card.Text>
    <a href="https://github.com/WARRIORS-300/MERAKI_Academy_Project_5">
              <BsGithub /> </a>
  </Card.Body>
</Card>
    </div>
  )
}

export default Projects