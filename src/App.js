import { Route, Routes, Navigate } from "react-router-dom";
import { useState,useEffect } from "react";
import CartContainer from "./Components/Cart/CartContainer";
import Header from "./Components/Header";
import CartContext from "./Components/Context/CartContext";
import Smart from "../src/Assets/Watch1.jpg";
import Earbud from "../src/Assets/earbud2.jpg";
import Tshirt from "../src/Assets/t -shirt3.jpg";

import AboutPage from "./Pages/About";
import StorePage from "./Pages/Store";
import HomePage from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Components/Authentication/Login";
import MyProfile from "./Pages/MyProfile";

const productsArr = [
  {
    id: "p1",
    title: "Smart Watch",
    price: 1200,
    brand: "Boat",
    color: "White",
    discription:
      "A Good Smart Watch In this world Indian famius brand smart Watch",
    imageSrc: Smart,
  },
  {
    id: "p2",
    title: "EarBuds",
    price: 50,
    brand: "Boat",
    color: "black",
    discription:
      "I Like This Brand earbuds On the My ear for a good sound Quality",
    imageSrc: Earbud,
  },

  {
    id: "p3",
    title: "T-shirt",
    price: 70,
    brand: "Tomy Jeans",
    color: "gray and black",
    discription:
      "I like This fitting of the t shirt i love this one size and the color is awsome",
    imageSrc: Tshirt,
  },
];

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const [idToken, setIdToken] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);




  useEffect(()=>{
    if(isLogedIn){
      setTimeout(()=>{
        localStorage.setItem('token' , '')
      },1*60*1000)
      // return clearTimeout(timer);
    }
  },[isLogedIn])



  const ctxObj = {
    productsList: productsArr,
    cartVisibility: cartVisibility,
    setCartVisibility: setCartVisibility,
    orderList: orderList,
    setOrderList: setOrderList,

    isLogedIn: isLogedIn,
    setIsLogedIn: setIsLogedIn,
    idToken: idToken,
    setIdToken: setIdToken,
  };

  return (
    <CartContext.Provider value={ctxObj}>
      <Header></Header>
      <Routes>
        {isLogedIn && <Route path="/home" element={<HomePage />} />}
        <Route path="/store" element={<StorePage />} />
        {isLogedIn && <Route path="/about" element={<AboutPage />} />}
        {isLogedIn && <Route path="/Contact" element={<ContactUs />} />}
        {isLogedIn && (
          <Route path="/products/:productID" element={<ProductDetails />} />
        )}
        {isLogedIn && <Route path="/profile" element={<MyProfile />} />}
        {!isLogedIn && <Route exact path="/login" element={<Login />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {cartVisibility && <CartContainer></CartContainer>}
    </CartContext.Provider>
  );
}
export default App;
