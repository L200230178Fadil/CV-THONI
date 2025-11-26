import React from 'react';
import '../App.css';

const Experiences = ({ experiences }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getTypeBadge = (type) => {
    const badges = {
      'internship': { label: 'internship', color: 'badge-internship' },
      'project': { label: 'project', color: 'badge-project' },
      'organization': { label: 'organization', color: 'badge-organization' }
    };
    return badges[type] || { label: type, color: 'badge-default' };
  };

  const getTypeIcon = () => {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    );
  };

  // Sort experiences by start_date (newest first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    if (a.is_current) return -1;
    if (b.is_current) return 1;
    return new Date(b.start_date) - new Date(a.start_date);
  });

  return (
    <div className="experiences-section">
      <h2 className="section-title">Experience</h2>
      
      <div className="timeline">
        {sortedExperiences.map((exp, index) => {
          const typeBadge = getTypeBadge(exp.experience_type);
          
          return (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-icon">
                {getTypeIcon()}
              </div>
              
              {index < sortedExperiences.length - 1 && (
                <div className="timeline-line" />
              )}
              
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-organization">{exp.organization}</p>
                  </div>
                  <span className={`badge-type ${typeBadge.color}`}>
                    {typeBadge.label}
                  </span>
                </div>
                
                <div className="experience-date">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>
                    {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                  </span>
                  {exp.is_current && (
                    <span className="badge-current">Current</span>
                  )}
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="tech-tags">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Experiences;