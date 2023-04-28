import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import imgSandwich from "../asset/images/4da51338c06dd21688b82eae3bc9dfa6.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const DetailRecipeContent = () => {
  return (
    <Container>
      <Row>
        <Col
          md={12}
          sm={4}
          className="mt-5"
          //   style={{ height: "550px" }}
        >
          <h1 className="text-center fw-semibold" style={{ color: "#2E266F" }}>
            Loream Sandwich
          </h1>
          <img
            src={imgSandwich}
            alt="imgSandwich"
            className="  mt-4 h-25  w-50 rounded mx-auto d-block "
            style={{
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
          <div className="w-100  mt-5 justify-content-center">
            <h3 className="fw-semibold ms-5 ">Ingredients</h3>
            <ul className="ms-5 mt-4">
              <li className="mb-2">2 eggs</li>
              <li className="mb-2">2 tbsp mayonnaise</li>
              <li className="mb-2">3 slices bread</li>
              <li className="mb-2">a little butter</li>
              <li className="mb-2">⅓ carton of cress</li>
              <li className="mb-2">
                2-3 slices of tomato or a lettuce leaf and a slice of ham or
                cheese
              </li>
              <li className="mb-2">crisps , to serve</li>
            </ul>

            <h3 className="ms-5 mt-5 fw-semibold">Video Step</h3>
            <Button
              href="/VideoStep"
              variant="primary"
              type="Log In"
              className="btn-warning text-white w-25 ms-5 mt-3 mb-5"
            >
              <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
            </Button>
          </div>
          <Form className=" w-75 mx-auto">
            <Form.Group
              className="mb-3 mt-5"
              controlId="exampleForm.ControlInput1"
            ></Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Coment :"
                className=""
                style={{ height: "200px" }}
              />
              <div className="text-center">
                <Button
                  variant="primary"
                  type="Log In"
                  className="btn-warning text-white w-50  mt-3 "
                >
                  Send
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default DetailRecipeContent;
