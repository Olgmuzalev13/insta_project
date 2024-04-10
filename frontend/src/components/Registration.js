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

export default class Registration extends Component {
  defaultVotes = 2;

  constructor(props) {
    super(props);
    this.state = {
      email: "a@a",
      name: "Ivan",
      nikname: "somebidy",
      password: "1234"
      //img: "/static/images/p1.png",
    };

    this.handleSignUpButtonPressed = this.handleSignUpButtonPressed.bind(this);
    this.handleemail = this.handleemail.bind(this);
    this.handlename = this.handlename.bind(this);
    this.handleNikname = this.handleNikname.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
  }

  handleemail(e) {
    console.log("mail= "+this.state.email)
    this.setState({
      email: e.target.value,
    });
  }

  handlename(e) {
    console.log("name= "+this.state.name)
    this.setState({
      name: e.target.value,
    });
  }

  handleNikname(e) {
    console.log("nikname= "+this.state.nikname)
    this.setState({
      nikname: e.target.value,
    });
  }
  
  handlepassword(e) {
    console.log("password= "+this.state.password)
    this.setState({
      password: e.target.value,
    });
  }


  handleSignUpButtonPressed() {
    console.log(this.state)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        nikname: this.state.nikname,
        password: this.state.password,
      }),
    };
    fetch("/api/musers", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <>
      <div>
      <Card class="d-flex justify-content-center" style={{width: '40rem', marginLeft:'20rem', marginTop:'10rem' }}>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="file" />
              <Form.Label class="d-flex justify-content-center" >Email address</Form.Label>
              <Form.Control onChange={this.handleemail}
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
              <Form.Control as="textarea" rows={1} onChange={this.handlename}/>
              <Form.Label class="d-flex justify-content-center">Enter your nikname</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={this.handleNikname}/>
              <Form.Label class="d-flex justify-content-center">Enter your password</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={this.handlepassword}/>
            </Form.Group>
          </Form>
          <Button onClick={this.handleSignUpButtonPressed}> Sing up</Button>
      </Card>
      </div>
      </>
    );
  }
}