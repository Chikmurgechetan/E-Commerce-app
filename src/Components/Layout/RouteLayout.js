import Header from "../Header"
import { Outlet } from "react-router-dom"

import CartContext from "../Context/CartContext"
import { useContext } from "react"
import CartContainer from "../Cart/CartContainer"

const Rootlayout = ()=>{
    const ctx = useContext(CartContext)

    return <>
    <Header/>

    <Outlet/>
    {ctx.cartVisibility && <CartContainer></CartContainer>}
    </>
}

export default Rootlayout;