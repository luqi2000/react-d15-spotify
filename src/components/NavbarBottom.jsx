import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../style.css";
import Play from "../assets/playerbuttons/Play.png";
import Next from "../assets/playerbuttons/Next.png";
import Previous from "../assets/playerbuttons/Previous.png";
import Repeat from "../assets/playerbuttons/Repeat.png";
import Shuffle from "../assets/playerbuttons/Shuffle.png";

function NavbarBottom() {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            <Col xs={6} md={4} lg={2} className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <a href="#button">
                  <img src={Shuffle} alt="shuffle" />
                </a>
                <a href="#button">
                  <img src={Previous} alt="shuffle" />
                </a>
                <a href="#button">
                  <img src={Play} alt="shuffle" />
                </a>
                <a href="#button">
                  <img src={Next} alt="shuffle" />
                </a>
                <a href="#button">
                  <img src={Repeat} alt="shuffle" />
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarBottom;
