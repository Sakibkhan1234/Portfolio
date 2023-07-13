import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/twitter.svg';
import { HashLink } from 'react-router-hash-link';

import headerImg from "../assets/img/header-img.svg";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={headerImg} alt="Header Img"/> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#testnet" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>KeySkills</Nav.Link>
              <Nav.Link href="https://drive.google.com/file/d/1tNGIrw1L3VPT3FMU5tRNF5oZK_8n5dno/view" target="_blank" className={activeLink === 'stake' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Resume</Nav.Link>  
              <Nav.Link href="https://stake.nodexcapital.com" target="_blank" className={activeLink === 'stake' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stake')}>Stake</Nav.Link>           
              <Nav.Link href="#Projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>

            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/sakibkhan-pathan-5aaa80182/" target="_blank"><img src={navIcon1} alt="Linkdl" /></a>
                <a href="https://github.com/Sakibkhan1234"target="_blank"><img src={navIcon2} alt="Github" /></a>
                <a href="https://www.facebook.com/sakib.pathan.1610/" target="_blank"><img src={navIcon3} alt="facebook" /></a>
                <a href="https://twitter.com/home" target="_blank"><img src={navIcon4} alt="twitter" /></a>
                </div>
                </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
