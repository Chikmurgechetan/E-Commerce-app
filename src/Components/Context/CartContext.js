import React from "react";
const CartContext = React.createContext({
  productsList :[],
  cartVisibility: false,
  setCartVisibility: () => {},
  orderList: [],
  setOrderList: () => {},
  idToken:'',
  setIdToken:(idToken)=>{},
  isLogedIn:false,
  setIsLogedIn:()=>{},

});

export default CartContext;
