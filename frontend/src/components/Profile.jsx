import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Navbar, Form, Image, Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';


//import {If} from '@babel/plugin-transform-react-jsx';

import {OnePost} from './OnePost.jsx'

import styled from 'styled-components'

const Style = styled.div `
    a, .some .navbar-brand, .navbar-nav .nav-link {
      color: #adb1b8;
      &:hover {
          color: while
      }
    }
`
function profilechange(){

}

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

  const [email, setEmail] = useState("a@a");
  const [name, setname] = useState("Ivan");
  const [nikname, setNikname] = useState("somebidy");
  const [password, setPassword] = useState("1234");

  /*
  constructor(props) {
    super(props);
    state = {
      email: "a@a",
      name: "Ivan",
      nikname: "somebidy",
      password: "1234"
      //img: "/static/images/p1.png",
    };

    handleSignUpButtonPressed = handleSignUpButtonPressed.bind(this);
    handleemail = handleemail.bind(this);
    handlename = handlename.bind(this);
    handleNikname = handleNikname.bind(this);
    handlepassword = handlepassword.bind(this);
  }
*/

  const handleemail = (e) => {
    console.log("mail= "+email)
    setEmail(e.target.value);
  }

  const handlename = (e) => {
    console.log("name= "+name)
    setname(e.target.value);
  }

  const handleNikname = (e) => {
    console.log("nikname= "+nikname)
    setNikname(e.target.value);
  }
  
  const handlepassword = (e) => {
    console.log("password= "+password)
    setPassword(e.target.value);
  }


  const handleSignUpButtonPressed = () => {
    console.log(email)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        name: name,
        nikname: nikname,
        password: password,
      }),
    };
    fetch("/api/musers", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
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
        <Button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onChange={profilechange}>
        Edit profile
        </Button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Вы собираетесь изменить свой профиль</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
              </div>
              <div class="modal-body">
              <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label class="d-flex justify-content-center">Enter your name</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handlename}/>
              <Form.Label class="d-flex justify-content-center">Enter your nikname</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handleNikname}/>
              <Form.Label class="d-flex justify-content-center">Enter your password</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handlepassword}/>
            </Form.Group>
          </Form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button type="button" class="btn btn-primary" onClick={handleSignUpButtonPressed} >Сохранить изменения</button>
              </div>
            </div>
          </div>
        </div>
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
