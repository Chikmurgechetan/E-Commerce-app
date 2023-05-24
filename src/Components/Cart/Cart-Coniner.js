import React from "react";
import { Button, Container, Row ,Col} from "react-bootstrap";
import Orderlist from "./Orderlist";

const CartContiner = props =>{
   <Container fluid className="bg-light p-3">
     <Button variant="outline-danger" className="float-end">
        X
    </Button>
    <Row>
        <Col xs={12}>
           <h4 className="text-center mb-4">Cart</h4>
           {props.orders.length > 0 ? (
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

   </Container>
}

export default CartContiner;