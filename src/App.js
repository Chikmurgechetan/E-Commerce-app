
import React from "react";

import Header from './Components/Header'
import { Container,Col,Row } from "react-bootstrap";
import Products from "./Components/Products";

function App() {

   
const productsArr = [ 
   {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
   },
  
   {
       title: 'Black and white Colors',
       price: 50,
       imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
  ]
  
  const productlist = productsArr.map((product)=>{
    return(
       <Col key={product.url} ><Products item={product}></Products></Col>
    )
  })
  
  
  
  

  return (
    <>
    <Header/>
    <Container>
     <Row>
      {productlist}
     </Row>
    </Container>
    </>
  );
}

export default App;

