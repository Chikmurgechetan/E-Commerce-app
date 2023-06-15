
import React, {useContext, useState } from 'react';

import userImage from '../Assets/download.png';
import CartContext from '../Components/Context/CartContext';
import { Col, Container, Form,Button,Image,Row } from 'react-bootstrap';

const MyProfile = () => {
   const [newPasword, setNewPassword] = useState('');
   const authCtx=useContext(CartContext);
  
  const submitHandler =  async (event) =>{
    event.preventDefault();

   

    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB9W4dGeTDItrXbHl_cEzNUGxRQsT6CLHU",
     { 
       method:'POST',
       body:JSON.stringify({
        idToken:authCtx.idToken,
        password:newPasword,
        returnSecureToken: false
       }),
       headers:{
        'Content-Type':'application/json',
      }
    });
     
    const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error.message)
       }else {
        authCtx.setIsLogedIn(false);
      authCtx.setIdToken(null);
     }

    
    
  };




   const onChangenewPassword = (event) =>{
    setNewPassword(event.target.value);
   }


  return (
    <Container>
     <Row className='mt-4'>
     <Col md={4}>
          <Image src={userImage} thumbnail />
          <h4 className="mt-2">Username</h4>
          <p>Email: user-email</p>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  value={newPasword} onChange={onChangenewPassword} required />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Change Password
            </Button>
          </Form>
    </Col>
     </Row>
      
    </Container>
  );
}

export default MyProfile;
