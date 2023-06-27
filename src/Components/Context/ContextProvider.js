import React, { useContext, useEffect, useState, useRef } from "react";
import CartContext from "./CartContext";
import AuthoContext from "./Auth-Context";

const productsArr = [
  {
    id: "p1",
    title: "Album 1",
    price: 120,
    brand: "Boat",
    color: "White",
    discription:
      "A Good Smart Watch In this world Indian famius brand smart Watch",
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p2",
    title: "Album 2",
    price: 50,
    brand: "Boat",
    color: "Dynamic Color",
    discription:
      "I Like This Brand earbuds On the My ear for a good sound Quality",
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p3",
    title: "Album 3",
    price: 70,
    brand: "Tomy Jeans",
    color: "Black and white Colors",
    discription:
      "I like This fitting of the t shirt i love this one size and the color is awsome",
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p4",
    title: "Album 4",
    price: 100,
    brand: "Nice One",
    color: "Blue Color",
    discription:
      "I like This fitting of the t shirt i love this one size and the color is awsome",
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ContextProvider = (props) => {
  const auth = useContext(AuthoContext);
  const email = localStorage.getItem("email");
  const cartUpdateid = useRef("");
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [userEmail, setUserEmail] = useState(email);

  const cartObj = {
    productsList: productsArr,
    cartVisibility: cartVisibility,
    setCartVisibility: setCartVisibility,
    orderList: orderList,
    setOrderList: setOrderList,
    userEmail: userEmail,
    setUserEmail: setUserEmail,
    cartUpdateid: cartUpdateid.current,
  };


  async function getUserCart(emailID) {
    try {
      const modifiedEmail = emailID.replace(/[.@]/g, "");
      const response = await fetch(
        `https://autontication-4e508-default-rtdb.firebaseio.com/${modifiedEmail}/cart.json`
      );
      const result = await response.json();
      return result ? result.orderList : [];
    } catch (error) {
      console.error("Error occurred while fetching user cart:", error);
      return [];
    }
  }

  async function updateUserCart(emailID, data) {
    try {
      const modifiedEmail = emailID.replace(/[.@]/g, "");
      const response = await fetch(
        `https://autontication-4e508-default-rtdb.firebaseio.com/${modifiedEmail}/cart.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderList: data }),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error occurred while updating user cart:", error);
      return null;
    }
  }

  useEffect(() => {
    if (auth.isLoggedIn) {
      getUserCart(userEmail).then((data) => {
        setOrderList(data);
      });
    }
  }, [auth.isLoggedIn, userEmail]);

  useEffect(() => {
    if (orderList && auth.isLoggedIn && userEmail) {
      updateUserCart(userEmail, orderList).then((data) => console.log(data));
    }
  }, [orderList, userEmail, auth.isLoggedIn]);


  return (
    <CartContext.Provider value={cartObj}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
