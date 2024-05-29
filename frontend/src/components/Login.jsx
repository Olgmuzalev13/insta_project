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

export const Login = (props) => {

  const [nikname, setNikname] = useState("somebidy");
  const [password, setPassword] = useState("1234");

  const errorsmessage = () => {
    if(nikname.length>4){
      if (password.length<4){
        return "wrong password"
      }
      return "all right"
    }
    else{
      return "there is no shuch nikname"
    }
      
  }

  const handleNikname = (e) => {
    console.log("nikname= "+ nikname)
    setNikname(e.target.value);
  }
  
  const handlepassword = (e) => {
    console.log("password= "+ password)
    setPassword(e.target.value);
  }


  const handleSignUpButtonPressed = () => {
    console.log(nikname)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nikname: nikname,
        password: password,
      }),
    };
    //fetch("/api/users", requestOptions)
    //  .then((response) => response.json())
    //  .then((data) => console.log(data));
  }

    return (
      <>
      <div>
      <Card class="d-flex justify-content-center" style={{width: '40rem', marginLeft:'20rem', marginTop:'10rem' }}>
        <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label class="d-flex justify-content-center">Enter your nikname</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handleNikname}/>
              <Form.Label class="d-flex justify-content-center">Enter your password</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handlepassword}/>
            </Form.Group>
          </Form>
          <Link to="/interesting">
            <Button onClick={handleSignUpButtonPressed} 
            data-bs-toggle="tooltip" data-bs-placement="top"
             title={""+errorsmessage()}>
              Log in
             </Button>
             </Link>
      </Card>
      </div>
      </>
    );
}