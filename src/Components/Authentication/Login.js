import React, { useState } from "react";
import {
  Form,
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
  Nav,
  Button,
} from "react-bootstrap";

const Login = () => {
  const [isLogeIn, setIsLogeIn] = useState(true); // Initialize with a default value

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    setIsLoading(true);
    let url;
    if (isLogeIn) {
      // Handle sign in logic
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9W4dGeTDItrXbHl_cEzNUGxRQsT6CLHU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9W4dGeTDItrXbHl_cEzNUGxRQsT6CLHU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // Handle error
            let errorMessage = "Authentication failed: ";
            //   if(data && data.error &&  data.error.message){
            //    errorMessage = data.error.message;
            //   }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    setIsLogeIn(true);
  };

  const handleSignUp = () => {
    setIsLogeIn(false);
  };

  return (
    <>
      <Container className="mt-2">
        <Nav
          variant="pills"
          defaultActiveKey={isLogeIn ? "sign-in" : "sign-up"}
        >
          <Nav.Item>
            <Nav.Link eventKey="sign-up" onClick={handleSignUp}>
              Sign Up
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sign-in" onClick={handleSignIn}>
              Sign In
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Form onSubmit={submitHandler}>
          {isLogeIn ? (
            <>
              <FormGroup controlId="formBasicEmail">
                <FormLabel>Email address</FormLabel>
                <FormControl
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={changeEmail}
                  required
                />
              </FormGroup>

              <FormGroup controlId="formBasicPassword">
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={changePassword}
                  required
                />
              </FormGroup>
            </>
          ) : (
            <>
              <FormGroup controlId="formBasicEmail">
                <FormLabel>Email address</FormLabel>
                <FormControl
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={changeEmail}
                  required
                />
                <FormText className="text-muted">
                  We'll never share your email with anyone else.
                </FormText>
              </FormGroup>

              <FormGroup controlId="formBasicPassword">
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={changePassword}
                  required
                />
              </FormGroup>
            </>
          )}
          <div className="text-center">
            <Button
              variant="outline-primary"
              type="submit"
              className="mt-3"
              style={{ width: "10rem" }}
            >
              {!isLoading ? (isLogeIn ? "Sign In" : "Sign Up") : "Loading..."}
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
