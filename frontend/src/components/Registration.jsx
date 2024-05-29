import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Navbar, Container, Form, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import styled from 'styled-components'

const Style = styled.div `
    a, .some .navbar-brand, .navbar-nav .nav-link {
      color: #adb1b8;
      &:hover {
          color: while
      }
    }
`

export const Registration = (props) => {
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
      <>
      <div>
      <Card class="d-flex justify-content-center" style={{width: '40rem', marginLeft:'20rem', marginTop:'10rem' }}>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="file" />
              <Form.Label class="d-flex justify-content-center" >Email address</Form.Label>
              <Form.Control onChange={handleemail}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
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
          <Button onClick={handleSignUpButtonPressed}> Sing up</Button>
      </Card>
      </div>
      </>
    );
}