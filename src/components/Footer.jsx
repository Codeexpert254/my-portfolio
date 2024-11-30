import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/mkalogo3.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/behance.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abraham-kipkorir-b17280120/">
                <img src={navIcon1} alt="Linkedin" />
              </a>

              <a href="https://www.facebook.com/profile.php?id=100012964877034">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/abrahamkip348/">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="https://www.behance.net/adesigners254">
                <img src={navIcon4} alt="Behance" />
              </a>

              <p>
                Copyright &copy; 2024. All rights reserved by Masai Kipkorir
                Abraham
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
