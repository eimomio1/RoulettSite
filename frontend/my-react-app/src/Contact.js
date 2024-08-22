import React from 'react';
import linkedinIcon from './assets/linkedin.png'; 
import githubIcon from './assets/github.png';      
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Social Media</h2>
      <p>Follow me on social media to stay updated with my latest projects and insights!</p>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/malcolmimomio/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/eimomio1" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
