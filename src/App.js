
import React, { useState } from "react";

import Header from './Components/Header'
import { Container,Col,Row} from "react-bootstrap";
import Products from "./Components/Products";
import CartContext from "./Components/Context/CartContext";
import CartContiner from "./Components/Cart/Cart-Coniner";



   

  const productsArr = [
    {
    id:'c1',
    title: 'Colors',
    price: 100,
    imageSrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    
    {
    id:'c2',
    title: 'Black and white Colors',
    price: 50,
    imageSrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    id:'c3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageSrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    id:'c4',
    title: 'Blue Color',
    price: 100,
    imageSrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }]
    
    
const productlist = productsArr.map((product)=>{
    return(
       <Col key={product.url} >
        <Products item={product}></Products>
        </Col>
    )
  })
  
  
  
  




function App() {
const [cartShow, setCartShow] = useState()
const [orderlist,setOrderList] = useState([])

      
const Ctxobj={
  cartShow:cartShow,
  setCartShow:setCartShow,
  orderlist:orderlist,
  setOrderList:setOrderList
} 


 return (
    <CartContext.Provider value={Ctxobj}>
      <Header/>
    <Container>
     <Row>
      {productlist}
     </Row>
    </Container>
   <CartContiner></CartContiner>
   
    </CartContext.Provider>

  );
}

export default App;

