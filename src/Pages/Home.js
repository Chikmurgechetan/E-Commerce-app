import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px 30px" }}>
      <h2
        style={{
          fontSize: "30px",
          textAlign: "center",
          padding: "20px",
          fontFamily: "Metal Mania",
        }}
      >
        Tours
      </h2>
      <ListGroup style={{ display: "inline-block" ,boxShadow:'1px 2px 1px 2px gold'}} >
        <ListGroupItem style={{ borderBottom: "1px solid black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>JUL 16 DETROIT DTE ENERGY MUSICE THEATE</span>
            <Button>BUY TICKETS</Button>
          </div>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span> JUL 19 TORONTO,ON BUDWESTER STAGE</span>
            <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
          </div>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span> JUL 22 BRISTOW, VA JIGGY LUBE LIVE</span>
            <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
          </div>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span> JUL 29 PHOENIX, AZ AK-CHIN PAVILION</span>
            <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
          </div>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span> AGU 2 LAS VEGAS, NV T-MOBILE ARENA</span>
            <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
          </div>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          AUG 7 <span>CONCORD, CA CONCORD PAVILION</span>{" "}
          <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};
export default HomePage;
