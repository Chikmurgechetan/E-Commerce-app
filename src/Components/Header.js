import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useContext ,useEffect } from "react";
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


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Perform any necessary actions based on the token (e.g., set login status)
      ctx.setIsLogedIn(true);
    }
  }, [ctx]);

  const LogoutHandler = () => {
    ctx.setIsLogedIn();
    localStorage.removeItem("token");
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ marginBottom: "1rem" ,padding:'2rem ' ,boxShadow:'1px 1px 1px 1px red'}}
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
              onClick={LogoutHandler}
            >
              LOGOUT
            </Button>
          )}
          {LoggIn && (
            <Nav>
              <Button
                variant="outline-warning"
                onClick={() => ctx.setCartVisibility(!ctx.cartVisibility)}
                style={{ marginLeft:'1rem' }}
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
