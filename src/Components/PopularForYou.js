import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import sandwich from "../asset/images/4da51338c06dd21688b82eae3bc9dfa6.jpg";

const PopularForYou = () => {
  return (
    <Container className="bg-white w-100 popular-fy me-5 mb-5">
      <Row>
        <Col
          md={1}
          sm={1}
          style={{ width: "1px", backgroundColor: "#efc81a" }}
        ></Col>
        <Col md={11}>
          <h1>Popular For You !</h1>
        </Col>
      </Row>
      <Row className="mt-5 popular">
        <Col sm={12} md={6} className="mt-3 popular-img">
          <img src={sandwich} alt="sandwich" className="w-75 h-75 home-img" />
        </Col>
        <Col md={6} className="mt-5 me-auto">
          <h1 className="mt-5 ">
            Healthy Bone Broth<br></br> Ramen (Quick & Easy)
          </h1>
          <hr className="w-25 border border-dark"></hr>
          <h6>
            Quick + Easy Chicken Bone Broth Ramen- <br></br>Healthy chicken
            ramen in a hurry? That’s right!
          </h6>
          <Button href="/DetailRecipe" variant="warning mt-2">
            <span className="text-white">Learn More</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default PopularForYou;
