//import { Link } from "@material-ui/core";
import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Navbar, Container, Form, Dropdown, Image, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

/*
import styled from 'styled-components'

const Style = styled.div `
    a, .some .navbar-brand, .navbar-nav .nav-link {
      color: #adb1b8;
      &:hover {
          color: white;
      }
    }
`
*/

export default function Navibar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Style>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <span class="navbar-brand mb-0 h1">Instameter</span>
      <Nav className="mr-auto">
          <Nav.Link> <Link class="navbar-nav" to="/interesting"><span class="some">Interesting</span></Link> </Nav.Link>
          <Nav.Link> <Link to="/create">Create Post</Link> </Nav.Link>
          <Nav.Link> <Link to="/chats">Chats</Link> </Nav.Link>
          <Nav.Link> <Link to="/profile">My profile</Link> </Nav.Link>
          <Dropdown style={{paddingLeft:'1vw'}}>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Notifications
            </Dropdown.Toggle>

            <Dropdown.Menu style={{width:'35vw'}}>
            <div style={{position:'relative', margin:"0.5vw"}}>
                {Array(5).fill(0).map( (item, index) => <Dropdown.Item key={index} style={{marginBottom:"2vh"}}>
                  <Container>
                    <Row>
                      <Col md={2}>
                <Image src="/static/images/p1.png" roundedCircle style={{ width: '4vw', height:'4vw'}} />
                </Col>
                <Col md={2}>
                  <h5 style={{color:'black', fontSize:'2.5vh', paddingRight:'2vw'}}>Nikname</h5>
                  </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                    <div></div>
                    </Col>
                    <Col md={2}>
                      <h5 style={{color:'black', fontSize:'2vh'}}>The notification content</h5>
                    </Col>
                  </Row>
                  </Container>
                </Dropdown.Item>)}
            </div>
            </Dropdown.Menu>
          </Dropdown>
      </Nav>
      <Nav className="ms-auto">
          <Button variant="primary" classname="mr-2" onClick={handleShow}>
            <Nav.Link> <Link to="/registration">Sign Up</Link> </Nav.Link>
            </Button>
          <Button variant="primary" classname="mr-2" onClick={handleShow}>
          <Nav.Link> <Link to="/login">Log in</Link> </Nav.Link>
          </Button>
      </Nav>
      </Container>
    </Navbar>
    </Style>
    
    </>
    )
}
