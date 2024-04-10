import React, { Component } from "react";
import Interesting from "./Interesting.js";
import CreatePostPage from "./CreatePostPage.js";
import chatsPage from "./chatsPage.js"
import Profile from "./Profile.js"
import Registration from "./Registration.js"
import Login from "./Login.js"
import {Nav, Button, Navbar, Container, Form, Dropdown, Image, Row, Col, ButtonGroup} from 'react-bootstrap';

import Navibar from "./Nav.js"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <Router>
      <Navibar/>
        <Switch>
          <Route exact path="/">
            <h1 class="d-flex justify-content-center" style={{paddingTop:'20vh'}}>Wellcome</h1>
          </Route>
          <Route exact path="/interesting" component={Interesting} />
          <Route exact path="/create" component={CreatePostPage} />
          <Route exact path="/chats" component={chatsPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
      <div class="p-3 mb-2 bg-info text-dark" style={{width:'100%', height:'10%', position:'relative', marginTop:'90%'}}>
      <div class="d-flex justify-content-center">
      <ButtonGroup aria-label="Basic example" >
      <Button variant="secondary">Our social media</Button>
      <Button variant="secondary">Technical support</Button>
      <Button variant="secondary">Our politic</Button>
    </ButtonGroup>
    </div>
    </div>
      </>
    );
  }
}