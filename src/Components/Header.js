import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "./Context/CartContext";
import { Link } from "react-router-dom";

function Header() {
  const ctx = useContext(CartContext);
  const orderlist = ctx.orderList;

  const LoggIn = ctx.isLogedIn;
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
          {LoggIn && (
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/home"
                style={{ fontSize: "1.6rem", color: "white" }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/store"
                style={{ fontSize: "1.6rem", color: "white" }}
              >
                STORE
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/About"
                style={{ fontSize: "1.6rem", color: "white" }}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Contact"
                style={{ fontSize: "1.6rem", color: "white" }}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          )}
          
          {LoggIn && (
  <Nav>
    <Nav.Link
      as={Link}
      to="/profile"
      style={{ fontSize: "1.6rem", color: "white" }}
    >
      My Profile
    </Nav.Link>
  </Nav>
)}

          {!LoggIn && (
            <Nav>
              <Nav.Link
                as={Link}
                to="/login"
                style={{
                  fontSize: "1.5rem",
                  color: "blue",
                  marginRight: "10px",
                  marginTop: "8px",
                }}
              >
                LOGIN
              </Nav.Link>
            </Nav>
          )}

        

          {LoggIn && (
            <Button
              variant="link"
           
              style={{ fontSize: "1.5rem", color: "blue" }}
            >
              LOGOUT
            </Button>
          )}
          {LoggIn && (
            <Nav>
              <Button
                variant="outline-warning"
                onClick={() => ctx.setCartVisibility(!ctx.cartVisibility)}
                style={{ marginLeft: "auto" }}
              >
                {`My Cart ${cartItemCount}`}
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
