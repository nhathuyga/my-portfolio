import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>longnt060820@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+84 898197387</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Đà Nẵng, Việt Nam</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
