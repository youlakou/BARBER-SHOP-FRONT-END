import Aos from "aos";
import "aos/dist/aos.css";
import './ProductDetail.css';
import axios from 'axios';
import { useParams } from "react-router-dom";

import React, { useState, useEffect } from 'react';

const ProductDetail = () => { 
  const { id } = useParams();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${id}`
    })
      .then(res => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div className="row f-flex justify-content-around"> 
      <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <img
          src={product.image}
          alt={product.title}
          height="500"
          width="500"
        />
      </div>
      <div className="col-12 col-lg-5 mt-5">
        <h3>{product.title}</h3>
        <p id="product_id">Product #{product.id}</p>
        <hr className="my-4" />
        <div className="rating-outer">
          <div
            className="rating-inner"
            style={{ width: `${(product.rating.rate / 5) * 100}%` }}
          ></div>
        </div>
        <span id="no_of_reviews">({product.rating.count} Reviews)</span>
        <hr className="my-4" />
        <p id="product_price">${product.price.toFixed(2)}</p>
        <hr className="my-4" />
        <p>
          Status: <span id="stock_status">{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
        </p>
        <hr className="my-4" />
        <h4 className="mt-2">Description:</h4>
        <p>{product.description}</p>
        <hr className="my-4" />
        <p id="product_seller mb-3">
          Sold by: <strong>La barbiere</strong>
        </p>

        <div className="row mt-2 mb-5">
          <div className="rating w-50"></div>
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
};

export default ProductDetail;
