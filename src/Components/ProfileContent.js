import React from "react";
import { useState } from "react";
import { Container, Row, Col, Collapse, Button } from "react-bootstrap";
import profile from "../asset/images/4662c85cb7661f579e2c9baff0ce5fdc.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ProfileContent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row>
        <Col className="mt-5 mb-5 text-center ">
          <img
            src={profile}
            alt="profile"
            className=" "
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "20%",
              height: "60%",
            }}
          ></img>
          <br></br>
          <a
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <FontAwesomeIcon
              icon={faPencilAlt}
              className="ms-5"
              style={{ color: "#EFC81A" }}
            ></FontAwesomeIcon>
          </a>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Button variant="warning text-white fw-semibold">
                Edit Profile
              </Button>
            </div>
          </Collapse>

          <div>
            <p className="text-center fs-5 mt-3 fw-semibold">Garneta Sharina</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileContent;
