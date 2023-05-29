
import {useContext} from "react";
import { Container, Navbar,Nav,Button } from "react-bootstrap";
import CartContext from "./Context/CartContext";
const Header = () =>{

  const ctx = useContext(CartContext); 
   const orderlist = ctx.orderlist ;
   let cartItemCount = 0 ;
   orderlist.forEach(item => {
       cartItemCount += item.quantity
   });
 



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
        
            <Button variant="outline-warning" onClick={()=>ctx.setCartShow(true)} >{`My Cart ${cartItemCount}`}</Button>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </>
    )
};
export default Header;