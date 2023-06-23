import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import CartContext from "../Context/CartContext";
import Cartitems from "./CartItems";

const CartProducts = () => {
  const ctx = useContext(CartContext);
  const orderList = ctx.orderList;

  let totalAmount = 0;
  orderList.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });

  const updateQuantity = (id, quantity) => {
    const updatedOrderList = orderList.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    ctx.setOrderList(updatedOrderList);
  };



  totalAmount = totalAmount.toFixed(2);

  const removeOrder = (id) => {
    const updatedOrderList = orderList.filter((item) => item.id !== id);
    ctx.setOrderList(updatedOrderList);
  };

  return (
    <Container
      fluid
      className="bg-light p-3"
      style={{
        position: "fixed",
        top: 77,
        right: 0,
        width: "30%",
      }}
    >
      <Button
        variant="outline-danger"
        className="float-end"
        onClick={() => ctx.setCartVisibility(false)}
      >
        X
      </Button>
      <Row>
        <Col xs={12}>
          <h4 className="text-center mb-4">My Cart</h4>
          <hr/>
          {orderList.length > 0 ? (
            orderList.map((order) => (
              <Cartitems
                key={order.id}
                product={order}
                updateQuantity={updateQuantity}
                removeOrder={removeOrder}
              />
            ))
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}
        </Col>
      </Row>

      <hr />
      <div className="d-flex justify-content-between">
        <h5>Total Amount:</h5>
        <h5>Rs. {totalAmount} </h5>
      </div>
      <Button variant="primary" block>
        Place Order
      </Button>
    </Container>
  );
};

export default CartProducts;