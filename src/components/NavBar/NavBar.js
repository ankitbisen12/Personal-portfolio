import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../../assests/logo.png';
import './NavBar.css';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY) {
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }

    };

    window.addEventListener('scroll',onScroll);
    return () => {
      window.removeEventListener('scroll',onScroll);
    };
  }, []);

  const onUpdateActiveLink =(value)=>{
      setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ankit-bisen-13a55a1a7/"><i className="fa-brands fa-x fa-linkedin"></i></a>
                <a href="https://github.com/ankitbisen12"><i className="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/ankit_bisen18"><i className="fa-brands fa-twitter"></i></a>
              </div>
              <button className="vvd" onClick={() => console.log("connect")}>
                 <a href="https://www.linkedin.com/in/ankit-bisen-13a55a1a7/">Let's Connect</a>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
