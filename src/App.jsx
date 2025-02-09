import React , { useState } from "react"
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css'

 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 
 
function App() {
  

  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"  >Home</Nav.Link>
            <Nav.Link href="/About"  >About</Nav.Link>            
            <Nav.Link href="/Users"  >Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr/>
    <Container className="container-fluid">
    <Outlet></Outlet>
   
    </Container>
    <hr/>
    <footer>
        <p>&copy; 2025 </p>
    </footer>
    

    </>
  )
}

export default App
