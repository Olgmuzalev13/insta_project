import React, { Component, useState, useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
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




export const CreatePostPage = (props) =>  {

  const [header, setHeader] = useState("asd");
  const [content, setContent] = useState("asd");
  const [author, setAuthor] = useState(0);
  const [image, setImage] = useState();

  

  const [tegss, set_tegss] = useState("#tag1");

  function populartags(){
    
    
    fetch("/api/tegs10"  + "?id=" + 11)
    .then((response) => response.json())
    .then((data) => {
      set_tegss(data.join());
      console.log(data.join())
    });
    
    return tegss;
  }

  const errorsmessage = () => {
    if(content.length>5){
      return "all right"
    }
    else{
      return "wright some content"
    }
      
  }

  const [populartagslist, setpopulartagslist] = useState(populartags());

  const [imageURL, setImageURL] = useState();
  const fileReader = new FileReader();


  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  }

  const handleimage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
    console.log("image= "+image)
    fileReader.readAsDataURL(file);
  }

  const handleheader = (e) => {
    console.log("header= "+header)
    setHeader(e.target.value);
  }

  const handlecontent = (e) => {
    console.log("content= "+content)
    setContent(e.target.value);
  }

  const handleauthor = (e) => {
    console.log("author= "+author)
    setAuthor(e.target.value);
  }


  const handleMakePostButtonPressed = () => {
    const formData = new FormData();
    console.log(header)
    console.log(content)
    console.log(author)
    console.log(image)

    formData.append('header', header);
    formData.append('content', content);
    formData.append('image', image);

    console.log(formData)
    fetch('/api/mposts', {
      method: 'POST',
      body: formData
    }).then((response) => response.json())
    .then((data) => console.log(data));
    /*
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      
      body: JSON.stringify({
        header: header,
        content: content,
        //author: 0,
        image: image,
      }),
    };
    fetch("/api/mposts", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    */
  }

    return (
      <>
      <div>
      
      <Card class="d-flex justify-content-center" style={{width: '40rem', marginLeft:'20rem', marginTop:'3rem' }}>
      <Image src={imageURL ? imageURL : "/static/images/p1.png"} rounded />
        <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Upload your image</Form.Label>
              <Form.Control type="file" onChange={handleimage} />

              <Form.Label class="d-flex justify-content-center">Enter header</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handleheader}/>
              <Form.Label class="d-flex justify-content-center">Enter your content</Form.Label>
              <Form.Control as="textarea" rows={1} onChange={handlecontent}/>
              <Form.Label class="d-flex justify-content-center">Enter tegs
              <Button type="button" class="btn btn-primary" data-bs-toggle="modal"
               data-bs-target="#exampleModal" >
              Popular tags
              </Button>
              </Form.Label>
              <Form.Control as="textarea" rows={1} placeholder="#tag1 #tag2"/>

           
            </Form.Group>
          </Form>
            <Link to="/profile">
              <Button onClick={handleMakePostButtonPressed} 
              data-bs-toggle="tooltip" data-bs-placement="top"
                title={""+errorsmessage()}>
                Post
             </Button>
             </Link>
      </Card>
      </div>

      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={populartags}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Популярные теги</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
              </div>
              <div class="modal-body">
                <p>{tegss}</p>
              </div>
              <div class="modal-footer">
              </div>
            </div>
          </div>
        </div>
      
      </>
    );
}
