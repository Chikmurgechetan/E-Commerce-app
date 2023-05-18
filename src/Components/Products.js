
import React from "react";
import { Button, Card ,CardImg} from "react-bootstrap";

const Products = (props) =>{
    return(
    <>
        
        
         <Card style={{width:'15rem',margin:'1rem'}}>
            <CardImg variant="top"   src={props.item.imageUrl} style={{ height: '12rem', objectFit: 'cover' }} />
            <Card.Body style={{ padding: '1rem' }}>
                <Card.Title style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{props.item.title}</Card.Title>
                <Card.Text style={{ marginBottom: '1rem', fontSize: '1rem' }}>${props.item.price}</Card.Text>
                <Button variant="primary" style={{ fontSize: '1rem' }}>Add Cart</Button>
            </Card.Body>
         </Card>
         
         
    </>
    )
}
export default Products;

