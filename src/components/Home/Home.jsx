import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pooja_profile_pic.jpg";
import TypeWriter from "./TypeWriter";
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
    </section>
  );
}

export default Home;
