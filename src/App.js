import { Route, Routes, Navigate } from "react-router-dom";
import { useContext} from "react";
import Header from "./Components/Layout/Header";
import CartContext from "./Components/Context/CartContext";

import AboutPage from "./Pages/About";
import StorePage from "./Pages/Store";
import HomePage from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Components/Authentication/Login";
import MyProfile from "./Pages/MyProfile";
import CartProducts from "./Components/Cart/CartProducts";
import AuthoContext from "./Components/Context/Auth-Context";

 function App() {
  const authCtx = useContext(AuthoContext);
  const ctx = useContext(CartContext);
  
  // const orederList = ctx.orderList;

  // useEffect( ()=>{
   
  //   if(orederList.length>0)
  //   fetch(`https://autontication-4e508-default-rtdb.firebaseio.com//cart.json`,{
  //     method : "PUT",
  //     body: JSON.stringify({
  //       orederList:orederList
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  
  // },[orederList])
  
return (
    <>
   
    <Header></Header>
      <Routes>
        {authCtx.isLoggedIn && <Route path="/home" element={<HomePage />} />}
        <Route path="/" element={<StorePage />} />
        {authCtx.isLoggedIn && <Route path="/about" element={<AboutPage />} />}
        {authCtx.isLoggedIn && <Route path="/Contact" element={<ContactUs />} />}
        {authCtx.isLoggedIn && <Route path="/products/:productID" element={<ProductDetails />} />}
        {authCtx.isLoggedIn && <Route path="/profile" element={<MyProfile />} />}
        {!authCtx.isLoggedIn &&  <Route exact path="/login" element={<Login />} />}
         <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {ctx.cartVisibility && <CartProducts />}

    </>
  )
};
export default App;
