import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './videoplayer.scss';

const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p>
      </p>
    );
  }
  return (
    <Container className="video-player">
        <Row className="player-wrap">
            <Col className="player">
                <iframe
                    title={videoId}
                    className="video-iframe"
                    src={`https://www.youtube.com/embed/${videoId}`}/>
            </Col>
        </Row>
    </Container>
  );
};

export default Videoplayer;