import './map.css'
import React, { useState,useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";

import backgroundImage from '../assests/servicebg.png';
function Contact() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
   
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
const position = [51.505, -0.09];

  return (

    <div id="contact">
      <br></br>
      <br></br>
      
    
    <div  className="container py-5"    data-aos="fade-up"   >
        <br></br>
        <h1 className='o'>Contact US</h1>
      <h2 className='w'>Why Our Clients Choose Us</h2>
      <br></br>
      <br></br>
      <div className="row" >
        <div className="col-lg-6" id="contact-form " data-aos="fade-right">
          <h2 className='our'>GET IN TOUCH</h2>
          <br></br>
          <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" value={message} onChange={handleMessageChange} />
            </Form.Group>
            <br></br>
            <Button className='btn' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-lg-6" id="e" data-aos="fade-left" >
          <h2 >OUR LOCATION</h2 >
          <br></br>
    <iframe  className='mapeuh'  id="gmap_canvas" src="https://maps.google.com/maps?q=5%C3%A8me%20Etage%D8%8C%2039%20Rue%20Omar%20Slaoui,%20Casablanca%2020250&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
}

export default Contact;
