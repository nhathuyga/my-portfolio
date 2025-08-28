import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Passionate Front-end Developer</h3>
            <p>
              I'm a dedicated Front-end Developer with over 3 years of experience in building 
              modern web applications and creating exceptional user experiences. My journey 
              in technology started with a passion for creating beautiful and functional interfaces.
            </p>
            
            <p>
              I specialize in modern front-end technologies including React, Vue.js, Next.js, 
              and TypeScript. I have extensive experience with state management libraries like 
              Redux, Recoil, and Pinia, and UI frameworks such as Material-UI, Ant Design, and Tailwind CSS.
            </p>
            
            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Performance Optimizer</h4>
                  <p>Experience in improving website performance and SEO optimization</p>
                </div>
              </div>
              
              <div className="highlight">
                <div className="highlight-icon">🚀</div>
                <div className="highlight-content">
                  <h4>Quick Learner</h4>
                  <p>Ability to learn and apply new technology quickly</p>
                </div>
              </div>
              
              <div className="highlight">
                <div className="highlight-icon">🤝</div>
                <div className="highlight-content">
                  <h4>Team Player</h4>
                  <p>Good communication skills and experience with Scrum projects</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-card">
              <div className="about-avatar">
                <div className="avatar-placeholder">
                  <span>NTL</span>
                </div>
              </div>
              <div className="about-details">
                <h4>Nguyễn Thanh Long</h4>
                <p>Front-end Developer</p>
                <div className="about-info">
                  <div className="info-item">
                    <span className="info-label">Location:</span>
                    <span className="info-value">Đà Nẵng, Việt Nam</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Experience:</span>
                    <span className="info-value">3+ Years</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Education:</span>
                    <span className="info-value">Software Engineer - FPT University</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Availability:</span>
                    <span className="info-value">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
