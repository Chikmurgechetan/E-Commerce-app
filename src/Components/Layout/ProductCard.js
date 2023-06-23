import { Card, Button, CardImg } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import { useContext } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import AuthoContext from "../Context/Auth-Context";

function ProductCard (props) {
  const { id, title, price, imageSrc } = props.item;
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthoContext);
  const navigate = useNavigate();
 //  const apiUrl = ctx.databaseApi;
  const orderList = [...ctx.orderList];

 // const dataBaseName = ctx.dataBaseName;

  const buttonClickHandler = (e) => {
    e.preventDefault();
  if( authCtx.isLoggedIn){
      const n = orderList.length;
      for (let i = 0; i <= n; i++) {
        if (i < n && orderList[i].id === id) {
          orderList[i].quantity += 1;
          break;
        } else if (i === n) {
          const obj = { ...props.item, quantity: 1 };
          orderList.push(obj);
        }
      }
      ctx.setOrderList(orderList);
    //  console.log(orderList);
  }  else {
      navigate("/login")
  }
      
  
  }
  //     e.preventDefault();
  //      if(ctx.isLogedIn === false){
  //          return ;
  //      }
  //      const prdIndex = orderList.findIndex((i) => {
  //       return i.id === id;
  //   })
  //   if (prdIndex === -1) {
  //     try {
  //         let res = await fetch(`${apiUrl}/${dataBaseName}.json`, {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': "application/json"
  //             },
  //             body: JSON.stringify({
  //                 ...props.item,
  //                 quantity: 1
  //             })
  //         })
  //         let data = await res.json();
  //         if (!res.ok) {
  //             throw new Error(data.error.message);
  //         }
  //         console.log(data);
  //     }
  //     catch (err) {
  //       alert(err.message);
  //     };
  //   }
  // };

  return (
    <>
      <Card style={{ width: "15rem", margin: "1rem" }}>
        <NavLink to={`/products/${id}`} style={{ color: "black" }}>
          <CardImg
            variant="top"
            src={imageSrc}
            style={{ height: "15rem", objectFit: "cover", width: "15rem" }}
          />
        </NavLink>
        <Card.Body style={{ padding: "1rem" }}>
          <Card.Title style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
            {title}
          </Card.Title>
          <Card.Text style={{ marginBottom: "1rem", fontSize: "1rem" }}>
            Price: {price}
          </Card.Text>
          <div>
            <Button
              variant="dark"
              style={{ fontSize: "1rem" }}
              onClick={buttonClickHandler}
            >
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
