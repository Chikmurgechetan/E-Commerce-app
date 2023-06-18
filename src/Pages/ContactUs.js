import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Form,
} from "react-bootstrap";

async function DataTOfiarbase(data) {
  const response = await fetch(
    "https://ecomerce--app-default-rtdb.firebaseio.com/Contact.json",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseData = await response.json();
  console.log(responseData);
}

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const Contact = {
      name: name,
      email: email,
      phone: phone,
    };
    DataTOfiarbase(Contact);
    setName("");
    setEmail("");
    setPhone("");
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const phoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <Container className="mt-5">
     
      <Form onSubmit={submitHandler} style={{ fontWeight: "bold",margin:'0 15rem' }}>
      <h3 style={{marginBottom:'2rem'}}>Any Quary Please Contect Us</h3>
        <FormGroup controlId="formName">
          <FormLabel>Name</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={nameChange}
            required
          />
        </FormGroup>
        <FormGroup controlId="formEmail">
          <FormLabel>Email Id</FormLabel>
          <FormControl
            type="email"
            placeholder="Enter a Email Id"
            value={email}
            onChange={emailChange}
            required
          />
        </FormGroup>
        <FormGroup controlId="formPhone">
          <FormLabel>Phone</FormLabel>
          <FormControl
            type="tel"
            placeholder="Enter a PHone number"
            value={phone}
            onChange={phoneChange}
          />
        </FormGroup>

        <Button variant="primary mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default ContactUs;
