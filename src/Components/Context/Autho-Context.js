import React,{useState} from "react";

const AuthoContext = React.createContext({
   token: '',
   isLoggedIn: false,
   login: (token)=>{},
   logout: () =>{}
});

 export const AuthContextProvider = (props) =>{
     const[token,setToken] = useState(null)
      
     const userIsLoggedin = !!token;

     const loginHHandler = (token) =>{
        setToken(token);
     };
      
     const logoutHandler = () =>{
        setToken(null);
     };
    
     const contextValue = {
        token: token,
        isLoggedIn:userIsLoggedin,
        login: loginHHandler,
        logout:  logoutHandler
 
     };



    return( <AuthoContext.Provider value={contextValue}>
        {props.children}
    </AuthoContext.Provider>
    )};

    export default AuthoContext;

