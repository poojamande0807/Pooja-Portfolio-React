import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Pooja Mande</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          {/* <SocialMedia />/s */}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
