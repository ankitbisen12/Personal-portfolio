import { Container, Row, Col } from "react-bootstrap";
import logo from "../assests/logo.png";
import Subscriber from "./Subscriber";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Subscriber/>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ankit-bisen-13a55a1a7/"><i className="fa-brands fa-x fa-linkedin"></i></a>
              <a href="https://github.com/ankitbisen12"><i className="fa-brands fa-github"></i></a>
              <a href="https://twitter.com/ankit_bisen18"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;