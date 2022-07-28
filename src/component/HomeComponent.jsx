import React from 'react'

import Card from 'react-bootstrap/Card';



function HomeComponent() {
  return (
    <div>
        <div className="container w-60">
        <div className="row m-3">
        <Card>
       <Card.Img    style={{height :"500px",width:"100%"}} variant="top" src="./assets/first.png" />
      <Card.Body>
        <Card.Title>What if famous brands had regular fonts</Card.Title>
        <Card.Text>
          I've workede in UX for the better part of a decade.
        </Card.Text>
        
      </Card.Body>
    </Card></div>
    
        <div className="row m-3">
        <Card>
       <Card.Img    style={{height :"500px",width:"100%"}} variant="top" src="./assets/first.png" />
      <Card.Body>
        <Card.Title>What if famous brands had regular fonts</Card.Title>
        <Card.Text>
          I've workede in UX for the better part of a decade.
        </Card.Text>
        
      </Card.Body>
    </Card></div>
    
        <div className="row m-3">
        <Card>
       <Card.Img    style={{height :"500px",width:"100%"}} variant="top" src="./assets/first.png" />
      <Card.Body>
        <Card.Title>What if famous brands had regular fonts</Card.Title>
        <Card.Text>
          I've workede in UX for the better part of a decade.
        </Card.Text>
        
      </Card.Body>
    </Card></div>
    
    
    </div>
      
    </div>
  )
}

export default HomeComponent
