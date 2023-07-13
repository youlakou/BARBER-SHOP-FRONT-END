import React, { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';

import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import image4 from '../assests/aboutusbg.png';
import './product.css';
import axios from 'axios';
import Aos from "aos";
import "aos/dist/aos.css";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products"
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
).slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (

    <div >
            <br></br>
            <br></br>
            <br></br>
      <Container>
      
        <h1 className="o" data-aos="fade-left">
          Our shop
        </h1>
        <h2 className="w" data-aos="fade-left">
        HIGH-QUALITY ONLY
        </h2>
        <input className='search-bar'
  type="text"
  placeholder="Search products"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
        <br />
        {loading && <div>Loading...</div>}
        {!loading && (
          <>
            {currentProducts.length > 0 ? (
              <>
                <Row xs={1} sm={2} md={3} lg={4} xl={4} data-aos="fade-left">
                  {currentProducts.map(product => (
                    <Col key={product.id}>
                      <Card className="product-card">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                          <Card.Title className="title">
                            {product.title}
                          </Card.Title>
                          <Card.Text className="description">
                            {product.description}
                          </Card.Text>
                          <Link to={`/product/${product.id}`}><Button variant="primary">More Info</Button></Link>
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
                <Pagination className="justify-content-center">
                  {pageNumbers.map(number => (
                    <Pagination.Item
                      key={number}
                      active={number === currentPage}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </>
            ) : (
              <div > <h1 className='not'>"Sorry, There is no product with this name"</h1></div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductPage;
