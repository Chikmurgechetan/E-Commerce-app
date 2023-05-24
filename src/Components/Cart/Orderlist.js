import React from "react";
import OrderItem from "./OrderItem";
const Orderlist = props=>{
    const Orderitems = props.orders.map((order) =>
      <OrderItem
        key={props.id}
        title={props.title}
        ImageSrc={props.ImageSrc}
        quntity={props.quntity}

      />
   )
   return(
    <div>
        {Orderitems}
    </div>
   )
}
export default Orderlist;