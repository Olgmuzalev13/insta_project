import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Navbar, Container, Form, Image, Row, Col, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CreateChatsPage extends Component {
  defaultVotes = 2;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      
      <ListGroup style={{position:'relative', margin:"0.5vw"}}>
                {Array(5).fill(0).map( (item, index) => <ListGroup.Item key={index} style={{marginBottom:"2vh"}}>
                  <Container>
                    <Row>
                      <Col md={1}>
                <Image src="/static/images/p1.png" roundedCircle style={{ width: '6vw', height:'6vw'}} />
                </Col>
                <Col md={1}>
                  <h5 style={{color:'black', fontSize:'3.5vh', paddingRight:'2vw'}}>Nikname</h5>
                  </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                    <div></div>
                    </Col>
                    <Col md={2}>
                      <h5 style={{color:'black', fontSize:'3vh'}}>Last messege</h5>
                    </Col>
                  </Row>
                  </Container>
                </ListGroup.Item>)}
            </ListGroup>
      </>
    );
  }
}