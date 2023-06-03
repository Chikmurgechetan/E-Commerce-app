import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "./Context/CartContext";
import { Link } from "react-router-dom";

function Header() {
  const ctx = useContext(CartContext);
  const orderlist = ctx.orderList;
  let cartItemCount = 0;
  orderlist.forEach((item) => {
    cartItemCount += item.quantity;
  });
  return (
  
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ marginBottom: "1rem" }}
    >
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link
              to="/home"
              className="Nav-link"
              style={{
                marginRight: "1rem",
                fontSize: "1.6rem",
                color: "White",
              }}
            >
              HOME
            </Link>
            <Link
              to="/"
              className="Nav-link"
              style={{
                marginRight: "1rem",
                fontSize: "1.6rem",
                color: "White",
              }}
            >
              STORE
            </Link>
            <Link
              to="/About"
              className="Nav-link"
              style={{ fontSize: "1.6rem", color: "White", marginRight: "1rem", }}
            >
              ABOUT
            </Link>
            <Link
              to="/Contact"
              className="Nav-link"
              style={{ fontSize: "1.6rem", color: "White" }}
            >
              CONTACT US
            </Link>
          </Nav>
          <Nav>
            <Button
              variant="outline-warning"
              onClick={() => ctx.setCartVisibility(!ctx.cartVisibility)}
              style={{ marginLeft: "auto" }}
            >
              <i
                className="bi bi-cart-fill"
                style={{ marginRight: "0.5rem" }}
              ></i>
              {`My Cart ${cartItemCount}`}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );
}

export default Header;
