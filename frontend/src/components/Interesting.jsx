import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Button, Navbar, Container, Form, Image, Row, Col} from 'react-bootstrap';
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

function Interesting_posts_id(){
    return 1;
}

export const Interesting = () => {

  return (
    <>

    <div style={{position:'relative', margin:"2rem"}}>
      {Array(10).fill(0).map( (item, index) => <OnePost
       props={["id", index+1]} key={index}/>)}
    </div>

    </>
    )
}

/*
export const Interesting = () => {

  return (
    <>

    <div style={{position:'relative', margin:"2rem"}}>
      {Array(10).fill(0).map( (item, index) => <OnePost
       props={{param: ["id", index+1]}} key={index}/>)}
    </div>

    </>
    )
}
*/