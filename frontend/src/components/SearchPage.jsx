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

export const SearchPage = () => {

    const [userss, set_userss] = useState("name1");

    function popularusers(){
    
    
        fetch("/api/users10"  + "?id=" + 11)
        .then((response) => response.json())
        .then((data) => {
          set_userss(data.join());
          console.log(data.join())
        });

        return userss;
      }
  return (
    <>
    <h3>Popular users: {popularusers()}</h3>
    <div style={{position:'relative', margin:"2rem"}}>
      {Array(10).fill(0).map( (item, index) => <OnePost
       props={["id", index+1]} key={index}/>)}
    </div>

    </>
    )
}