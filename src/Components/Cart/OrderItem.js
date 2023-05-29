import {useContext} from "react"
import { Row,Image ,Col, Button} from "react-bootstrap";
import CartContext from "../Context/CartContext";

const OrderItem = (props) =>{
        
    const ctx = useContext(CartContext)
    const orderlist = [...ctx.orderlist]

    const updateQuantity = (e)=>{
        orderlist.forEach((item , i)=>{
            if (item.id === props.id){
                item.quantity = parseInt(e.target.value)
            }
        })
        ctx.setOrderList(orderlist);
    }

    const removeOrder = ()=>{ 
        orderlist.forEach((item , i)=>{
            if (item.id === props.id){
                orderlist.splice(i,1)
            }
        })
        ctx.setOrderList(orderlist);
    }
    const totalprice = props.quantity * props.price
    
    return(

        
       <Row className="my-3">
          <Col xs={3}>
            <Image src={props.imageSrc} fluid/>
          </Col>
           <Col xs={9} >
            <h5>{props.title}</h5>
            <p className="my-1">{`${props.price} X ${props.quantity} = Rs. ${totalprice}`}</p>
            <div className="d-flex aligin-items-center my-2">
             <input
             type="number"
             min='1'
             className="from-control me-2"
             value={props.quantity}
             onChange={updateQuantity}
             />
             <Button variant="outline-danger" onClick={removeOrder}>Remove</Button>
            </div>
           </Col>
       </Row>
    )
}
export default OrderItem;