import React from "react";
import { Row, Col, Image, Button, Form } from "react-bootstrap";

const Cartitems = ({ product, updateQuantity, removeOrder }) => {
  const totalprice = product.quantity * product.price;

  return (
    <>
      <Row className="my-3">
        <Col xs={3}>
          <Image src={product.imageSrc} fluid />
        </Col>
        <Col xs={9}>
          <h5>{product.title}</h5>
          <p className="my-1">{`${product.price} X ${product.quantity} = Rs. ${totalprice}`}</p>
           <div className="d-flex align-items-center my-2">
            <Form.Control
              type="number"
              min="1"
              className="form-control"
              style={{ width: "50px" }}
              value={product.quantity}
              onChange={(event) =>
                updateQuantity(product.id, parseInt(event.target.value))
              }
            />

            <Button
             style={{marginLeft: '20px'}}
              variant="outline-danger"
              onClick={() => removeOrder(product.id)}
            >
              Remove
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cartitems;
