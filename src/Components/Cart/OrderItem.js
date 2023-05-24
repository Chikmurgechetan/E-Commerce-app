import React from "react"
import { Row,Image ,Col, Button} from "react-bootstrap";
const OrderItem = (props) =>{
    return(
       <Row className="my-3">
          <Col xs={3}>
            <Image src={props.imageSrc} fluid/>
          </Col>
           <Col xs={9} >
            <h5>{props.title}</h5>
            <p className="my-1">{props.price}</p>
            <div className="d-flex aligin-items-center my-2">
             <input
             type="number"
             min='1'
             className="from-control me-2"
         
             />
             <Button variant="outline-danger">Remove</Button>
            </div>
           </Col>
       </Row>
    )
}
export default OrderItem;