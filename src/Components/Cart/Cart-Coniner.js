import React, { useContext } from "react";
import { Button, Container, Row ,Col} from "react-bootstrap";
import Orderlist from "./Orderlist";
import CartContext from "../Context/CartContext";

const CartContiner = props =>{
  
  const Ctx = useContext(CartContext);
  const orderList = Ctx.orderlist;

  let totalAmount = 0;
 


  orderList.forEach((item)=>{
   totalAmount += item.price*item.quantity ;
     });

   <Container fluid className="bg-light p-3">
      <Button
        variant="outline-danger"
        className="float-end"
        onClick={()=>Ctx.setCartShow(false)}
      >
         X
      </Button>
    <Row>
        <Col xs={12}>
           <h4 className="text-center mb-4">Cart</h4>
           {orderList.length > 0 ? (
            < Orderlist 
              orders={props.orders}
              onRemove={props.onRemove}
              onUpdateQuantity={props.onUpdateQuantity}
            />
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}
        </Col>
    </Row>
    <hr/>
    <div className="d-flrx justify-content-between">
      <h5>TotalAmount</h5>
      <h5>Rs.{totalAmount}</h5>

    </div>
    <Button variant="primary" block>
         Place Order
    </Button>

   </Container>
}

export default CartContiner;