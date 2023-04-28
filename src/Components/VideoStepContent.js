import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DefaultPlayer as Video } from "react-html5video";
import video from "../asset/video/videoplayback.mp4";

const VideoStep = () => {
  return (
    <Container>
      <Row>
        <Col className="mt-5 text-center">
          <video controls className="w-75 h-100">
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </Container>
  );
};
export default VideoStep;
