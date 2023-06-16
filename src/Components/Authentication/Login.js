import React, { useRef, useState, useContext } from "react";

import { Button, Container, Form, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CartContext from "../Context/CartContext";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLodingIn, setIsLodingIn] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const Ctx = useContext(CartContext);

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };



  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enterdPassword = passwordInputRef.current.value;

    setIsLodingIn(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9W4dGeTDItrXbHl_cEzNUGxRQsT6CLHU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9W4dGeTDItrXbHl_cEzNUGxRQsT6CLHU";
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enterdPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.error) {
      alert(data.error.message);
      console.log(data.error.message);
    } else {
      if (data.registered) {
        localStorage.setItem("token", data.idToken);
        Ctx.setIsLogedIn(true);
        Ctx.setIdToken(data.idToken);
        console.log(data.idToken);
        navigate("/store");
      } else {
        setIsLogin(true);
      }
    }

    console.log(data);
    setIsLodingIn(false);
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
          <h2
            style={{
              color: "blue",
              textDecoration: "underline black",
              textTransform: "capitalize",
            }}
          >
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
