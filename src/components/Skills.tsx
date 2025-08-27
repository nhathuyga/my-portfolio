import React from 'react';
import './Skills.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const skillsRef = useScrollAnimation();

  const skillCategories = [
    {
      category: 'Frontend Core',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'ReactJS', level: 95 },
        { name: 'VueJS', level: 90 },
        { name: 'NextJS', level: 90 },
        { name: 'NuxtJS', level: 85 }
      ]
    },
    {
      category: 'State Management & Testing',
      skills: [
        { name: 'Redux', level: 90 },
        { name: 'Recoil', level: 90 },
        { name: 'Pinia', level: 85 },
        { name: 'Jest', level: 85 },
        { name: 'Storybook', level: 80 },
        { name: 'Unit Testing', level: 85 }
      ]
    },
    {
      category: 'UI Frameworks & Tools',
      skills: [
        { name: 'Material-UI (MUI)', level: 90 },
        { name: 'Ant Design', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'SCSS', level: 85 },
        { name: 'Styled Components', level: 80 },
        { name: 'Git', level: 90 }
      ]
    },
    {
      category: 'Performance & Others',
      skills: [
        { name: 'Performance Optimization', level: 85 },
        { name: 'SEO', level: 80 },
        { name: 'RESTful API', level: 90 },
        { name: 'Scrum/Agile', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'MySQL/PostgreSQL', level: 70 }
      ]
    }
  ];

  return (
    <section className="skills section" id="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header animate-on-scroll animate-up stagger-1">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category animate-on-scroll animate-up stagger-${index + 2}`}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
