import React, { useState, useEffect, createRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";
import { NavLink } from "react-router-dom";

import logo from '../assests/logo2.png';

function Mainnav() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }

    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };


  }, []);

  const navLinks = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/Shop",
      display: "Shop",
    },
    {
      path: "/Book",
      display: "Book Now",
    },
  ];

  const handleLogout = () => {


    // remove the token and the user from the localstorage
    localStorage.clear();

    //
    window.location.href = "/";


  }

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Navbar expand="lg" className="bg-transparent w-100">
        <Container>
          <Navbar.Brand href="/" id="l">
            <img id="logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-transparent navbar-toggler-sm navbar-toggle-custom"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100" style={{
              "display": "flex",
              "align-items": "center",
              "justify-content": "center"
            }} >
              {navLinks.map((item, index) => (
                <NavLink

                  key={index}
                  exact
                  to={item.path}
                  className="nav__link"
                  activeClassName="nav__link--active"
                  style={{ marginRight: "10px" }}
                  ref={createRef()}
                >
                  {item.display}
                </NavLink>

              ))}

              {
                (user && user.role == "SUP") ? (
                  <>
                    <NavLink className=" nav__link" to={"/Info"} activeClassName="nav__link--active" >Admin</NavLink>
                  </>) : (
                  <></>
                )
              }

              {
                (user && user.role == "EMP") ? (
                  <>
                    <NavLink className=" nav__link" to={"/Emp"} activeClassName="nav__link--active" >Admin</NavLink>
                  </>
                ) : (
                  <></>
                )
              }

              {
                localStorage.getItem("token") ? (
                  <NavLink className="ms-auto nav__link" activeClassName="nav__link--active" onClick={handleLogout}>Logout</NavLink>
                ) : (
                  <NavLink className="ms-auto nav__link" activeClassName="nav__link--active" to="/Admin" >Login</NavLink>
                )

              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Mainnav;
