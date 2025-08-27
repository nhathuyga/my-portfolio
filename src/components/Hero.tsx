import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Nguyễn Thanh Long</span>
            </h1>
            <h2 className="hero-subtitle">Front-end Developer</h2>
            <p className="hero-description">
              Passionate about creating modern web applications and exceptional user experiences. 
              I specialize in React, Vue.js, Next.js, and modern front-end technologies.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>NTL</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Nguyễn Thanh Long</h3>
                <p>Front-end Developer</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Major Projects</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">4+</span>
                    <span className="stat-label">Companies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
