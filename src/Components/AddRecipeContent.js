import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddRecipeContent = () => {
  return (
    <Container className="mt-5 ">
      <Row>
        <Col>
          <Form className="w-75 mt-5 mx-auto mb-5">
            <Form.Group controlId="formBasicEmail" className="mt-5">
              <Form.Control type="text" placeholder="Recipe Name" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Control as="textarea" rows={4} placeholder="Ingredients" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mt-4">
              <Form.Label>Image :</Form.Label>
              <Form.Control aria-label="Default" type="file" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mt-4">
              <Form.Label>Video :</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <div className="text-center mt-2">
              <Button variant="warning" type="submit" className="w-50 mt-4 ">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddRecipeContent;
