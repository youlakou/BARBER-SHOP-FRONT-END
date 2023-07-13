import React, { useState, useEffect, useRef } from 'react';

import './services.css'; 
import Aos from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assests/service2.png'; 
import image2 from '../assests/make-up.png'; 
import waxing from '../assests/facial2.png'; 
import HairStyling from '../assests/waxing.png'; 
import haircut from '../assests/haircut.png'; 
import coloring from '../assests/coloring.png'; 
import hairlight from '../assests/hairlight.png'; 
import backgroundImage from '../assests/bg2.png';
import { motion } from 'framer-motion';

function Services() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div id="services"  >
      <br></br>
      <br></br>
    <section  style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   
    }}
      className="ftco-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="o"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        Our Services
      </motion.h1>
      <motion.h2
        className="w"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        What We Provide
      </motion.h2>
      <br></br>
      <br></br>
      
      <div data-aos="fade-up" className="container">
        <div className="row">
        <div className="col-md-3 ftco-animate">
        <motion.div
  className="media d-block text-center block-6 services"
 
  whileHover={{ scale: 1.1 }}
  data-aos="fade-right"
>
<div className="row align-items-center" >
    <div className="col-md-2 col-sm-3 align-self-start">
      <span className="icon"><img src={image2} alt="Service 1 icon" style={{width: '50px', height: '50px'}} /></span>
    </div>
    <div className="col-md-10 col-sm-9" style={{textAlign: 'left'}}>
      <h3 className="heading"> Makeup</h3>
      <p> Our team of expert makeup artists will work with you to create a personalized makeup look that enhances your natural beauty . </p>
    </div>
  </div >
  </motion.div>

  <motion.div
  className="media d-block text-center block-6 services"
 
  whileHover={{ scale: 1.1 }}
  data-aos="fade-right"
>
<div className="row align-items-center" >
    <div className="col-md-2 col-sm-3 align-self-start">
      <span className="icon"><img src={HairStyling} alt="Service 1 icon" style={{width: '50px', height: '50px'}} /></span>
    </div>
    <div className="col-md-10 col-sm-9" style={{textAlign: 'left'}}>
      <h3 className="heading">Hair Styling</h3>
      <p>  complete hair style overhaul, tailored to your face shape and personal style.  we have you covered.  for a night out </p>
    </div>
  </div >
  </motion.div>
  <motion.div
  className="media d-block text-center block-6 services"
  
  whileHover={{ scale: 1.1 }}
  data-aos="fade-right"
>
<div className="row align-items-center" >
    <div className="col-md-2 col-sm-3 align-self-start">
      <span className="icon"><img src={haircut} alt="Service 1 icon" style={{width: '50px', height: '50px'}} /></span>
    </div>
    <div className="col-md-10 col-sm-9" style={{textAlign: 'left'}}>
      <h3 className="heading">Haircuts </h3>
      <p>Our salon offers high-quality haircuts for both adults and children from highly trained, professional stylists</p>
    </div>
  </div >
  </motion.div>
</div>
<div className="col-md-6 ftco-animate" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
  <motion.div
   
    whileHover={{ scale: 1.1 }}
    data-aos="fade-left"
  >
    <img className='ser' src={image1} style={{marginTop: '-30px'}} />
  </motion.div>
</div>
<div className="col-md-3 ftco-animate">
<motion.div
  className="media d-block text-center block-6 services"
 
  whileHover={{ scale: 1.1 }}
  data-aos="fade-left"
>
<div className="row align-items-center"  >
    <div className="col-md-2 col-sm-3 align-self-start">
      <span className="icon"><img src={coloring} alt="Service 1 icon" style={{width: '50px', height: '50px'}} /></span>
    </div>
    <div className="col-md-10 col-sm-9" style={{textAlign: 'left'}}>
      <h3 className="heading">Coloring </h3>
      <p>One of the most popular hairstyling services at Modern, coloring can completely change the way your haircut looks.</p>
    </div>
  </div>
</motion.div>
<motion.div
  className="media d-block text-center block-6 services"
 
  whileHover={{ scale: 1.1 }}
  data-aos="fade-left"
>
<div className="row align-items-center" >
    <div className="col-md-2 col-sm-3 align-self-start">
      <span className="icon"><img src={waxing} alt="Service 1 icon" style={{width: '50px', height: '50px'}} /></span>
    </div>
    <div className="col-md-10 col-sm-9" style={{textAlign: 'left'}}>
      <h3 className="heading">Waxing</h3>
      <p>Waxing is not only a hair service but also a skin care treatment. Our effective waxing services will leave your skin hair-free.</p>
    </div>
  </div >
  </motion.div>
  <motion.div
  className="media d-block text-center block-6 services"
 
  whileHover={{ scale: 1.1 }}
 data-aos="fade-left"
>
<div className="row align-items-center" >
    <div className="col-md-2 col-sm-3 align-self-start">
      <span className="icon"><img src={hairlight} alt="Service 1 icon" style={{width: '50px', height: '50px'}} /></span>
    </div>
    <div className="col-md-10 col-sm-9" style={{textAlign: 'left'}}>
      <h3 className="heading">Highlights</h3>
      <p>Highlights are used to add extra dimension by bringing a lighter shade to your overall hair color so that it could look natural.</p>
    </div>
  </div >
  </motion.div>

        </div>
      </div>
    </div>
  </section>
  </div>
  );
}

export default Services;
