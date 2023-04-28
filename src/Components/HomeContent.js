import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sandwich from "../asset/images/4da51338c06dd21688b82eae3bc9dfa6.jpg";

const HomeContent = (props) => {
  return (
    <section className="homeContent-1">
      <Container className="text-center">
        <Row className="mt-5">
          <Col sm={12} md={6} className="mt-5 pt-5 ">
            <h1>
              Discover Recipe <br></br>& Delicious Food
            </h1>
            <Form className="">
              <Form.Group className="mb-3 mt-3 w-75 mx-auto">
                <Form.Control
                  id="disabledTextInput"
                  placeholder="search restaurant, food"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={12} md={6} className="fs-1 mt-2 ">
            <img
              src={sandwich}
              alt="sandwich"
              className="w-100 h-50 home-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeContent;
