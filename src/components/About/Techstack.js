import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava, DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiPostgresql, SiDjango, SiBootstrap,
  SiJquery,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
// import { RiComputerVisionLine } from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons DiJavascript1" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons DiHtml5" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons DiCss3" title="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons DiReact" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons DiNodejs" title="Nodejs">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons CgCPlusPlus" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons DiPython" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons DiJava" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons DiMongodb" title="Mongodb">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons SiPostgresql" title="Postgresql">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons GrMysql" title="Mysql">
        <GrMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons SiDjango" title="Django">
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons SiBootstrap" title="Bootstrap">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons SiJquery" title="Jquery">
        <SiJquery />
      </Col>
    </Row>
  );
}

export default Techstack;
