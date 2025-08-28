import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'Outsource Company (TM)',
      position: 'Front-end Developer',
      duration: '09/2024 - Present',
      description: 'Maintain and optimize performance for landing page applications. Improve performance (Google speed score 70-80), enhance SEO, and implement new requirements.',
      technologies: ['NuxtJS', 'Tailwind CSS', 'Pinia', 'Performance Optimization', 'SEO']
    },
    {
      id: 2,
      company: 'FPT SOFTWARE',
      position: 'Front-end Developer',
      duration: '10/2021 - 05/2024',
      description: 'Led front-end development for multiple enterprise projects including AI chatbots, robotics platforms, and sales systems. Collaborated with large teams (93-307 members) and implemented comprehensive testing strategies.',
      technologies: ['ReactJS', 'NextJS', 'VueJS', 'TypeScript', 'Jest', 'Storybook', 'Redux', 'Recoil']
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <h4 className="position">{exp.position}</h4>
                <p className="description">{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
