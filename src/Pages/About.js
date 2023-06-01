import React from "react";
import BandImage from "../Assets/images.jpeg";
import { Container, Row, Col } from "react-bootstrap";
const AboutPage = () => {
  return (
    <>
      <Container>
      
        <Row>
          <Col>
          <h2>ABOUT US</h2>
            <div>
              <img
                src={BandImage}
                alt="pic"
                style={{
                  float: "left",
                  margin: "20px 50px",
                  borderRadius: "50%",
                  width: "200px",
                  height: "200px",
                }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, enim eget blandit commodo, quam risus lobortis massa,
                in pharetra nisi risus sed felis. Donec interdum tellus sed nisl
                iaculis, vitae bibendum enim laoreet. Etiam malesuada vel velit
                in feugiat. Vestibulum quis feugiat neque. Duis porta consequat
                purus id semper. Fusce ut ante suscipit, bibendum sapien sed,
                molestie sapien. Sed commodo, leo ac pulvinar pellentesque,
                mauris tortor consectetur justo, vel eleifend odio urna nec est.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AboutPage;
