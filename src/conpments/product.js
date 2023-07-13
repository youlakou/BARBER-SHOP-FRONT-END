import React, { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import image4 from '../assests/aboutusbg.png';
import './product.css';
import axios from 'axios';
import Aos from "aos";
import "aos/dist/aos.css";

const ProductPage = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const[loading,setloading]= useState(false);
  const[data,setData]=useState([]);
  useEffect(()=>{
    setloading(true);
    axios({
      method:"get",
      url:"https://fakestoreapi.com/products?limit=4"
    }).then(res=>{
      console.log(res.data)
      setData(res.data)
    }).catch(e=>console.log(e))
    .finally(()=>setloading(false));

  },[])
  return (
   <div style={{
    backgroundImage: `url(${image4})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
   
  }}>
    <Container >
      <h1 className='o' data-aos="fade-left">Our shop</h1>
      <h2 className='w'data-aos="fade-left">Top Sells This Month</h2>
      <br></br>
    <Row data-aos="fade-left">
  {data.map((product) => (
    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Card className="product-card">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title className="title">{product.title}</Card.Title>
          <Card.Text className="description">{product.description}</Card.Text>
          <Link to={`/product/${product.id}`}>
            <Button variant="primary">More Info</Button>
          </Link>
          <Rating
            defaultValue={product.rating.rate}
            count={5}
            size={24}
            activeColor="#ffd700"
            color="#ffd700"
          />
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      </Container>
    </div>
  );
};

export default ProductPage;