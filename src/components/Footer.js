import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/twitter.svg';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/sakibkhan-pathan-5aaa80182/" target="_blank"><img src={navIcon1} alt="Linkdl" /></a>
                <a href="https://github.com/Sakibkhan1234"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://www.facebook.com/sakib.pathan.1610/" target="_blank"><img src={navIcon3} alt="facebook" /></a>
                <a href="https://twitter.com/home" target="_blank"><img src={navIcon4} alt="twitter" /></a>
            </div>
            <p>Made with ❤️ Sakib | Java FullStack Developer</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
