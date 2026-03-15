import React from 'react';
import type { ResumeData } from '../../types/resume';

const ProfessionalTemplate: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div style={{ fontFamily: 'Georgia, serif', color: '#000', padding: '4rem 3rem', lineHeight: 1.5, minHeight: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', borderBottom: '2px solid #000', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'normal', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {data.personalInfo.fullName}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', fontSize: '0.95rem' }}>
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>• {data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>• {data.personalInfo.location}</span>}
          {data.personalInfo.linkedin && <span>• {data.personalInfo.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '1rem', textAlign: 'justify' }}>{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '1rem', paddingBottom: '0.2rem', letterSpacing: '0.05em' }}>
            Professional Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 'bold' }}>
                  <span style={{ fontSize: '1.1rem' }}>{exp.company}</span>
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>
                <div style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{exp.position}</div>
                <p style={{ fontSize: '0.95rem', margin: 0, textAlign: 'justify', whiteSpace: 'pre-wrap' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '1rem', paddingBottom: '0.2rem', letterSpacing: '0.05em' }}>
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.education.map(edu => (
              <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{edu.institution}</div>
                  <div style={{ fontStyle: 'italic' }}>{edu.degree} {edu.gpa && `- GPA: ${edu.gpa}`}</div>
                </div>
                <div>{edu.startDate} - {edu.endDate}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', borderBottom: '1px solid #000', marginBottom: '1rem', paddingBottom: '0.2rem', letterSpacing: '0.05em' }}>
            Skills
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.6 }}>
            {data.skills.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfessionalTemplate;
