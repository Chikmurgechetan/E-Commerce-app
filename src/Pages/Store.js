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
      <Col key={product.url}>
        {" "}
        <ProductCard item={product}></ProductCard>
        {/* <ProductCard item={product}></ProductCard> */}
      </Col>
    );
  });

  return (
    <>
     
      <Container>
        <Row>{productsList}</Row>
      </Container>
    </>
  );
}

export default StorePage;
