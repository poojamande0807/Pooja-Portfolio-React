import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pooja_profile_pic.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Pooja Khochare</strong>
              </h1>

              <p className="heading-description blockquote">
                I'm Dynamic frontend developer with proficiency in React.js,
                JavaScript, HTML, and CSS. Known for rapid learning of new tech
                stacks and adept at using Generative AI. Proven ability to
                create responsive and scalable user interfaces. Strong teamwork,
                problem-solving, and collaboration skills.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Col md={12} className="">
            <About />
          </Col>
          <Col md={12} className="">
            <Projects />
          </Col>
          <Col md={12} className="">
            <ResumeNew />
          </Col>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>

              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
