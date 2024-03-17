import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import sociosphere from "../../Assets/Projects/sociosphere.png";
import travedo from "../../Assets/Projects/travedo.png"
import snakegame from "../../Assets/Projects/snakegame.png"
import CustomerChurn from "../../Assets/Projects/CustomerChurn.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travedo}
              isBlog={false}
              title="Travedo - A Travel Advisor"
              description="A web application built with ReactJS, Rapid API, Google API, and Material UI. This application serves as a travel guide, providing users with information about various travel destinations, attractions, and recommendations."
              ghLink="https://github.com/BhanuTeja100/Travedor"
              demoLink="https://zippy-hotteok-191d84.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sociosphere}
              isBlog={false}
              title="SocioSphere - A Social Media Website"
              description="Social Media Website built using MERN stack for connecting people. Created this website using React, MongoDB, Node and Express where user can register and able to login then make friend and share posts."
              ghLink="https://github.com/BhanuTeja100/sociopedia_client"
              demoLink="https://sociopedia-client-taupe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A Responsive weather application made using React and weather api to fetch real-time weather updates of a place. One can enter the name of the place where they want to find the real time weather data."
              ghLink="https://github.com/BhanuTeja100/Weather-App"
              demoLink="https://fantastic-clafoutis-b9eacd.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakegame}
              isBlog={false}
              title="Snake Game (Java)"
              description="A classic Snake game using Java. Covers key aspects: movement, food generation, collision detection. Demonstrates Java Swing GUI for user interaction."
              ghLink="https://github.com/BhanuTeja100/SnakeGame"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CustomerChurn}
              isBlog={false}
              title="Teleco Churn Prediction"
              description="Utilizing Python, ML, Keras, and TensorFlow, this project predicts telecom churn through deep learning. The Jupyter notebook covers data preprocessing, visualization, and neural network construction, delivering insights for effective customer retention strategies."
              ghLink="https://github.com/BhanuTeja100/Predicting-Customer-Churn-in-a-Telecommunications-Company"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="Dive into the timeless classic of Tic-Tac-Toe brought to life through an engaging web interface. This project seamlessly combines HTML, CSS, and JavaScript to deliver an immersive gaming experience. Experience the thrill of strategic gameplay while exploring the intricacies of web development."
              ghLink="https://github.com/BhanuTeja100/TicTacToe-Project"
              demoLink="https://bhanuteja100.github.io/TicTacToe-Project/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
