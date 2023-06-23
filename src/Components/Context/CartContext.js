import React from "react";
const CartContext = React.createContext({
  productsList :[],
  cartVisibility: false,
  setCartVisibility: () => {},
  orderList: [],
  setOrderList: () => {},
  userEmail :"",
  setUserEmail: () =>{}
});

export default CartContext;
