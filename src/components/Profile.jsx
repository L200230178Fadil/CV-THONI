import React from 'react';
import '../App.css';

const Profile = ({ data }) => {
  const { profile, statistics } = data;
  
  return (
    <div className="profile-section">
      <div className="profile-header">
        <img 
          src={profile.photo_url} 
          alt={profile.full_name}
          className="profile-photo"
        />
        <div className="profile-info">
          <h1 className="profile-name">{profile.full_name}</h1>
          <p className="profile-headline">{profile.headline}</p>
          
          <div className="profile-badges">
            <span className="badge">{profile.nim}</span>
            <span className="badge">{profile.prodi}</span>
            <span className="badge">Angkatan {profile.angkatan}</span>
          </div>
          
          <div className="profile-meta">
            <span className="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {profile.location}
            </span>
            <span className="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              {statistics.views_count} views
            </span>
          </div>
          
          <p className="profile-bio">{profile.short_bio}</p>
          
          {/* Contact Information */}
          <div className="contact-info">
            <a href={`mailto:${profile.email}`} className="contact-item" title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>{profile.email}</span>
            </a>
            
            <a href={`tel:${profile.phone}`} className="contact-item" title="Phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{profile.phone}</span>
            </a>
          </div>
          
          {/* Social Media & Portfolio Links */}
          <div className="action-buttons">
            <a 
              href={profile.portfolio_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-portfolio"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Portfolio
            </a>
            
            <a 
              href={profile.social_media.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-social btn-instagram"
              title="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/>
              </svg>
            </a>
            
            <a 
              href={profile.social_media.tiktok} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-social btn-tiktok"
              title="TikTok"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Profile;