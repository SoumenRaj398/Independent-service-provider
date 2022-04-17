import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../images/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        
        <Navbar bg="primary" sticky="top" variant="light ">
            <Container>
            <Navbar.Brand as ={Link} to="/">
                <img src={logo} height ="50" alt =" " />
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#clients">Clients</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link as ={Link} to="about">About Me</Nav.Link>
            <Nav.Link as ={Link} to="logIn">Log In</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
      
       
    );
};

export default Header;