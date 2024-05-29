import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Navbar, Form, Image, Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


//import {If} from '@babel/plugin-transform-react-jsx';

import OnePost from './OnePost.js'

import styled from 'styled-components'

const Style = styled.div `
    a, .some .navbar-brand, .navbar-nav .nav-link {
      color: #adb1b8;
      &:hover {
          color: while
      }
    }
`


export const Profile = () => {
  const [image, setImage] = useState();

  const [imageURL, setImageURL] = useState();
  const fileReader = new FileReader();


  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  }

  const handleimage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
    fileReader.readAsDataURL(file);
  }

  const handleMakePostButtonPressed = () => {
    const formData = new FormData();
    console.log(image)

    formData.append('image', image);

    console.log(formData)
    /*fetch('/api/change_avatar', {
      method: 'POST',
      body: formData
    }).then((response) => response.json())
    .then((data) => console.log(data));
    */
  }

  return (
    <div>
    <Container>
      <Row style={{margin:'3vw' }}>
      <Col xs={3} md={2}>
      <Image src={imageURL ? imageURL : "/static/images/p1.png"} roundedCircle style={{ width: '10vw', height:'10vw'}} />
      <input type="file" onChange={handleimage} />
      <Button onClick={handleMakePostButtonPressed}> Change</Button>
      </Col>
        <Col xs={4} md={3}>
        <h1>Nikname</h1>
        </Col>
        <Col xs={4} md={3}>
        <Button>Edit profile</Button>
        </Col>
        <Col xs={4} md={3}>
        <Button>View Archive</Button>
        </Col>
      </Row>
      <Row style={{marginLeft:'20vw' }}>
        <Col>
        <h3>About you</h3>
        </Col>
      </Row>
    </Container>
    <div style={{position:'relative', margin:"2rem"}}>
      {Array(10).fill(0).map( (item, index) => <OnePost
       props={{param: ["id", index+1]}} key={index}/>)}
    </div>
    </div>
    )
}
