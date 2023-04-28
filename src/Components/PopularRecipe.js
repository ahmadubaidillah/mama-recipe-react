import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import kare from "../asset/images/kare.jpg";

const PopularRecipe = () => {
  return (
    <Container className="bg-white w-100 popular-fy me-5 mb-5">
      <Row>
        <Col
          md={1}
          sm={1}
          style={{ width: "1px", backgroundColor: "#efc81a" }}
        ></Col>
        <Col md={11}>
          <h1>Popular Recipe</h1>
        </Col>
      </Row>
      <Row className="mt-5 popular me-auto">
        <Col sm={12} md={4} className=" me-auto">
          <img src={kare} alt="sandwich" className="w-75 h-75 new-img" />
          <p className="top-left fs-5 w-50">Chiken Kare</p>
        </Col>
        <Col sm={12} md={4} className=" me-auto">
          <img src={kare} alt="sandwich" className="w-75 h-75 new-img" />
          <p className="top-left fs-5 w-50">Bomb Chicken</p>
        </Col>
        <Col sm={12} md={4} className=" me-auto">
          <img src={kare} alt="sandwich" className="w-75 h-75 new-img" />
          <p className="top-left fs-5 w-50">Banana Smothie Pop</p>
        </Col>
      </Row>
      <Row className="popular me-auto">
        <Col sm={12} md={4} className="me-auto">
          <img src={kare} alt="sandwich" className="w-75 h-75 new-img" />
          <p className="top-left fs-5 w-50">Coffe Lava Cake</p>
        </Col>
        <Col sm={12} md={4} className="me-auto">
          <img src={kare} alt="sandwich" className="w-75 h-75 new-img" />
          <p className="top-left fs-5 w-50">Sugar Salmon</p>
        </Col>
        <Col sm={12} md={4} className="me-auto">
          <img src={kare} alt="sandwich" className="w-75 h-75 new-img" />
          <p className="top-left fs-5 w-50">Indian Salad</p>
        </Col>
      </Row>
    </Container>
  );
};
export default PopularRecipe;
