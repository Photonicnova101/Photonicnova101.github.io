import React from 'react';
import profilePic from '../assets/linkedin_pfp.jpeg';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
    return (
      <section id="about" className="about">
        <div className="about-container">
          <img src={profilePic} alt="Sam Pautrat" className="profile-pic" />
          <div className="about-content">
            <h1>Aspring Data Analyst and Solutions Architect.</h1>
            <p>
              Hi, I'm Sam Pautrat, a Interactive Technologies/Data Science student at Cornell University. 
              I specialize in creating solutions through data driven insights.
            </p>
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="mailto:sampautrat101@gmail.com"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </section>
    );
};
export default About;
