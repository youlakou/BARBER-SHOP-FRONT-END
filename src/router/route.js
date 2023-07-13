import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../conpments/main'
import AboutUs from '../conpments/aboutus';
import Srvices from '../conpments/services';
import Barbers from '../conpments/productspage'
import Book from '../conpments/booknow'
import Hair from '../conpments/haircuts'
import Product from '../conpments/prodcutdetail'
import Admin from '../conpments/admin'
import Admininfo from '../conpments/Adminplace';
import { Link } from 'react-router-dom';
import IN from '../conpments/user'
import Recu from '../conpments/recu'
import Employer from '../conpments/Employerplace'

const Routers = () => {


  const authMiddleware = (elem) => {

    const isAuthenticated = localStorage.getItem("token") ? true : false;

    if (!isAuthenticated)
      return <Admin></Admin>

    return elem
  }

  const supMiddleware = (elem) => {
    let user = localStorage.getItem("user") ?? null;

    if (!user)
      return <Home></Home>

    // convert json to obj
    user = JSON.parse(user);

    console.log(user);

    if (user.role != "SUP")
      return <Home></Home>

    return elem;
  }

  const empMiddleware = (elem) => {
    let user = localStorage.getItem("user") ?? null;

    if (!user)
      return <Home></Home>

    // convert json to obj
    user = JSON.parse(user);

    if (user.role != "EMP")
      return <Home></Home>

    return elem;
  }

  return (

    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='Services' element={<Srvices />} />
      <Route path='Shop' element={<Barbers />} />
      <Route path='Book' element={<Book />} />
      <Route path='Admin' element={<Admin />} />
      <Route path='Emp' element={empMiddleware(authMiddleware(<Employer />))} />
      <Route path='Info' element={supMiddleware(authMiddleware(<Admininfo />))} />
      
      <Route path="/product/:id" element={<Product />} />
      <Route path="/book/:id" element={<Hair />} />
      <Route path="/reservation/:id" element={<IN />} />
      <Route path="/recu/:id" element={<Recu />} />
    </Routes  >

  )
}

export default Routers