import React from 'react';
import type { ResumeData } from '../../types/resume';

const MinimalTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', color: '#333', padding: '4rem 4rem', lineHeight: 1.4, minHeight: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem', backgroundColor: '#fff' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 600, margin: 0, color: '#111' }}>
          {data.personalInfo.fullName}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem', color: '#555' }}>
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
          {data.personalInfo.github && <span>{data.personalInfo.github}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', borderBottom: '1px solid #eee', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>Overview</h2>
          <p style={{ fontSize: '0.95rem', margin: 0, color: '#444' }}>{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', borderBottom: '1px solid #eee', paddingBottom: '0.3rem', marginBottom: '1rem' }}>Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111' }}>{exp.position}</span>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>{exp.startDate} – {exp.endDate}</span>
                </div>
                <div style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.4rem' }}>{exp.company}</div>
                <div style={{ fontSize: '0.9rem', color: '#555', whiteSpace: 'pre-wrap' }}>{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', borderBottom: '1px solid #eee', paddingBottom: '0.3rem', marginBottom: '1rem' }}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.education.map(edu => (
              <div key={edu.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111' }}>{edu.institution}</span>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>{edu.startDate} – {edu.endDate}</span>
                </div>
                <div style={{ fontSize: '0.95rem', color: '#444' }}>
                  {edu.degree} {edu.gpa && <span>| GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', borderBottom: '1px solid #eee', paddingBottom: '0.3rem', marginBottom: '1rem' }}>Projects</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.projects.map(proj => (
              <div key={proj.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111' }}>{proj.name}</span>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>{proj.technologies}</span>
                </div>
                {proj.link && <div style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.4rem' }}>{proj.link}</div>}
                <div style={{ fontSize: '0.9rem', color: '#555', whiteSpace: 'pre-wrap' }}>{proj.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Activities */}
      {data.activities && data.activities.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', borderBottom: '1px solid #eee', paddingBottom: '0.3rem', marginBottom: '1rem' }}>Extracurricular Activities</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.activities.map(act => (
              <div key={act.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111' }}>{act.role}</span>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>{act.startDate} – {act.endDate}</span>
                </div>
                <div style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.4rem' }}>{act.organization}</div>
                <div style={{ fontSize: '0.9rem', color: '#555', whiteSpace: 'pre-wrap' }}>{act.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', borderBottom: '1px solid #eee', paddingBottom: '0.3rem', marginBottom: '1rem' }}>Certifications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.certifications.map(cert => (
              <div key={cert.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111' }}>{cert.name}</span>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>{cert.date}</span>
                </div>
                <div style={{ fontSize: '0.95rem', color: '#444' }}>{cert.issuer}</div>
                {cert.link && <div style={{ fontSize: '0.9rem', color: '#555', marginTop: '0.2rem' }}>{cert.link}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111', borderBottom: '1px solid #eee', paddingBottom: '0.3rem', marginBottom: '0.8rem' }}>Skills</h2>
          <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0 }}>
            {data.skills.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default MinimalTemplate;
