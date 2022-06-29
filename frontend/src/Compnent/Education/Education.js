import React from 'react'
import Card from "react-bootstrap/Card"
import "./Education.css"
const Education = () => {
  return (
    <div className="test-height">
    <div className='educationComponent' id="Education">
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Meraki Academy 
</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Immersive Coding BootCamp
</Card.Subtitle>
    <Card.Text>
    Mar 2022 -  Present
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Jordan University of science and technology

</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Master's Degree in Mechatronics Engineering 
</Card.Subtitle>
    <Card.Text>
    September 2019 - May 2021 
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>The Hashemite University

</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Bachelor's Degree in Mechatronics Engineering
</Card.Subtitle>
    <Card.Text>
    September 2014 - May 2018
    </Card.Text>
    
  </Card.Body>
</Card>
    </div>
    </div>
  )
}

export default Education