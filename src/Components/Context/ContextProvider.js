import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

  const productsArr = [
    {
      id: "p1",
      title: "Album 1",
      price: 120,
      brand: "Boat",
      color: "White",
      discription:
        "A Good Smart Watch In this world Indian famius brand smart Watch",
      imageSrc:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "p2",
      title: "Album 2",
      price: 50,
      brand: "Boat",
      color: "Dynamic Color",
      discription:
        "I Like This Brand earbuds On the My ear for a good sound Quality",
      imageSrc:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "p3",
      title: "Album 3",
      price: 70,
      brand: "Tomy Jeans",
      color: "Black and white Colors",
      discription:
        "I like This fitting of the t shirt i love this one size and the color is awsome",
      imageSrc:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "p4",
      title: "Album 4",
      price: 100,
      brand: "Nice One",
      color: "Blue Color",
      discription:
        "I like This fitting of the t shirt i love this one size and the color is awsome",
      imageSrc:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];



  const ContextProvider = (props) => {
 
 
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderList, setOrderList] = useState([]);


  const [userEmail, setUserEmail] = useState("")


 const cartObj = {
    productsList: productsArr,
    cartVisibility: cartVisibility,
    setCartVisibility: setCartVisibility,
    orderList: orderList,
    setOrderList: setOrderList,
    userEmail:userEmail,
    setUserEmail:setUserEmail
  };
   
  useEffect(()=>{
   const email= localStorage.getItem("email")
   setUserEmail(email);
  },[])



 useEffect(() => {
    const fetchData = async () => {
      try {
        if (userEmail) {
          const modifiedEmail = userEmail.replace(/[.@]/g, "");
          const response = await fetch(
          `https://autontication-4e508-default-rtdb.firebaseio.com/${modifiedEmail}/cart.json`
        );
        if (response.ok) {
          const data = await response.json();
          if (data && data.orderList) {
            setOrderList(data.orderList);
          }
        } else {
          console.error("Failed to fetch data from the server.");
        }
      }
     } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, [userEmail]);

  useEffect(() => {
    const updateOrderList = async () => {
      try {
        if (userEmail) {
          const modifiedEmail = userEmail.replace(/[.@]/g, "");
          const response = await fetch(
            `https://autontication-4e508-default-rtdb.firebaseio.com/${modifiedEmail}/cart.json`,
            {
              method: "PUT",
              body: JSON.stringify({
                orderList: orderList,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            console.error("Failed to update order list in the server.");
          }
        }
      } catch (error) {
        console.error("Error occurred while updating order list:", error);
      }
    };

    updateOrderList();
  }, [orderList, userEmail]);

  useEffect(() => {
    localStorage.setItem("email", userEmail);
  }, [userEmail]);

  return (
    <CartContext.Provider value={cartObj}>
      {props.children}
    </CartContext.Provider>
  );
};
export default ContextProvider;
 


 






  





