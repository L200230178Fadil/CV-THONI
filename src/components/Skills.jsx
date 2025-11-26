import React from 'react';
import '../App.css';

const Skills = ({ skills }) => {
  const getLevelPercentage = (level) => {
    const levels = {
      'beginner': 33,
      'intermediate': 66,
      'advanced': 100
    };
    return levels[level.toLowerCase()] || 50;
  };

  const formatLevel = (level) => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  return (
    <div className="skills-section">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-header">
              <div className="skill-icon-wrapper">
                <img 
                  src={skill.icon_url} 
                  alt={skill.name}
                  className="skill-icon"
                />
                <div className="skill-title-group">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-experience">
                    {skill.years_of_experience} years experience
                  </p>
                </div>
              </div>
              {skill.is_main && <span className="badge-main">Main</span>}
            </div>
            
            <div className="skill-progress">
              <div className="progress-header">
                <span className="progress-label">{formatLevel(skill.level)}</span>
                <span className="progress-percentage">
                  {getLevelPercentage(skill.level)}%
                </span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${getLevelPercentage(skill.level)}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;