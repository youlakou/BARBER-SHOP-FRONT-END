import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './admin.css';
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform admin login logic here
    // For this example, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
    const requestBody = {
      email: email,
      password: password,
    };
    // Reset form fields
    setEmail('');
    setPassword('');

    // login request
    fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Login failed');
        }
        return response.json()
      })
      .then(data=>{

        localStorage.setItem("token",data.token);
        localStorage.setItem("user",JSON.stringify(data.user));

        if(data.user.role=="EMP"){
          window.location.href="/Emp"
        }
        else if (data.user.role=="SUP") {

          window.location.href = "/Info"
        }


      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Admin Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>

            <Form.Group className='mt-3' controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>
            <Button className='w-100 mt-4' variant="primary" type="submit" block>
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </Container>
  );
};

export default AdminLogin;
