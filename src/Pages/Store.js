//import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

import CartContext from "../Components/Context/CartContext";
import { useContext } from "react";

import ProductCard from "../Components/Layout/ProductCard";


function StorePage() {
  const ctx = useContext(CartContext);
  const productsArr = ctx.productsList;
  const productsList = productsArr.map((product) => {
    return (
      <Col lg={6} key={product.id} style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
        paddingLeft: "0", paddingRight: "0",
        marginRight: "-10rem",
        marginLeft:"2rem"
      }}>
        
        <ProductCard item={product}></ProductCard>
        
      </Col>
    );
  });

  return (
    <>
     
      <Container>
        <h1 style={{
          fontSize: "30px",
          textAlign: "center",
          padding: "20px",
          fontFamily:"cursive",
          fontWeight: "bold"
        }}>MUSIC</h1>
        <Row>{productsList}</Row>
      </Container>
    </>
  );
}

export default StorePage;
