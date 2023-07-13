import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    reference: '',
    image: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    // Send formDataToSend to the backend API
    fetch('https://your-api-endpoint.com/products', {
      method: 'POST',
      body: formDataToSend
    })
      .then(response => response.json())
      .then(data => {
        console.log('Form data sent successfully:', data);
    
        setFormData({
          name: '',
          description: '',
          reference: '',
          image: '',
          price: '',
          stock: ''
        });
      })
      .catch(error => {
        console.error('Error sending form data:', error);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={10} sm={8} md={6}>
          <h2 className="text-center mb-4">Product Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formReference">
              <Form.Label>Reference</Form.Label>
              <Form.Control
                type="text"
                name="reference"
                placeholder="Enter reference"
                value={formData.reference}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                placeholder="Enter stock"
                value={formData.stock}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Col>
        </Row>
        </Container> 
        )};