import React, { useState } from 'react';
import './Contact.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const contactRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact section" id="contact" ref={contactRef}>
      <div className="container">
        <div className="section-header animate-on-scroll animate-up stagger-1">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info animate-on-scroll animate-left stagger-2">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item animate-on-scroll animate-up stagger-3">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>longnt060820@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item animate-on-scroll animate-up stagger-4">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+84 898197387</p>
                </div>
              </div>
              
              <div className="contact-item animate-on-scroll animate-up stagger-5">
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
          
          <div className="contact-form animate-on-scroll animate-right stagger-2">
            <form onSubmit={handleSubmit}>
              <div className="form-group animate-on-scroll animate-up stagger-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group animate-on-scroll animate-up stagger-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group animate-on-scroll animate-up stagger-5">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group animate-on-scroll animate-up stagger-5">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary animate-on-scroll animate-up stagger-5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
