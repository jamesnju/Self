import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImMenu } from "react-icons/im";
import './heade.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu]  =  useState(false);
  return (
    <>
      <Navbar className="d-flex main" data-bs-theme="dark">
          <h1 className='pointer-cursor menu' onClick={()=>{setMenu(!menu)}}><ImMenu /></h1>
          {menu ?  
        <Container className='content'>
          <Navbar.Brand as={Link} to='/' className='text-light'>JAMES</Navbar.Brand>
          <Nav className="mainlinks ">
            <Nav.Link as={Link} to='/' className='text-light contLink'>Home</Nav.Link>
            <Nav.Link as={Link} to='/' className='text-light contLink'>Stack</Nav.Link>
            <Nav.Link as={Link} to='/' className='text-light contLink'>Projects</Nav.Link>
            <Nav.Link as={Link} to='/' className='text-light contLink'>Contact</Nav.Link>
          </Nav>
        </Container>
        : <Navbar.Brand href="#home" className='text-light text-center text-bold logo1'>JAMES</Navbar.Brand>
      }
      </Navbar>
        
        
    </>
  )
}

export default Header