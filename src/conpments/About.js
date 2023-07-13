import React, {  useEffect } from 'react';
import { motion } from 'framer-motion';
import './about.css';
import { Carousel } from 'react-bootstrap';
import test from '../assests/about4.png'; 
import image1 from '../assests/about1.png'; 
import image2 from '../assests/about2.png'; 
import Aos from "aos";
import "aos/dist/aos.css";
import image3 from '../assests/about3.png';
import image4 from '../assests/aboutusbg.png';

import { Link } from 'react-router-dom';


function About() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  

  

  return (<div > 
    <br ></br>
    <div  data-aos="fade-right"  style={{
      backgroundImage: `url(${image4})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
     
    }}>
    <motion.div className="sectio"   >
      <div className="container">
      <h1 className='o'>ABOUT US</h1>
      <h2 className='w'>Why Our Clients Choose Us</h2>
      <br></br>
      <br></br>
        <motion.div className="row" >
          <motion.div className="col-md-6" >
            <div className="message-box">
              <h4 className='titl' style={{ textAlign: 'left' }}>Best way to style your hair</h4>
              <h2 className='name'  style={{ textAlign: 'left' }}>La Barbiére</h2>
              <p className="lead" style={{ textAlign: 'left' }}> Our salon is dedicated to providing exceptional hair care services and an unforgettable experience to every client who walks through our doors. 
              </p>
              <p className="lead" style={{ textAlign: 'left' }} >At La Barbiére, we are passionate about hair care and committed to delivering exceptional service to all our clients. Book an appointment with us today and experience the difference that our salon can make in your hair care routine.</p>
                  <br></br>
                  <Link to="/about">

              <button className='b'>Learn More</button>
              </Link>

            </div>
            
          </motion.div>
          
          <motion.div className="col-md-6" >
          <div className="carousel-wrapper">

            <div className="post">
              <Carousel interval={2500}  className='car' >
                <Carousel.Item>
                  <img className="d-block w-100" src={image2} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={test} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={image3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </div>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
      
    </motion.div>
    </div>
   
    </div>
  );
}

export default About;
