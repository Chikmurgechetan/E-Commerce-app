import React, { useRef, useState } from "react";
import { useReducer } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLodingIn, setIsLodingIn] = useState(false);

 const emailInputRef = useRef();
 const passwordInputRef = useRef();

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
 
    const enteredEmail = emailInputRef.current.value;
    const enterdPassword = passwordInputRef.current.value;

    setIsLodingIn(true);
    if (isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9W4dGeTDItrXbHl_cEzNUGxRQsT6CLHU",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enterdPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLodingIn(false);
        if (res.ok) {
        } else {
          res.json().then((data) => {
            let errorMessage = "Athontication is failed";
            if(data && data.error && data.error.message){
              errorMessage = data.error.messsage;
          }
            alert(errorMessage);
            console.log(data);
          });
        }
      });
    }
  };

 

  return (
    <>
      <Container className="mt-5">
        <div
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            boxShadow: "2px 2px 2px 2px black",
            padding: "1rem 5rem",
            marginLeft: "20%",
            marginRight: "20%",
          }}
        >
          <h2 style={{ color: "blue", textDecoration: "underline black" }}>
            {isLogin ? "Login" : "Sing Up"}
          </h2>
          <Form
            style={{ fontWeight: "bold", marginTop: "1rem" }}
            onSubmit={submitHandler}
          >
            <FormGroup controlId="formBasicEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailInputRef}
                placeholder="Enter Your Email Id"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <Form.Label>Your Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordInputRef}
                placeholder="Enter Your Password"
                required
              />
            </FormGroup>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              {!isLodingIn && (
                <Button variant="dark" className="mt-3" type="submit">
                  {isLogin ? "Login" : "Create Account"}
                </Button>
              )}
              {isLodingIn && <p>Looding....</p>}
              <br />
              <br />
              <Button type="button" onClick={switchHandler} variant="dark">
                {isLogin ? "Create new account" : "Login with existing account"}
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};
export default Login;
