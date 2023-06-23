import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";
import AuthoContext from "../Context/Auth-Context";

function Header() {
  
  const ctx = useContext(CartContext);
  const orderlist = ctx.orderList;
  
  const authCtx = useContext(AuthoContext);
  const isLoggedIn = authCtx.isLoggedIn;

  let cartItemCount = 0;
  orderlist.forEach((item) => {
    cartItemCount += item.quantity;
  });

  const LogoutHandler = () => {
    authCtx.logout();
  };

  return (
    <Navbar
      bg="dark"
      s
      variant="dark"
      expand="lg"
      style={{
        marginBottom: "1rem",
        padding: "2rem ",
        boxShadow: "1px 1px 1px 1px red",
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/home"
              style={{ fontSize: "1.4rem", color: "white" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/store"
              style={{ fontSize: "1.4rem", color: "white" }}
            >
              STORE
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              style={{ fontSize: "1.4rem", color: "white" }}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Contact"
              style={{ fontSize: "1.4rem", color: "white" }}
            >
              CONTACT
            </Nav.Link>
          </Nav>

          {isLoggedIn && (
            <Nav>
              <Nav.Link
                as={Link}
                to="/profile"
                style={{ fontSize: "1.4rem", color: "white" }}
              >
                My Profile
              </Nav.Link>
            </Nav>
          )}
          {!isLoggedIn && (
            <Nav>
              <Nav.Link
                as={Link}
                to="/login"
                style={{
                  fontSize: "1.5rem",
                  color: "blue",
                  marginRight: "10px",
                }}
              >
                LOGIN
              </Nav.Link>
            </Nav>
          )}

          {isLoggedIn && (
            <Button
              variant=""
              style={{ fontSize: "1.2rem", color: "red" }}
              onClick={LogoutHandler}
            >
              LOGOUT
            </Button>
          )}
          {authCtx.isLoggedIn && (
            <Nav>
              <Button
                variant="outline-warning"
                onClick={() => ctx.setCartVisibility(!ctx.cartVisibility)}
                style={{ marginLeft: "1rem" }}
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
