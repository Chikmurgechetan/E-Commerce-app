import React, { useState } from "react";

const AuthoContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, email) => {},
  logout: () => {},
 
});

export const AuthContextProvider = (props) => {
  const initialState = localStorage.getItem("token");

  const [token, setIdToken] = useState(initialState);

  const userIsLoggedin = !!token;

  const loginHHandler = (token) => {
        setIdToken(token);
        localStorage.setItem("token", token);
       
  };

  const logoutHandler = () => {
        setIdToken(null);
        localStorage.removeItem("token");

  };

  const contextValue = {
    token: token,

    isLoggedIn: userIsLoggedin,
    login: loginHHandler,
    logout: logoutHandler,
  };

  return (
    <AuthoContext.Provider value={contextValue}>
      {props.children}
    </AuthoContext.Provider>
  );
};

export default AuthoContext;
