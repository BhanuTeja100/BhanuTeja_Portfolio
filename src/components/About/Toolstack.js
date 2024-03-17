import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub
} from "react-icons/si";
import { DiGit } from "react-icons/di";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons SiVisualstudiocode" title="VisualStudioCode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons SiPostman" title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons SiGithub" title="Github">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons SiVercel" title="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons DiGit" title="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Toolstack;
