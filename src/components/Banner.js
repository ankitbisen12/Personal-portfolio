import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Typewriter from "typewriter-effect";
import img from "../assests/img2.jpg";
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Porfolio</span>
            <h1>
              {`Hi I'm Ankit Bisen`}
            </h1>
            <h1>
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Software Developer"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriterpara",
                }}
              />
            </h1>
            <p>
              I am a B.Tech student and currently pursuing Electronics
              Engineering from Samrat Ashok Technological Institution, Vidisha .
              I am a passionate web developer with one years of experience in
              website design. I am comfortable with frontend technologies. I
              have built few projects by myself and I'm looking for a
              opportunity where i can contribute, grow and learn while working
              with well experienced team members.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <img src={img} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
