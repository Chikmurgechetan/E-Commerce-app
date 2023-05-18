
import React from "react";
import { Container, Navbar,Nav } from "react-bootstrap";
  
const Header = () =>{
    return(
        <>
           <Navbar bg="dark" variant="dark" expand="lg" style={{fontSize:'1.5rem',fontWeight:'bold'}}>
        <Container>
   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">STORE</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </>
    )
};
export default Header;