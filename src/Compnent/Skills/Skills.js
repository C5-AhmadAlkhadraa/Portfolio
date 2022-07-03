import React from 'react'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import "./Skills.css"
const Skills = () => {
  return (
    <div className="test-height">
    <div className='SkillsComponent' id='Skills'><Card style={{ width: '18rem' }}>
    <Card.Header>SKILLS & Technologies</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>JavaScript, CSS, HTML
</ListGroup.Item>
      <ListGroup.Item>Node JS, Express JS, jQuery,Postman </ListGroup.Item>
      <ListGroup.Item>React JS, Redux , SQL
</ListGroup.Item>
<ListGroup.Item>MongoDB, MySQL

</ListGroup.Item>
<ListGroup.Item>GitHub, Trello 
</ListGroup.Item>
<ListGroup.Item>AutoCad, Microsoft office, Matlab
</ListGroup.Item>
<ListGroup.Item>Hardworking, Enjoy helping people

</ListGroup.Item>
    </ListGroup>
  </Card></div>
  </div>
  )
}

export default Skills