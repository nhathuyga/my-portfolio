import React from 'react';
import './Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const projectsRef = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'User Landing Page',
      description: 'Maintain and optimize performance for a landing page application. Improved performance (Google speed score 70-80), enhanced SEO, and implemented new requirements.',
      image: '🚀',
      technologies: ['NuxtJS', 'Tailwind CSS', 'Pinia', 'Performance Optimization', 'SEO'],
      client: 'Outsource Company (TM)',
      teamSize: '25 members',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'My Suni AI Portal',
      description: 'Built an internal social networking website that integrates GPT chat and manages user posts. Implemented new functions and maintained bug-free operation.',
      image: '🤖',
      technologies: ['ReactJS', 'Material-UI (MUI)', 'React Context', 'Tanstack Query', 'Docker'],
      client: 'SK Company',
      teamSize: '12 members',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'EVOLVERS_EC',
      description: 'Implemented sales system for customer SWE company. Created comprehensive documentation for bug investigation and implemented new features with high testing coverage.',
      image: '💼',
      technologies: ['NextJS', 'Jest', 'Storybook', 'Recoil', 'Docker'],
      client: 'SWE Company',
      teamSize: '109 members',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'D Project - Robotics Platform',
      description: 'Built ecosystem for customer company robots including DART PLATFORM, DART IDE/SDK and DART STORE. Created UI tests with over 90% coverage.',
      image: '🤖',
      technologies: ['ReactJS', 'Ant Design', 'Jest', 'Redux', 'Java Spring Boot', 'AWS'],
      client: 'D Company',
      teamSize: '307 members',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'HRPR Chatbot',
      description: 'Built AI chatbot product and Web Portal for HR departments to improve employee experience. Managed training data and implemented response scripts.',
      image: '💬',
      technologies: ['ReactJS', 'Ant Design', 'React Context', 'Jhipster', 'Azure', 'FPT AI Platform'],
      client: 'Internal',
      teamSize: '93 members',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section className="projects section" id="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header animate-on-scroll animate-up stagger-1">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card animate-on-scroll animate-up stagger-${index + 2}`}>
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <span className="project-client"><strong>Client:</strong> {project.client}</span>
                  <span className="project-team"><strong>Team:</strong> {project.teamSize}</span>
                </div>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
