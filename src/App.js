import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import CartContainer from "./Components/Cart/CartContainer";
import Header from "./Components/Header";
import CartContext from "./Components/Context/CartContext";

import AboutPage from "./Pages/About";
import StorePage from "./Pages/Store";
import HomePage from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageSrc: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];



function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderList, setOrderList] = useState([]);

  const ctxObj = {
    productsList: productsArr,
    cartVisibility: cartVisibility,
    setCartVisibility: setCartVisibility,
    orderList: orderList,
    setOrderList: setOrderList,
  };

  return (
    <CartContext.Provider value={ctxObj}>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>

      {cartVisibility && <CartContainer></CartContainer>}
    </CartContext.Provider>
  );
}
export default App;
