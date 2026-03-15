import React from 'react';
import type { ResumeData } from '../../types/resume';

const ExecutiveTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#111', padding: '4rem 3.5rem', lineHeight: 1.5, minHeight: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem', backgroundColor: '#fff' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 700, margin: '0 0 0.5rem 0', letterSpacing: '0.05em', color: '#000' }}>
          {data.personalInfo.fullName.toUpperCase()}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', fontSize: '0.9rem', color: '#444' }}>
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {(data.personalInfo.phone && data.personalInfo.email) && <span>|</span>}
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {(data.personalInfo.email && data.personalInfo.location) && <span>|</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
          {(data.personalInfo.location && data.personalInfo.linkedin) && <span>|</span>}
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
        </div>
      </div>

      <div style={{ borderBottom: '2px solid #000', marginBottom: '1.5rem' }}></div>

      {/* Summary */}
      {data.summary && (
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.95rem', textAlign: 'justify', margin: 0 }}>{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', borderBottom: '1px solid #ccc', marginBottom: '1rem', paddingBottom: '0.3rem', letterSpacing: '0.05em' }}>
            Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700 }}>
                  <span style={{ fontSize: '1.05rem' }}>{exp.company}</span>
                  <span style={{ fontSize: '0.9rem', color: '#333' }}>{exp.startDate} - {exp.endDate}</span>
                </div>
                <div style={{ fontStyle: 'italic', marginBottom: '0.4rem', fontSize: '0.95rem', color: '#222' }}>{exp.position}</div>
                <div style={{ fontSize: '0.9rem', margin: 0, textAlign: 'justify', whiteSpace: 'pre-wrap', color: '#444' }}>{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', borderBottom: '1px solid #ccc', marginBottom: '1rem', paddingBottom: '0.3rem', letterSpacing: '0.05em' }}>
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.education.map(edu => (
              <div key={edu.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700 }}>
                  <span style={{ fontSize: '1.05rem' }}>{edu.institution}</span>
                  <span style={{ fontSize: '0.9rem', color: '#333' }}>{edu.startDate} - {edu.endDate}</span>
                </div>
                <div style={{ fontSize: '0.95rem', color: '#222' }}>
                  {edu.degree} {edu.gpa && <span style={{ fontStyle: 'italic' }}>(GPA: {edu.gpa})</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', borderBottom: '1px solid #ccc', marginBottom: '1rem', paddingBottom: '0.3rem', letterSpacing: '0.05em' }}>
            Core Competencies
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.9rem', color: '#222' }}>
            {data.skills.map((skill, index) => (
              <span key={index}>
                {skill}{index < data.skills.length - 1 ? <span style={{ margin: '0 0.4rem', color: '#ccc' }}>•</span> : ''}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExecutiveTemplate;
