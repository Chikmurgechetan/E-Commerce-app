import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import CartContainer from "./Components/Cart/CartContainer";
import Header from "./Components/Header";
import CartContext from "./Components/Context/CartContext";

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
    title: "Album 1",
    price: 1200,
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

function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const [idToken, setIdToken] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(false);

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
          <Route path="/" element={<StorePage />} />
        {isLogedIn && <Route path="/about" element={<AboutPage />} />}
        {isLogedIn && <Route path="/Contact" element={<ContactUs />} />}
        {isLogedIn &&  <Route path="/products/:productID" element={<ProductDetails />} />}
        {isLogedIn && <Route path="/profile" element={<MyProfile />} />}
        {!isLogedIn && <Route exact path="/login" element={<Login />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
       </Routes>

      {cartVisibility && <CartContainer></CartContainer>}
    </CartContext.Provider>
  );
}
export default App;
