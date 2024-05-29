import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Navbar, Container, Form, Image, Row, Col, ListGroup, Pagination} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function pagescount(){
  return 5
}


export const ChatsPage = (props) => {
  const [page, setPage] = useState(5);
  const some = (a) =>{
    page = a;
  }
  
  const funcs = (a) => {
    setPage(a)
    console.log(page)
  }
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
      <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item >{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item onClick={() => funcs(page-2)}>{page-2}</Pagination.Item>
      <Pagination.Item onClick={() => funcs(page-1)}>{page-1}</Pagination.Item>
      <Pagination.Item active={true}>{page}</Pagination.Item>
      <Pagination.Item onClick={() => funcs(page+1)}>{page+1}</Pagination.Item>
      <Pagination.Item onClick={() => funcs(page+2)}>{page+2}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item >{10}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
      </>
    );
}