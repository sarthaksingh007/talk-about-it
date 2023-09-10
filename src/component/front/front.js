import React from 'react'
import "./front.css";
// import Join from "../Join/Join";
import { useNavigate } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegGem } from "react-icons/fa";
import aboutus from "../../images/aboutus.png";

import { useState } from 'react';


function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className='brand'>Talk<span className='spann'>about</span>it</h1>
      </div>
      <div className={open ? "navbar-links open" : "navbar-links"}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#">Footer</a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className='span-ham'></span>
        <span className='span-ham'></span>
        <span className='span-ham'></span>
      </div>
    </nav>
  );
}

const Aboutus = () => (
  <>

    <div id='about'>
      <div className="left-about">
        <h2 className='mission-heading'>Our <span className='spann'>Mission</span> </h2>
        <p> We are a team of passionate individuals dedicated to helping people overcome the challenges of depression
          and anxiety. We believe that mental health is just as important as as physical health, and that everyone
          deserves access to high-quality support and resources. Our mission is to create a world where depression
          and anxiety are no longer barriers to living a fulfilling life. To achieve this goal, we work tirelessly
          to provide the tools, information, and support that people need to manage their symptoms and improve
          their mental wellbeing.</p>


      </div>
      <div className="right-about"><img className="svgimg" src={aboutus} alt="send" /></div>
    </div>

  </>
);

const Footer = () => (
  <>
    <div className='footer'>
      <FaRegGem style={{ color: 'white', fontSize: '5vmax', marginBottom: '15px', marginTop: '55px', textAlign: 'center', width: '100%' }} />
      <p className='footer-p'>2023 © Talkaboutit all rights reserved</p>
      <p className='footer-p'>made by sarthak singh</p>
      <h3 className='footer-h3'>Privacy policy &nbsp;&nbsp;&nbsp;Guide</h3>

    </div>
  </>
);

const Front = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <div className='main'>
        <h1 className='heading'>Talk<span className='spann'>about</span>it</h1>
        <h2 className='small'>Break the Silence, Let's talk about it</h2>
        <div className="buttons" style={{ display: "flex",flexDirection:"row",justifyContent:"center" }}>
          <button className='btn' onClick={() => {
            navigate("/Join")
          }}>Group chat</button>
          <button className='btn' onClick={() => {
            window.location.href = "http://localhost:5000" //anchor tag work using js
          }}>Find Counsellor</button>
        </div>
      </div>
      <Aboutus />
      <Footer />
    </div>
  )
}

export default Front 
