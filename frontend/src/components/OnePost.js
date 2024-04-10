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

function get_post_by_id(id) {
  fetch("/api/get-room" + "?id=" + id)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        votesToSkip: data.votes_to_skip,
        guestCanPause: data.guest_can_pause,
        isHost: data.is_host,
      });
    });
}

export default function OnePost({props}) {
    const [header, set_header] =useState("header");
    const [content, set_content] =useState("content");
    const [created_at, set_created_at] =useState(null);
    if(props.param[0]==="id"){
      fetch("/api/get-post" + "?id=" + props.param[1])
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
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      );
}