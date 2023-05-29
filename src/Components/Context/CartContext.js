import React from "react";


const CartContext=React.createContext({
  cartShow:false,
  setCartShow:()=>{},
  orderlist:[],
  setOrderList: () =>{}


})


export default CartContext;