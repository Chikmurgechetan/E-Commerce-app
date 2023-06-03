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
      <ListGroup style={{ display: "inline-block" }}>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          JUL 16 <span>DETROIT DTE ENERGY MUSICE THEATE</span>{" "}
          <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          JUL 19 <span>TORONTO,ON BUDWESTER STAGE</span>{" "}
          <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          JUL 22 <span>BRISTOW, VA JIGGY LUBE LIVE</span>{" "}
          <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          JUL 29 <span>PHOENIX, AZ AK-CHIN PAVILION</span>{" "}
          <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
        </ListGroupItem>

        <ListGroupItem style={{ borderBottom: " 1px solid black" }}>
          AGU 2 <span>LAS VEGAS, NV T-MOBILE ARENA</span>{" "}
          <Button style={{ marginLeft: "12rem" }}>BUY TICKETS</Button>
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
