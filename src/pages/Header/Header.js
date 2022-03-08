import React from 'react';

import "./Header.css";
import {  Container, Nav, Navbar, Button } from 'react-bootstrap';



import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';





const Header = () => {
    const { user, logout } = useFirebase();
    return (
        <div className="header-top">
            <Navbar  bg="info" variant="dark" fixed="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="tour">BANGLA CAR</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link to="/home" className="nav">HOME</Link>
                        <Link to="/car" className="nav">CAR</Link>
                        
                        <Link to="/new car" className="nav">NEW CAR</Link>
                        <Link to="/news" className="nav">NEWS</Link> 
                        <Link to="/advice" className="nav">ADVICE</Link>                       
                        <Link to="/about us" className="nav">ABOUT US</Link>

                        <Link to="/register" className="nav">REGISTER</Link>
                        <Link to="/login" className="nav">LOGIN</Link>

                        <span className="logout">{user?.displayName} </span>
                        {
                          
                        user?.email  && <Button variant="danger" onClick={logout}>logout</Button>
                        
                       
                        }                       
                      
                    </Nav>


                </Container>
            </Navbar>
        </div>
    );
};

export default Header;