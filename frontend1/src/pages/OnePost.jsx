import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Navbar, Container, Form, Card, Row, Col, Dropdown, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';




export default function OnePost({props}) {
    const [header, set_header] =useState("header");
    const [content, set_content] =useState("content");
    const [created_at, set_created_at] =useState(null);
    if(props.param[0]==="id"){
      fetch("/api/get-post" + "?id=" + (13+props.param[1]))
      .then((response) => response.json())
      .then((data) => {
        set_header(data.header);
        set_content(data.content);
        set_created_at(data.created_at)
      });
    }
    else{
      props.param[1];
    }

      return(
      <div class="d-flex justify-content-center" style={{}}>
      <Card  style={{ width: '40vw', display:'flex'}}>
        <Card.Img variant="top" src="/static/images/p1.png" />
        <Card.Body>
          <Card.Title>{header} </Card.Title>
          <Card.Text> 
            {content}
            <p>Created at:</p>
            {created_at}
            <p>#teg1 teg2</p>
          </Card.Text>
          <Container>
            <Row>
              <Col md={2}>
          <Button style={{width:'5vw'}}>Like 10</Button>
          </Col>
          <Col md={2}>
          <Dropdown style={{paddingLeft:'1vw'}}>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Comments
            </Dropdown.Toggle>
          <Dropdown.Menu style={{width:'35vw'}}>
            
          <Container>
                <Row>
                      <Col md={2}>
                <Image src="/static/images/p1.png" roundedCircle style={{ width: '3vw', height:'3vw'}} />
                </Col>
                <Col md={2}>
                  <h5 style={{color:'black', fontSize:'2.5vh', paddingRight:'2vw', width:'100vw'}}>Nikname</h5>
                  </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                    <div></div>
                    </Col>
                    <Col md={2}>
                      <Form.Control as="textarea" rows={1} placeholder="Live your comment" style={{width:'20vw'}}/>
                    </Col>
                  </Row>
            </Container>

            <div style={{position:'relative', margin:"0.5vw"}}>


                {Array(5).fill(0).map( (item, index) => <Dropdown.Item key={index} style={{marginBottom:"2vh"}}>
                  <Container>
                    <Row>
                      <Col md={2}>
                <Image src="/static/images/p1.png" roundedCircle style={{ width: '3vw', height:'3vw'}} />
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
                      <h5 style={{color:'black', fontSize:'2vh'}}>Comment comtent</h5>
                    </Col>
                  </Row>
                  </Container>
                </Dropdown.Item>)}
            </div>
            </Dropdown.Menu>
          </Dropdown>
          </Col>
          </Row>
          </Container>
        </Card.Body>
      </Card>
      </div>
      );
}