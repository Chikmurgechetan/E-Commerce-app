import React from "react";
const CartContext = React.createContext({
  productsList :[],
  cartVisibility: false,
  setCartVisibility: () => {},
  orderList: [],
  setOrderList: () => {},

  isSignIn:false,
  LoginModalVisable:false,
  setLoginModalVisable: () =>{}

});

export default CartContext;
