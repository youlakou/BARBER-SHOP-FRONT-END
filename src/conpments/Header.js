import React from 'react'
import './Header.css'
import { motion } from 'framer-motion'
import Aos from "aos";
import "aos/dist/aos.css";
import logo from '../assests/logo.png'
import WAVES from './wave'
import {  Link } from 'react-router-dom';
import backgroundImage from '../assests/8.jpg';
function Home() {
  

  const h1Variants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  }

  const h2Variants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  }

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1
      }
    }
  }

  return (
    <header id="header" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className="wave">
        
      </div>
      <div className="your">
        <div className="col-md-6">
          
          
         <div className="image" data-aos="fade-right">
         <motion.img    src={logo} alt="logo" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} />
         </div>
          
          <motion.h1  variants={h1Variants} initial="hidden" animate="visible">
            Unleash Your <br />
            Inner Confidence
          </motion.h1>
          <motion.h2  variants={h2Variants} initial="hidden" animate="visible">
          Discover the beauty that lies within you at our  salon <br></br> where we craft stunning hair transformations that <br></br> empower you to look and feel your best.
          </motion.h2>
          <Link to={"/Book"}> <motion.button variants={buttonVariants} initial="hidden" animate="visible">
            Book Now
          </motion.button></Link>
         
        </div>
     
       
      </div>
    <br></br>
    <br></br>
    <br></br>
      <WAVES />
    </header>
  )
}

export default Home;