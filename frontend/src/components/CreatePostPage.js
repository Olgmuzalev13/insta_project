import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Navbar, Container, Form, Card, Image} from 'react-bootstrap';
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

export default class CreateRoomPage extends Component {
  defaultVotes = 2;

  constructor(props) {
    super(props);
    this.state = {
      header: "postheader",
      content: "somecontent",
      author: 0,
      image: null,
    };

    this.handleMakePostButtonPressed = this.handleMakePostButtonPressed.bind(this);
    this.handleheader = this.handleheader.bind(this);
    this.handlecontent = this.handlecontent.bind(this);
    this.handleauthor = this.handleauthor.bind(this);
    this.handleimage = this.handleimage.bind(this);
  }
  handleimage(e) {
    console.log("image= "+this.state.image)
    this.setState({
      image: e.target.value,
    });
  }

  handleheader(e) {
    console.log("header= "+this.state.header)
    this.setState({
      header: e.target.value,
    });
  }

  handlecontent(e) {
    console.log("content= "+this.state.content)
    this.setState({
      content: e.target.value,
    });
  }

  handleauthor(e) {
    console.log("author= "+this.state.author)
    this.setState({
      author: e.target.value,
    });
  }


  handleMakePostButtonPressed() {
    console.log(this.state)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        header: this.state.header,
        content: this.state.content,
        //author: this.state.author,
        //image: this.state.image,
      }),
    };
    fetch("/api/mposts", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <>
      <div>
      
      <Card class="d-flex justify-content-center" style={{width: '40rem', marginLeft:'20rem', marginTop:'3rem' }}>
      <Image src="/static/images/p1.png" rounded />
        <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Upload your image</Form.Label>
              <Form.Control type="file" onChange={this.handleimage} />

              <Form.Label class="d-flex justify-content-center">Enter header</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={this.handleheader}/>
              <Form.Label class="d-flex justify-content-center">Enter your content</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={this.handlecontent}/>
              <Form.Label class="d-flex justify-content-center">Enter tegs</Form.Label>
              <Form.Control as="textarea" rows={1} placeholder="#tag1 #tag2"/>
            </Form.Group>
          </Form>
          <Button onClick={this.handleMakePostButtonPressed}> Post</Button>
      </Card>
      </div>
      </>
    );
  }
}