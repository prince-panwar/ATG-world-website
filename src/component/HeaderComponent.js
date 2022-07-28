import React from 'react'
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';


import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import {MdArrowDropDown} from "react-icons/md";



function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
       <Navbar bg="transparent" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img className='mt-2' src="./assets/logo.png" alt="error" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Form >
         
            <Form.Control
              type="search"
              
              placeholder= "Search for your favorite groups in ATG"
              className="sForm"
              aria-label="Search"
              />
            
                
           
          </Form>
          <Nav className="link">
          
            <Nav.Link onClick={handleShow} href="#home"> Create Account. <span style={{color:'blue'}}>it's free! </span> <MdArrowDropDown/></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Carousel>
      <Carousel.Item>
        <img
         style={{height :"500px",width:"100%"}}
          className="d-block w-100"
          src="./assets/First.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Computer Engineering</h1>
          <p>142,765 Engineers follow this</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{height :"500px",width:"100%"}}
          className="d-block w-100"
          src="./assets/second.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>Computer Engineering</h1>
          <p>142,765 Engineers follow this</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{height :"500px",width:"100%"}}
          className="d-block w-100"
          src="./assets/third.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>Computer Engineering</h1>
          <p>142,765 Engineers follow this</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <div className="container mt-4">
        <div className="row">
            <div className='col-12'>
        <Navbar bg="light" expand="lg" >
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">All Post</Nav.Link>
            <Nav.Link href="#link">Article</Nav.Link>
            <Nav.Link href="#link">Event</Nav.Link>
            <Nav.Link href="#link">Education</Nav.Link>
            <Nav.Link href="#link">Job</Nav.Link>
            <div className='col-auto '> <Button className='btn'>Write a Post</Button> </div>
            <div className="col btn " > <button className='btm '> Join Group</button></div>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr/>

        </div>
        </div>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
   
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose}>
            Close
          </Button>
          <Button className='btm' onClick={handleClose}>
         Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export  default Header;
