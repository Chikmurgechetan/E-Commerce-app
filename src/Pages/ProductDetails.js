import React, { useContext } from "react";
import {
  CardImg,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import CartContext from "../Components/Context/CartContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const Parms = useParams();
  const id = Parms.productID;

  const ctx = useContext(CartContext);
  const productsList = ctx.productsList;
  const product = { ...productsList.filter((item) => item.id === id)[0] };
 
  const orderList = [...ctx.orderList];
  const buttonHandler = () =>{
    const n = orderList.length;
    for(let i=0;i<=n;i++){
        if(i<n && orderList[i].id === id){
            orderList[i].quantity +=1;
            break;
        }else if(i===n){
            const obj ={...product,quantity:1};
            orderList.push(obj);
        }
    }
    ctx.setOrderList(orderList);
  }

  return (
    <>
      <div>
        <Row>
          <Col md={6}>
            <Card>
              <CardImg variant="top" src={product.imageSrc} style={{height:"500px" , width:"700px",borderRadius:"20px" , marginLeft:'50px'}} />
              <Card.Body>
                <Card.Text>Nice Product You can Buy </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.discription}</Card.Text>
                <ListGroup>
                  <ListGroupItem>Price :- {product.price}</ListGroupItem>
                  <ListGroupItem>Brand :- {product.brand}</ListGroupItem>
                  <ListGroupItem>Color :- {product.color}</ListGroupItem>
                </ListGroup>
                <div className="d-grid gap-2 mt-3">
                  <Button variant="dark" onClick={buttonHandler}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetails;
